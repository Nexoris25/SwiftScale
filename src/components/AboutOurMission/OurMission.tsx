"use client";
import React from "react";
import Image from "next/image";
const OurMissionImage = "/asset/image/our-mission.webp";
import { useRouter } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";

export default function OurMission() {
    const navigate = useRouter();
    return (
        <section 
            className="w-full py-8 flex flex-col items-start justify-start gap-4 my-10 px-6 max-w-7xl mx-auto" 
            role="region" 
            aria-labelledby="our-mission-heading"
        >
            <JsonLd id="ld-our-mission" data={{ "@context": "https://schema.org", "@type": "WebPageElement", name: "Our Mission" }} />

            <h2
                id="our-mission-heading"
                className="font-monument-ultrabold max-lg:w-full max-lg:text-center text-3xl max-lg:text-2xl text-black dark:text-white mb-6"
            >
                Our Mission
            </h2>

            <div className="flex flex-col w-full lg:flex-row items-center justify-start gap-10">

                {/* Left Side (Image) */}
                <div className="flex flex-row flex-shrink items-start justify-start max-lg:justify-center w-full lg:w-[40%]">
                    <div className="w-full max-w-lg">
                        <Image
                            src={OurMissionImage}
                            width={1200}
                            height={800} 
                            alt="A team of professionals collaborating and setting clear objectives for mission execution."
                            className="rounded-md object-cover w-full h-auto max-h-[380px]"
                            priority
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>
                </div>

                {/* Right Side (Content) */}
                <div className="flex flex-col flex-grow gap-10 items-start justify-start max-lg:items-center max-lg:text-center lg:w-[60%]">
                    <div className="flex flex-col gap-4">
                        <p className="text-base font-light text-black dark:text-white">
                            To deliver results with speed, precision, and creativity. We believe in combining strategy with execution to ensure that every project, no matter the size, meets the highest standard.
                        </p>
                        <p className="text-base font-light text-black dark:text-white">
                            From startups to established organizations, Swiftscale is the trusted partner you need to move faster, go further, and achieve more.
                        </p>
                        <p className="text-base font-light text-black dark:text-white">
                            Swiftscale is focused on powering businesses with people, technology, and identity.
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        onClick={() => navigate.push("/contact")}
                        className="font-poppins max-lg:w-full max-lg:mx-auto cursor-pointer my-auto border border-white bg-[#6A01E1] text-white px-10 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#6A01E1]"
                        aria-label="Get in touch with us to discuss our mission"
                        type="button"
                    >
                        Get in Touch
                    </button>
                </div>

            </div>
        </section>
    );
}