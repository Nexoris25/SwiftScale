import React from 'react';
import JsonLd from "@/components/SEO/JsonLd";
import MobileAppShowcaseImage from '@/asset/image/dev-service-phones.png';

const MobileAppShowcase: React.FC = () => {


    return (
        <section className="relative w-full min-h-[600px] flex gap-10 flex-col lg:flex-row items-center rounded-lg justify-center px-4 py-16" role="region" aria-labelledby="mobile-dev-heading">
            <JsonLd id="ld-mobile-app-showcase" data={{ "@context": "https://schema.org", "@type": "WebPageElement", name: "Mobile App Showcase" }} />
            {/* Content */}
            <div className="py-10 flex flex-grow flex-col h-full items-start justify-start gap-4 w-full">
                <h1 id="mobile-dev-heading" className="text-black dark:text-white w-full flex text-4xl md:text-5xl mb-4 text-start font-monument-ultrabold">
                    Mobile Development
                </h1>
                <p className="text-black flex dark:text-white/80 text-start mb-8">
                    Lorem ipsum dolor sit amet consectetur. Vulputate cras orci interdum
                    <br /> nam mattis non. Suspendisse aliquet auctor urna tincidunt pulvinar.
                </p>
                <button type="button" className=" bg-primary flex-shrink max-w-[300px] text-white px-5 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center" aria-label="Get in touch about mobile development">Get in Touch</button>
            </div>
            {/* Images */}
            <div className="w-full flex flex-row justify-center h-full items-center py-10">
                <img
                    src={typeof MobileAppShowcaseImage === 'string' ? MobileAppShowcaseImage : MobileAppShowcaseImage.src}
                    alt="Phone mockups for mobile development"
                    className="rounded-lg mx-auto h-full max-h-[600px]"
                />
            </div>

        </section>
    );
};

export default MobileAppShowcase;