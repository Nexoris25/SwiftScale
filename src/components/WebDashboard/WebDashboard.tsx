import React from 'react';
import JsonLd from "@/components/SEO/JsonLd";
import WebDashboardImage from '@/asset/image/web-dev-dashboard.png';

const WebDashboard: React.FC = () => {
    return (
        <section className="relative w-full min-h-[600px] flex gap-10 flex-col lg:flex-row items-center rounded-lg justify-center px-4 py-16">
            <JsonLd id="ld-web-dashboard" data={{ "@context": "https://schema.org", "@type": "WebPageElement", name: "Web Dashboard Showcase" }} />
            {/* Images */}
            <div className="w-full flex justify-center h-full items-center py-10">
                <img
                    src={typeof WebDashboardImage === 'string' ? WebDashboardImage : WebDashboardImage.src}
                    alt="Web Dashboard"
                    className="rounded-lg aspect-video w-full max-w-[900px] object-cover"
                />
            </div>
            {/* Content */}
            <div className="p-10 flex flex-col h-full items-start justify-start gap-4 w-full">
                <h1 className="text-black dark:text-white w-full flex text-4xl md:text-5xl mb-4 text-start font-monument-ultrabold">
                    Web Development
                </h1>
                <p className="text-black flex dark:text-white/80 text-start mb-8">
                    Building mobile apps, web apps, and websites that are functional, beautiful,
                    <br />
                    and user-friendly.
                </p>
                <div className=" bg-primary flex-shrink max-w-[300px] text-white px-5 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center">Get in Touch</div>
            </div>
        </section>
    );
};

export default WebDashboard;