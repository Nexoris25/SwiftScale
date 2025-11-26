"use client";
import React from "react";
// REMOVED: import JsonLd from "@/components/SEO/JsonLd"; to fix path resolution error
// REMOVED: import Image from "next/image"; to fix module resolution error

// Defined as a static string path to a file in the public directory
const ContactMapImage = "/asset/image/contact-map.webp";

// Helper component to render JSON-LD script directly in the component (replaces external JsonLd component)
interface JsonLdScriptProps {
    data: any;
}
const JsonLdScript: React.FC<JsonLdScriptProps> = ({ data }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
);


export default function ContactMap() {
    // Structured Data payload
    const structuredData = { 
        "@context": "https://schema.org", 
        "@type": "ImageObject", 
        name: "Contact Location Map Image",
        contentUrl: ContactMapImage
    };

    return (
        <section 
            className="relative w-full h-[400px] flex items-center justify-center rounded-3xl overflow-hidden shadow-xl" 
            role="region" 
            aria-label="Geographic map visualization for company location"
        >
            {/* SEO Structured Data*/}
            <JsonLdScript data={structuredData} />
            
            {/* Background Image */}
            <img
                src={ContactMapImage}
                alt="SwiftScale Address" 
                aria-hidden="true" 
                loading="lazy" 
                width={1200} 
                height={400} 
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />
        </section>
    );
}