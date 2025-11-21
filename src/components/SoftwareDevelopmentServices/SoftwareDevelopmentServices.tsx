"use client";

import React from "react";
import Image from "next/image";
import HrImage1 from "@/asset/image/software-development-service.png";
import Instagram from "@/asset/svg/instagram.svg";
import Facebook from "@/asset/svg/facebook.svg";
import Linkedin from "@/asset/svg/linkedin.svg";
import HrBg from "@/asset/image/hr-consulting-bg-purple.png";
import X from "@/asset/svg/x.svg";
import Flutter from "@/asset/svg/flutter.svg";
import Python from "@/asset/svg/python.svg";
import Dart from "@/asset/svg/dart.svg";
import Firebase from "@/asset/svg/firebase.svg";
import Html5 from "@/asset/svg/html5.svg";
import Tailwind from "@/asset/svg/tailwind.svg";
import JsonLd from "@/components/SEO/JsonLd";
import FacebookLight from "@/asset/svg/facebook-lightmode.svg";
import InstagramLight from "@/asset/svg/instagram-lightmode.svg";
import LinkedinLight from "@/asset/svg/linkedin-lightmode.svg";
import XLight from "@/asset/svg/x-lightmode.svg";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const techIcons = [
  { src: <Flutter />, alt: "Flutter" },
  { src: <Python />, alt: "Python" },
  { src: <Dart />, alt: "Dart" },
  { src: <Firebase />, alt: "Firebase" },
  { src: <Html5 />, alt: "HTML5" },
  { src: <Tailwind />, alt: "Tailwind CSS" },
];

export const SoftwareDevelopmentServices: React.FC = () => {
  const theme = useTheme().resolvedTheme;
  const navigate = useRouter();

  return (
    <>
      <section
        className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-14"
        role="region"
        aria-labelledby="sd-heading"
      >
        <JsonLd
          id="ld-service-software-development"
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Software Development",
            serviceType: "Custom software, web and mobile app development",
            description:
              "End to end product development for web and mobile including discovery, design, development, QA, and launch.",
            url: "https://swiftscale.com.ng/software-development",
            provider: { "@id": "https://swiftscale.com.ng/#organization" },
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Nigeria" },
            ],
            serviceAudience: {
              "@type": "Audience",
              audienceType: "Product teams and founders",
            },
          }}
        />

        {/* Decorative Background */}
        <div className="absolute inset-0 flex justify-center max-lg:hidden pointer-events-none">
          <Image
            src={HrBg}
            alt=""
            aria-hidden="true"
            className="object-contain w-full max-w-[1200px] h-auto rotate-[20deg]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 w-full">

          {/* Forced 2-line heading */}
          <h1
            id="sd-heading"
            className="text-black w-full lg:w-1/2 dark:text-white text-2xl sm:text-xl md:text-4xl lg:text-5xl leading-tight text-center font-monument-ultrabold max-w-[700px]"
          >
            Software Development Services
          </h1>

          <p className="text-black dark:text-white/80 text-center text-base sm:text-lg max-w-[500px] px-2">
            We build mobile apps, web apps, and websites that are functional,
            beautiful, and user friendly.
          </p>

          {/* CTA Button */}
          
          <button
  type="button"
  onClick={() => navigate.push("/contact")}
  aria-label="Get in touch about software development"
  className="
    flex justify-center items-center  lg:mt-4
    cursor-pointer border-0 bg-primary 
    text-white 
    w-full sm:w-auto
    px-4 sm:px-6 
    py-2 sm:py-3
    rounded-full 
    hover:bg-purple-700
    transition-colors duration-300
    text-sm sm:text-base
  "
>
  Get in Touch
</button>


          {/* Social icons */}
          <div
            className="gap-4 lg:gap-2 flex flex-row justify-center items-center py-4"
            role="group"
            aria-label="Social media icons"
          >
            {theme === "dark" ? (
              <>
                <Instagram onClick={() => navigate.push("https://www.instagram.com/swiftscale_consult")} className="w-10 sm:w-12 h-10 sm:h-12" />
                <Facebook onClick={() => navigate.push("https://www.facebook.com/swiftscale-consult")} className="w-10 sm:w-12 h-10 sm:h-12" />
                <Linkedin onClick={() => navigate.push("https://www.linkedin.com/company/swiftscale-consult")} className="w-10 sm:w-12 h-10 sm:h-12" />
                <X onClick={() => navigate.push("https://x.com/swiftscale_con")} className="w-10 sm:w-12 h-10 sm:h-12" />
              </>
            ) : (
              <>
                <InstagramLight onClick={() => navigate.push("https://www.instagram.com/swiftscale_consult")} className="w-10 sm:w-12 h-10 sm:h-12" />
                <FacebookLight onClick={() => navigate.push("https://www.facebook.com/swiftscale-consult")} className="w-10 sm:w-12 h-10 sm:h-12" />
                <LinkedinLight onClick={() => navigate.push("https://www.linkedin.com/company/swiftscale-consult")} className="w-10 sm:w-12 h-10 sm:h-12" />
                <XLight onClick={() => navigate.push("https://x.com/swiftscale_con")} className="w-10 sm:w-12 h-10 sm:h-12" />
              </>
            )}
          </div>

          {/* Hero Image — fully responsive, no fixed height */}
          <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 mt-4 mb-6">
            <div className="relative w-full max-w-[900px]">
              <Image
                src={HrImage1}
                alt="Software development showcase image"
                className="object-contain w-full h-auto rounded-lg"
                sizes="100vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech icons desktop only */}
      <section className="w-full h-auto max-lg:hidden">
        <TechStackIcons />
      </section>
    </>
  );
};

export const TechStackIcons: React.FC = () => (
  <div className="flex flex-row w-full items-center justify-center gap-12 py-8 bg-transparent">
    {techIcons.map((icon) => (
      <div key={icon.alt} className="flex flex-col items-center">
        {icon.src}
      </div>
    ))}
  </div>
);
