import * as React from 'react';
import Link from 'next/link'; // Import Link
import JsonLd from '@/components/SEO/JsonLd'; // Use @/ for path consistency

export interface ILandingServiceSectionProps {}

// Define service data with slugs for clean URLs
const servicesData = [
    { 
        name: 'HR Consulting', 
        content: "Offering tailored solutions, from recruitment and staffing to specialized legal and administrative services.",
        url: "/hr-consultation"
    },
    { 
        name: 'Software Development', 
        content: "Building mobile apps, web apps, and websites that are functional, beautiful, and user-friendly.",
        url: "/software-development"
    },
    { 
        name: 'Design', 
        content: "Creating brand identities that stand out, with services ranging from logo design and social media templates to full corporate and personal branding packages.",
        url: "/design"
    },
    { 
        name: 'Legal Services', 
        content: "Company incorporation and filings, contract drafting and review, regulatory compliance, and ongoing corporate legal advisory.",
        url: "/legal-services" 
    },
    { 
      
        name: 'SEO Consultations', 
        content: "We offer Content & Writing Services – Producing SEO-rich articles, Press Releases, Blog Posts, website copy, and engaging content that connects with audiences.",
        url: "/seo-consultations"
    },
];

export default function LandingServiceSection(props: ILandingServiceSectionProps) {
    
    // Prepare the service schema data, including the URLs
    const serviceSchema = servicesData.map((s, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
            "@type": "Service",
            name: s.name,
            description: s.content,
            url: `https://swiftscale.com.ng${s.url}`,
            provider: { "@id": "https://swiftscale.com.ng/#organization" }
        }
    }));

    return (
        <section 
            className="py-16 flex flex-col w-full max-w-7xl mx-auto px-6"
            role="region"
            aria-labelledby="services-heading"
        >
            <h2 
                id="services-heading"
                className="text-xl md:text-3xl lg:text-4xl mb-10 text-black dark:text-white"
            >
                Our Services
            </h2>

            <div 
                className="flex flex-col w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-xl overflow-hidden"
                role="list"
            >
                {servicesData.map((service, index) => (
                    <Link
                        key={index}
                        href={service.url}
                        role="listitem"
                        aria-label={`View ${service.name} details`}
                        className="flex flex-row max-lg:flex-col w-full items-center dark:bg-[#1E1E1E] bg-white text-black dark:text-white py-4 px-10 max-lg:px-5 
                                   transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 
                                   focus-visible:ring-4 focus-visible:ring-[#6A01E1] focus-visible:outline-none no-underline"
                    >
                        {/* Index */}
                        <div className="text-2xl w-1/12 max-lg:w-full max-lg:mb-2 text-gray-500 dark:text-gray-400">
                            {/*Ensure leading zero for single digits */}
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </div>

                        {/* Service Title */}
                        <div className="text-lg w-4/12 max-lg:w-full font-semibold">
                            {service.name}
                        </div>

                        {/* Purple Dot – centered vertically (desktop only) */}
                        <div className="w-1/12 hidden lg:flex items-center justify-center h-full">
                            <div className="w-4 h-4 rounded-full bg-[#6A01E1] transition-transform duration-300 group-hover:scale-110" />
                        </div>

                        {/* Content */}
                        <div className="w-6/12 max-lg:w-full mt-2 max-lg:mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                            {service.content}
                        </div>
                    </Link>
                ))}
            </div>

            {/* SEO JSON-LD Schema */}
            <JsonLd
                id="ld-home-services"
                data={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    name: "SwiftScale Services",
                    itemListElement: serviceSchema
                }}
            />
        </section>
    );
}