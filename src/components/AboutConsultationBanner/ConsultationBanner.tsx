"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/SEO/JsonLd";
import ApplyConsultImage from "@/asset/image/apply-consult.jpg";

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

      {/* Background Image */}
      <Image
        src={ApplyConsultImage}
        alt="Consultation background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4">
        <h2
          id="consult-banner-heading"
          className="text-white font-monument-ultrabold text-2xl sm:text-3xl md:text-4xl text-center mb-10 leading-tight"
        >
          {"Let’s discuss making"}
          <br />
          {"something together"}
        </h2>

        <Link
          href="/contact"
          className="text-white font-poppins text-xl sm:text-2xl flex items-center gap-2 cursor-pointer hover:opacity-80 transition no-underline"
          aria-label="Apply for consultation"
        >
          Apply for consultation <span className="text-3xl">&#8594;</span>
        </Link>
      </div>
    </section>
  );
}
