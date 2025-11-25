"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Quote from "@/asset/svg/quote.svg";
import JsonLd from "@/components/SEO/JsonLd";

// --- CONFIG ---
const TESTIMONIALS = [
  {
    id: 1,
    name: "Sunday",
    role: "Shillings Technology",
    quote:
      "Choosing SwiftScale as our recruitment partner was a decision we don't regret. Their team exhibited professionalism, expertise, and a genuine passion for connecting...",
    avatar: "/asset/image/sunday.webp",
  },
  {
    id: 2,
    name: "Mabel",
    role: "Joy-Filled Schools",
    quote:
      "We partnered with SwiftScale for our recent hiring needs, and the results were outstanding. Their team demonstrated a deep understanding of our industry and ...",
    avatar: "/asset/image/mabel.webp",
  },
  {
    id: 3,
    name: "Chioma",
    role: "Corkspro",
    quote:
      "Swift Scale exceeded our expectations in the recruitment process. Their proactive approach, attention to detail, and ability to source high-caliber candidates...",
    avatar: "/asset/image/chioma.webp",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(1);

  const handlePrev = useCallback(() => {
    setCurrent((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const reviewLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: TESTIMONIALS.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Review",
          reviewBody: t.quote,
          author: { "@type": "Person", name: t.name },
          itemReviewed: { "@type": "Organization", name: "SwiftScale" },
        },
      })),
    }),
    []
  );

  return (
    <section
      className="relative w-full bg-[#6A01E1] flex flex-col items-center justify-center py-10 sm:py-8 lg:py-20 px-4 overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials carousel"
      aria-live="off"
    >
      <JsonLd id="ld-reviews" data={reviewLd} />

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`Showing testimonial ${current + 1} of ${TESTIMONIALS.length}`}
      </p>

      <h2
        className="
          text-white font-monument-ultrabold
          text-xl [@media(max-width:360px)]:text-lg
          sm:text-xl md:text-3xl lg:text-4xl
          mb-6 sm:mb-8 lg:mb-12 xl:mb-20
          text-center tracking-wide px-2
        "
      >
        What They Say About Us
      </h2>

      {/* Left nav */}
<button
  onClick={handlePrev}
  aria-label="Previous testimonial"
  className="
    hidden lg:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30
    cursor-pointer hover:scale-110 hover:opacity-80 transition-all duration-200

    appearance-none bg-transparent border-none p-0 m-0 shadow-none
    hover:bg-transparent active:bg-transparent
    focus:outline-none active:outline-none
  "
  type="button"
>
  <ChevronLeft className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
</button>

{/* Right nav */}
<button
  onClick={handleNext}
  aria-label="Next testimonial"
  className="
    hidden lg:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30
    cursor-pointer hover:scale-110 hover:opacity-80 transition-all duration-200

    appearance-none bg-transparent border-none p-0 m-0 shadow-none
    hover:bg-transparent active:bg-transparent
    focus:outline-none active:outline-none
  "
  type="button"
>
  <ChevronRight className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
</button>

      {/* WRAPPER */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 w-full max-w-7xl mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-10 w-full">
          {TESTIMONIALS.map((item, index) => {
            const isActive = index === current;

            return (
              <article
                key={item.id}
                onClick={() => setCurrent(index)}
                aria-current={isActive ? "true" : "false"}
                className={`
                  flex flex-col items-center
                  w-[85%] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[340px]
                  transition-all duration-1000 ease-out
                  ${isActive ? "scale-105 z-10 opacity-100" : "scale-90 opacity-50"}
                  cursor-pointer
                `}
              >
                <div
                  className={`
                    rounded-2xl aspect-video flex flex-row px-6 xl:px-8 py-4 shadow-lg transition-all duration-500
                    ${isActive ? "bg-white text-gray-700 shadow-2xl" : "bg-white/30 text-white"}
                  `}
                >
                  <div className="flex flex-col justify-center items-center flex-shrink-0">
                    <Quote className="w-5 h-5 xl:w-6 xl:h-6 opacity-80" aria-hidden="true" />
                  </div>

                  <blockquote className="text-sm xl:text-base text-start px-4 xl:px-5 flex items-center leading-relaxed">
                    {item.quote}
                  </blockquote>
                </div>

                <div className="flex flex-col items-center mt-5 xl:mt-6">
                  <span className="w-1 h-1 rounded-full bg-white/60 mb-2" />
                  <span className="w-3 h-3 rounded-full bg-white/80 mb-2" />

                  <div
                    className={`
                      rounded-full overflow-hidden mb-2 border-4 transition-all duration-500
                      ${isActive ? "w-16 h-16 border-white" : "w-14 h-14 border-white/30"}
                    `}
                  >
                    <Image
                      src={item.avatar}
                      alt={`${item.name} - ${item.role}`}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>

                  <div className="font-monument-ultrabold text-white text-lg xl:text-xl mb-1">
                    {item.name}
                  </div>
                  <div className="text-white text-sm xl:text-base">{item.role}</div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Tablet / Mobile */}
        <div className="flex lg:hidden items-center justify-center w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
          {TESTIMONIALS.map((item, index) => {
            if (index !== current) return null;

            return (
              <article
                key={item.id}
                className="flex flex-col items-center w-full transition-all duration-500 scale-105 z-10"
                aria-current="true"
              >
                <div className="rounded-2xl flex flex-row px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-2xl bg-white text-black w-full min-h-[160px] sm:min-h-[180px]">
                  <div className="flex flex-col justify-center items-center flex-shrink-0">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 opacity-80" aria-hidden="true" />
                  </div>
                  <blockquote className="text-xs sm:text-sm md:text-base text-start px-3 sm:px-4 md:px-5 flex items-center leading-relaxed">
                    {item.quote}
                  </blockquote>
                </div>

                <div className="flex flex-col items-center mt-4 sm:mt-5 md:mt-6">
                  <span className="w-1 h-1 rounded-full bg-white/60 mb-2" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/80 mb-2" />

                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white mb-2">
                    <Image
                      src={item.avatar}
                      alt={`${item.name} - ${item.role}`}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>

                  <div className="font-monument-ultrabold text-white text-base sm:text-lg md:text-xl mb-1">
                    {item.name}
                  </div>
                  <div className="text-white text-xs sm:text-sm md:text-base font-poppins">{item.role}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <nav
        className="flex gap-2 sm:gap-3 mt-6 sm:mt-7 lg:mt-8"
        role="tablist"
        aria-label="Testimonials pagination"
      >
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 cursor-pointer hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white ${
              idx === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
            role="tab"
            aria-selected={current === idx}
            type="button"
          />
        ))}
      </nav>
    </section>
  );
}
