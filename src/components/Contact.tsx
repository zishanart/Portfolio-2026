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
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-12">
              Open for freelance opportunities, collaborations, or just a friendly chat about design.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-auto">
            {/* Phone */}
            <a
              href="tel:+919131943006"
              aria-label="Call Zishan Khan at +91 91319 43006"
              className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 w-full md:min-w-[380px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/[0.05] text-white group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1 font-medium">Phone</p>
                  <p className="text-white text-base sm:text-lg font-medium tracking-wide">+91 91319 43006</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919131943006?text=Hi%20Zishan!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Zishan Khan on WhatsApp at +91 91319 43006"
              className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 w-full md:min-w-[380px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/[0.05] text-white group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.776.978-.952 1.18-.175.2-.351.225-.652.075-.3-.15-1.267-.467-2.414-1.488-.893-.797-1.496-1.782-1.672-2.083-.175-.3-.019-.463.131-.613.136-.135.301-.351.452-.527.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.234-.244-.588-.492-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.375-.276.301-1.053 1.03-1.053 2.512s1.079 2.914 1.229 3.115c.15.2 2.122 3.24 5.14 4.544.718.31 1.278.496 1.716.635.722.23 1.379.197 1.9.12.58-.088 1.78-.727 2.03-1.43.251-.703.251-1.306.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.95.56 3.77 1.53 5.31L2 22.08l4.89-1.51c1.48.88 3.2 1.39 5.05 1.39 5.53 0 10.02-4.49 10.02-10.02C21.96 6.49 17.57 2 12.04 2zm0 18.23c-1.64 0-3.16-.48-4.45-1.31l-.32-.2-3.3.87.88-3.21-.21-.34c-.92-1.35-1.46-2.96-1.46-4.68 0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.52-3.68 8.2-8.2 8.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1 font-medium">WhatsApp</p>
                  <p className="text-white text-base sm:text-lg font-medium tracking-wide">+91 91319 43006</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Email 1 */}
            <a
              href="mailto:mdkhanzishan03@gmail.com"
              aria-label="Email Zishan Khan at mdkhanzishan03@gmail.com"
              className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 w-full md:min-w-[380px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/[0.05] text-white group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1 font-medium">Email</p>
                  <p className="text-white text-base sm:text-lg font-medium tracking-wide">mdkhanzishan03@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            {/* Email 2 */}
            <a
              href="mailto:orvixa.media@gmail.com"
              aria-label="Email Orvixa Media at orvixa.media@gmail.com"
              className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 w-full md:min-w-[380px]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/[0.05] text-white group-hover:bg-pink-500/20 group-hover:text-pink-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1 font-medium">Business</p>
                  <p className="text-white text-base sm:text-lg font-medium tracking-wide">orvixa.media@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

          </div>
        </div>

        {/* Copyright Footer */}
        <p className="text-center text-zinc-400 text-sm mt-16 pt-8 border-t border-white/[0.05]">
          © 2026 Zishan Khan. All rights reserved.
        </p>
      </div>
    </section>
  );
}
