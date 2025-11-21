import * as React from 'react';
import JsonLd from '../SEO/JsonLd';

export interface ILandingServiceSectionProps {}

export default function LandingServiceSection(props: ILandingServiceSectionProps) {
  const services = [
    { name: 'HR Consulting', content: "Offering tailored solutions, from recruitment and staffing to specialized legal and administrative services." },
    { name: 'Software Development', content: "Building mobile apps, web apps, and websites that are functional, beautiful, and user-friendly." },
    { name: 'Design', content: "Creating brand identities that stand out, with services ranging from logo design and social media templates to full corporate and personal branding packages." },
    { name: 'Legal Services', content: "Company incorporation and filings, contract drafting and review, regulatory compliance, and ongoing corporate legal advisory." },
    { name: 'SEO Consultations', content: "We offer Content & Writing Services – Producing SEO-rich articles, Press Releases, Blog Posts, website copy, and engaging content that connects with audiences." },
  ];

  return (
    <div className="py-16 flex flex-col w-full">
      <h2 className="font-monument-ultrabold text-4xl mb-10 px-5">
        Our Services
      </h2>

      <div className="flex flex-col w-full gap-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-row max-lg:flex-col w-full items-center dark:bg-[#1E1E1E] bg-white text-black dark:text-white py-8 px-10 max-lg:px-5 rounded-lg border-b border-gray-200"
          >
            {/* Index */}
            <div className="font-monument-bold text-2xl w-1/12 max-lg:w-full max-lg:mb-2">
              0{index + 1}
            </div>

            {/* Service Title */}
            <div className="font-monument-bold text-2xl w-4/12 max-lg:w-full">
              {service.name}
            </div>

            {/* Purple Dot – perfectly centered vertically (desktop only) */}
            <div className="w-1/12 hidden lg:flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#6A01E1]" />
            </div>

            {/* Content */}
            <div className="w-6/12 max-lg:w-full mt-2 max-lg:mt-3 leading-relaxed">
              {service.content}
            </div>
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
