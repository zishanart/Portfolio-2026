"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GalleryImageCard } from "./GalleryImageCard";

export interface ArchiveItem {
  src: string;
  alt: string;
}

export interface ArchiveCollection {
  id: string;
  title: string;
  subtitle: string;
  driveUrl: string;
  categoryPageUrl: string;
  isSquare?: boolean;
  images: ArchiveItem[];
}

interface ArchiveExplorerProps {
  collections: ArchiveCollection[];
  totalCount: number;
}

export function ArchiveExplorer({ collections, totalCount }: ArchiveExplorerProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredCollections =
    selectedFilter === "all"
      ? collections
      : collections.filter((c) => c.id === selectedFilter);

  return (
    <div>
      {/* Interactive Filter Pills */}
      <div className="sticky top-6 z-30 mb-16 py-3 px-3 rounded-full bg-[#161616]/80 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full">
        <button
          onClick={() => setSelectedFilter("all")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 shrink-0 ${
            selectedFilter === "all"
              ? "bg-white text-black shadow-lg shadow-white/10 scale-100"
              : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>All Works</span>
          <span
            className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              selectedFilter === "all" ? "bg-black/10 text-black" : "bg-white/10 text-gray-300"
            }`}
          >
            {totalCount}
          </span>
        </button>

        {collections.map((col) => {
          const isActive = selectedFilter === col.id;
          return (
            <button
              key={col.id}
              onClick={() => setSelectedFilter(col.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 shrink-0 ${
                isActive
                  ? "bg-white text-black shadow-lg shadow-white/10 scale-100"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <span>{col.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-black/10 text-black" : "bg-white/10 text-gray-300"
                }`}
              >
                {col.images.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Collections Sections */}
      <div className="space-y-24">
        {filteredCollections.map((col, index) => (
          <section
            key={col.id}
            id={col.id}
            aria-label={`${col.title} section`}
            className="relative"
          >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold">
                    0{index + 1} / Collection
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-400 font-mono">
                    {col.images.length} Projects
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  {col.title}
                </h2>
                <p className="mt-2 text-gray-400 text-sm md:text-base font-light max-w-xl">
                  {col.subtitle}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href={col.categoryPageUrl}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-gray-200 hover:text-white text-xs md:text-sm font-medium transition-all duration-300 group"
                >
                  <span>Dedicated Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href={col.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 text-blue-300 hover:text-blue-200 text-xs md:text-sm font-medium transition-all duration-300"
                >
                  <span>Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Section Grid */}
            {col.isSquare ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {col.images.map((item, idx) => (
                  <GalleryImageCard
                    key={idx}
                    src={item.src}
                    alt={item.alt}
                    driveUrl={col.driveUrl}
                    aspectRatio="square"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={75}
                    width={400}
                    height={400}
                  />
                ))}
              </div>
            ) : (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {col.images.map((item, idx) => (
                  <GalleryImageCard
                    key={idx}
                    src={item.src}
                    alt={item.alt}
                    driveUrl={col.driveUrl}
                    aspectRatio="auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    width={800}
                    height={600}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
