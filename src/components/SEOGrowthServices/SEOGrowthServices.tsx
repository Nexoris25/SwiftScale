import React from "react";
import JsonLd from "@/components/SEO/JsonLd";
import Seo from '@/asset/image/seo.png';

export const SEOGrowthServices: React.FC = () => (
  <section
    className="w-full px-4 py-20 flex flex-col items-center"
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
          { "@type": "Service", name: "Content Writing" },
          { "@type": "Service", name: "SEO Writing" },
          { "@type": "Service", name: "Article Writing" },
          { "@type": "Service", name: "Ghostwriting" },
          { "@type": "Service", name: "Writer Outsourcing" },
          { "@type": "Service", name: "Content Team Management" }
        ]
      }}
    />
    {/* Small heading */}
    <div className="w-full">
      <span className="block text-black dark:text-white text-sm font-semibold mb-2">
        See What Makes SwiftScale Unique
      </span>
      <h2 id="seo-growth-heading" className="text-black dark:text-white text-3xl lg:text-5xl font-monument-ultrabold mb-8 leading-tight">
        Beyond SEO: Unlock the Next<br className="hidden lg:block" /> Level of Growth
      </h2>
    </div>
    <div className="flex flex-col lg:flex-row w-full mx-auto gap-0">
      {/* Left: SEO image */}
      <div className="lg:w-1/3 w-full flex items-center justify-center mb-8 lg:mb-0">
        <img
          src={typeof Seo === 'string' ? Seo : Seo.src}
          alt="SEO Rocket"
          className="w-[400px] h-auto"
        />
      </div>
      {/* Right: Service grid */}
      <div className="lg:w-2/3 w-full grid grid-cols-2 gap-y-10 gap-x-8" role="list" aria-label="SEO and content services list">
        {/* Content Writing */}
        <div className="flex items-start gap-4" role="listitem">
          <span className="w-6 h-6 rounded-full bg-[#FF7F2E] inline-block mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-lg mb-1">Content Writing</h3>
            <p className="text-black dark:text-white/80 text-sm leading-relaxed">
              Blog posts, Website Content, Newsletters,<br />Press Releases.
            </p>
          </div>
        </div>
        {/* SEO Writing */}
        <div className="flex items-start gap-4" role="listitem">
          <span className="w-10 h-6 rounded-full bg-[#00C97B] inline-block mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-lg mb-1">SEO Writing</h3>
            <p className="text-black dark:text-white/80 text-sm leading-relaxed">
              Keyword-optimized content to improve<br />search rankings.
            </p>
          </div>
        </div>
        {/* Article Writing */}
        <div className="flex items-start gap-4" role="listitem">
          <span className="w-6 h-6 rounded-full bg-[#FFE600] inline-block mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-lg mb-1">Article Writing</h3>
            <p className="text-black dark:text-white/80 text-sm leading-relaxed">
              Research-based and opinion articles for<br />various niches.
            </p>
          </div>
        </div>
        {/* Ghostwriting */}
        <div className="flex items-start gap-4" role="listitem">
          <span className="w-5 h-5 rounded-md bg-[#7B2FF2] inline-block mt-2" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-lg mb-1">Ghostwriting</h3>
            <p className="text-black dark:text-white/80 text-sm leading-relaxed">
              Writing books, Articles, or reports for clients<br />under their name.
            </p>
          </div>
        </div>
        {/* Writer Outsourcing */}
        <div className="flex items-start gap-4" role="listitem">
          <span className="w-6 h-6 rounded-md bg-[#8ED6DF] inline-block mt-1" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-lg  mb-1">Writer Outsourcing</h3>
            <p className="text-black dark:text-white/80 text-sm leading-relaxed">
              Providing experienced writers for<br />businesses.
            </p>
          </div>
        </div>
        {/* Content Team Management */}
        <div className="flex items-start gap-4" role="listitem">
          <span className="w-5 h-5 rounded-md bg-[#7B2FF2] inline-block mt-2" aria-hidden="true" />
          <div>
            <h3 className="text-black dark:text-white font-monument-ultrabold text-lg mb-1">Content Team Management</h3>
            <p className="text-black dark:text-white/80 text-sm leading-relaxed">
              Assembling and managing a team of<br />writers for clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);