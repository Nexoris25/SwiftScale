"use client";
import React from "react";
import Diamond from "@/asset/svg/diamond.svg";
import Flower from "@/asset/svg/flower.svg";
import Infinity from "@/asset/svg/infinity.svg";
import JsonLd from "@/components/SEO/JsonLd";

const features = [
  {
    icon: Infinity,
    title: "Unlock the Power of Top Talent",
    description:
      "Access skilled professionals who elevate your output, strengthen your team, and drive consistent business results.",
  },
  {
    icon: Diamond,
    title: "Giving Your Brand the Identity or Visibility It Needs",
    description:
      "Build a standout presence with strategic branding that attracts attention, builds trust, and positions you as a market leader.",
  },
  {
    icon: Flower,
    title: "Infusing Technology to Scale Your Business",
    description:
      "Grow smarter with custom tech solutions built to improve efficiency, boost performance, and support long-term scaling.",
  },
];

export default function ScaleConsultSection() {
  return (
    <section
      className="
        w-full 
        py-12 sm:py-16 lg:py-20 
        px-4 sm:px-6 lg:px-8 
        flex flex-col items-center
      "
      role="region"
      aria-labelledby="scale-consult-heading"
    >
      <JsonLd
        id="ld-scale-consult"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          name: "Scale Consult",
        }}
      />

      {/* Heading */}
      <h2
        id="scale-consult-heading"
        className="
          text-xl md:text-3xl
          max-w-2xl mx-auto 
          mb-10 sm:mb-12 lg:mb-16 
          text-center tracking-wide 
          text-black dark:text-white
          px-2
        "
      >
        How SwiftScale Consult helps your business grow
      </h2>

      {/* Features Grid */}
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-10 sm:gap-12 lg:gap-14 
          w-full mx-auto
        "
        role="list"
        aria-label="Ways SwiftScale can help"
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-center md:items-start 
              text-center md:text-left 
              gap-3 sm:gap-4 
              px-2
            "
            role="listitem"
          >
            {/* Icon */}
            <div
              className="
                flex items-center justify-center 
                rounded-xl 
                mb-2
              "
              aria-hidden="true"
            >
              <feature.icon
                className="
                  w-14 h-14 sm:w-16 sm:h-16 
                  lg:w-20 lg:h-20
                "
              />
            </div>

            {/* Title */}
            <h3
              className="
                text-xl md:text-2xl 
                text-black dark:text-white
              "
            >
              {feature.title}
            </h3>

            {/* Description */}
            <p
              className="
                font-poppins 
                text-sm md:text-base 
                leading-relaxed 
                text-black/80 dark:text-white/80
                max-w-[500px]
              "
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
