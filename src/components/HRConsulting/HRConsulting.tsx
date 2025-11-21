"use client";
import React from "react";
import HrImage1 from "@/asset/image/hr-consulting-1.png";
import HrImage2 from "@/asset/image/hr-consulting-2.png";
import HrImage3 from "@/asset/image/hr-consulting-3.png";
import Instagram from "@/asset/svg/instagram.svg";
import Facebook from "@/asset/svg/facebook.svg";
import Linkedin from "@/asset/svg/linkedin.svg";
import HrBg from "@/asset/image/hr-consulting-bg-purple.png";
import X from "@/asset/svg/x.svg";
import JsonLd from "@/components/SEO/JsonLd";
import FacebookLight from "@/asset/svg/facebook-lightmode.svg";
import InstagramLight from "@/asset/svg/instagram-lightmode.svg";
import LinkedinLight from "@/asset/svg/linkedin-lightmode.svg";
import XLight from "@/asset/svg/x-lightmode.svg";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export const HRConsulting: React.FC = () => {
  const theme = useTheme().resolvedTheme;
  const navigate = useRouter();

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
          description:
            "Strategic HR advisory that covers talent acquisition, performance management, culture alignment, and compliance.",
          url: "https://swiftscale.com.ng/hr-consultation",
          provider: { "@id": "https://swiftscale.com.ng/#organization" },
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Nigeria" }
          ],
          serviceAudience: {
            "@type": "Audience",
            audienceType: "SMBs and enterprises"
          }
        }}
      />

      <img
        src={typeof HrBg === "string" ? HrBg : HrBg.src}
        alt=""
        aria-hidden="true"
        className="absolute w-full max-w-[800px] h-auto -bottom-32 rotate-[20deg] max-lg:hidden z-0 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        <h1
          id="hr-consulting-heading"
          className="text-black dark:text-white text-3xl md:text-5xl max-lg:text-2xl mb-4 text-center font-monument-ultrabold"
        >
          HR Consulting
        </h1>

        <p className="text-black w-full md:w-1/2 dark:text-white/80 text-center mb-8 text-base md:text-lg leading-relaxed">
          We provide tailored HR strategies that align people, culture, and business goals.  
          This helps your organization attract, retain, and grow top talent.
        </p>

        <button
          type="button"
          className="bg-primary text-white px-6 py-3 max-lg:w-full rounded-full hover:bg-purple-700 transition-colors duration-300 text-base"
          aria-label="Get in touch with SwiftScale HR consulting team"
        >
          Get in Touch
        </button>

        <div
          className="gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5"
          aria-label="Social media icons"
          role="group"
        >
          {theme === "dark" ? (
            <>
              <Instagram
                onClick={() =>
                  navigate.push(
                    "https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0"
                  )
                }
                className="w-10 lg:w-14 h-10 lg:h-14 cursor-pointer"
              />
              <Facebook
                onClick={() =>
                  navigate.push(
                    "https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr"
                  )
                }
                className="w-10 lg:w-14 h-10 lg:h-14 cursor-pointer"
              />
              <Linkedin
                onClick={() =>
                  navigate.push(
                    "https://www.linkedin.com/company/swiftscale-consult"
                  )
                }
                className="w-10 lg:w-14 h-10 lg:h-14 cursor-pointer"
              />
              <X
                onClick={() =>
                  navigate.push(
                    "https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng"
                  )
                }
                className="w-10 lg:w-14 h-10 lg:h-14 cursor-pointer"
              />
            </>
          ) : (
            <>
              <InstagramLight
                onClick={() =>
                  navigate.push(
                    "https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0"
                  )
                }
                className="w-10 lg:w-14 h-10 lg:h-14 cursor-pointer"
              />
              <FacebookLight
                onClick={() =>
                  navigate.push(
                    "https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr"
                  )
                }
                className="w-10 lg:w-14 h-10 lg:h-14 cursor-pointer"
              />
              <LinkedinLight
                onClick={() =>
                  navigate.push(
                    "https://www.linkedin.com/company/swiftscale-consult"
                  )
                }
                className="w-10 lg:w-14 h-10 lg:h-14 cursor-pointer"
              />
              <XLight
                onClick={() =>
                  navigate.push(
                    "https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng"
                  )
                }
                className="w-10 lg:w-14 h-10 lg:h-14 cursor-pointer"
              />
            </>
          )}
        </div>

        <div className="flex lg:grid max-lg:hidden lg:grid-cols-3 gap-10 mt-2 p-10 overflow-x-hidden">
          {[HrImage1, HrImage2, HrImage3].map((img, idx) => (
            <img
              key={idx}
              src={typeof img === "string" ? img : img.src}
              alt={`HR Consulting ${idx + 1}`}
              className="rounded-xl w-full max-w-xs object-cover aspect-square"
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
    typeof HrImage1 === "string" ? HrImage1 : HrImage1.src,
    typeof HrImage2 === "string" ? HrImage2 : HrImage2.src,
    typeof HrImage3 === "string" ? HrImage3 : HrImage3.src
  ];

  const [current, setCurrent] = React.useState(1);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="relative w-full mx-auto hidden max-lg:block rounded-2xl overflow-hidden bg-black"
      role="region"
      aria-roledescription="carousel"
      aria-label="HR Consulting photos carousel"
    >
      <p className="sr-only" aria-live="polite">
        {`Showing slide ${current + 1} of ${images.length}`}
      </p>

      <img
        src={images[current]}
        alt={`HR Consulting ${current + 1}`}
        className="w-full aspect-square object-cover"
      />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-0 p-2 text-2xl focus:outline-none"
        aria-label="Previous"
      >
        <span className="text-4xl">&lt;</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-0 p-2 text-2xl focus:outline-none"
        aria-label="Next"
      >
        <span className="text-4xl">&gt;</span>
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${
              current === idx ? "bg-purple-600" : "bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
