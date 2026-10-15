import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zishankhan.vercel.app"),
  title: {
    default: "Zishan Khan – Graphic Designer & Social Media Manager | Portfolio",
    template: "%s | Zishan Khan – Graphic Designer",
  },
  description:
    "Zishan Khan is a professional graphic designer and social media manager based in Bhopal, India. Portfolio featuring logo design, YouTube thumbnail design, typography, poster design, branding, and social media creative direction.",
  keywords: [
    "Zishan Khan",
    "Graphic Designer",
    "Social Media Manager",
    "Bhopal India",
    "Bhopal Graphic Designer",
    "Logo Design",
    "Thumbnail Design",
    "YouTube Thumbnail Designer",
    "Typography",
    "Lettering Art",
    "Poster Design",
    "Branding",
    "Brand Identity",
    "Carousel Design",
    "Social Media Post Design",
    "Amazon A+ Content",
    "Amazon EBC Design",
    "App Store Screenshots",
    "App Store Listing Design",
    "Visual Branding",
    "Freelance Graphic Designer",
  ],
  authors: [{ name: "Zishan Khan", url: "https://zishankhan.vercel.app" }],
  creator: "Zishan Khan",
  publisher: "Zishan Khan",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zishankhan.vercel.app",
    siteName: "Zishan Khan Portfolio",
    title: "Zishan Khan – Graphic Designer & Social Media Manager | Portfolio",
    description:
      "Zishan Khan is a professional graphic designer and social media manager based in Bhopal, India. Portfolio featuring logo design, YouTube thumbnail design, typography, poster design, branding, and visual identity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zishan Khan – Graphic Designer & Social Media Manager | Portfolio",
    description:
      "Zishan Khan is a professional graphic designer and social media manager based in Bhopal, India. Portfolio featuring logo design, YouTube thumbnail design, typography, poster design, branding, and visual identity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zishan Khan",
  url: "https://zishankhan.vercel.app",
  jobTitle: "Graphic Designer & Social Media Manager",
  description:
    "Zishan Khan is a graphic designer and social media manager based in Bhopal, India, specializing in logo design, thumbnail design, typography, poster design, and visual branding.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "India",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="sr-only">
          Zishan Khan is a professional graphic designer and social media manager based in Bhopal, Madhya Pradesh, India. Specializing in logo design, social media post design, YouTube thumbnail creation, typography and lettering art, poster design, brand identity, carousel design, and visual branding. Available for freelance graphic design projects, social media management, and brand consultation. Contact: mdkhanzishan03@gmail.com | Business: orvixa.media@gmail.com | Phone: +91 91319 43006
        </div>
        {children}
      </body>
    </html>
  );
}
