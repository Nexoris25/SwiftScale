"use client";
import React, { useMemo, useState } from "react";
import CaretRightWhite from '@/asset/svg/caret-right-white.svg';
import JsonLd from "@/components/SEO/JsonLd";

const faqs = [
    {
        question: "What types of businesses do you work with?",
        answer: "We work with startups, SMEs, and large enterprises across various industries, tailoring our services to meet unique business needs.",
    },
    {
        question: "What services do you provide under development?",
        answer: "Our development services include web and mobile app development, software engineering, and ongoing technical support.",
    },
    {
        question: "How do your design services help my business?",
        answer: "Our design team creates user-centric interfaces and branding that enhance customer experience and drive engagement.",
    },
    {
        question: "What can I expect from a consultation session?",
        answer: "You’ll receive expert advice, actionable strategies, and a clear roadmap to address your business challenges and goals.",
    },
    {
        question: "How do I get started with your services?",
        answer: "Simply reach out via our contact form or Get in Touch button, and our team will guide you through the onboarding process.",
    },
];

export default function FAQSection() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const faqJsonLd = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
    }), []);

    return (
        <section className="w-full py-20 px-2 flex flex-col items-center" role="region" aria-labelledby="faq-heading">
            <JsonLd id="ld-faq" data={faqJsonLd} />
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side */}
                <div>
                    <h2 id="faq-heading" className="font-monument-ultrabold text-4xl mb-8 max-lg:w-full max-lg:text-center leading-tight text-black dark:text-white">
                        HAVE ANY QUESTIONS?<br />FIND ANSWER HERE.
                    </h2>
                    <p className="font-poppins text-xl mb-8 max-lg:w-full max-lg:text-center text-black dark:text-white">
                        Got a burning question? You're not alone. Dive into our FAQ where we've gathered answers to the most common (and not-so-common) questions to help guide you every step of the way.
                    </p>
                    <button className="bg-[#6A01E1] text-white max-lg:w-full font-poppins px-8 py-2 rounded-full text-lg hover:bg-purple-700">
                        Get in Touch
                    </button>
                </div>
                {/* Right Side */}
                <div className="flex flex-col gap-6 justify-center" role="list" aria-label="Frequently asked questions">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="pb-4 border-b border-solid border-t-0 border-l-0 border-r-0 border-black dark:border-white" role="listitem">
                            <button
                                className="w-full flex bg-transparent cursor-pointer border-none items-center justify-between text-left"
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                aria-expanded={openIdx === idx}
                                aria-controls={`faq-panel-${idx}`}
                            >
                                <span className="font-monument-regular text-lg text-black dark:text-white">{faq.question}</span>
                                <span className="text-2xl font-bold text-black dark:text-white">
                                    {openIdx === idx ? <CaretRightWhite className="transform rotate-90 w-4 h-4" /> : <CaretRightWhite className="w-4 h-4" />}
                                </span>
                            </button>
                            {openIdx === idx && (
                                <div id={`faq-panel-${idx}`} role="region" aria-label={`Answer to: ${faq.question}`} className="mt-4 font-poppins text-base bg-black/5 dark:bg-black/30 p-10 text-black dark:text-white">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}