"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
  const [activeId, setActiveId] = useState<string>(collections[0]?.id || "");
  const isClickScrollingRef = useRef(false);
  const clickScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tabButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Dynamic Scroll-Spy: Updates active tab based on which section is currently in view
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickScrollingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const fullHeight = document.documentElement.scrollHeight;

          // If scrolled near bottom of page, activate last collection
          if (scrollPosition + windowHeight >= fullHeight - 120) {
            const lastCol = collections[collections.length - 1];
            if (lastCol) setActiveId(lastCol.id);
            ticking = false;
            return;
          }

          // Otherwise find section closest to top offset (below sticky nav)
          const targetOffset = 140;
          let currentActive = collections[0]?.id || "";

          for (const col of collections) {
            const el = document.getElementById(col.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= targetOffset) {
                currentActive = col.id;
              }
            }
          }

          setActiveId(currentActive);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickScrollTimeoutRef.current) {
        clearTimeout(clickScrollTimeoutRef.current);
      }
    };
  }, [collections]);

  // Keep active tab centered in horizontal pill bar on mobile
  useEffect(() => {
    if (activeId && tabButtonRefs.current[activeId]) {
      tabButtonRefs.current[activeId]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeId]);

  // Smooth scroll to section on tab click
  const scrollToSection = (id: string) => {
    setActiveId(id);
    isClickScrollingRef.current = true;

    if (clickScrollTimeoutRef.current) {
      clearTimeout(clickScrollTimeoutRef.current);
    }

    const target = document.getElementById(id);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Resume scroll spy after scroll animation finishes
    clickScrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 700);
  };

  return (
    <div>
      {/* Sleek, Minimal Sticky Navigation Pill Bar */}
      <nav
        aria-label="Archive sections navigation"
        className="sticky top-4 sm:top-6 z-40 mb-12 sm:mb-16 flex justify-center"
      >
        <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-[#141414]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl overflow-x-auto max-w-full no-scrollbar">
          {collections.map((col) => {
            const isActive = activeId === col.id;
            return (
              <button
                key={col.id}
                ref={(el) => {
                  tabButtonRefs.current[col.id] = el;
                }}
                onClick={() => scrollToSection(col.id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shrink-0 whitespace-nowrap ${
                  isActive
                    ? "bg-white text-black shadow-md shadow-white/5 font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span>{col.title}</span>
                <span
                  className={`ml-1.5 text-[10px] font-mono ${
                    isActive ? "text-zinc-600" : "text-zinc-500"
                  }`}
                >
                  {col.images.length}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Organized Sequential Discipline Sections */}
      <div className="space-y-20 sm:space-y-28">
        {collections.map((col, index) => (
          <section
            key={col.id}
            id={col.id}
            aria-label={`${col.title} section`}
            className="scroll-mt-28"
          >
            {/* Minimal Editorial Section Header */}
            <div className="border-t border-white/[0.08] pt-8 sm:pt-10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400 font-mono">
                    0{index + 1} / 0{collections.length}
                  </span>
                  <span className="text-xs text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {col.images.length} Projects
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {col.title}
                </h2>
                <p className="mt-2 text-zinc-400 text-sm sm:text-base font-light max-w-xl">
                  {col.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 flex-wrap shrink-0">
                <Link
                  href={col.categoryPageUrl}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300"
                >
                  <span>Dedicated Gallery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href={col.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300"
                >
                  <span>Google Drive Folder</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Gallery Grid */}
            {col.isSquare ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
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
