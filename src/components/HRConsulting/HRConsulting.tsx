"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";

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

      {/* BLOB — EXACT POSITION, ROTATION, SCALE FROM SCREENSHOT */}
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

      {/* Title + description */}
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

        {/* Button — no outline, no border, correct styling */}
        <button
          className="
            mt-8 px-8 py-3 cursor-pointer rounded-full
            bg-primary text-white
            hover:bg-purple-700 transition-colors duration-300
            border-0 outline-none focus:outline-none focus:ring-0 active:outline-none
          "
        >
          Get in Touch
        </button>

        {/* Social icons — increased to match screenshot */}
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

      {/* Image Row — height reduced to match screenshot */}
      <div className="
        relative -z-10 mt-28
        grid grid-cols-1 md:grid-cols-3 gap-8
        w-full max-w-7xl px-4
      ">
        {[HrImage1, HrImage2, HrImage3].map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`HR Consulting ${idx + 1}`}
            width={450}
            height={260}
            className="
              w-full
              h-[240px] md:h-[260px]
              rounded-2xl object-cover
            "
          />
        ))}
      </div>
    </section>
  );
};
