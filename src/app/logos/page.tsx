import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Logo Design Portfolio',
  description:
    'Professional logo designs and brand identity work by Zishan Khan. Distinctive, memorable logos that capture the essence of a business.',
  openGraph: {
    title: 'Logo Design Portfolio',
    description:
      'Professional logo designs and brand identity work by Zishan Khan. Distinctive, memorable logos that capture the essence of a business.',
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

export default function LogosPage() {
  const workDir = path.join(process.cwd(), 'public', 'logos');
  let images: string[] = [];

  try {
    const files = fs.readdirSync(workDir);
    // Filter for image files
    images = files.filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file));
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
            Logos.
          </h1>
          <p className="text-gray-400 text-lg font-light">
            Distinctive, memorable brand identities and logo designs.
          </p>
        </header>

        <section
          aria-label="Logo design gallery"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {images.map((img, idx) => {
            const altText = getImageAlt(img, 'Logo design');
            return (
              <div
                key={idx}
                role="img"
                aria-label={altText}
                className="aspect-square flex items-center justify-center rounded-2xl overflow-hidden bg-white/[0.05] border border-white/[0.05] group cursor-pointer relative p-8"
              >
                <Image
                  src={`/logos/${img}`}
                  alt={altText}
                  width={400}
                  height={400}
                  quality={80}
                  loading="lazy"
                  placeholder="empty"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none backdrop-blur-sm">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm tracking-[0.2em] uppercase font-medium">View Project</p>
                  </div>
                </div>
              </div>
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
