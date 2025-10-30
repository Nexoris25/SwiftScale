"use client";
import React from "react";
import AboutHero from '@/asset/image/about-hero.jpg';
import { useRouter } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";


export default function HeroSection() {
  const navigate = useRouter();
  return (
    <section className="relative w-full h-[600px] flex items-center justify-start overflow-hidden" role="region" aria-labelledby="about-hero-heading">
      <JsonLd id="ld-about-hero" data={{ "@context": "https://schema.org", "@type": "WebPageElement", name: "About Hero" }} />
      {/* Background Image */}
      <img
        src={typeof AboutHero === "string" ? AboutHero : AboutHero.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Gradient bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/70 to-transparent pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 max-w-2xl">
        <h1 id="about-hero-heading" className="text-white font-monument-ultrabold text-4xl md:text-6xl mb-6 leading-tight">
          Your Talent Partners In Every Step
        </h1>
        <p className="text-white font-poppins text-lg md:text-xl mb-8 max-w-lg">
          We understand the people behind the roles. Our mission? To connect you with professionals who will push your business forward.
        </p>
        <button onClick={() => navigate.push("/contact")} className="bg-[#6A01E1] text-white border font-poppins px-8 py-2 rounded-full text-lg hover:bg-purple-700 transition-colors duration-300" aria-label="Get in touch with SwiftScale">
          Get in Touch
        </button>
      </div>
    </section>
  );
}