import * as React from 'react';
import JsonLd from '../SEO/JsonLd';

export interface ILandingServiceSectionProps {
}

export default function LandingServiceSection(props: ILandingServiceSectionProps) {
    const services = [
        { name: 'HR Consulting', content: "Offering tailored solutions, from recruitment and staffing to specialized legal and administrative services." },
        { name: 'Software Development', content: "Building mobile apps, web apps, and websites that are functional, beautiful, and user-friendly." },
        { name: 'Design', content: "Creating brand identities that stand out, with services ranging from logo design and social media templates to full corporate and personal branding packages." },
        { name: 'Legal Services', content: "Company incorporation and filings, contract drafting and review, regulatory compliance, and ongoing corporate legal advisory." },
        { name: 'SEO Consultations', content: "We offer Content & Writing Services – Producing SEO-rich articles, Press Releases, Blog Posts, website copy, and engaging content that connects with audiences." },
    ];
    return (
        <div className="py-20 flex flex-col w-full">
            <div className=" flex flex-row w-full justify-start items-center">
                <h2 className="font-monument-ultrabold text-4xl text-center mb-10 px-5">
                    Our Services
                </h2>
            </div>
            <div className="flex flex-col w-full gap-4">
                {services.map((service, index) => (
                    <div key={index} className="flex dark:bg-[#1E1E1E] bg-white text-black dark:text-white flex-row max-lg:flex-wrap w-full justify-start items-center py-10 border-b border-gray-200 p-10 max-lg:p-5 rounded-lg">
                        <div className="font-monument-bold text-2xl max-lg:text-xl w-1/12 max-lg:w-auto max-lg:pr-2 max-xs:pr-[2px] flex">0{index + 1}</div>
                        <div className="w-5/12 flex flex-row items-center max-lg:w-auto gap-10 max-lg:px-2">
                            <div className="w-[60%] font-monument-bold text-2xl max-lg:text-xl max-lg:w-auto">{service.name}</div>
                            <div className="ml-4 w-[14px] h-[14px] rounded-full flex bg-[#6A01E1] max-lg:hidden" />
                        </div>
                        <div className="ml-4 w-5/12 flex max-lg:w-full max-lg:ml-0 max-lg:pt-2">{service.content}</div>
                    </div>
                ))}
            </div>
            <JsonLd
                id="ld-home-services"
                data={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    name: "SwiftScale Services",
                    itemListElement: services.map((s, idx) => ({
                        "@type": "ListItem",
                        position: idx + 1,
                        item: {
                            "@type": "Service",
                            name: s.name,
                            description: s.content,
                            provider: { "@id": "https://swiftscale.com.ng/#organization" }
                        }
                    }))
                }}
            />
        </div>
    );
}
