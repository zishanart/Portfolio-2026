import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ArchiveExplorer, ArchiveCollection } from "@/components/ArchiveExplorer";
import { DRIVE_LINKS, getImageAlt } from "@/lib/constants";
import { GALLERY_FILES } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Complete Design Archive (6 Disciplines)",
  description:
    "Comprehensive design archive of Zishan Khan featuring Social Media Creatives, YouTube Thumbnails, Logo Designs, Typography, Amazon A+ Images, and App Store Listings.",
  openGraph: {
    title: "Complete Design Archive (6 Disciplines)",
    description:
      "Comprehensive design archive of Zishan Khan featuring Social Media Creatives, YouTube Thumbnails, Logo Designs, Typography, Amazon A+ Images, and App Store Listings.",
    type: "website",
  },
};

export default function ArchivePage() {
  const socialMediaImages = GALLERY_FILES.socialMedia.map((file) => ({
    src: `/social-media/${file}`,
    alt: getImageAlt(file, "Social media post"),
  }));
  const thumbnailImages = GALLERY_FILES.thumbnails.map((file) => ({
    src: `/thumbnails/${file}`,
    alt: getImageAlt(file, "Thumbnail design"),
  }));
  const logoImages = GALLERY_FILES.logos.map((file) => ({
    src: `/logos/${file}`,
    alt: getImageAlt(file, "Logo mark"),
  }));
  const typographyImages = GALLERY_FILES.typography.map((file) => ({
    src: `/typography/${file}`,
    alt: getImageAlt(file, "Typography layout"),
  }));
  const amazonImages = GALLERY_FILES.amazonAPlus.map((file) => ({
    src: `/Amazon A+ images/${file}`,
    alt: getImageAlt(file, "Amazon A+ EBC visual"),
  }));
  const appStoreImages = GALLERY_FILES.appStore.map((file) => ({
    src: `/App Store listing/${file}`,
    alt: getImageAlt(file, "App store screenshot"),
  }));

  const collections: ArchiveCollection[] = [
    {
      id: "social-media",
      title: "Social Media Posts",
      subtitle: "High-engagement social media creatives, promotional carousels, and viral brand campaigns.",
      driveUrl: DRIVE_LINKS.socialMedia,
      categoryPageUrl: "/social-media",
      isSquare: false,
      images: socialMediaImages,
    },
    {
      id: "thumbnails",
      title: "Thumbnails",
      subtitle: "High-converting, eye-catching YouTube and digital media thumbnails engineered for maximum CTR.",
      driveUrl: DRIVE_LINKS.thumbnails,
      categoryPageUrl: "/thumbnails",
      isSquare: false,
      images: thumbnailImages,
    },
    {
      id: "logos",
      title: "Logos & Brand Marks",
      subtitle: "Distinctive, memorable brand identities and logo designs crafted with geometric balance.",
      driveUrl: DRIVE_LINKS.logos,
      categoryPageUrl: "/logos",
      isSquare: true,
      images: logoImages,
    },
    {
      id: "typography",
      title: "Typography & Lettering",
      subtitle: "Expressive custom lettering, font pairings, and editorial hierarchy layouts.",
      driveUrl: DRIVE_LINKS.typography,
      categoryPageUrl: "/typography",
      isSquare: false,
      images: typographyImages,
    },
    {
      id: "amazon-a-plus",
      title: "Amazon A+ Images",
      subtitle: "E-commerce product detail infographics, lifestyle visuals, and conversion-focused A+ content.",
      driveUrl: DRIVE_LINKS.amazonAPlus,
      categoryPageUrl: "/amazon-a-plus",
      isSquare: false,
      images: amazonImages,
    },
    {
      id: "app-store",
      title: "App Store Listing",
      subtitle: "Sleek iOS and Android app screenshots, store mockups, and high-impact visual conversion assets.",
      driveUrl: DRIVE_LINKS.appStore,
      categoryPageUrl: "/app-store-listing",
      isSquare: false,
      isPortrait: true,
      images: appStoreImages,
    },
  ];

  const totalCount = collections.reduce((acc, c) => acc + c.images.length, 0);

  return (
    <main id="main-content" className="min-h-screen bg-[#121212] py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10 sm:mb-14">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm text-blue-400 font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Master Archive</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-gray-400 mb-4 py-2 pr-4 leading-[1.15] md:leading-[1.15] inline-block">
            Archive.
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light max-w-3xl">
            A comprehensive, organized collection across all 6 design disciplines ({totalCount} total projects). Click any project to open and explore the full high-resolution files on Google Drive.
          </p>
        </header>

        {/* Interactive Explorer with Tabs & 6 Divided Sections */}
        <ArchiveExplorer collections={collections} totalCount={totalCount} />
      </div>
    </main>
  );
}
