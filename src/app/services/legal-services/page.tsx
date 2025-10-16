"use server";
import FAQSection from "@/components/FAQSection/FAQSection";
import { LegalServices } from "@/components/LegalServices/LegalServices";
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
                <LegalServices />
                {/* Scale & Consult Section */}
                <ScaleConsultSection />

                {/* FAQ Section */}
                <FAQSection />
            </div>
        </div>
    )
};

