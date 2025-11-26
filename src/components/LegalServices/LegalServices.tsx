"use client";
import React from "react";
import Instagram from "@/asset/svg/instagram.svg";
import Facebook from "@/asset/svg/facebook.svg";
import Linkedin from "@/asset/svg/linkedin.svg";
import Image from "next/image";
const HrBg = "/asset/image/hr-consulting-bg-purple.webp";
import X from "@/asset/svg/x.svg";
import Jvf from "@/asset/svg/jvf.svg";
import Cac from "@/asset/svg/cac.svg";
import Son from "@/asset/svg/son.svg";
import Nda from "@/asset/svg/nda.svg";
import JsonLd from "@/components/SEO/JsonLd";
import { useRouter } from "next/navigation";
import FacebookLight from "@/asset/svg/facebook-lightmode.svg";
import InstagramLight from "@/asset/svg/instagram-lightmode.svg";
import LinkedinLight from "@/asset/svg/linkedin-lightmode.svg";
import XLight from "@/asset/svg/x-lightmode.svg";
import { useTheme } from "next-themes";

export const LegalServices: React.FC = () => {
  const theme = useTheme().resolvedTheme;
  const navigate = useRouter();

  const services = [
    {
      icon: <Cac />,
      title:
        "Business name registration, company incorporation (LLC, PLC, NGO, etc), annual returns, change of directors or shareholders, change of name or address, and post incorporation filings",
    },
    {
      icon: <Nda />,
      title:
        "Offer letters for staff, employment contracts, employee policies, non disclosure agreements, and termination or exit letters",
    },
    {
      icon: <Jvf />,
      title:
        "Service agreements, partnership agreements, founders agreements, deed of assignment, contract of sale, search reports, deed of gift, and memorandum of understanding",
    },
    {
      icon: <Son />,
      title:
        "Compliance advisor, data protection compliance (NDPR), FCCPC approval, and money lenders licence",
    },
  ];

  const iconBase =
    "w-12 lg:w-16 h-12 lg:h-16 cursor-pointer outline-none focus:outline-none focus-visible:outline-none bg-transparent border-none p-0";

  return (
    <section
      className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[650px] flex flex-col items-center rounded-lg justify-center px-4 py-10"
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
          description:
            "Business formation, contracts, compliance, and ongoing corporate legal support",
          url: "https://swiftscale.com.ng/legal-services",
          provider: { "@id": "https://swiftscale.com.ng/#organization" },
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Nigeria" },
          ],
          serviceAudience: {
            "@type": "Audience",
            audienceType: "Startups and established businesses",
          },
        }}
      />

      {/* Decorative Blob */}
<div className="absolute inset-0 max-lg:hidden pointer-events-none z-0 flex justify-center items-end translate-y-20">
  <div className="w-full max-w-[900px] h-[650px] relative">
    <Image
      src={HrBg}
      alt="decorative image"
      aria-hidden="true"
      fill
      sizes="900px"
      className="object-contain rotate-[20deg]"
      priority
    />
  </div>
</div>


      {/* ---------- Foreground Content ---------- */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full mt-6">
        <h1
          id="legal-services-heading"
          className="text-black dark:text-white text-2xl md:text-4xl lg:text-5xl text-center"
        >
          Legal Services
        </h1>

        <p className="text-black dark:text-white/80 text-center max-w-2xl">
          From contracts to compliance, we simplify legal complexities so you can
          focus on growing your business.
        </p>

        {/* ---------- Button (cleaned + moved upward) ---------- */}
        <button
          type="button"
          onClick={() => navigate.push("/contact")}
          className="bg-primary text-white px-6 py-3 rounded-full max-lg:w-full mt-1 
          transition-colors duration-300 cursor-pointer hover:bg-purple-700 
          outline-none focus:outline-none focus-visible:outline-none border-none"
          aria-label="Get in touch"
        >
          Get in Touch
        </button>

        {/* ---------- Social Icons ---------- */}
        <div
          className="gap-4 lg:gap-2 flex flex-row justify-center items-center pt-2 pb-4"
          role="group"
          aria-label="Follow us on social media"
        >
          {theme === "dark" ? (
            <>
              <Instagram
                onClick={() =>
                  navigate.push(
                    "https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0"
                  )
                }
                className={iconBase}
              />
              <Facebook
                onClick={() =>
                  navigate.push(
                    "https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr"
                  )
                }
                className={iconBase}
              />
              <Linkedin
                onClick={() =>
                  navigate.push(
                    "https://www.linkedin.com/company/swiftscale-consult"
                  )
                }
                className={iconBase}
              />
              <X
                onClick={() =>
                  navigate.push(
                    "https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng"
                  )
                }
                className={iconBase}
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
                className={iconBase}
              />
              <FacebookLight
                onClick={() =>
                  navigate.push(
                    "https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr"
                  )
                }
                className={iconBase}
              />
              <LinkedinLight
                onClick={() =>
                  navigate.push(
                    "https://www.linkedin.com/company/swiftscale-consult"
                  )
                }
                className={iconBase}
              />
              <XLight
                onClick={() =>
                  navigate.push(
                    "https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng"
                  )
                }
                className={iconBase}
              />
            </>
          )}
        </div>

        {/* ------ Cards ----- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-2 p-4 lg:p-10 max-lg:px-4"
          role="list"
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 
              flex flex-col items-start min-h-[180px] max-lg:min-h-[120px]"
              role="listitem"
            >
              <div className="mb-4">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
