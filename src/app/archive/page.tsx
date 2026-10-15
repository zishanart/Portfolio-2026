import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Design Archive',
  description:
    'Browse the complete design archive of Zishan Khan featuring social media posts, YouTube thumbnails, logo designs, typography art, and more. Graphic designer based in Bhopal, India.',
  openGraph: {
    title: 'Complete Design Archive',
    description:
      'Browse the complete design archive of Zishan Khan featuring social media posts, YouTube thumbnails, logo designs, typography art, and more. Graphic designer based in Bhopal, India.',
    type: 'website',
  },
};

function getImageAlt(filename: string, category: string): string {
  const name = filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]/g, ' ')
    .replace(/\b[a-f0-9]{20,}\b/gi, '')
    .trim();
  const cleanName = name || category;
  return `${category} by Zishan Khan – ${cleanName}`;
}

export default function ArchivePage() {
  const workDir = path.join(process.cwd(), 'public', 'work');
  let images: string[] = [];

  try {
    const files = fs.readdirSync(workDir);
    // Filter for image files
    images = files.filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
  } catch (error) {
    console.error('Failed to read work directory', error);
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#121212] py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
            Archive.
          </h1>
          <p className="text-gray-400 text-lg font-light">
            A comprehensive collection of my graphic design, posters, and visual works.
          </p>
        </header>

        <section
          aria-label="Design archive gallery"
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {images.map((img, idx) => {
            const altText = getImageAlt(img, 'Design work');
            return (
              <div
                key={idx}
                role="img"
                aria-label={altText}
                className="break-inside-avoid rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] group cursor-pointer relative"
              >
                <div className="relative w-full">
                  <Image
                    src={`/work/${img}`}
                    alt={altText}
                    width={800}
                    height={600}
                    quality={80}
                    loading="lazy"
                    placeholder="empty"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none backdrop-blur-sm">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-sm tracking-[0.2em] uppercase font-medium">View Project</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {images.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            <p>No images found in the archive.</p>
          </div>
        )}
      </div>
    </main>
  );
}
