"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Instagram from "@/asset/svg/instagram.svg";
import Facebook from "@/asset/svg/facebook.svg";
import Linkedin from "@/asset/svg/linkedin.svg";
import X from "@/asset/svg/x.svg";

import InstagramLight from "@/asset/svg/instagram-lightmode.svg";
import FacebookLight from "@/asset/svg/facebook-lightmode.svg";
import LinkedinLight from "@/asset/svg/linkedin-lightmode.svg";
import XLight from "@/asset/svg/x-lightmode.svg";

const HrImage1 = "/asset/image/hr-consulting-1.webp";
const HrImage2 = "/asset/image/hr-consulting-2.webp";
const HrImage3 = "/asset/image/hr-consulting-3.webp";
const HrBg = "/asset/image/hr-consulting-bg-purple.webp";

export const HRConsulting: React.FC = () => {
  const theme = useTheme().resolvedTheme;
  const navigate = useRouter();

  const images = [HrImage1, HrImage2, HrImage3];
  const [current, setCurrent] = useState(0);

  // Corrected arrow logic
  const nextSlide = () => {
    if (current < images.length - 1) setCurrent(current + 1);
  };
  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <section
      className="
        relative dark:bg-[#363636] bg-[#F8F8F8]
        w-full flex flex-col items-center
        rounded-3xl px-4 py-10
      "
      role="region"
      aria-labelledby="hr-consulting-heading"
    >
      <JsonLd
        id="ld-service-hr-consulting"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "HR Consulting",
          serviceType: "HR Consulting",
        }}
      />

      {/* BLOB BACKGROUND */}
      <div className="absolute inset-0 max-lg:hidden pointer-events-none z-0 flex justify-center items-end translate-y-20">
        <div className="w-full max-w-[900px] h-[650px] relative">
          <Image
            src={HrBg}
            alt="decorative image"
            aria-hidden="true"
            fill
            sizes="900px"
            className="object-contain rotate-[20deg]"
            priority
          />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h1
          id="hr-consulting-heading"
          className="text-black dark:text-white text-2xl md:text-4xl lg:text-5xl"
        >
          HR Consulting
        </h1>

        <p className="text-black dark:text-white/80 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
          We provide tailored HR strategies that align people, culture, and business goals
          - helping your organization attract, retain, and grow top talent.
        </p>

        <button
          className="
            mt-8 px-8 py-3 cursor-pointer rounded-full
            bg-primary text-white
            hover:bg-purple-700 transition-colors duration-300
            border-0 outline-none focus:outline-none focus:ring-0
          "
        >
          Get in Touch
        </button>

        <div className="flex gap-8 mt-10 z-10">
          {theme === "dark" ? (
            <>
              <Instagram className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              <Facebook className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              <Linkedin className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              <X className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
            </>
          ) : (
            <>
              <InstagramLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              <FacebookLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              <LinkedinLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              <XLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
            </>
          )}
        </div>
      </div>

      {/* ------------------------------- */}
      {/* MOBILE CAROUSEL */}
      <div className="relative w-full max-w-7xl px-2 mt-14 md:hidden">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className={`
            absolute left-2 top-1/2 -translate-y-1/2 z-20
            p-0 bg-transparent border-none outline-none
            ${current === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100"}
          `}
        >
          <ChevronLeft size={32} className="text-white drop-shadow-lg" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          disabled={current === images.length - 1}
          className={`
            absolute right-2 top-1/2 -translate-y-1/2 z-20
            p-0 bg-transparent border-none outline-none
            ${current === images.length - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100"}
          `}
        >
          <ChevronRight size={32} className="text-white drop-shadow-lg" />
        </button>

        {/* SLIDER */}
        <div className="relative overflow-hidden rounded-2xl w-full h-[320px] z-10">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="min-w-full h-[320px] relative">
                <Image
                  src={img}
                  alt={`HR Slide ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="absolute bottom-3 w-full flex justify-center gap-2 z-20">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div
        className="
          hidden md:grid
          grid-cols-3 gap-8
          w-full max-w-7xl mt-28 px-4
        "
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-[260px] relative">
            <Image
              src={img}
              alt={`HR Consulting ${idx + 1}`}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
