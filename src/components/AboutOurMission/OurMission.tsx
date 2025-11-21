"use client";
import React from "react";
import Image from "next/image";
import OurMissionImage from '@/asset/image/our-mission.jpg';
import { useRouter } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";

export default function OurMission() {
    const navigate = useRouter();
    return (
        <section className="w-full py-8 flex flex-col items-start justify-start gap-4 my-10" role="region" aria-labelledby="our-mission-heading">
            <JsonLd id="ld-our-mission" data={{ "@context": "https://schema.org", "@type": "WebPageElement", name: "Our Mission" }} />

            <h2
                id="our-mission-heading"
                className="font-monument-ultrabold max-lg:w-full max-lg:text-center text-5xl max-lg:text-2xl text-black dark:text-white mb-6"
            >
                Our Mission
            </h2>

            <div className="flex flex-col w-full lg:flex-row items-center justify-start gap-10">

                {/* Left Side */}
                <div className="flex flex-row flex-shrink items-start justify-start max-lg:justify-center w-full lg:w-[40%]">
                    <div className="w-full max-w-lg">
                        <Image
                            src={OurMissionImage}
                            alt="Our Mission"
                            className="rounded-md object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 40vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "380px",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col flex-grow gap-10 items-start justify-start max-lg:items-center max-lg:text-center lg:w-[60%]">
                    <div className="flex flex-col gap-4">
                        <p className="font-poppins text-lg font-light text-black dark:text-white">
                            To deliver results with speed, precision, and creativity. We believe in combining strategy with execution to ensure that every project, no matter the size, meets the highest standard.
                        </p>
                        <p className="font-poppins text-lg font-light text-black dark:text-white">
                            From startups to established organizations, Swiftscale is the trusted partner you need to move faster, go further, and achieve more.
                        </p>
                        <p className="font-poppins text-lg font-light text-black dark:text-white">
                            Swiftscale is focused on powering businesses with people, technology, and identity.
                        </p>
                    </div>

                    <div
                        onClick={() => navigate.push("/contact")}
                        className="font-poppins max-lg:w-full max-lg:mx-auto cursor-pointer my-auto border border-white bg-primary text-white px-10 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300"
                        role="button"
                        aria-label="Get in touch"
                    >
                        Get in Touch
                    </div>
                </div>

            </div>
        </section>
    );
}
