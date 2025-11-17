"use client";
import React, { useMemo, useState } from "react";
import CaretLeftWhite from '@/asset/svg/caret-left-white.svg';
import CaretRightWhite from '@/asset/svg/caret-right-white.svg';
import Sunday from '@/asset/image/sunday.jpg';
import Mabel from '@/asset/image/mabel.jpg';
import Chioma from '@/asset/image/chioma.jpg';
import Quote from '@/asset/svg/quote.svg';
import JsonLd from "@/components/SEO/JsonLd";

const testimonials = [
    {
        quote:
            "Choosing SwiftScale as our recruitment partner was a decision we don’t regret. Their team exhibited professionalism, expertise, and a genuine passion for connecting....",
        name: "Sunday",
        company: "Shillings Technology",
        avatar: Sunday,
    },
    {
        quote:
            "We partnered with SwiftScale for our recent hiring needs, and the results were outstanding.Their team demonstrated a deep understanding of our industry and ...",
        name: "Mabel",
        company: "Joy-Filled Schools",
        avatar: Mabel,
    },
    {
        quote:
            "Swift Scale exceeded our expectations in the recruitment process. Their proactive approach, attention to detail, and ability to source high-caliber candidates....",
        name: "chioma",
        company: "Corkspro",
        avatar: Chioma,
    },
];

export default function TestimonialsCarousel() {
    const [active, setActive] = useState(1);
    const reviewLd = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: testimonials.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "Review",
                reviewBody: t.quote,
                author: { "@type": "Person", name: t.name },
                itemReviewed: { "@type": "Organization", name: "SwiftScale" }
            }
        }))
    }), []);

    return (
        <div className="w-full min-h-[600px] bg-[#6A01E1] flex flex-col items-center justify-center py-20 px-2" role="region" aria-roledescription="carousel" aria-label="Testimonials carousel" aria-live="off">
            <JsonLd id="ld-reviews" data={reviewLd} />
            <p className="sr-only" aria-live="polite" aria-atomic="true">{`Showing testimonial ${active + 1} of ${testimonials.length}`}</p>
            <h2 className="text-white font-monument-ultrabold text-4xl md:text-5xl mb-12 text-center tracking-wide">
                What They Say About Us
            </h2>
            <div className="flex items-center justify-center gap-10 w-full mx-auto p-4">
                {/* Left Arrow */}
                <button
                    className="bg-transparent border-none mr-2 max-sm:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                    onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : prev))}
                    aria-label="Previous testimonial"
                >
                    <CaretLeftWhite />
                </button>
                {/* Testimonials */}
                <div className="flex w-full justify-center">
                    <div className="flex w-full justify-center">
                        {/* Desktop: Show all, Mobile/Tablet: Show one */}
                        <div className="hidden lg:flex items-center gap-10">
                            {testimonials.map((t, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col items-center w-[320px] transition-all duration-300 ${idx === active
                                        ? "scale-105 z-10"
                                        : "scale-95 opacity-60"
                                        }`}
                                >
                                    <div
                                        className={`rounded-2xl aspect-video flex flex-row px-8 py-4 shadow-lg ${idx === active
                                            ? "bg-white text-black"
                                            : "bg-white/30 text-white"
                                            }`}
                                    >
                                        <div className="flex flex-col justify-center items-center"><Quote className="my-auto" /></div>
                                        <div className="text-sm text-start p-5 h-full"><div className=" py-auto my-auto">{t.quote}</div></div>
                                    </div>
                                    <div className="flex flex-col items-center mt-6">
                                        <span className="w-1 h-1 rounded-full bg-white/60 mb-2"></span>
                                        <span className="w-3 h-3 rounded-full bg-white/80 mb-2"></span>
                                        <img
                                            src={typeof t.avatar === "string" ? t.avatar : t.avatar.src}
                                            alt={t.name}
                                            className="w-16 h-16 rounded-full object-cover border-4 border-white mb-2"
                                        />
                                        <div className="font-monument-ultrabold text-white text-xl mb-1">{t.name}</div>
                                        <div className="text-white text-base font-poppins">{t.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex lg:hidden items-center justify-center w-full">
                            {/* Only show the active testimonial on max-lg */}
                            {testimonials.map((t, idx) =>
                                idx === active ? (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-center w-full max-w-[320px] transition-all duration-300 scale-105 z-10 mx-auto"
                                    >
                                        <div className="rounded-2xl aspect-video flex flex-row px-8 max-md:px-4 max-md:py-2 py-4 shadow-lg max-md:max-w-[300px] bg-white text-black">
                                            <div className="flex flex-col justify-center items-center"><Quote className="my-auto max-md:max-w-[25px]" /></div>
                                            <div className="text-sm text-start p-5 h-full"><div className="py-auto my-auto">{t.quote}</div></div>
                                        </div>
                                        <div className="flex flex-col items-center mt-6">
                                            <span className="w-1 h-1 rounded-full bg-white/60 mb-2"></span>
                                            <span className="w-3 h-3 rounded-full bg-white/80 mb-2"></span>
                                            <img
                                                src={typeof t.avatar === "string" ? t.avatar : t.avatar.src}
                                                alt={t.name}
                                                className="w-16 h-16 rounded-full object-cover border-4 border-white mb-2"
                                            />
                                            <div className="font-monument-ultrabold text-white text-xl mb-1">{t.name}</div>
                                            <div className="text-white text-base font-poppins">{t.company}</div>
                                        </div>
                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
                {/* Right Arrow */}
                <button
                    className="bg-transparent border-none ml-2 max-sm:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                    onClick={() =>
                        setActive((prev) => (prev < testimonials.length - 1 ? prev + 1 : prev))
                    }
                    aria-label="Next testimonial"
                >
                    <CaretRightWhite />
                </button>
            </div>
            {/* Dots */}
            <div className="flex gap-3 mt-8" role="tablist" aria-label="Testimonials pagination">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === active ? "bg-white" : "bg-white/40"} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white`}
                        onClick={() => setActive(idx)}
                        aria-label={`Go to testimonial ${idx + 1}`}
                        role="tab"
                        aria-selected={active === idx}
                    />
                ))}
            </div>
        </div>
    );
}