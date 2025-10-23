"use server";
import JsonLd from "@/components/SEO/JsonLd";
import FAQSection from "@/components/FAQSection/FAQSection";
import MobileAppShowcase from "@/components/MobileAppShowcase/MobileAppShowcase";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import { SoftwareDevelopmentServices } from "@/components/SoftwareDevelopmentServices/SoftwareDevelopmentServices";
import WebDashboard from "@/components/WebDashboard/WebDashboard";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Software Development Services | SwiftScale",
        description: "Custom software, web and mobile app development: discovery, design, engineering, QA, and launch.",
        alternates: { canonical: "https://swiftscale.com.ng/software-development" },
        openGraph: {
            type: "article",
            url: "https://swiftscale.com.ng/software-development",
            siteName: "SwiftScale Consult",
            title: "Software Development Services | SwiftScale",
            description: "End-to-end product development for web and mobile.",
        },
        twitter: {
            card: "summary_large_image",
            title: "Software Development Services | SwiftScale",
            description: "Discovery, design, development, QA, and launch for your product.",
        },
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <JsonLd
                    id="ld-breadcrumbs-software"
                    data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftscale.com.ng/" },
                            { "@type": "ListItem", position: 2, name: "Services", item: "https://swiftscale.com.ng" },
                            { "@type": "ListItem", position: 3, name: "Software Development", item: "https://swiftscale.com.ng/software-development" }
                        ]
                    }}
                />
                <SoftwareDevelopmentServices />
                <MobileAppShowcase />
                <WebDashboard />
                {/* Scale & Consult Section */}
                <ScaleConsultSection />
                {/* FAQ Section */}
                <FAQSection />
            </div>
        </div>
    )
};

