"use client";
import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";

import Sunday from "@/asset/image/sunday.jpg";
import Mabel from "@/asset/image/mabel.jpg";
import Chioma from "@/asset/image/chioma.jpg";
import Quote from "@/asset/svg/quote.svg";
import CaretLeftWhite from "@/asset/svg/caret-left-white.svg";
import CaretRightWhite from "@/asset/svg/caret-right-white.svg";
import JsonLd from "@/components/SEO/JsonLd";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Choosing SwiftScale as our recruitment partner was a decision we don't regret. Their team exhibited professionalism, expertise, and a genuine passion for connecting....",
    name: "Sunday",
    company: "Shillings Technology",
    avatar: Sunday,
  },
  {
    quote:
      "We partnered with SwiftScale for our recent hiring needs, and the results were outstanding. Their team demonstrated a deep understanding of our industry and ...",
    name: "Mabel",
    company: "Joy-Filled Schools",
    avatar: Mabel,
  },
  {
    quote:
      "Swift Scale exceeded our expectations in the recruitment process. Their proactive approach, attention to detail, and ability to source high-caliber candidates....",
    name: "Chioma",
    company: "Corkspro",
    avatar: Chioma,
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const reviewLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: testimonials.map((t, i) => ({
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
      className="w-full bg-[#6A01E1] flex flex-col items-center justify-center py-10 sm:py-8 lg:py-20 px-4"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials carousel"
      aria-live="off"
    >
      <JsonLd id="ld-reviews" data={reviewLd} />
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`Showing testimonial ${active + 1} of ${testimonials.length}`}
      </p>

      <h2
        className="
        text-white font-monument-ultrabold 
        text-xl [@media(max-width:360px)]:text-lg
        sm:text-3xl md:text-4xl lg:text-5xl 
        mb-6 sm:mb-8 lg:mb-12 xl:mb-20
        text-center tracking-wide px-2
      "
      >
        What They Say About Us
      </h2>

      <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 w-full max-w-7xl mx-auto">
        <button
          className="hidden lg:flex bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white hover:scale-110 hover:opacity-80 transition-all duration-200"
          onClick={() =>
            setActive((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
          }
          aria-label="Previous testimonial"
          style={{ background: "none", border: "none" }}
        >
          <CircleArrowLeft className="w-8 h-8 lg:w-10 lg:h-10" />
        </button>

        <div className="flex w-full justify-center">
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {testimonials.map((t, idx) => {
              const avatarSrc =
                typeof t.avatar === "string" ? t.avatar : t.avatar.src;
              const isActive = idx === active;

              return (
               <article
  key={idx}
  className={`
    flex flex-col items-center 
    w-[85%] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[340px]
    transition-all duration-1000 ease-out
    motion-safe:transition-transform motion-safe:duration-1000 motion-safe:ease-out
    ${isActive ? "scale-110 z-10 opacity-100" : "scale-95 opacity-50"}
  `}
  aria-current={isActive ? "true" : "false"}
>

                  <div
                    className={`rounded-2xl aspect-video flex flex-row px-6 xl:px-8 py-4 xl:py-5 shadow-lg transition-all duration-500 ${
                      isActive
                        ? "bg-white text-gray-700 shadow-2xl"
                        : "bg-white/30 text-white"
                    }`}
                  >
                    <div className="flex flex-col justify-center items-center flex-shrink-0">
                      <Quote
                        className="w-5 h-5 xl:w-6 xl:h-6 opacity-80"
                        aria-hidden="true"
                      />
                    </div>
                    <blockquote className="text-sm xl:text-base text-start px-4 xl:px-5 flex items-center leading-relaxed">
                      {t.quote}
                    </blockquote>
                  </div>

                  <div className="flex flex-col items-center mt-5 xl:mt-6">
                    <span className="w-1 h-1 rounded-full bg-white/60 mb-2"></span>
                    <span className="w-3 h-3 rounded-full bg-white/80 mb-2"></span>
                    <Image
                      src={avatarSrc}
                      alt={`${t.name} - ${t.company}`}
                      width={64}
                      height={64}
                      className="w-14 h-14 xl:w-16 xl:h-16 rounded-full object-cover border-4 border-white mb-2"
                    />
                    <div className="font-monument-ultrabold text-white text-lg xl:text-xl mb-1">
                      {t.name}
                    </div>
                    <div className="text-white text-sm xl:text-base font-poppins">
                      {t.company}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex lg:hidden items-center justify-center w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
            {testimonials.map((t, idx) => {
              if (idx !== active) return null;

              const avatarSrc =
                typeof t.avatar === "string" ? t.avatar : t.avatar.src;

              return (
                <article
                  key={idx}
                  className="flex flex-col items-center w-full transition-all duration-500 scale-105 z-10"
                  aria-current="true"
                >
                  <div className="rounded-2xl flex flex-row px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-2xl bg-white text-black w-full min-h-[160px] sm:min-h-[180px]">
                    <div className="flex flex-col justify-center items-center flex-shrink-0">
                      <Quote
                        className="w-4 h-4 sm:w-5 sm:h-5 opacity-80"
                        aria-hidden="true"
                      />
                    </div>
                    <blockquote className="text-xs sm:text-sm md:text-base text-start px-3 sm:px-4 md:px-5 flex items-center leading-relaxed">
                      {t.quote}
                    </blockquote>
                  </div>

                  <div className="flex flex-col items-center mt-4 sm:mt-5 md:mt-6">
                    <span className="w-1 h-1 rounded-full bg-white/60 mb-2"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/80 mb-2"></span>
                    <Image
                      src={avatarSrc}
                      alt={`${t.name} - ${t.company}`}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white mb-2"
                    />
                    <div className="font-monument-ultrabold text-white text-base sm:text-lg md:text-xl mb-1">
                      {t.name}
                    </div>
                    <div className="text-white text-xs sm:text-sm md:text-base font-poppins">
                      {t.company}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <button
          className="hidden lg:flex bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white hover:scale-110 hover:opacity-80 transition-all duration-200"
          onClick={() =>
            setActive((prev) =>
              prev < testimonials.length - 1 ? prev + 1 : 0
            )
          }
          aria-label="Next testimonial"
          style={{ background: "none", border: "none" }}
        >
          <CircleArrowRight className="w-8 h-8 lg:w-10 lg:h-10" />
        </button>
      </div>

      <nav
        className="flex gap-2 sm:gap-3 mt-6 sm:mt-7 lg:mt-8"
        role="tablist"
        aria-label="Testimonials pagination"
      >
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 cursor-pointer hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white ${
              idx === active ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setActive(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            role="tab"
            aria-selected={active === idx}
          />
        ))}
      </nav>
    </section>
  );
}
