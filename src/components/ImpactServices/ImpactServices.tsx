"use client";
import React from "react";
import Image from "next/image";
import DesignX from "@/asset/svg/design-x.svg";
import JsonLd from "@/components/SEO/JsonLd";

export const ImpactServices: React.FC = () => (
  <section
    className="w-full py-12 px-4 flex flex-col items-center bg-transparent"
    role="region"
    aria-labelledby="impact-services-heading"
  >
    <JsonLd
      id="ld-impact-services"
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Design Service Categories",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@type": "Service", name: "UI/UX Design", url: "https://swiftscale.com.ng/design#uiux" }
          },
          {
            "@type": "ListItem",
            position: 2,
            item: { "@type": "Service", name: "Graphics Design", url: "https://swiftscale.com.ng/design#graphics" }
          },
          {
            "@type": "ListItem",
            position: 3,
            item: { "@type": "Service", name: "3D Design", url: "https://swiftscale.com.ng/design#3d" }
          },
          {
            "@type": "ListItem",
            position: 4,
            item: { "@type": "Service", name: "Branding", url: "https://swiftscale.com.ng/design#branding" }
          }
        ]
      }}
    />

    <h2
      id="impact-services-heading"
      className="text-black dark:text-white text-3xl md:text-5xl max-lg:text-2xl text-center font-monument-ultrabold mb-2"
    >
      Proven Result, Real Impact
    </h2>

    <p className="text-black dark:text-white/80 text-center max-w-2xl mb-10 leading-relaxed">
      Our designs improve real business challenges, enhance user experiences, and deliver measurable results that help your brand progress.
    </p>

    {/* LIST WRAPPER */}
    <div
      className="flex flex-col w-full gap-4 justify-start items-start"
      role="list"
      aria-label="Design impact service categories"
    >
      {/* TOP ROW */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* UI/UX Design */}
        <article
          id="uiux"
          className="bg-[#0000D2] w-full lg:w-2/3 relative rounded-xl px-8 flex flex-row items-center justify-between
                     min-h-[260px] md:min-h-[320px] lg:min-h-[350px]
                     text-black dark:text-white overflow-hidden"
          role="listitem"
          aria-labelledby="uiux-title"
        >
          <div className="flex flex-col w-2/3 max-lg:w-full py-10 justify-end h-full items-start">
            <span
              id="uiux-title"
              className="text-2xl lg:text-3xl text-white font-monument-ultrabold mb-2"
            >
              UI/UX Design
            </span>
            <p className="text-white/90 text-base mt-2">
              Research driven interfaces and streamlined flows that reduce friction, improve task completion, and lift conversion rates.
            </p>
          </div>

          <div
            className="flex w-1/3 max-lg:hidden pointer-events-none"
            aria-hidden="true"
          >
            <DesignX />
          </div>
        </article>

        {/* Graphics Design */}
        <article
          id="graphics"
          className="bg-[#EDEDED] rounded-xl p-8 lg:w-1/3 flex flex-col justify-end items-start
                     min-h-[260px] md:min-h-[320px] lg:min-h-[350px]
                     text-[#363636]"
          role="listitem"
          aria-labelledby="graphics-title"
        >
          <span
            id="graphics-title"
            className="text-2xl lg:text-3xl font-monument-ultrabold mb-2"
          >
            Graphics Design
          </span>
          <p className="text-[#363636]/90 text-base mt-2">
            Campaign ready visuals, social media layouts, and marketing assets created to communicate clearly and stand out.
          </p>
        </article>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-0">
        {/* 3D Design */}
        <article
          id="3d"
          className="bg-[#EDEDED] rounded-xl p-8 lg:w-1/3 flex flex-col justify-end items-start
                     min-h-[260px] md:min-h-[320px] lg:min-h-[350px]
                     text-[#363636]"
          role="listitem"
          aria-labelledby="threed-title"
        >
          <span
            id="threed-title"
            className="text-2xl lg:text-3xl font-monument-ultrabold mb-2"
          >
            3D Design
          </span>
          <p className="text-[#363636]/90 text-base mt-2">
            Product renders, motion visuals, and immersive 3D elements that present ideas clearly and elevate brand perception.
          </p>
        </article>

        {/* Branding */}
        <article
          id="branding"
          className="bg-[#D779BB] w-full lg:w-2/3 relative rounded-xl px-8 flex flex-row items-center justify-between
                     min-h-[260px] md:min-h-[320px] lg:min-h-[350px]
                     text-black dark:text-white overflow-hidden"
          role="listitem"
          aria-labelledby="branding-title"
        >
          <div className="flex flex-col w-2/3 max-lg:w-full py-10 justify-end h-full items-start">
            <span
              id="branding-title"
              className="text-2xl text-white lg:text-3xl font-monument-ultrabold mb-2"
            >
              Branding
            </span>
            <p className="text-white/90 text-base mt-2">
              A complete visual system with logos, type, color, and guidelines that scale consistently across every touchpoint.
            </p>
          </div>

          <div
            className="flex w-1/3 max-lg:hidden pointer-events-none"
            aria-hidden="true"
          >
            <DesignX />
          </div>
        </article>
      </div>
    </div>
  </section>
);
