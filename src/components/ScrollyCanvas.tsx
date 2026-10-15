"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 75;

function getFramePath(index: number) {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
}

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number>(0);
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [, setImages] = useState<(HTMLImageElement | ImageBitmap)[]>([]);
  const imagesRef = useRef<(HTMLImageElement | ImageBitmap)[]>([]);

  // Acquire 2D context once on mount & set initial canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contextRef.current = canvas.getContext("2d", { alpha: false });
  }, []);

  const renderFrame = useCallback(
    (index: number, imgArray?: (HTMLImageElement | ImageBitmap)[]) => {
      const ctx = contextRef.current;
      const canvas = canvasRef.current;
      const frames = imgArray || imagesRef.current;
      if (!ctx || !canvas || frames.length === 0) return;

      const targetIdx = Math.max(0, Math.min(Math.floor(index), FRAME_COUNT - 1));
      // Find the closest loaded frame if target frame hasn't arrived yet
      let img = frames[targetIdx];
      if (!img) {
        for (let i = targetIdx; i >= 0; i--) {
          if (frames[i]) {
            img = frames[i];
            break;
          }
        }
      }
      if (!img) return;

      const cw = canvas.width;
      const ch = canvas.height;

      const canvasRatio = cw / ch;
      const imgRatio = img.width / img.height;

      let drawWidth = cw;
      let drawHeight = ch;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = cw / imgRatio;
        offsetY = (ch - drawHeight) / 2;
      } else {
        drawWidth = ch * imgRatio;
        offsetX = (cw - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    []
  );

  // Progressive frame loading: Priority on Frame 0, then non-blocking idle batching for 1-74
  useEffect(() => {
    let cancelled = false;
    const loadedImages: (HTMLImageElement | ImageBitmap)[] = new Array(FRAME_COUNT);

    const onFrameLoaded = (index: number, img: HTMLImageElement | ImageBitmap) => {
      if (cancelled) return;
      loadedImages[index] = img;
      imagesRef.current = loadedImages;
    };

    const loadSingleFrame = (index: number): Promise<void> => {
      const src = getFramePath(index);
      if (typeof createImageBitmap !== "undefined") {
        return fetch(src)
          .then((res) => res.blob())
          .then((blob) => createImageBitmap(blob))
          .then((bitmap) => {
            onFrameLoaded(index, bitmap);
          })
          .catch(() => {
            return new Promise<void>((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                onFrameLoaded(index, img);
                resolve();
              };
              img.onerror = () => resolve();
            });
          });
      } else {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            onFrameLoaded(index, img);
            resolve();
          };
          img.onerror = () => resolve();
        });
      }
    };

    // 1. Immediately load & render Frame 0 (instant first paint, 0 TBT impact)
    loadSingleFrame(0).then(() => {
      if (cancelled) return;
      renderFrame(0, loadedImages);
      setImages(loadedImages);

      // 2. Schedule remaining frames (1 to 74) in small idle batches
      const loadRemainingFrames = (startIndex: number) => {
        if (cancelled || startIndex >= FRAME_COUNT) return;
        const BATCH_SIZE = 4;
        const endIndex = Math.min(startIndex + BATCH_SIZE, FRAME_COUNT);
        const batchPromises: Promise<void>[] = [];

        for (let i = startIndex; i < endIndex; i++) {
          batchPromises.push(loadSingleFrame(i));
        }

        Promise.all(batchPromises).finally(() => {
          if (cancelled) return;
          if (typeof window !== "undefined" && "requestIdleCallback" in window) {
            window.requestIdleCallback(() => loadRemainingFrames(endIndex), { timeout: 250 });
          } else {
            setTimeout(() => loadRemainingFrames(endIndex), 25);
          }
        });
      };

      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        window.requestIdleCallback(() => loadRemainingFrames(1), { timeout: 250 });
      } else {
        setTimeout(() => loadRemainingFrames(1), 25);
      }
    });

    return () => {
      cancelled = true;
      loadedImages.forEach((img) => {
        if (img && "close" in img) {
          (img as ImageBitmap).close();
        }
      });
    };
  }, [renderFrame]);

  // RAF-batched draw scheduling
  const scheduleDraw = useCallback(
    (index: number) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        renderFrame(index);
      });
    },
    [renderFrame]
  );

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    scheduleDraw(latest);
  });

  // Debounced resize handler (300ms) with passive listener
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderFrame(frameIndex.get());
      }, 300);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [frameIndex, renderFrame]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ willChange: "transform" }}
        aria-hidden="true"
        role="presentation"
      />
    </div>
  );
}
