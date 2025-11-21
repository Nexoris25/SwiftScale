"use client";
import React from "react";
import JsonLd from "@/components/SEO/JsonLd";
import Seo from "@/asset/image/seo.png";

export const SEOGrowthServices: React.FC = () => (
  <section
    className="w-full px-4 py-16 lg:py-20 flex flex-col items-center"
    role="region"
    aria-labelledby="seo-growth-heading"
  >
    <JsonLd
      id="ld-seo-growth-services"
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Growth and Content Services",
        itemListElement: [
          { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Content Writing", url: "https://swiftscale.com.ng/seo-consultations#content-writing" } },
          { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "SEO Writing", url: "https://swiftscale.com.ng/seo-consultations#seo-writing" } },
          { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "Article Writing", url: "https://swiftscale.com.ng/seo-consultations#article-writing" } },
          { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "Ghostwriting", url: "https://swiftscale.com.ng/seo-consultations#ghostwriting" } },
          { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "Writer Outsourcing", url: "https://swiftscale.com.ng/seo-consultations#writer-outsourcing" } },
          { "@type": "ListItem", position: 6, item: { "@type": "Service", name: "Content Team Management", url: "https://swiftscale.com.ng/seo-consultations#content-team-management" } }
        ]
      }}
    />

    {/* Section Heading */}
   <div className="w-full text-left max-lg:text-center">
  <span className="block text-black dark:text-white text-base font-semibold mb-3">
    See What Makes SwiftScale Unique
  </span>

  <h2
    id="seo-growth-heading"
    className="
      text-black dark:text-white 
      font-monument-ultrabold 
      text-3xl md:text-4xl 
      leading-tight 
      mb-10 
      max-w-[680px] 
      max-lg:max-w-full 
      mx-auto lg:mx-0
    "
  >
    Beyond SEO: Unlock the Next Level of Growth
  </h2>
</div>


    {/* Content Layout */}
    <div className="flex flex-col lg:flex-row w-full mx-auto gap-12 lg:gap-16 mt-4">
      
      {/* Left: SEO Illustration */}
      <div className="lg:w-1/3 w-full flex items-center justify-center">
        <img
          src={typeof Seo === 'string' ? Seo : Seo.src}
          alt="SEO rocket"
          className="w-[320px] sm:w-[380px] lg:w-[420px] h-auto object-contain"
        />
      </div>

      {/* Right: Service List */}
      <div
        className="lg:w-2/3 w-full grid grid-cols-2 max-md:grid-cols-1 gap-y-12 gap-x-10"
        role="list"
        aria-label="SEO and content services list"
      >
        
        {/* SERVICE ITEM TEMPLATE */}
        {[
          {
            id: "content-writing",
            color: "#FF7F2E",
            title: "Content Writing",
            desc: "Blog posts, website content, newsletters, and press releases."
          },
          {
            id: "seo-writing",
            color: "#00C97B",
            title: "SEO Writing",
            desc: "Keyword-optimized content built to improve search rankings."
          },
          {
            id: "article-writing",
            color: "#FFE600",
            title: "Article Writing",
            desc: "Research-based articles written for a wide range of niches."
          },
          {
            id: "ghostwriting",
            color: "#7B2FF2",
            title: "Ghostwriting",
            desc: "Books, articles, and reports written for clients under their name."
          },
          {
            id: "writer-outsourcing",
            color: "#8ED6DF",
            title: "Writer Outsourcing",
            desc: "Providing experienced writers tailored to your business needs."
          },
          {
            id: "content-team-management",
            color: "#C7B7FF",
            title: "Content Team Management",
            desc: "Building and managing content teams for clients."
          }
        ].map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="flex flex-col items-start gap-4 max-md:items-center"
            role="listitem"
          >
            <span
              className="w-6 h-6 rounded-full inline-block"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />

            <div className="text-left max-md:text-center">
              <h3 className="text-black dark:text-white font-monument-ultrabold text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-black dark:text-white/80 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  </section>
);
