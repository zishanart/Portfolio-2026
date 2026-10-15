"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MotionValue, motion, useTransform, useMotionValueEvent } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function Overlay({ scrollYProgress }: OverlayProps) {
  const [section1Hidden, setSection1Hidden] = useState(false);
  const [section2Hidden, setSection2Hidden] = useState(true);
  const [section3Hidden, setSection3Hidden] = useState(true);

  // Section 1 (0% - 20% scroll): Center
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -150]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // Section 2 (25% - 45% scroll): Left Aligned
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [150, -150]);

  // Section 3 (55% - 85% scroll): Right Aligned
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.85], [150, -150]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setSection1Hidden(latest >= 0.2);
    setSection2Hidden(latest < 0.2 || latest > 0.5);
    setSection3Hidden(latest < 0.5 || latest > 0.85);
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        aria-hidden={section1Hidden ? "true" : undefined}
      >
        <p className="text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] mb-4 font-medium">
          Portfolio 2026
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 drop-shadow-2xl">
          Zishan
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide max-w-lg leading-relaxed">
          Graphic Designer <br/> & Social Media Manager
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
        aria-hidden={section2Hidden ? "true" : undefined}
      >
        <div className="max-w-2xl">
          <p className="text-sm md:text-base text-blue-400 uppercase tracking-[0.3em] mb-6 font-semibold">
            The Philosophy
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6 drop-shadow-xl">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">digital</span><br/>experiences.
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
            Focused on performance, aesthetics, and memorable micro-interactions.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
        aria-hidden={section3Hidden ? "true" : undefined}
      >
        <div className="max-w-2xl">
          <p className="text-sm md:text-base text-purple-400 uppercase tracking-[0.3em] mb-6 font-semibold">
            The Approach
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6 drop-shadow-xl">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">design</span> <br className="hidden md:block" /> and engineering.
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed mb-8">
            Transforming ambitious concepts into poster, carousel design.
          </p>
          <Link
            href="/archive"
            className="pointer-events-auto group relative px-6 py-3 rounded-full bg-white text-black font-medium overflow-hidden transition-transform active:scale-95 inline-flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              View all archive
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
