"use server";
import JsonLd from "@/components/SEO/JsonLd";
import ConsultationBanner from "@/components/AboutConsultationBanner/ConsultationBanner";
import CoreServicesSection from "@/components/AboutCoreServicesSection/CoreServicesSection";
import HeroSection from "@/components/AboutHero/HeroSection";
import AboutIntroSection from "@/components/AboutIntroSection/AboutIntroSection";
import OurMission from "@/components/AboutOurMission/OurMission";
import FAQSection from "@/components/FAQSection/FAQSection";
import FunFactSection from "@/components/FunFactSection/FunFactSection";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "About SwiftScale Consult",
        description: "Learn about SwiftScale—our mission, values, and the team helping organizations scale with people, technology, and identity.",
        alternates: { canonical: "https://example.com/about" },
        openGraph: {
            type: "article",
            url: "https://example.com/about",
            siteName: "SwiftScale Consult",
            title: "About SwiftScale Consult",
            description: "Learn about SwiftScale—our mission, values, and the team helping organizations scale.",
        },
        twitter: {
            card: "summary",
            title: "About SwiftScale Consult",
            description: "Learn about SwiftScale—our mission, values, and the team behind our services.",
        },
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <JsonLd
                    id="ld-breadcrumbs-about"
                    data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://example.com/" },
                            { "@type": "ListItem", position: 2, name: "About", item: "https://example.com/about" }
                        ]
                    }}
                />
                <HeroSection />
                <AboutIntroSection />
                <CoreServicesSection />
                <OurMission />
                <FunFactSection />
                <ConsultationBanner />
                {/* Scale & Consult Section */}
                <ScaleConsultSection />

                {/* FAQ Section */}
                <FAQSection />
            </div>
        </div>
    )
};

