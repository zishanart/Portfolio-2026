"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface GalleryImageCardProps {
  src: string;
  alt: string;
  driveUrl: string;
  aspectRatio?: "square" | "auto";
  sizes?: string;
  quality?: number;
  width?: number;
  height?: number;
  className?: string;
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
}: GalleryImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const isSquare = aspectRatio === "square";

  return (
    <a
      href={driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${alt} - Open in Google Drive`}
      className={`group relative block overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.2] transition-colors duration-500 cursor-pointer ${
        isSquare ? "aspect-square p-6 md:p-8 flex items-center justify-center" : "break-inside-avoid"
      } ${className}`}
    >
      {/* Skeleton Shimmer while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-white/[0.03]" />
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent animate-shimmer" />
        </div>
      )}

      {/* Image Container */}
      <div className={`relative w-full ${isSquare ? "h-full flex items-center justify-center" : ""}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          loading="lazy"
          placeholder="empty"
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isSquare
              ? "max-w-full max-h-full object-contain group-hover:scale-105"
              : "w-full h-auto object-cover group-hover:scale-[1.03]"
          } ${
            isLoaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-md scale-95"
          }`}
        />
      </div>

      {/* Hover Overlay with View in Drive badge */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm pointer-events-none z-10">
        <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-medium tracking-wider uppercase backdrop-blur-md shadow-2xl">
          <span>View in Drive</span>
          <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
        </div>
      </div>
    </a>
  );
}
