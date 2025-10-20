"use server";
import JsonLd from "@/components/SEO/JsonLd";
import { DesignServices } from "@/components/DesignServices/DesignServices";
import FAQSection from "@/components/FAQSection/FAQSection";
import { ImpactServices } from "@/components/ImpactServices/ImpactServices";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Design Services | SwiftScale",
        description: "Brand identity, UI/UX, and graphic design services that drive recognition and conversions.",
        alternates: { canonical: "https://example.com/services/design" },
        openGraph: {
            type: "article",
            url: "https://example.com/services/design",
            siteName: "SwiftScale Consult",
            title: "Design Services | SwiftScale",
            description: "Brand identity, UI/UX, and graphics for standout products.",
        },
        twitter: {
            card: "summary_large_image",
            title: "Design Services | SwiftScale",
            description: "Memorable, conversion-focused design services.",
        },
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <JsonLd
                    id="ld-breadcrumbs-design"
                    data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://example.com/" },
                            { "@type": "ListItem", position: 2, name: "Services", item: "https://example.com/services" },
                            { "@type": "ListItem", position: 3, name: "Design", item: "https://example.com/services/design" }
                        ]
                    }}
                />
                <DesignServices />
                <ImpactServices />
                {/* Scale & Consult Section */}
                <ScaleConsultSection />
                {/* FAQ Section */}
                <FAQSection />
            </div>
        </div>
    )
};

