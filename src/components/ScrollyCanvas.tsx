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
  const [images, setImages] = useState<(HTMLImageElement | ImageBitmap)[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const imagesRef = useRef<(HTMLImageElement | ImageBitmap)[]>([]);

  // Acquire 2D context once on mount & set initial canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contextRef.current = canvas.getContext("2d", { alpha: false });
  }, []);

  // Preload images using createImageBitmap (off-main-thread) with fallback
  useEffect(() => {
    let cancelled = false;
    const loadedImages: (HTMLImageElement | ImageBitmap)[] = new Array(FRAME_COUNT);
    let loadedCount = 0;

    const onFrameLoaded = (index: number, img: HTMLImageElement | ImageBitmap) => {
      if (cancelled) return;
      loadedImages[index] = img;
      loadedCount++;
      if (loadedCount === FRAME_COUNT) {
        imagesRef.current = loadedImages;
        setImages(loadedImages);
        setIsLoading(false);
        renderFrame(0, loadedImages);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const src = getFramePath(i);

      if (typeof createImageBitmap !== "undefined") {
        // Off-main-thread decoding via createImageBitmap
        fetch(src)
          .then((res) => res.blob())
          .then((blob) => createImageBitmap(blob))
          .then((bitmap) => onFrameLoaded(i, bitmap))
          .catch(() => {
            // Fallback to Image() if createImageBitmap fails
            const img = new Image();
            img.src = src;
            img.onload = () => onFrameLoaded(i, img);
          });
      } else {
        // Fallback for browsers without createImageBitmap
        const img = new Image();
        img.src = src;
        img.onload = () => onFrameLoaded(i, img);
      }
    }

    return () => {
      cancelled = true;
      // Close ImageBitmaps to free GPU memory
      loadedImages.forEach((img) => {
        if (img && "close" in img) {
          (img as ImageBitmap).close();
        }
      });
    };
  }, []);

  const renderFrame = useCallback(
    (index: number, imgArray?: (HTMLImageElement | ImageBitmap)[]) => {
      const ctx = contextRef.current;
      const canvas = canvasRef.current;
      const frames = imgArray || imagesRef.current;
      if (!ctx || !canvas || frames.length === 0) return;

      const img = frames[Math.floor(index)];
      if (!img) return;

      // Read current canvas dimensions (set only on mount/resize, not here)
      const cw = canvas.width;
      const ch = canvas.height;

      // Object-fit: cover logic
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

  // Debounced resize handler (300ms)
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

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [frameIndex, renderFrame]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-10">
          <p className="animate-pulse-slow text-gray-400 text-lg font-medium tracking-wider">
            Loading...
          </p>
        </div>
      )}
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
