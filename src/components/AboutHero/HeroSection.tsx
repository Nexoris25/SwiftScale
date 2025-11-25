"use client";
import React from "react";
import Image from "next/image";
const AboutHero = "/asset/image/about-hero.webp";
import { useRouter } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      className="relative flex w-full items-center justify-start overflow-hidden h-[500px] max-sm:h-[440px] max-[350px]:h-[400px] max-[300px]:h-[360px]"
      role="region"
      aria-labelledby="about-hero-heading"
    >
      {/* SEO JSON-LD */}
      <JsonLd
        id="ld-about-hero"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          name: "About Hero",
        }}
      />

      {/* Background Image: priority and fill are correctly used for LCP performance */}
      <Image
        src={AboutHero}
        alt="SwiftScale team collaborating in a modern office environment"
        aria-hidden="true"
        priority
        fill
        quality={90} 
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/70 to-transparent dark:from-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full max-w-2xl flex-col items-start justify-center px-6 max-lg:px-4 max-lg:mx-auto max-lg:items-center">

        {/* Heading */}
        <h1
          id="about-hero-heading"
          className="font-monument-ultrabold text-3xl text-white leading-snug max-[350px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-left max-lg:text-center"
        >
          Your Talent Partners in Every Step
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-lg font-poppins text-base text-white leading-relaxed text-left max-lg:text-center sm:text-lg md:text-xl">
          We understand the people behind the roles. Our mission is to connect you with professionals who move your business forward.
        </p>

        {/* Button: Removed redundant rounded-full at the end. */}
        <button
          onClick={() => router.push("/contact")}
          aria-label="Get in touch with SwiftScale"
          className="mt-8 w-fit rounded-full border bg-[#6A01E1] px-8 py-2 font-poppins text-base text-white cursor-pointer transition-colors duration-300 hover:bg-purple-700 max-lg:mx-auto max-lg:w-full sm:text-lg outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#6A01E1]"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}