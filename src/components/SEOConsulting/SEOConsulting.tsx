"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";
import { useTheme } from "next-themes";

// images
const Banner = "/asset/image/seo-hero-banner.webp";
const UploadedBlobPath = "/asset/image/seo-blob.webp";

// icons (Dark Mode)
import Instagram from "@/asset/svg/instagram.svg";
import Facebook from "@/asset/svg/facebook.svg";
import Linkedin from "@/asset/svg/linkedin.svg";
import X from "@/asset/svg/x.svg";

// icons (Light Mode)
import InstagramLight from "@/asset/svg/instagram-lightmode.svg";
import FacebookLight from "@/asset/svg/facebook-lightmode.svg";
import LinkedinLight from "@/asset/svg/linkedin-lightmode.svg";
import XLight from "@/asset/svg/x-lightmode.svg";

export const SEOConsulting: React.FC = () => {
  const { resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navigate = useRouter();

  // Exact purple color for the button
  const BRAND_PURPLE = "bg-[#6B18E7]";

  // Handle hydration mismatch ensuring theme is available
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine theme
  const currentTheme = resolvedTheme ?? systemTheme ?? "light";
  const isDark = currentTheme === "dark";

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-center px-4 py-10 md:py-24 bg-[#F8F8F8] dark:bg-[#363636]"
      role="region"
      aria-labelledby="seo-consulting-heading"
    >
      <JsonLd
        id="ld-service-seo-consulting"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "SEO Consulting",
          serviceType: "SEO Consulting",
          description:
            "Consulting to improve search visibility, traffic, and conversions through SEO strategy and content.",
          url: "https://swiftscale.com.ng/seo-consultations",
          provider: { "@id": "https://swiftscale.com.ng/#organization" },
          areaServed: "Worldwide",
          serviceAudience: {
            "@type": "Audience",
            audienceType: "Businesses and startups",
          },
        }}
      />

      {/* --- BLOB BACKGROUND --- */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-0 hidden md:block"
        style={{
          left: "-10%",
          bottom: "-5%",
          width: "70%",
          height: "80%",
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src={UploadedBlobPath}
            alt=""
            fill
            className="object-contain opacity-100"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      </div>

      {/* --- CONTENT WRAPPER ---*/}
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-10">
          <h1
            id="seo-consulting-heading"
            className="text-black dark:text-white text-2xl md:text-4xl lg:text-5xl mb-6 tracking-tight"
          >
            SEO Consulting
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
            Have a consultation with us, Let us know how we can help you boost your online
            presence and drive sales to your Business.
          </p>

          <button
            type="button"
            onClick={() => navigate.push("/contact")}
            // Added cursor-pointer explicitly
            className={`${BRAND_PURPLE} text-white font-medium px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg border-none outline-none ring-0 focus:ring-0 focus:outline-none cursor-pointer`}
            aria-label="Get in touch about SEO consulting"
          >
            Get in Touch
          </button>

          {/* Social Icons */}
          <div
            className="flex flex-row gap-4 lg:gap-6 mt-8 items-center"
            role="group"
            aria-label="Social media links"
          >
            {mounted && (
              <>
                {isDark ? (
                  <>
                    <Instagram className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer hover:scale-110 transition-transform duration-200" />
                    <Facebook className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer hover:scale-110 transition-transform duration-200" />
                    <Linkedin className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer hover:scale-110 transition-transform duration-200" />
                    <X className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer hover:scale-110 transition-transform duration-200" />
                  </>
                ) : (
                  <>
                    <InstagramLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer hover:scale-110 transition-transform duration-200" />
                    <FacebookLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer hover:scale-110 transition-transform duration-200" />
                    <LinkedinLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer hover:scale-110 transition-transform duration-200" />
                    <XLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer hover:scale-110 transition-transform duration-200" />
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* --- BANNER IMAGE --- */}
        <div className="w-full flex justify-center px-2 md:px-0 mt-2">
  <div
    className="
      relative w-full 
      max-w-6xl        
      aspect-[4/3]       
      md:aspect-[16/5] 
      shadow-2xl rounded-2xl overflow-hidden
      bg-gray-200 dark:bg-gray-800
    "
  >
    <Image
      src={Banner}
      alt="SEO Consulting Dashboard Analysis"
      fill
      priority
      className="object-cover object-top"
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
    />
  </div>
</div>


      </div>
    </section>
  );
};