"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";

import Instagram from "@/asset/svg/instagram.svg";
import Facebook from "@/asset/svg/facebook.svg";
import Linkedin from "@/asset/svg/linkedin.svg";
import X from "@/asset/svg/x.svg";

import InstagramLight from "@/asset/svg/instagram-lightmode.svg";
import FacebookLight from "@/asset/svg/facebook-lightmode.svg";
import LinkedinLight from "@/asset/svg/linkedin-lightmode.svg";
import XLight from "@/asset/svg/x-lightmode.svg";

import Herbary from "@/asset/svg/herbary.svg";
import JoyFilled from "@/asset/svg/joy-filled.svg";
import Mintyn from "@/asset/svg/mintyn.svg";
import MintynLight from "@/asset/svg/mintyn-dark.svg";
import Clinch from "@/asset/svg/clinch.svg";
import ClinchLight from "@/asset/svg/clinch-dark.svg";
import CorkPro from "@/asset/svg/corkpro.svg";
import N from "@/asset/svg/n.svg";
import NDark from "@/asset/svg/n-white.svg";

import Image from "next/image";

// Correct static import for Next.js 15
import HeroLandingImg from "@/asset/image/hero-landing.webp";

export interface ILandingHeroProps {}

function LandingHero(props: ILandingHeroProps) {
  const { theme } = useTheme();
  const navigate = useRouter();

  const socials = [
    {
      dark: Instagram,
      light: InstagramLight,
      url: "https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0",
    },
    {
      dark: Facebook,
      light: FacebookLight,
      url: "https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr",
    },
    {
      dark: Linkedin,
      light: LinkedinLight,
      url: "https://www.linkedin.com/company/swiftscale-consult",
    },
    {
      dark: X,
      light: XLight,
      url: "https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng",
    },
  ];

  return (
    <div className="p-10 max-lg:p-4 bg-[#F8F8F8] dark:bg-[#363636] text-black dark:text-white rounded-lg flex flex-col w-full gap-6">
      
      {/* Text Section */}
      <div className="flex lg:flex-row flex-col w-full items-center justify-between">
        
        {/* Left Title */}
        <h1 className="text-xl md:text-3xl lg:text-4xl text-black dark:text-white lg:w-7/12 w-full lg:pr-20 p-0 text-left max-lg:text-center">
          Powering Businesses with People, Technology and Identity
        </h1>

        {/* Right Text */}
        <div className="lg:w-5/12 w-full flex flex-col justify-start items-start max-lg:items-center max-lg:text-center mt-6 lg:mt-0">
          <p className="font-poppins text-base leading-relaxed">
            From people to technology to identity, we build tools, talent and brand experiences that help businesses grow and stand out.
          </p>

          <Link
            href="/contact"
            className="mt-4 bg-primary text-white px-6 py-3 rounded-full 
                       hover:bg-purple-700 cursor-pointer transition-colors duration-300 
                       text-center w-full max-md:w-full md:w-auto no-underline hover:no-underline
                       focus:outline-none focus-visible:ring-0"
            aria-label="Get in touch with SwiftScale"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Social Icons (Desktop Only) */}
      <div className="w-full justify-end items-center hidden lg:flex">
        <div className="flex gap-2 items-center">
          {socials.map((item, index) => {
            const Icon = theme === "dark" ? item.dark : item.light;
            return (
              <Icon
                key={index}
                onClick={() => navigate.push(item.url)}
                className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer transition-transform duration-200 hover:scale-110"
                aria-hidden="true"
              />
            );
          })}
        </div>
      </div>

      {/* Hero Image */}
          
          <div className="w-full flex justify-center items-center py-4 sm:py-8">
      <Image
        src="/asset/image/hero-landing.webp"
        alt="SwiftScale business transformation hero image"
        priority
        width={1920}
        height={1080}
        // Applying responsive sizing and full-bleed on mobile
        className={`
          object-cover w-full aspect-[16/9] 
          max-h-[280px] md:max-h-[380px] lg:max-h-[580px]
          /* Full width on mobile, on larger screens */
          rounded-none sm:rounded-2xl
        `}
      />
    </div>


      {/* Logos */}
      <div className="w-full flex justify-between items-center max-lg:grid max-lg:grid-cols-3 max-lg:gap-y-4">
        {(() => {
          const common =
            "w-10 md:w-12 lg:w-16 xl:w-20 h-auto mx-auto";
          return (
            <>
              <div className="mx-auto">
                <Herbary className={common} />
              </div>

              <div className="mx-auto">
                <JoyFilled className={common} />
              </div>

              <div className="mx-auto">
                {theme === "dark" ? (
                  <Mintyn className={common} />
                ) : (
                  <MintynLight className={common} />
                )}
              </div>

              <div className="mx-auto">
                {theme === "dark" ? (
                  <Clinch className={`${common} text-white`} />
                ) : (
                  <ClinchLight className={common} />
                )}
              </div>

              <div className="mx-auto">
                <CorkPro className={common} />
              </div>

              <div className="mx-auto">
                {theme === "dark" ? (
                  <NDark className={common} />
                ) : (
                  <N className={common} />
                )}
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}

export default LandingHero;
