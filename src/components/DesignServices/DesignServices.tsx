"use client";
import React from "react";
import DImage2 from '@/asset/image/design-service-2.jpg';
import DImage3 from '@/asset/image/design-service-3.jpg';
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

export const DesignServices: React.FC = () => {
    const { theme } = useTheme();
    const navigate = useRouter();

    return (
        <section
            className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-16"
            role="region"
            aria-labelledby="design-services-heading"
        >
            <JsonLd
                id="ld-service-design-services"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Design Services",
                    serviceType: "Branding, UI/UX, and Graphic Design",
                    description: "Brand identity, UI/UX, and graphic design services for memorable, conversion-focused products.",
                    url: "https://swiftscale.com.ng/design",
                    provider: { "@id": "https://swiftscale.com.ng/#organization" },
                    areaServed: [
                        { "@type": "Country", name: "United States" },
                        { "@type": "Country", name: "United Kingdom" },
                        { "@type": "Country", name: "Nigeria" }
                    ],
                    serviceAudience: { "@type": "Audience", audienceType: "Marketing and product teams" }
                }}
            />

            {/* Decorative Background */}
            <img
                src={typeof HrBg === 'string' ? HrBg : HrBg.src}
                alt=""
                aria-hidden="true"
                className="absolute w-full max-w-[900px] h-auto -bottom-10 rotate-[20deg] max-lg:hidden z-0 pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                <h1
                    id="design-services-heading"
                    className="text-black dark:text-white text-4xl md:text-5xl max-lg:text-2xl mb-4 text-center font-monument-ultrabold"
                >
                    Design Services
                </h1>

                <p className="text-black dark:text-white/80 text-center mb-8">
                    Creating brand identities that stand out, with services ranging from logo design and social
                    <br />
                    media templates to full corporate and personal branding packages.
                </p>

                <button
                    type="button"
                    className="bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center"
                    aria-label="Get in touch with SwiftScale design team"
                >
                    Get in Touch
                </button>

                {/* Social Icons */}
                <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5'>
                    <>
                        <Instagram onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" />
                        <Facebook onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" />
                        <Linkedin onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" />
                        <X onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" />
                    </>
                    <>
                        <InstagramLight onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" />
                        <FacebookLight onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" />
                        <LinkedinLight onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" />
                        <XLight onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" />
                    </>
                </div>

                {/* Desktop Grid */}
                <div className="flex lg:grid max-lg:hidden lg:grid-cols-4 gap-10 mt-2 p-10">
                    <video
                        src='/assets/design-service-1.mp4'
                        className="rounded-xl aspect-[3/4] w-full object-cover"
                        autoPlay loop muted playsInline
                    />
                    <img
                        src={typeof DImage2 === 'string' ? DImage2 : DImage2.src}
                        alt="Design Service 2"
                        className="rounded-xl aspect-[3/4] w-full object-cover"
                    />
                    <img
                        src={typeof DImage3 === 'string' ? DImage3 : DImage3.src}
                        alt="Design Service 3"
                        className="rounded-xl aspect-[3/4] w-full object-cover"
                    />
                    <video
                        src='/assets/design-service-4.mp4'
                        className="rounded-xl aspect-[3/4] w-full object-cover"
                        autoPlay loop muted playsInline
                    />
                </div>

                <DesignSlider />
            </div>
        </section>
    );
};


const DesignSlider: React.FC = () => {
    const [current, setCurrent] = React.useState(0);

    const prevSlide = () => setCurrent((prev) => (prev === 0 ? 3 : prev - 1));
    const nextSlide = () => setCurrent((prev) => (prev === 3 ? 0 : prev + 1));

    return (
        <div
            className="relative w-full mx-auto hidden max-lg:block rounded-2xl overflow-hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Design services carousel"
        >
            {/* Screen reader live region */}
            <p className="sr-only" aria-live="polite" aria-atomic="true">
                {`Showing slide ${current + 1} of 4`}
            </p>

            {/* Slides */}
            {current === 0 && (
                <video
                    src="/assets/design-service-1.mp4"
                    className="rounded-xl aspect-[3/4] w-full object-cover"
                    autoPlay loop muted playsInline
                />
            )}
            {current === 1 && (
                <img
                    src={typeof DImage2 === "string" ? DImage2 : DImage2.src}
                    alt="Design Service 2"
                    className="rounded-xl aspect-[3/4] w-full object-cover"
                />
            )}
            {current === 2 && (
                <img
                    src={typeof DImage3 === "string" ? DImage3 : DImage3.src}
                    alt="Design Service 3"
                    className="rounded-xl aspect-[3/4] w-full object-cover"
                />
            )}
            {current === 3 && (
                <video
                    src="/assets/design-service-4.mp4"
                    className="rounded-xl aspect-[3/4] w-full object-cover"
                    autoPlay loop muted playsInline
                />
            )}

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border-0"
                aria-label="Previous"
            >
                <span className="text-white text-5xl max-lg:text-2xl max-md:text-3xl">&#60;</span>
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-0"
                aria-label="Next"
            >
                <span className="text-white text-5xl max-lg:text-2xl max-md:text-3xl">&#62;</span>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                {[0, 1, 2, 3].map((idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-5 h-5 rounded-full border-0 ${
                            current === idx ? "bg-purple-600" : "bg-white"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
