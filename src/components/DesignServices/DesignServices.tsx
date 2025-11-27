"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import JsonLd from "@/components/SEO/JsonLd";

import Instagram from "@/asset/svg/instagram.svg";
import Facebook from "@/asset/svg/facebook.svg";
import Linkedin from "@/asset/svg/linkedin.svg";
import X from "@/asset/svg/x.svg";

import InstagramLight from "@/asset/svg/instagram-lightmode.svg";
import FacebookLight from "@/asset/svg/facebook-lightmode.svg";
import LinkedinLight from "@/asset/svg/linkedin-lightmode.svg";
import XLight from "@/asset/svg/x-lightmode.svg";

// Public images
const DImage2 = "/asset/image/design-service-2.webp";
const DImage3 = "/asset/image/design-service-3.webp";

// Videos
const Video1 = "/assets/design-service-1.mp4";
const Video4 = "/assets/design-service-4.mp4";

// Blob
const UploadedBlobPath = "/asset/image/blob-2.webp";


// =====================================================
// MOBILE SLIDER (defined first to avoid reference errors)
// =====================================================
const DesignSlider: React.FC = () => {
  const slides = [
    
    { type: "image", src: DImage2, alt: "Design Service 2" },
    { type: "image", src: DImage3, alt: "Design Service 3" },
    { type: "video", src: "/assets/design-service-1.mp4" },
    { type: "video", src: "/assets/design-service-4.mp4" }
  ];

  const [current, setCurrent] = React.useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="relative w-full mx-auto block lg:hidden rounded-2xl overflow-hidden z-10"
      role="region"
      aria-roledescription="carousel"
    >
      <div className="w-full">
  {slides[current].type === "image" ? (
    <Image
      src={slides[current].src}
      alt={slides[current].alt ?? ""}
      width={900}
      height={600}
      className="w-full h-[300px] object-cover"
      loading="lazy"
    />
  ) : (
    <video
      src={slides[current].src}
      className="w-full h-[300px] object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  )}
</div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-transparent border-0 outline-none cursor-pointer"
      >
        <span className="text-white text-3xl">&#60;</span>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 outline-none cursor-pointer"
      >
        <span className="text-white text-3xl">&#62;</span>
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-4 h-4 rounded-full border-0 outline-none cursor-pointer ${
              current === idx ? "bg-purple-600" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


// =====================================================
// MAIN COMPONENT
// =====================================================
export const DesignServices: React.FC = () => {
  const theme = useTheme().resolvedTheme;
  const navigate = useRouter();

  const open = (url: string) => {
    if (!url) return;
    navigate.push(url);
  };

  return (
    <section
      className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-10 overflow-hidden"
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
          description:
            "Brand identity, UI/UX, and graphic design services for memorable, conversion-focused products.",
          url: "https://swiftscale.com.ng/design",
          provider: { "@id": "https://swiftscale.com.ng/#organization" },
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Nigeria" }
          ],
          serviceAudience: {
            "@type": "Audience",
            audienceType: "Marketing and product teams"
          }
        }}
      />

      {/* Blob background */}
  <div
  aria-hidden="true"
  className="pointer-events-none absolute right-[-100px] bottom-[-40px] max-lg:hidden z-0"
>
  <div className="relative w-[900px] h-[750px]">
    <Image
      src={UploadedBlobPath}
      alt=""
      fill
      sizes="1100px"
      className="object-contain opacity-95 origin-bottom"
      priority={false}
    />
  </div>
</div>



      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        <h1
          id="design-services-heading"
          className="text-black dark:text-white text-xl md:text-4xl mb-4 text-center"
        >
          Design Services
        </h1>

        <p className="text-black dark:text-white/80 text-center mb-8 max-w-2xl leading-relaxed">
          Creating brand identities that stand out, with services ranging from logo design and social
          media templates to full corporate and personal branding packages.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => navigate.push("/contact#contact-form")}
          aria-label="Get in touch with SwiftScale design team"
          className="
            bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700
            transition-colors duration-300 cursor-pointer text-center
            outline-none focus:outline-none focus:ring-0 active:outline-none border-0
          "
        >
          Get in Touch
        </button>

        {/* Social icons */}
        <div
          className="gap-4 lg:gap-6 flex flex-row justify-start lg:justify-center items-center py-5"
          role="group"
          aria-label="Follow SwiftScale on social media"
        >
          {theme === "dark" ? (
            <>
              <button
                onClick={() => open("https://www.instagram.com/swiftscale_consult")}
                className="w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-transparent border-0 outline-none"
              >
                <Instagram className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              </button>

              <button
                onClick={() => open("https://www.facebook.com/swiftscale_consult")}
                className="w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-transparent border-0 outline-none"
              >
                <Facebook className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              </button>

              <button
                onClick={() => open("https://x.com/swiftscale_con")}
                className="w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-transparent border-0 outline-none"
              >
                <X className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              </button>

              <button
                onClick={() => open("https://www.linkedin.com/company/swiftscale-consult")}
                className="w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-transparent border-0 outline-none"
              >
                <Linkedin className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => open("https://www.instagram.com/swiftscale_consult")}
                className="w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-transparent border-0 outline-none"
              >
                <InstagramLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              </button>

              <button
                onClick={() => open("https://www.facebook.com/swiftscale_consult")}
                className="w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-transparent border-0 outline-none"
              >
                <FacebookLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              </button>

              <button
                onClick={() => open("https://x.com/swiftscale_con")}
                className="w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-transparent border-0 outline-none"
              >
                <XLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              </button>

              <button
                onClick={() => open("https://www.linkedin.com/company/swiftscale-consult")}
                className="w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center bg-transparent border-0 outline-none"
              >
                <LinkedinLight className="w-12 h-12 lg:w-16 lg:h-16 cursor-pointer" />
              </button>
            </>
          )}
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mt-2 p-8 w-full max-w-7xl z-10">
          

          <div className="rounded-xl overflow-hidden">
            <Image
              src={DImage2}
              alt="Design Service 2"
              width={560}
              height={420}
              className="w-full lg:h-[340px]  object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden">
            <Image
              src={DImage3}
              alt="Design Service 3"
              width={560}
              height={420}
              className="w-full lg:h-[340px]  object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <video
              src={Video1}
              className="w-full lg:h-[340px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="rounded-xl overflow-hidden">
            <video
              src={Video4}
              className="w-full lg:h-[340px]  object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Mobile slider */}
        <DesignSlider />
      </div>
    </section>
  );
};

export default DesignServices;
