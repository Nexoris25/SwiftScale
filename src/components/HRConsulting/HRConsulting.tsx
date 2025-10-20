"use client";
import React from "react";
import HrImage1 from '@/asset/image/hr-consulting-1.png';
import HrImage2 from '@/asset/image/hr-consulting-2.png';
import HrImage3 from '@/asset/image/hr-consulting-3.png';
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HrBg from '@/asset/image/hr-consulting-bg-purple.png';
import X from '@/asset/svg/x.svg';
import JsonLd from "@/components/SEO/JsonLd";

export const HRConsulting: React.FC = () => {
    return (
    <section
      className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-16"
      role="region"
      aria-labelledby="hr-consulting-heading"
    >
            <JsonLd
              id="ld-service-hr-consulting"
              data={{
                "@context": "https://schema.org",
                "@type": "Service",
                name: "HR Consulting",
                serviceType: "HR Consulting",
                description: "Strategic HR advisory including talent acquisition, performance management, and compliance.",
                url: "https://example.com/services/hr-consultation",
                provider: { "@id": "https://example.com/#organization" },
                areaServed: [
                  { "@type": "Country", name: "United States" },
                  { "@type": "Country", name: "United Kingdom" },
                  { "@type": "Country", name: "Nigeria" }
                ],
                serviceAudience: { "@type": "Audience", audienceType: "SMBs and enterprises" }
              }}
            />
            {/* Decorative Blob */}
            <img
                src={typeof HrBg === 'string' ? HrBg : HrBg.src}
        alt=""
        aria-hidden="true"
                className="absolute w-[80%] -bottom-48 aspect-square max-lg:hidden z-0 pointer-events-none"
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        <h1 id="hr-consulting-heading" className="text-black dark:text-white text-4xl md:text-5xl mb-4 text-center font-monument-ultrabold">
                    HR Consulting
                </h1>
                <p className="text-black dark:text-white/80 text-center mb-8">
                    We provide tailored HR strategies that align people, culture, and business goals
                    <br />
                    —helping your organization attract, retain, and grow top talent.
                </p>
        <button
          type="button"
          className=" bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center"
          aria-label="Get in touch with SwiftScale HR consulting team"
        >
          Get in Touch
        </button>
        <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5' aria-label='Social media icons' role='group'>
          <Instagram aria-hidden="true" className="w-12 lg:w-16 h-12 lg:h-16" />
          <Facebook aria-hidden="true" className="w-12 lg:w-16 h-12 lg:h-16" />
          <Linkedin aria-hidden="true" className="w-12 lg:w-16 h-12 lg:h-16" />
          <X aria-hidden="true" className="w-12 lg:w-16 h-12 lg:h-16" />
                </div>
                {/* Images */}
                <div className="flex lg:grid max-lg:hidden lg:grid-cols-3 gap-10 mt-2 p-10 overflow-x-hidden scrollbar-hide">
                    {[HrImage1, HrImage2, HrImage3].map((img, idx) => (
                        <img
                            key={idx}
                            src={typeof img === 'string' ? img : img.src}
                            alt={`HR Consulting ${idx + 1}`}
                            className="rounded-xl aspect-square w-[80vw] max-w-xs lg:w-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>
                <HRConsultingSlider />
            </div>
        </section>
    );
};

const HRConsultingSlider: React.FC = () => {
const images = [
    typeof HrImage1 === 'string' ? HrImage1 : HrImage1.src,
    typeof HrImage2 === 'string' ? HrImage2 : HrImage2.src,
    typeof HrImage3 === 'string' ? HrImage3 : HrImage3.src,
];
  const [current, setCurrent] = React.useState(1);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="relative w-full mx-auto hidden max-lg:block rounded-2xl overflow-hidden bg-black"
      role="region"
      aria-roledescription="carousel"
      aria-label="HR Consulting photos carousel"
      aria-live="off"
    >
      {/* Live region for screen readers to announce slide changes */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`Showing slide ${current + 1} of ${images.length}`}
      </p>
      {/* Image */}
      <img
        src={images[current]}
        alt={`HR Consulting ${current + 1}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`Slide ${current + 1} of ${images.length}`}
        className="w-full aspect-square object-cover"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-0 rounded-full p-2 text-2xl"
        aria-label="Previous"
      >
        <span className="text-white text-5xl max-md:text-3xl">&#60;</span>
      </button>
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white  bg-transparent border-0 rounded-full p-2 text-2xl"
        aria-label="Next"
      >
        <span className="text-white text-5xl max-md:text-3xl">&#62;</span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3" role="tablist" aria-label="Carousel Pagination Dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-5 h-5 border-0 rounded-full ${current === idx ? "bg-purple-600" : "bg-white"}`}
            aria-label={`Go to slide ${idx + 1}`}
            role="tab"
            aria-selected={current === idx}
            aria-current={current === idx ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
};