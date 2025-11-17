"use client";
import React from "react";
import DImage2 from '@/asset/image/seo-const-banner.jpg';
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HrBg from '@/asset/image/hr-consulting-bg-purple.png';
import X from '@/asset/svg/x.svg';
import JsonLd from "@/components/SEO/JsonLd";
import { useRouter } from "next/navigation";
import FacebookLight from '@/asset/svg/facebook-lightmode.svg';
import InstagramLight from '@/asset/svg/instagram-lightmode.svg';
import LinkedinLight from '@/asset/svg/linkedin-lightmode.svg';
import XLight from '@/asset/svg/x-lightmode.svg';
import { useTheme } from "next-themes";


export const SEOConsulting: React.FC = () => {
    const theme = useTheme().resolvedTheme;
    const navigate = useRouter();
    return (
        <section className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-16" role="region" aria-labelledby="seo-consulting-heading">
            <JsonLd
                id="ld-service-seo-consulting"
                data={
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "SEO Consulting",
                        serviceType: "SEO Consulting",
                        description: "Consulting to improve search visibility, traffic, and conversions through SEO strategy and content.",
                        url: "https://swiftscale.com.ng/seo-consultations",
                        provider: { "@id": "https://swiftscale.com.ng/#organization" },
                        areaServed: "Worldwide",
                        serviceAudience: { "@type": "Audience", audienceType: "Businesses and startups" }
                    }
                }
            />
            {/* Decorative Blob */}
            <img
                src={typeof HrBg === 'string' ? HrBg : HrBg.src}
                alt=""
                aria-hidden="true"
                className="absolute w-[80%] -bottom-48 max-lg:hidden rotate-[20deg] aspect-square z-0 pointer-events-none"
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                <h1 id="seo-consulting-heading" className="text-black dark:text-white text-4xl md:text-5xl mb-4 text-center font-monument-ultrabold">
                    SEO Consulting
                </h1>
                <p className="text-black dark:text-white/80 text-center mb-8">
                    Have a consultation with us, Let us know how we can help you boost your online
                    <br />
                    presence and drive sales to your Business.
                </p>
                <button type="button" className=" bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center" aria-label="Get in touch about SEO consulting">Get in Touch</button>
                <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5' role='group' aria-label='Social media icons'>
                    <>
                        <Instagram onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" aria-hidden="true" />
                        <Facebook onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" aria-hidden="true" />
                        <Linkedin onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" aria-hidden="true" />
                        <X onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" aria-hidden="true" />
                    </>
                    <>
                        <InstagramLight onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" aria-hidden="true" />
                        <FacebookLight onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" aria-hidden="true" />
                        <LinkedinLight onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" aria-hidden="true" />
                        <XLight onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" aria-hidden="true" />
                    </>
                </div>
                {/* Images */}
                <div className="w-full flex flex-row mt-2 p-10 max-lg:px-4 justify-center items-center">
                    <img
                        src={typeof DImage2 === 'string' ? DImage2 : DImage2.src}
                        alt="SEO consulting banner"
                        className="rounded-xl aspect-video max-h-[600px] max-lg:max-h-auto w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};