import React from "react";
import JsonLd from "@/components/SEO/JsonLd";

export default function FunFactSection() {
    return (
        <section
            className="w-full bg-[#fafafa] dark:bg-[#363636] m-auto rounded-xl py-10 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 my-10"
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
            <div className="flex flex-col lg:flex-col max-md:text-center w-full md:w-auto">
                <h2
                    id="fun-fact-heading"
                    className="text-xl md:text-3xl lg:text-4xl text-black dark:text-white mb-3 sm:mb-4"
                >
                    Fun Fact
                </h2>

                <p className="font-poppins text-sm sm:text-base md:text-lg text-black dark:text-white max-w-sm">
                    We blend strategy, design, and engineering to deliver outcomes, not just outputs. Here are a few numbers we are proud of.
                </p>
            </div>

            {/* Right */}
            <div
                className="flex-1 grid grid-cols-2 max-sm:grid-cols-1 gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-5 w-full"
                role="list"
                aria-label="Company statistics"
            >
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
                        <span className="text-primary dark:text-white text-xl md:text-3xl lg:text-4xl font-semibold">
                            {value}
                        </span>

                        {/* Plus & Desktop Label */}
                        <div className="flex flex-col items-start max-lg:items-center leading-none">
                            <span className="text-primary dark:text-white text-lg sm:text-xl md:text-2xl -mt-1">
                                +
                            </span>
                            <span className="font-poppins text-black dark:text-white text-base max-lg:hidden">
                                {label}
                            </span>
                        </div>

                        {/* Mobile Label */}
                        <div className="w-full text-center lg:hidden text-black dark:text-white text-sm mt-1">
                            {label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
