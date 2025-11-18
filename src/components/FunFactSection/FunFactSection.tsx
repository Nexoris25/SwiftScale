import React from "react";
import JsonLd from "@/components/SEO/JsonLd";

export default function FunFactSection() {
    return (
        <section className="w-full bg-[#fafafa] dark:bg-[#363636] m-auto rounded-xl py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-10 my-20" role="region" aria-labelledby="fun-fact-heading">
            <JsonLd id="ld-fun-fact" data={{ "@context": "https://schema.org", "@type": "WebPageElement", name: "Fun Fact" }} />
            {/* Left Side */}
            <div className="lg:flex-1 flex max-lg:w-full max-lg:flex-col">
                <h2 id="fun-fact-heading" className="font-monument-ultrabold text-3xl md:text-4xl text-black max-lg:text-center dark:text-white mb-6 px-10">Fun Fact</h2>
                <p className="font-poppins text-lg px-10 max-lg:w-full max-lg:text-center text-black dark:text-white">
                    We blend strategy, design, and engineering to deliver outcomes—not just outputs. Here are a few numbers were proud of.
                </p>
            </div>
            {/* Right Side */}
            <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-8 max-lg:grid-cols-1 max-lg:gap-y-12" role="list" aria-label="Company statistics">
                <div className="flex flex-row max-lg:flex-wrap max-lg:justify-center max-lg:align-middle justify-start items-center max-lg:mx-auto gap-4">
                    <div className="flex items-center">
                        <span className="text-primary font-monument-ultrabold text-5xl md:text-6xl">10</span>
                    </div>
                    <div className="flex flex-col justify-end items-start" role="listitem">
                        <span className="text-primary font-monument-ultrabold text-2xl">+</span>
                        <span className="font-poppins text-black max-lg:hidden dark:text-white text-lg">Years of Experience</span>
                    </div>
                    <div className="w-full text-center flex flex-row font-poppins text-black lg:hidden dark:text-white text-lg"> <div className="flex mx-auto">Years of Experience</div></div>
                </div>
                <div className="flex flex-row max-lg:flex-wrap max-lg:justify-center max-lg:align-middle justify-start items-center max-lg:mx-auto gap-4">
                    <div className="flex items-center">
                        <span className="text-primary font-monument-ultrabold text-5xl md:text-6xl">50</span>
                    </div>
                    <div className="flex flex-col justify-end items-start" role="listitem">
                        <span className="text-primary font-monument-ultrabold text-2xl">+</span>
                        <span className="font-poppins text-black max-lg:hidden dark:text-white text-lg">Client</span>
                    </div>
                    <div className="w-full text-center flex flex-row font-poppins text-black lg:hidden dark:text-white text-lg"> <div className="flex mx-auto">Client</div></div>
                </div>
                <div className="flex flex-row max-lg:flex-wrap max-lg:justify-center max-lg:align-middle justify-start items-center max-lg:mx-auto gap-4">
                    <div className="flex items-center">
                        <span className="text-primary font-monument-ultrabold text-5xl md:text-6xl">15</span>
                    </div>
                    <div className="flex flex-col justify-end items-start" role="listitem">
                        <span className="text-primary font-monument-ultrabold text-2xl">+</span>
                        <span className="font-poppins text-black max-lg:hidden dark:text-white text-lg">Team members</span>
                    </div>
                    <div className="w-full text-center flex flex-row font-poppins text-black lg:hidden dark:text-white text-lg"> <div className="flex mx-auto">Team members</div></div>
                </div>
                <div className="flex flex-row max-lg:flex-wrap max-lg:justify-center max-lg:align-middle justify-start items-center max-lg:mx-auto gap-4">
                    <div className="flex items-center">
                        <span className="text-primary font-monument-ultrabold text-5xl md:text-6xl">100</span>
                    </div>
                    <div className="flex flex-col justify-end items-start" role="listitem">
                        <span className="text-primary font-monument-ultrabold text-2xl">+</span>
                        <span className="font-poppins text-black max-lg:hidden dark:text-white text-lg">Completed Products</span>
                    </div>
                    <div className="w-full text-center flex flex-row font-poppins text-black lg:hidden dark:text-white text-lg"> <div className="flex mx-auto">Completed Products</div></div>
                </div>
            </div>
        </section>
    );
}