"use client";

import React from "react";
import Image from "next/image";
import JsonLd from "@/components/SEO/JsonLd";
// migrated
const AboutHero = "/asset/image/about-hero.webp";;

export default function ContactHero() {
  return (
    <section
      className="
        relative w-full
        h-[200px]        /* mobile */
        sm:h-[260px]     /* tablet */
        lg:h-[420px]     /* desktop (40 percent reduced) */
        flex flex-col items-center justify-center
        overflow-hidden
      "
      role="region"
      aria-labelledby="contact-hero-heading"
    >
      <JsonLd
        id="ld-contact-page"
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact SwiftScale",
          about: { "@type": "Organization", name: "SwiftScale" }
        }}
      />

      <Image
        src={AboutHero}
        alt="Contact page background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 max-w-2xl m-auto text-center">
        <h1
          id="contact-hero-heading"
          className="text-white font-monument-ultrabold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
        >
          Contact Us
        </h1>

        <p className="text-white font-poppins text-base sm:text-lg md:text-xl max-w-lg">
          {"Let’s talk about your next project."}
        </p>
      </div>
    </section>
  );
}
