"use server";
import JsonLd from "@/components/SEO/JsonLd";
import ContactFormSection from "@/components/ContactForm/ContactForm";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactMap from "@/components/ContactMap/ContactMap";
import FAQSection from "@/components/FAQSection/FAQSection";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Contact SwiftScale Consult",
        description: "Get in touch with SwiftScale for HR consulting, software development, design, legal services, and SEO growth.",
        alternates: { canonical: "https://swiftscale.com.ng/contact" },
        openGraph: {
            type: "website",
            url: "https://swiftscale.com.ng/contact",
            siteName: "SwiftScale Consult",
            title: "Contact SwiftScale Consult",
            description: "Reach out to discuss your needs across HR, tech, design, legal, and SEO.",
        },
        twitter: {
            card: "summary",
            title: "Contact SwiftScale Consult",
            description: "Message our team about your goals and challenges.",
        },
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <JsonLd
                    id="ld-breadcrumbs-contact"
                    data={{
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftscale.com.ng/" },
                            { "@type": "ListItem", position: 2, name: "Contact", item: "https://swiftscale.com.ng/contact" }
                        ]
                    }}
                />
                <ContactHero />
                {/* Scale & Consult Section */}
                <ScaleConsultSection />

                {/* FAQ Section */}
                <FAQSection />

                <ContactFormSection />

                <ContactMap />
            </div>
        </div>
    )
};

