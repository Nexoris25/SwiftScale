"use client";
import React from "react";
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HrBg from '@/asset/image/hr-consulting-bg-purple.png';
import X from '@/asset/svg/x.svg';
import Jvf from '@/asset/svg/jvf.svg';
import Cac from '@/asset/svg/cac.svg';
import Son from '@/asset/svg/son.svg';
import Nda from '@/asset/svg/nda.svg';
import JsonLd from "@/components/SEO/JsonLd";
import { useRouter } from "next/navigation";
import FacebookLight from '@/asset/svg/facebook-lightmode.svg';
import InstagramLight from '@/asset/svg/instagram-lightmode.svg';
import LinkedinLight from '@/asset/svg/linkedin-lightmode.svg';
import XLight from '@/asset/svg/x-lightmode.svg';
import { useTheme } from "next-themes";


export const LegalServices: React.FC = () => {
  const theme = useTheme().resolvedTheme;
  const navigate = useRouter();
  const services = [
    {
      icon: <Cac />,
      title:
        "Business Name Registration, Company Incorporation (LLC, PLC, NGO, etc), Filing Annual Returns, Change of Directors/ShareHolders, Change of Company Name or Address, Post-Incorporation Filings",
    },
    {
      icon: <Nda />,
      title:
        "Offer Letters for Staff, Employment Contracts, Employee Handbook/Policies, Non-Disclosure Agreements (NDA), Termination & Exit Letters",
    },
    {
      icon: <Jvf />,
      title:
        "Service Agreements, Partnership Agreements (Joint Venture, Founders Agreement), Deed of Assignment, Contract of Sale, Search Report, Deed of Gift, Memorandum of Understanding (MoU)",
    },
    {
      icon: <Son />,
      title:
        "Compliance & Legal Advisor, Data Protection Compliance (NDPR), FCCPC Approval, Money Lenders Licence.",
    },
  ];
  return (
    <section
      className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-16"
      role="region"
      aria-labelledby="legal-services-heading"
    >
      <JsonLd
        id="ld-service-legal-services"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Legal Services",
          serviceType: "Business and Corporate Legal Services",
          description: "Business formation, contracts, compliance, and ongoing corporate legal support.",
          url: "https://swiftscale.com.ng/legal-services",
          provider: { "@id": "https://swiftscale.com.ng/#organization" },
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Nigeria" }
          ],
          serviceAudience: { "@type": "Audience", audienceType: "Startups and established businesses" }
        }}
      />
      {/* Decorative Blob */}
      <img
        src={typeof HrBg === 'string' ? HrBg : HrBg.src}
        alt=""
        aria-hidden="true"
        className="absolute w-full max-w-[600px] h-auto -bottom-0 rotate-[20deg] max-lg:hidden z-0 pointer-events-none"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        <h1 id="legal-services-heading" className="text-black dark:text-white text-4xl md:text-5xl max-lg:text-2xl mb-4 text-center font-monument-ultrabold">
          Legal Services
        </h1>
        <p className="text-black dark:text-white/80 text-center mb-8">
          From contracts to compliance, we simplify legal complexities so you can focus
          <br />
          on growing your business.
        </p>
        <button
          type="button"
          onClick={() => navigate.push('/contact')}
          className=" bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center"
          aria-label="Get in touch with SwiftScale legal services team"
        >
          Get in Touch
        </button>
        <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5' role='group' aria-label='Follow us on social media'>
          {theme === "dark" ? (
            <>
              <Instagram onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
              <Facebook onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
              <Linkedin onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
              <X onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
            </>)
            : (
              <>
                <InstagramLight onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                <FacebookLight onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                <LinkedinLight onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                <XLight onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
              </>)}
        </div>
        {/* Images */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-2 p-10 max-lg:px-4" role="list" aria-label="List of legal services">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
              role="listitem"
            >
              <div className="mb-4">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};