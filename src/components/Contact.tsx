"use client";

import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      role="region"
      aria-label="Contact information"
      className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 lg:px-24 border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
              Open for freelance opportunities, collaborations, or just a friendly chat about design.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-auto">
            {/* Phone */}
            <a
              href="tel:+919131943006"
              aria-label="Call Zishan Khan at +91 91319 43006"
              className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 min-w-[300px] md:min-w-[400px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/[0.05] text-white group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-white text-lg font-medium tracking-wide">+91 91319 43006</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Email 1 */}
            <a
              href="mailto:mdkhanzishan03@gmail.com"
              aria-label="Email Zishan Khan at mdkhanzishan03@gmail.com"
              className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 min-w-[300px] md:min-w-[400px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/[0.05] text-white group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white text-lg font-medium tracking-wide">mdkhanzishan03@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Email 2 */}
            <a
              href="mailto:orvixa.media@gmail.com"
              aria-label="Email Orvixa Media at orvixa.media@gmail.com"
              className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 min-w-[300px] md:min-w-[400px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/[0.05] text-white group-hover:bg-pink-500/20 group-hover:text-pink-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Business</p>
                  <p className="text-white text-lg font-medium tracking-wide">orvixa.media@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

          </div>
        </div>

        {/* Copyright Footer */}
        <p className="text-center text-gray-600 text-sm mt-16 pt-8 border-t border-white/[0.05]">
          © 2026 Zishan Khan. All rights reserved.
        </p>
      </div>
    </section>
  );
}
