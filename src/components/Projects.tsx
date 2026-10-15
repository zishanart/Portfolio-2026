"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  role: string;
  year: string;
  href: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Social Media Posts",
    description: "A curated collection of engaging social media creatives, viral marketing campaigns, and brand storytelling.",
    role: "",
    year: "",
    href: "/social-media",
  },
  {
    title: "Thumbnails",
    description: "High-converting, eye-catching YouTube and social media thumbnails optimized for maximum engagement and click-through rates.",
    role: "",
    year: "",
    href: "/thumbnails",
  },
  {
    title: "Logos",
    description: "Distinctive, memorable brand identities and logo designs that beautifully capture the essence of a business.",
    role: "",
    year: "",
    href: "/logos",
  },
  {
    title: "Typography",
    description: "Expressive, custom typographic layouts and elegant lettering designs exploring font pairings and visual hierarchy.",
    role: "",
    year: "",
    href: "/typography",
  },
  {
    title: "Amazon A+ Images",
    description: "Conversion-focused E-commerce visuals, product feature highlights, and immersive brand storytelling modules.",
    role: "",
    year: "",
    href: "/amazon-a-plus",
  },
  {
    title: "App Store Listing",
    description: "Eye-catching iOS and Android app screenshots, store mockups, and high-impact visual conversion assets.",
    role: "",
    year: "",
    href: "/app-store-listing",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      role="region"
      aria-label="Selected works"
      className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Decorative gradient background for blending */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#121212] to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Selected Works
            </h2>
            <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl font-light">
              A collection of projects exploring the intersection of design, interaction, and engineering.
            </p>
          </div>
          <Link
            href="/archive"
            className="group relative px-6 py-3 rounded-full bg-white text-black font-medium overflow-hidden transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Archive <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => {
            const CardContent = (
              <>
                {/* Card Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex justify-between items-start mb-16">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 max-w-sm text-base md:text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-4 rounded-full bg-white/[0.03] group-hover:bg-white text-white group-hover:text-black transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-45 group-hover:scale-110">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                {(project.role || project.year) && (
                  <div className="relative z-10 flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 font-medium border-t border-white/[0.05] pt-6">
                    {project.role && <span className="uppercase tracking-[0.2em]">{project.role}</span>}
                    {(project.role && project.year) && <span className="w-1 h-1 rounded-full bg-gray-600" />}
                    {project.year && <span className="tracking-wider">{project.year}</span>}
                  </div>
                )}
              </>
            );

            const cardClasses = "group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/[0.02] block";

            if (project.href) {
              return (
                <Link
                  href={project.href}
                  key={idx}
                  className={cardClasses}
                  aria-label={`View ${project.title}`}
                >
                  {CardContent}
                </Link>
              );
            }

            return (
              <div key={idx} className={cardClasses}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
