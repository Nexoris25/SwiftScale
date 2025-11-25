"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image"; 
import Link from "next/link"; 

// Public folder references - Use clearer variable names
const ImageHRConsulting = "/asset/image/image1.webp"; 
const ImageSoftwareDev = "/asset/image/image2.webp"; 
const ImageDesign = "/asset/image/image3.webp";       

// Define the tabs/services data
const tabs: string[] = [
    "HR Consulting",
    "Software Development",
    "Design",
    "Legal Services",
    "SEO Consulting",
];

const customSlugs: Record<string, string> = {
    "HR Consulting": "hr-consultation",
    "SEO Consulting": "seo-consultations",
    
};

// Mapping tabs to their respective image sets
const images: Record<string, string[]> = {
    "HR Consulting": [ImageHRConsulting, ImageSoftwareDev, ImageDesign],
    "Software Development": [ImageSoftwareDev, ImageDesign, ImageHRConsulting],
    "Design": [ImageDesign, ImageHRConsulting, ImageSoftwareDev],
    "Legal Services": [ImageHRConsulting, ImageSoftwareDev, ImageDesign],
    "SEO Consulting": [ImageSoftwareDev, ImageDesign, ImageHRConsulting],
};

const getServiceSlug = (name: string): string => {
  
    if (customSlugs[name]) {
        return customSlugs[name];
    }
    
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
};

// Helper component for SEO Structured Data
interface JsonLdScriptProps {
    data: any;
}
const JsonLdScript: React.FC<JsonLdScriptProps> = ({ data }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
);

interface ImageBlockProps {
    src: string;
    alt: string;
    priority?: boolean;
    heightClass: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ 
    src, 
    alt, 
    priority = false, 
    heightClass 
}) => (
    <div className={`relative w-full rounded-xl sm:rounded-2xl overflow-hidden ${heightClass}`}>
        <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
    </div>
);


export default function PortfolioSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const imgs = images[activeTab];

    const itemListLd = useMemo(
        () => ({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `SwiftScale Portfolio Showcase: ${activeTab}`,
            description: `A collection of featured projects in our ${activeTab} category.`,
        }),
        [activeTab]
    );

    const handleTabClick = (tab: string) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (
        <section
            className="
                w-full py-20 max-lg:py-10 px-2 
                bg-custom-white dark:bg-custom-black 
                flex flex-col items-center
            "
            role="region"
            aria-labelledby="portfolio-heading"
        >
            {/* SEO Structured Data */}
            <JsonLdScript data={itemListLd} />

            <h2
                id="portfolio-heading"
                className="
                    text-black dark:text-white 
                    text-xl md:text-3xl lg:text-4xl mb-8 text-center tracking-wide
                "
            >
                Our Portfolio
            </h2>

            {/* TABS (Navigation) */}
            <div
                className="
                    flex flex-row flex-wrap justify-center 
                    gap-4 mb-10 
                    max-sm:overflow-x-auto max-sm:pb-2
                    scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600
                "
                role="tablist"
                aria-label="Portfolio categories"
            >
                {tabs.map((tab) => {
                  
                    const tabSlug = getServiceSlug(tab);
                    return (
                        <Link
                            key={tab}
                          
                            href={`/${tabSlug}`} 
                            onClick={() => handleTabClick(tab)}
                            id={`tab-${tabSlug}`}
                            role="tab"
                            aria-selected={activeTab === tab}
                            aria-controls={`panel-${tabSlug}`}
                            title={`View portfolio for ${tab}`}
                            className={`
                                font-poppins text-lg max-lg:text-sm max-sm:text-xs
                                px-8 max-lg:px-4 max-sm:px-3
                                py-2 max-lg:py-1 whitespace-nowrap rounded-full 
                                border-[1px] border-black dark:border-white
                                cursor-pointer transition-all duration-300 ease-out
                                no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6A01E1] focus-visible:ring-offset-2
                                ${
                                    activeTab === tab
                                        ? "bg-[#6A01E1] text-white"
                                        : "bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                                }
                            `}
                        >
                            {tab}
                        </Link>
                    );
                })}
            </div>

            {/* GALLERY */}
            <div
                id={`panel-${getServiceSlug(activeTab)}`}
                role="tabpanel"
                aria-labelledby={`tab-${getServiceSlug(activeTab)}`}
                className="w-full max-w-7xl px-2 transition-opacity duration-500"
            >
                <div
                    className="grid gap-4"
                    style={{
                        gridTemplateColumns: "45% 55%",
                    }}
                >
                    <div
                        className="flex flex-col gap-4 rounded-xl overflow-hidden"
                    >
                        <div className="flex flex-col h-[40vh] sm:h-[48vh] lg:h-[70vh]">
                            {/* Top-left */}
                            <ImageBlock 
                                src={imgs[0]} 
                                alt={`${activeTab} project showcase image 1`}
                                priority={true} 
                                heightClass="h-1/2"
                            />

                            {/* Bottom-left*/}
                            <ImageBlock 
                                src={imgs[1]} 
                                alt={`${activeTab} featured project image 2`}
                                heightClass="h-1/2 mt-4 sm:mt-6"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Lazy Loaded) */}
                    <div className="flex items-stretch">
                        <ImageBlock 
                            src={imgs[2]} 
                            alt={`${activeTab} highlight project image 3`}
                            heightClass="h-[40vh] sm:h-[48vh] lg:h-[70vh]" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}