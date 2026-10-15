"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

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
      className={`group relative block overflow-hidden rounded-3xl bg-[#141414] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-700 cursor-pointer ${
        isSquare
          ? "aspect-square p-6 md:p-8 flex items-center justify-center"
          : "break-inside-avoid min-h-[240px]"
      } ${className}`}
    >
      {/* AI Generative Image Loading State (Gemini / Midjourney style) */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#121624] via-[#171328] to-[#0f111a] animate-ai-aurora">
          {/* Pulsing Central Nebula Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/15 via-purple-500/10 to-transparent animate-ai-glow pointer-events-none" />

          {/* Sweeping Laser / AI Scan Beam */}
          <div className="absolute inset-x-0 -top-full h-1/2 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-ai-scan pointer-events-none" />

          {/* Subtle Grid Lattice Background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Centered AI Status Pill */}
          <div className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-2xl">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span className="text-[11px] font-medium tracking-[0.2em] text-gray-300 uppercase">
              Rendering
            </span>
          </div>
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
              : "opacity-0 blur-2xl scale-105"
          }`}
        />
      </div>

      {/* Hover Overlay with Signature Site Button (Matching Selected Works) */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm pointer-events-none z-10">
        <div className="relative px-6 py-3 rounded-full bg-white text-black font-semibold text-xs md:text-sm tracking-normal shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-3 group-hover:translate-y-0 group-hover:scale-105 active:scale-95 flex items-center gap-2">
          <span className="relative z-10 flex items-center gap-2 font-medium">
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>
    </a>
  );
}
