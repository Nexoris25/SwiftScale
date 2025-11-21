"use client";

import React, { useState } from "react";
import Image from "next/image";
import JsonLd from "@/components/SEO/JsonLd";

import Core1 from "@/asset/image/core-1.png";
import Core2 from "@/asset/image/core-2.jpg";
import Core3 from "@/asset/image/core-3.jpg";
import Core4 from "@/asset/image/core-4.jpg";
import Core5 from "@/asset/image/core-5.jpg";

const services = [
  {
    title: "HR Consulting",
    description:
      "Offering tailored solutions, from recruitment and staffing to specialised administrative services.",
    image: Core1,
  },
  {
    title: "Software Development",
    description:
      "Building mobile apps, web apps, and websites that are functional and scalable.",
    image: Core2,
  },
  {
    title: "Design",
    description:
      "Creating brand identities that stand out, with services ranging from graphics to UI/UX.",
    image: Core3,
  },
  {
    title: "Legal",
    description:
      "Creating brand identities that stand out, with services ranging from legal advisory to documentation.",
    image: Core4,
  },
  {
    title: "Seo Consulting",
    description:
      "We offer Content & Writing Services. Producing SEO rich content for your business.",
    image: Core5,
  },
];

export default function CoreServicesSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section
      className="w-full py-16 flex flex-col items-center px-6 max-sm:px-4"
      role="region"
      aria-labelledby="core-services-heading"
    >
      <JsonLd
        id="ld-core-services"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPageElement",
          name: "Core Services",
        }}
      />

      <h2
        id="core-services-heading"
        className="text-black dark:text-white font-monument-ultrabold text-3xl sm:text-4xl md:text-5xl max-lg:text-2xl mb-12 text-center tracking-wide"
      >
        5 Core Services
      </h2>

      <div
        className="flex flex-row flex-nowrap justify-center gap-6 md:gap-8 w-full 
                   max-lg:flex-col max-lg:items-stretch max-lg:gap-10"
        role="list"
        aria-label="Core services expandable cards"
      >
        {services.map((service, idx) => {
          const expanded = expandedIdx === idx;

          return (
            <div
              key={idx}
              role="listitem"
              aria-expanded={expanded}
              aria-label={`${service.title} card`}
              onClick={() => setExpandedIdx(expanded ? null : idx)}
              className={`
                relative rounded-3xl overflow-hidden cursor-pointer shadow-lg
                transition-all duration-500 flex flex-col justify-end

                /* Updated heights */
                h-[420px] sm:h-[440px] md:h-[460px] lg:h-[480px]
                max-sm:h-[360px] max-[350px]:h-[330px]

                ${expanded
                  ? "w-[28%] max-lg:w-full lg:h-[500px]"
                  : "w-[16%] max-lg:w-full"
                }
              `}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 20vw"
                className="object-cover"
                priority={idx === 0}
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <h3 className="font-monument-ultrabold text-white text-xl sm:text-2xl mb-2 truncate">
                  {service.title}
                </h3>

                <p
                  className={`
                    font-poppins text-white text-sm sm:text-base leading-relaxed
                    transition-all duration-300
                    ${expanded ? "line-clamp-none" : "line-clamp-3"}
                  `}
                >
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
