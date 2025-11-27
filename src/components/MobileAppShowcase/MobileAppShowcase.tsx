"use client";

import React from "react";
import JsonLd from "@/components/SEO/JsonLd";
import Image from "next/image";
import Link from "next/link";
// migrated
const MobileAppShowcaseImage = "/asset/image/dev-service-phones.webp";

const MobileAppShowcase: React.FC = () => {
    return (
        <section
            className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-12 rounded-lg"
            role="region"
            aria-labelledby="mobile-dev-heading"
        >
            <JsonLd
                id="ld-mobile-app-showcase"
                data={{
                    "@context": "https://schema.org",
                    "@type": "WebPageElement",
                    name: "Mobile App Showcase",
                }}
            />

            {/* Text Content */}
            <div className="flex flex-col w-full lg:w-1/2 gap-6 text-start max-lg:text-center">
                <h2
                    id="mobile-dev-heading"
                    className="
                        text-black dark:text-white
                        text-xl md:text-3xl lg:text-4xl
                    "
                >
                    Mobile Development
                </h2>

                <p className="text-black dark:text-white/80 text-base leading-relaxed max-w-xl max-lg:mx-auto">
                    From MVPs to enterprise products, we create fast, reliable mobile experiences with clean
                    architectures, modern tooling, and an emphasis on performance, accessibility, and long term maintainability.
                </p>

                {/* Button */}
            <Link
            href="/contact#contact-form"
            className=" flex justify-center items-center gap-1 border-0 cursor-pointer
                        bg-primary text-white rounded-full
                        px-6 py-3 transition-colors duration-300
                        hover:bg-primary/90 focus:ring-4 focus:ring-primary/50
                        
                        w-44
                        max-sm:w-full max-sm:py-2 max-sm:mx-auto
                        lg:mx-0 no-underline
                    "
          >
            Get in Touch
          </Link>
            </div>

            {/* Responsive Image */}
            <div className="flex justify-center items-center w-full lg:w-1/2">
                <Image
                    src={MobileAppShowcaseImage}
                    alt="Phone mockups for mobile development"
                    width={1200}          // Standard intrinsic size
                    height={1200}         // Standard intrinsic size
                    className="
                        h-auto w-auto object-contain rounded-lg
                        max-h-[420px] max-w-[55%]
                        md:max-h-[360px] max-lg:max-w-[65%]
                        max-sm:max-h-[260px] max-sm:max-w-[75%]
                    "
                    sizes="
                        (max-width: 640px) 75vw,
                        (max-width: 1024px) 60vw,
                        35vw
                    "
                />
            </div>
        </section>
    );
};

export default MobileAppShowcase;
