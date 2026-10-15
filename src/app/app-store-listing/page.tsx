import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GalleryImageCard } from "@/components/GalleryImageCard";
import { DRIVE_LINKS, getImageAlt } from "@/lib/constants";
import { GALLERY_FILES } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "App Store Listing Portfolio",
  description:
    "High-converting iOS App Store and Google Play screenshot designs, device mockups, and visual product showcases by Zishan Khan.",
  openGraph: {
    title: "App Store Listing Portfolio",
    description:
      "High-converting iOS App Store and Google Play screenshot designs, device mockups, and visual product showcases by Zishan Khan.",
    type: "website",
  },
};

export default function AppStoreListingPage() {
  const images = GALLERY_FILES.appStore;

  return (
    <main id="main-content" className="min-h-screen bg-[#121212] py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>

            <a
              href={DRIVE_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] text-zinc-200 hover:text-white text-xs md:text-sm font-medium transition-all duration-300 active:scale-95 w-fit"
            >
              <span>Open Google Drive Folder</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </a>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-gray-400 mb-4 py-2 pr-4 leading-[1.15] md:leading-[1.15] inline-block">
            App Store Listing.
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light max-w-2xl">
            Sleek iOS and Android app screenshots, store mockups, and high-impact visual conversion assets for digital products.
          </p>
        </header>

        <section
          aria-label="App store listing gallery"
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {images.map((img, idx) => {
            const altText = getImageAlt(img, "App store screenshot mockup");
            return (
              <GalleryImageCard
                key={idx}
                src={`/App Store listing/${img}`}
                alt={altText}
                driveUrl={DRIVE_LINKS.appStore}
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
