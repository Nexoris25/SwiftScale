import React from "react";
import JsonLd from "@/components/SEO/JsonLd";

export default function FunFactSection() {
    return (
        <section
            className="w-full bg-[#fafafa] dark:bg-[#363636] m-auto rounded-xl py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-12 my-10"
            role="region"
            aria-labelledby="fun-fact-heading"
        >
            <JsonLd
                id="ld-fun-fact"
                data={{
                    "@context": "https://schema.org",
                    "@type": "WebPageElement",
                    name: "Fun Fact",
                }}
            />

            {/* Left */}
            <div className="flex flex-col lg:flex-1 max-md:text-center">
                <h2
                    id="fun-fact-heading"
                    className="font-monument-ultrabold text-3xl md:text-4xl text-black dark:text-white mb-4"
                >
                    Fun Fact
                </h2>

                <p className="font-poppins text-base md:text-lg text-black dark:text-white max-w-md md:max-w-none">
                    We blend strategy, design, and engineering to deliver outcomes, not just outputs. Here are a few numbers we are proud of.
                </p>
            </div>

            {/* Right */}
            <div
                className="flex-1 grid grid-cols-2 gap-x-10 gap-y-10 max-lg:grid-cols-1"
                role="list"
                aria-label="Company statistics"
            >
                {/* Item */}
                {[
                    { value: "10", label: "Years of Experience" },
                    { value: "50", label: "Client" },
                    { value: "15", label: "Team members" },
                    { value: "100", label: "Completed Products" },
                ].map(({ value, label }) => (
                    <div
                        key={label}
                        className="flex flex-row items-center gap-3 max-lg:flex-wrap max-lg:justify-center"
                        role="listitem"
                    >
                        {/* Main Number */}
                        <span className="text-primary dark:text-white font-monument-ultrabold text-4xl sm:text-5xl md:text-6xl">
                            {value}
                        </span>

                        {/* Plus and Label */}
                        <div className="flex flex-col items-start max-lg:items-center leading-none">
                            <span className="text-primary dark:text-white font-monument-ultrabold text-xl sm:text-2xl -mt-1">
                                +
                            </span>

                            {/* Desktop label */}
                            <span className="font-poppins text-black dark:text-white text-base sm:text-lg max-lg:hidden">
                                {label}
                            </span>
                        </div>

                        {/* Mobile label */}
                        <div className="w-full text-center lg:hidden font-poppins text-black dark:text-white text-sm mt-1">
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
