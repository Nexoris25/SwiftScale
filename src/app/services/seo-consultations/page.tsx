"use server";
import JsonLd from "@/components/SEO/JsonLd";
import FAQSection from "@/components/FAQSection/FAQSection";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import { SEOConsulting } from "@/components/SEOConsulting/SEOConsulting";
import { SEOGrowthServices } from "@/components/SEOGrowthServices/SEOGrowthServices";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "SEO Consultations | SwiftScale",
        description: "Consulting to improve search visibility, traffic, and conversions through SEO strategy and content.",
        alternates: { canonical: "https://example.com/services/seo-consultations" },
        openGraph: {
            type: "article",
            url: "https://example.com/services/seo-consultations",
            siteName: "SwiftScale Consult",
            title: "SEO Consultations | SwiftScale",
            description: "SEO strategy, content, and growth services.",
        },
        twitter: {
            card: "summary_large_image",
            title: "SEO Consultations | SwiftScale",
            description: "Boost search visibility and conversions with expert guidance.",
        },
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <JsonLd
                    id="ld-breadcrumbs-seo"
                    data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://example.com/" },
                            { "@type": "ListItem", position: 2, name: "Services", item: "https://example.com/services" },
                            { "@type": "ListItem", position: 3, name: "SEO Consultations", item: "https://example.com/services/seo-consultations" }
                        ]
                    }}
                />
                <SEOConsulting />
                <SEOGrowthServices />
                {/* Scale & Consult Section */}
                <ScaleConsultSection />
                {/* FAQ Section */}
                <FAQSection />
            </div>
        </div>
    )
};

