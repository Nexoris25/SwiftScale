"use client";
import React, { useState } from "react";
import Core1 from '@/asset/image/core-1.png';
import Core2 from '@/asset/image/core-2.jpg';
import Core3 from '@/asset/image/core-3.jpg';
import Core4 from '@/asset/image/core-4.jpg';
import Core5 from '@/asset/image/core-5.jpg';

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
      "We offer Content & Writing Services – Producing SEO-rich content for your business.",
    image: Core5,
  },
];

export default function CoreServicesSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <h2 className="text-black dark:text-white font-monument-ultrabold text-4xl md:text-5xl mb-12 text-center tracking-wide">
        5 Core Services
      </h2>
      <div className="flex flex-row flex-nowrap justify-center max-lg:flex-col max-lg:justify-start max-lg:items-start items-center gap-10 w-full">
        {services.map((service, idx) => {
          const expanded = expandedIdx === idx;
          return (
            <div
              key={idx}
              className={`relative cursor-pointer rounded-3xl overflow-hidden flex flex-col justify-end shadow-lg transition-all duration-300 ${
                expanded ? "w-[25%] max-lg:w-full h-[520px] z-10" : "w-[15.5%] max-lg:w-full h-[520px]"
              }`}
              onClick={() => setExpandedIdx(expanded ? null : idx)}
            >
              <img
                src={typeof service.image === "string" ? service.image : service.image.src}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <h3 className="font-monument-ultrabold text-white text-2xl mb-2 truncate">
                  {service.title}
                </h3>
                <p
                  className={`font-poppins text-white text-base text-wrap max-h-24 transition-all duration-300 ${
                    expanded ? "whitespace-normal" : "truncate whitespace-normal"
                  }`}
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