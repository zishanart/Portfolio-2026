"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface GalleryImageCardProps {
  src: string;
  alt: string;
  driveUrl: string;
  aspectRatio?: "square" | "portrait" | "auto";
  sizes?: string;
  quality?: number;
  width?: number;
  height?: number;
  className?: string;
  unoptimized?: boolean;
}

export function GalleryImageCard({
  src,
  alt,
  driveUrl,
  aspectRatio = "auto",
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  quality = 75,
  width = 800,
  height = 600,
  className = "",
  unoptimized = false,
}: GalleryImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const isSquare = aspectRatio === "square";
  const isPortrait = aspectRatio === "portrait";

  // If image was already loaded from cache, immediately reveal
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <a
      href={driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${alt} - Open in Google Drive`}
      className={`group relative block overflow-hidden rounded-3xl bg-[#141414] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-700 cursor-pointer ${
        isPortrait
          ? "aspect-[9/16] p-2 sm:p-3 flex items-center justify-center bg-[#101010]"
          : isSquare
          ? "aspect-square p-6 md:p-8 flex items-center justify-center"
          : "break-inside-avoid min-h-[240px]"
      } ${className}`}
    >
      {/* Sleek Minimal Skeleton Loading Animation (No Text, No Spinner) */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#161616]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-pulse-slow" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-purple-500/[0.02] to-transparent animate-ai-glow pointer-events-none" />
        </div>
      )}

      {/* Image Container */}
      <div
        className={`relative w-full ${
          isPortrait || isSquare ? "h-full flex items-center justify-center" : ""
        }`}
      >
        <Image
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          unoptimized={unoptimized}
          loading="lazy"
          placeholder="empty"
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
          className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isPortrait
              ? "w-full h-full object-contain group-hover:scale-[1.03]"
              : isSquare
              ? "max-w-full max-h-full object-contain group-hover:scale-105"
              : "w-full h-auto object-cover group-hover:scale-[1.03]"
          } ${
            isLoaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-2xl scale-105"
          }`}
        />
      </div>

      {/* Hover Overlay with Signature Site Button (Solid White/Black on unhover) */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm pointer-events-none z-10">
        <div className="group/btn pointer-events-auto relative px-6 py-3 rounded-full bg-white text-black font-semibold text-xs md:text-sm tracking-normal shadow-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-3 group-hover:translate-y-0 hover:scale-105 active:scale-95 flex items-center gap-2">
          <span className="relative z-10 flex items-center gap-2 font-medium">
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    </a>
  );
}
