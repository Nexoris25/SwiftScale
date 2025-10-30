import React from "react";
import JsonLd from "@/components/SEO/JsonLd";
import AboutHero from '@/asset/image/about-hero.jpg';

export default function ContactHero() {
    return (
        <section className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden" role="region" aria-labelledby="contact-hero-heading">
            <JsonLd
                id="ld-contact-page"
                data={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    name: "Contact SwiftScale",
                    about: { "@type": "Organization", name: "SwiftScale" }
                }}
            />
            {/* Background Image */}
            <img
                src={typeof AboutHero === "string" ? AboutHero : AboutHero.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col items-center justify-center px-8 max-w-2xl m-auto text-center">
                <h1 id="contact-hero-heading" className="text-white font-monument-ultrabold text-4xl md:text-6xl mb-6 leading-tight">
                    Contact Us
                </h1>
                <p className="text-white font-poppins text-lg md:text-xl mb-8 max-w-lg">
                    Let’s talk about your next project.
                </p>
            </div>
        </section>
    );
}