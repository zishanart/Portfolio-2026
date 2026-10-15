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

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {/* Replace '#' with actual profile URLs */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zishan Khan on LinkedIn"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.205 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zishan Khan on Instagram"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zishan Khan on X (Twitter)"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zishan Khan on Behance"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z" />
                </svg>
              </a>
            </div>
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
