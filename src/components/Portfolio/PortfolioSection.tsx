"use client";
import React, { useMemo, useState } from "react";
import Image1 from '@/asset/image/image1.png';
import Image2 from '@/asset/image/image2.png';
import Image3 from '@/asset/image/image3.png';
import JsonLd from "@/components/SEO/JsonLd";

const tabs = [
    "HR Consulting",
    "Software Development",
    "Design",
    "Legal Services",
    "SEO Consulting",
];

const images: any = {
    "HR Consulting": [
        Image1,
        Image2,
        Image3,
    ],
    "Software Development": [
        Image1,
        Image2,
        Image3,
    ],
    "Design": [
        Image1,
        Image2,
        Image3,
    ],
    "Legal Services": [
        Image1,
        Image2,
        Image3,
    ],
    "Seo Consulting": [
        Image1,
        Image2,
        Image3,
    ],
};

export default function PortfolioSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const imgs: any = images[activeTab];
    const itemListLd = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Portfolio - ${activeTab}`,
        itemListElement: imgs.map((img: any, idx: number) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
                "@type": "CreativeWork",
                name: `${activeTab} Project ${idx + 1}`
            }
        }))
    }), [activeTab, imgs]);

    return (
        <section className="w-full max-lg:py-10  py-20 px-2 bg-custom-white dark:bg-custom-black  flex flex-col items-center" role="region" aria-labelledby="portfolio-heading">
            <JsonLd id="ld-portfolio" data={itemListLd} />
            <h2 id="portfolio-heading" className="text-black dark:text-white font-monument-ultrabold text-4xl mb-8 text-center tracking-wide">
                Our Portfolio
            </h2>
            <div className="flex flex-row flex-wrap max-sm:overflow-auto justify-center gap-4 mb-10" role="tablist" aria-label="Portfolio categories">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`font-poppins text-lg max-lg:text-sm max-sm:rounded-full max-sm:truncate max-sm:min-w-[70px] max-sm:text-xs px-8 max-lg:px-2 cursor-pointer py-2 max-lg:py-1 text-nowrap rounded-full border-[1px] dark:border-white border-black  transition-all duration-200 ${activeTab === tab
                            ? "bg-[#6A01E1] text-white"
                            : "bg-transparent text-black dark:text-white"
                            }`}
                        role="tab"
                        aria-selected={activeTab === tab}
                        aria-controls={`panel-${tab}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={activeTab}
                className="grid grid-cols-2 gap-6 w-full"
            >
                <div className="flex flex-col gap-6">
                    <img
                        src={imgs[0] === "string" ? Image1.src : imgs[0].src}
                        alt={`${activeTab} portfolio image 1`}
                        className="rounded-2xl object-cover w-full 
                 h-40 sm:h-48 md:h-56 lg:h-72"
                    />

                    <img
                        src={imgs[2] === "string" ? Image2.src : imgs[2].src}
                        alt={`${activeTab} portfolio image 2`}
                        className="rounded-2xl object-cover w-full 
                 h-40 sm:h-48 md:h-56 lg:h-72"
                    />
                </div>

                <div className="flex flex-col gap-6 h-full">
                    <img
                        src={imgs[1] === "string" ? Image1.src : imgs[1].src}
                        alt={`${activeTab} portfolio image 3`}
                        className="rounded-2xl object-cover w-full 
                     h-full"
                    />
                </div>
            </div>

        </section>
    );
}