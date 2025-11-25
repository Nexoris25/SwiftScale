"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/SEO/JsonLd";

// Corrected variable declaration (removed extra semicolon)
const ApplyConsultImage = "/asset/image/apply-consult.webp";

export default function ConsultationBanner() {
  return (
    <section
      className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center rounded-3xl overflow-hidden"
      role="region"
      aria-labelledby="consult-banner-heading"
    >
      <JsonLd
        id="ld-consultation-banner"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          name: "Consultation Banner",
        }}
      />

      {/* Background Image: Added priority for better LCP performance */}
      <Image
        src={ApplyConsultImage}
        alt="Creative team collaborating on a consultation strategy"
        fill
        priority // Set to true to preload this critical image
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay: Increased contrast for better readability */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4">
        <h2
          id="consult-banner-heading"
          className="text-white text-xl md:text-3xl lg:text-4xl text-center mb-10 leading-tight"
        >
          {"Let’s discuss making\nsomething together"}
        </h2>

        <Link
          href="/contact"
          className="text-white font-poppins text-xl sm:text-2xl flex items-center gap-2 cursor-pointer hover:opacity-80 transition no-underline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-md"
          aria-label="Apply for consultation"
        >
          Apply for consultation <span className="text-3xl" aria-hidden="true">&#8594;</span>
        </Link>
      </div>
    </section>
  );
}