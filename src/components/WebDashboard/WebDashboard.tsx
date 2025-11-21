import React from "react";
import JsonLd from "@/components/SEO/JsonLd";
import WebDashboardImage from "@/asset/image/web-dev-dashboard.png";

const WebDashboard: React.FC = () => {
    return (
        <section
            className="
                relative w-full flex flex-col lg:flex-row gap-12
                items-center justify-between rounded-lg
                px-6 py-12
            "
        >
            <JsonLd
                id="ld-web-dashboard"
                data={{
                    "@context": "https://schema.org",
                    "@type": "WebPageElement",
                    name: "Web Dashboard Showcase",
                }}
            />

            {/* Image */}
            <div className="w-full flex justify-center items-center">
                <img
                    src={
                        typeof WebDashboardImage === "string"
                            ? WebDashboardImage
                            : WebDashboardImage.src
                    }
                    alt="Web Dashboard"
                    className="
                        rounded-lg object-cover aspect-video
                        w-full max-w-[680px]
                    "
                />
            </div>

            {/* Content */}
            <div className="flex flex-col w-full lg:w-1/2 gap-6 text-start max-lg:text-center">
                <h2
                    className="
                        text-black dark:text-white font-monument-ultrabold
                        text-3xl md:text-4xl
                    "
                >
                    Web Development
                </h2>

                <p className="text-black dark:text-white/80 text-base md:text-lg leading-relaxed max-w-xl max-lg:mx-auto">
                    Building mobile apps, web apps, and websites that are
                    functional, beautiful, and user friendly.
                </p>

                {/* Get in Touch Button */}
                <button
                    type="button"
                    aria-label="Get in touch about web development"
                    className="
                        flex justify-center items-center gap-1 border-0 cursor-pointer
                        bg-primary text-white rounded-full
                        px-6 py-3 transition-colors duration-300
                        
                        w-44
                        max-sm:w-full max-sm:py-2 max-sm:mx-auto
                    "
                >
                    <span className="my-auto flex">Get in Touch</span>
                </button>
            </div>
        </section>
    );
};

export default WebDashboard;
