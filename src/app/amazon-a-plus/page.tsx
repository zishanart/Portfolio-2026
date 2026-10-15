import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GalleryImageCard } from "@/components/GalleryImageCard";
import { DRIVE_LINKS, getImageAlt } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Amazon A+ Images Portfolio",
  description:
    "High-impact Amazon A+ Content, E-commerce product infographics, feature highlights, and conversion-optimized brand storytelling by Zishan Khan.",
  openGraph: {
    title: "Amazon A+ Images Portfolio",
    description:
      "High-impact Amazon A+ Content, E-commerce product infographics, feature highlights, and conversion-optimized brand storytelling by Zishan Khan.",
    type: "website",
  },
};

export default function AmazonAPlusPage() {
  const workDir = path.join(process.cwd(), "public", "Amazon A+ images");
  let images: string[] = [];

  try {
    const files = fs.readdirSync(workDir);
    images = files.filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file));
  } catch (error) {
    console.error("Failed to read Amazon A+ images directory", error);
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#121212] py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>

            <a
              href={DRIVE_LINKS.amazonAPlus}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-gray-200 hover:text-white text-xs md:text-sm font-medium transition-all duration-300 active:scale-95 w-fit"
            >
              <span>Open Google Drive Folder</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-gray-400 mb-4 py-2 pr-4 leading-[1.15] md:leading-[1.15] inline-block">
            Amazon A+ Images.
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl">
            High-converting Amazon EBC / A+ content, product infographics, lifestyle mockups, and rich visual storytelling.
          </p>
        </header>

        <section
          aria-label="Amazon A+ images gallery"
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {images.map((img, idx) => {
            const altText = getImageAlt(img, "Amazon A+ EBC design");
            return (
              <GalleryImageCard
                key={idx}
                src={`/Amazon A+ images/${img}`}
                alt={altText}
                driveUrl={DRIVE_LINKS.amazonAPlus}
                aspectRatio="auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
                width={800}
                height={600}
              />
            );
          })}
        </section>

        {images.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            <p>No images found in the gallery.</p>
          </div>
        )}
      </div>
    </main>
  );
}
