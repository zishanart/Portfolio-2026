import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <HeroSection />
      <Projects />
      <Contact />
    </main>
  );
}
