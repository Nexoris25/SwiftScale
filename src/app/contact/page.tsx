"use server";
import ContactFormSection from "@/components/ContactForm/ContactForm";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactMap from "@/components/ContactMap/ContactMap";
import FAQSection from "@/components/FAQSection/FAQSection";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Title",
        description: "Decription",
        openGraph: {
            title: "Title",
            description: "Decription",
        },
        twitter: {
            title: "Title",
            description: "Decription",
        },
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
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

