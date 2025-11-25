import React from "react";
// REMOVED: import JsonLd from "@/components/SEO/JsonLd"; to fix path resolution error
// REMOVED: import Image from "next/image"; to fix module resolution error

// migrated
const WebDashboardImage = "/asset/image/web-dev-dashboard.webp";

// Helper component to render JSON-LD script directly in the component
// This replaces the external JsonLd component and avoids the import error.
interface JsonLdScriptProps {
    data: any;
}
const JsonLdScript: React.FC<JsonLdScriptProps> = ({ data }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
);

const WebDashboard: React.FC = () => {
    // Structured Data payload
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPageElement",
        name: "Web Dashboard Showcase",
    };

    return (
        <section
            className="
                relative w-full flex flex-col lg:flex-row gap-12
                items-center justify-between rounded-lg
                px-6 py-12 max-w-7xl mx-auto
            "
            role="region"
            aria-labelledby="web-dev-heading"
        >
            {/* SEO Structured Data: Embedded directly to avoid import error */}
            <JsonLdScript data={structuredData} />

            {/* Image (FIXED: Using standard <img> tag and wrapping div to maintain aspect ratio) */}
            <div className="w-full flex justify-center items-center">
                <div className="relative w-full max-w-[680px] aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <img
                        src={WebDashboardImage}
                        alt="A clean, modern web application dashboard interface demonstrating functional and user-friendly design."
                        // Added optimization hints for standard img tag:
                        loading="lazy"
                        width={680}
                        height={382} // Calculated for aspect-video (16:9)
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col w-full lg:w-1/2 gap-6 text-start max-lg:text-center">
                <h2
                    id="web-dev-heading"
                    className="
                        text-black dark:text-white
                        text-xl md:text-3xl lg:text-4xl
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
                    aria-label="Get in touch about web development services"
                    className="
                        flex justify-center items-center gap-1 border-0 cursor-pointer
                        bg-primary text-white rounded-full
                        px-6 py-3 transition-colors duration-300
                        hover:bg-primary/90 focus:ring-4 focus:ring-primary/50
                        
                        w-44
                        max-sm:w-full max-sm:py-2 max-sm:mx-auto
                        lg:mx-0
                    "
                >
                    <span className="my-auto flex">Get in Touch</span>
                </button>
            </div>
        </section>
    );
};

export default WebDashboard;