import React from "react";
import JsonLd from "@/components/SEO/JsonLd";
import AboutImage from '@/asset/image/about-image-1.jpg';

export default function AboutIntroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-10" role="region" aria-labelledby="about-intro-heading">
      <JsonLd id="ld-about-intro" data={{ "@context": "https://schema.org", "@type": "WebPageElement", name: "About Intro" }} />
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start justify-center max-lg:items-center max-lg:text-center">
        <h4 className="font-poppins text-lg text-black dark:text-white max-lg:text-center max-lg:w-full mb-2">About Swiftscale Consult</h4>
        <h1 id="about-intro-heading" className="font-monument-ultrabold text-3xl md:text-5xl text-black max-lg:text-center max-lg:w-full dark:text-white mb-6 leading-tight">
          Propelling Small-scale Businesses to New Heights
        </h1>
        <p className="font-poppins text-xl text-black dark:text-white mb-8 max-w-xl max-lg:w-full max-lg:text-center">
          At Swiftscale, we are more than a company — we are a multi-service powerhouse built to help businesses, brands, and individuals grow, scale, and succeed.
        </p>
        <div className="w-32 h-2 bg-[#6A01E1] rounded-full" />
      </div>
      {/* Right Image */}
      <div className="flex-1 flex flex-row max-lg:justify-center max-lg:mx-auto items-center justify-end">
        <img
          src={typeof AboutImage === "string" ? AboutImage : AboutImage.src}
          alt="Team collaborating in office"
          className="w-full max-w-lg aspect-video rounded-md object-cover"
        />
      </div>
    </section>
  );
}