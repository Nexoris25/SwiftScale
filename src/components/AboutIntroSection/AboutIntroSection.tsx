"use client";
import React from "react";
import Image from "next/image";
import JsonLd from "@/components/SEO/JsonLd";

const AboutImage = "/asset/image/about-image-1.webp";

export default function AboutIntroSection() {
  return (
    <section
      className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-12 max-sm:gap-10 max-sm:py-12 max-w-7xl mx-auto"
      role="region"
      aria-labelledby="about-intro-heading"
    >
      <JsonLd
        id="ld-about-intro"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          name: "About Intro",
        }}
      />

      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start justify-center max-lg:items-center max-lg:text-center">
        <h4 className="font-poppins text-base sm:text-lg text-black dark:text-white mb-2">
          About Swiftscale Consult
        </h4>

        <h2
          id="about-intro-heading"
          className="font-monument-ultrabold text-3xl max-[350px]:text-2xl text-black dark:text-white leading-tight mb-6 lg:mt-4 max-lg:text-center"
        >
          Propelling Small-scale Businesses to New Heights
        </h2>

        <p className="font-poppins text-base text-black dark:text-white leading-relaxed max-w-xl mb-8 max-lg:text-center">
          At Swiftscale, we are more than a company. We are a multi-service powerhouse built to help businesses, brands, and individuals grow, scale, and succeed.
        </p>

        <div className="w-32 h-2 bg-[#6A01E1] rounded-full" />
      </div>

      {/* Right Image */}
      <div className="flex-1 flex items-center justify-end max-lg:justify-center max-lg:w-full">
        <div className="w-full max-w-lg">
          <Image
            src={AboutImage}
            width={1200}
            height={800}
            alt="SwiftScale team members collaborating enthusiastically on a project in a modern, brightly lit office."
            className="rounded-md object-cover w-full h-auto max-h-[380px]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false} 
          />
        </div>
      </div>
    </section>
  );
}