import React from "react";
import JsonLd from "@/components/SEO/JsonLd";
import Seo from '@/asset/image/seo.png';

export const SEOGrowthServices: React.FC = () => (
  <section
    className="w-full px-4 max-lg:py-10  py-20 flex flex-col items-center"
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
    {/* Small heading */}
    <div className="w-full">
      <span className="block text-black dark:text-white max-lg:text-center max-lg:w-full text-base font-semibold mb-2">
        See What Makes SwiftScale Unique
      </span>
      <h2 id="seo-growth-heading" className="text-black dark:text-white text-3xl max-lg:text-center max-lg:w-full lg:text-5xl max-lg:text-2xl font-monument-ultrabold mb-8 leading-tight">
        Beyond SEO: Unlock the Next<br className="hidden lg:block" /> Level of Growth
      </h2>
    </div>
    <div className="flex flex-col lg:flex-row w-full mx-auto py-10 gap-6">
      {/* Left: SEO image */}
      <div className="lg:w-1/3 w-full flex items-center justify-center mb-8 lg:mb-0">
        <img
          src={typeof Seo === 'string' ? Seo : Seo.src}
          alt="SEO Rocket"
          className="w-[400px] h-auto"
        />
      </div>
      {/* Right: Service grid */}
      <div className="lg:w-2/3 w-full grid grid-cols-2 max-md:grid-cols-1 gap-y-10  gap-x-8" role="list" aria-label="SEO and content services list">
        {/* Content Writing */}
        <div id="content-writing" className="flex flex-col items-start gap-4 max-md:items-center max-md:justify-center" role="listitem">
          <span className="w-6 h-6 rounded-full bg-[#FF7F2E] inline-block mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-xl mb-1 max-md:text-center">Content Writing</h3>
            <p className="text-black dark:text-white/80 text-base leading-relaxed max-md:text-center">
              Blog posts, Website Content, Newsletters,<br />Press Releases.
            </p>
          </div>
        </div>
        {/* SEO Writing */}
        <div id="seo-writing" className="flex flex-col items-start gap-4 max-md:items-center max-md:justify-center" role="listitem">
          <span className="w-10 h-6 rounded-full bg-[#00C97B] inline-block mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-xl mb-1 max-md:text-center">SEO Writing</h3>
            <p className="text-black dark:text-white/80 text-base leading-relaxed max-md:text-center">
              Keyword-optimized content to improve<br />search rankings.
            </p>
          </div>
        </div>
        {/* Article Writing */}
        <div id="article-writing" className="flex flex-col items-start gap-4 max-md:items-center max-md:justify-center" role="listitem">
          <span className="w-6 h-6 rounded-full bg-[#FFE600] inline-block mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-xl mb-1 max-md:text-center">Article Writing</h3>
            <p className="text-black dark:text-white/80 text-base leading-relaxed max-md:text-center">
              Research-based and opinion articles for<br />various niches.
            </p>
          </div>
        </div>
        {/* Ghostwriting */}
        <div id="ghostwriting" className="flex flex-col items-start gap-4 max-md:items-center max-md:justify-center" role="listitem">
          <span className="w-5 h-5 rounded-md bg-[#7B2FF2] inline-block mt-2" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-xl mb-1 max-md:text-center">Ghostwriting</h3>
            <p className="text-black dark:text-white/80 text-base leading-relaxed max-md:text-center">
              Writing books, Articles, or reports for clients<br />under their name.
            </p>
          </div>
        </div>
        {/* Writer Outsourcing */}
        <div id="writer-outsourcing" className="flex flex-col items-start gap-4 max-md:items-center max-md:justify-center" role="listitem">
          <span className="w-6 h-6 rounded-md bg-[#8ED6DF] inline-block mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-xl mb-1 max-md:text-center">Writer Outsourcing</h3>
            <p className="text-black dark:text-white/80 text-base leading-relaxed max-md:text-center">
              Providing experienced writers for<br />businesses.
            </p>
          </div>
        </div>
        {/* Content Team Management */}
        <div id="content-team-management" className="flex flex-col items-start gap-4 max-md:items-center max-md:justify-center" role="listitem">
          <span className="w-5 h-5 rounded-t-full rounded-b-full bg-[#C7B7FF] inline-block mt-2" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-xl mb-1 max-md:text-center">Content Team Management</h3>
            <p className="text-black dark:text-white/80 text-base leading-relaxed max-md:text-center">
              Assembling and managing a team of<br />writers for clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);