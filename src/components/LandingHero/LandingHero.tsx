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

import HeroLandingImg from "@/asset/image/hero-landing.jpg";

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
        <div className="font-monument-bold text-5xl md:text-4xl max-md:text-3xl text-black dark:text-white lg:w-7/12 w-full lg:pr-20 p-0 text-left max-lg:text-center">
          Powering Businesses with People, Technology & Identity
        </div>

        {/* Right Text */}
        <div className="lg:w-5/12 w-full flex flex-col justify-start items-start max-lg:items-center max-lg:text-center mt-6 lg:mt-0">
          <p className="font-poppins text-base leading-relaxed">
            Helping you find skilled candidates, in-demand jobs and the solutions you need to help you do your best work yet.
          </p>

          <Link
  href="/contact"
  className="mt-4 bg-primary text-white px-6 py-3 rounded-full 
             hover:bg-purple-700 cursor-pointer transition-colors duration-300 
             text-center w-full max-md:w-full md:w-auto 
             no-underline hover:no-underline
             focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
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
     {/* Hero Image */}
<div className="w-full flex justify-center items-center py-10 px-4">
  <img
    src={HeroLandingImg.src}
    alt="SwiftScale Hero"
    fetchPriority="high"
    className="
      rounded-2xl 
      object-cover 
      w-full 
      aspect-[16/9] 
      max-h-[450px] 
      md:max-h-[520px] 
      lg:max-h-[580px]
    "
  />
</div>


      {/* Logos */}
   
{/* Logos */}
<div className="w-full flex justify-between items-center max-lg:grid max-lg:grid-cols-3 max-lg:gap-y-6">

  {/* Shared logo sizing */}
  {/*
    w-12 = very small screens
    w-14 = small screens
    w-16 = medium
    w-20 = large
    w-24 = xl
  */}
  {(() => {
    const common = "w-12 max-sm:w-14 sm:w-16 md:w-20 xl:w-24 h-auto mx-auto"
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
    )
  })()}
</div>


  

  
 


    </div>
  );
}

export default LandingHero;
