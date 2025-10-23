"use server";
import JsonLd from "@/components/SEO/JsonLd";
import FAQSection from "@/components/FAQSection/FAQSection";
import { HRConsulting } from "@/components/HRConsulting/HRConsulting";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "HR Consultation Services | SwiftScale",
        description: "Strategic HR advisory: talent acquisition, performance management, and compliance.",
        alternates: { canonical: "https://swiftscale.com.ng/hr-consultation" },
        openGraph: {
            type: "article",
            url: "https://swiftscale.com.ng/hr-consultation",
            siteName: "SwiftScale Consult",
            title: "HR Consultation Services | SwiftScale",
            description: "Tailored HR strategies for teams and organizations.",
        },
        twitter: {
            card: "summary",
            title: "HR Consultation Services | SwiftScale",
            description: "HR support that aligns people, culture, and business goals.",
        },
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <JsonLd
                    id="ld-breadcrumbs-hr"
                    data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftscale.com.ng/" },
                            { "@type": "ListItem", position: 2, name: "Services", item: "https://swiftscale.com.ng" },
                            { "@type": "ListItem", position: 3, name: "HR Consultation", item: "https://swiftscale.com.ng/hr-consultation" }
                        ]
                    }}
                />
                <HRConsulting />
                {/* Scale & Consult Section */}
                <ScaleConsultSection />
                {/* FAQ Section */}
                <FAQSection />
            </div>
        </div>
    )
};

