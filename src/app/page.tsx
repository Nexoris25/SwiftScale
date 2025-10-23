"use server";
import { Metadata } from "next";
import TestimonialsCarousel from "@/components/TestimonialCarousel/TestimonialsCarousel";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import JsonLd from "@/components/SEO/JsonLd";
import LandingHero from "@/components/LandingHero/LandingHero";
import LandingServiceSection from "@/components/LandingServicesSection/LandingServicesSection";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: {
            default: "SwiftScale Consult — People, Technology & Identity",
            template: "%s | SwiftScale Consult"
        },
        description: "SwiftScale helps businesses scale with HR consulting, software development, design, legal services, and SEO growth.",
        keywords: [
            "SwiftScale", "HR consulting", "software development", "UI/UX design", "branding", "legal services", "SEO consultations",
            "content writing", "startup", "SMB", "enterprise"
        ],
        applicationName: "SwiftScale Consult",
        authors: [{ name: "SwiftScale" }],
        creator: "SwiftScale",
        publisher: "SwiftScale",
        alternates: { canonical: "https://swiftscale.com.ng/" },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': "large",
                'max-snippet': -1,
                'max-video-preview': -1
            }
        },
        openGraph: {
            type: "website",
            url: "https://swiftscale.com.ng/",
            siteName: "SwiftScale Consult",
            title: "SwiftScale Consult — People, Technology & Identity",
            description: "SwiftScale helps businesses scale with HR consulting, software development, design, legal services, and SEO growth.",
            images: [
                {
                    url: "https://swiftscale.com.ng/android-chrome-512x512.png",
                    width: 512,
                    height: 512,
                    alt: "SwiftScale logo"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: "SwiftScale Consult — People, Technology & Identity",
            description: "SwiftScale helps businesses scale with HR consulting, software development, design, legal services, and SEO growth.",
            images: ["https://swiftscale.com.ng/android-chrome-512x512.png"],
            creator: "@SwiftScale"
        }
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                {/* JSON-LD: Home WebPage and Services ItemList */}
                <JsonLd
                    id="ld-home-webpage"
                    data={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": "https://swiftscale.com.ng/#webpage",
                        url: "https://swiftscale.com.ng/",
                        name: "SwiftScale Home",
                        isPartOf: { "@id": "https://swiftscale.com.ng/#website" },
                        about: { "@id": "https://swiftscale.com.ng/#organization" }
                    }}
                />
                
                {/* Hero Section */}
                <LandingHero />
                {/* services section */}
                <LandingServiceSection />
                {/* Testimonials Section */}
                <TestimonialsCarousel />

                {/* Portfolio Section */}
                <PortfolioSection />

                {/* Scale & Consult Section */}
                <ScaleConsultSection />

                {/* FAQ Section */}
                <FAQSection />
            </div>
        </div>
    )
};

