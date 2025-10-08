"use server";
import { Metadata } from "next";
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HeroLanding from '@/asset/svg/hero-landing.svg';
import Herbary from '@/asset/svg/herbary.svg';
import JoyFilled from '@/asset/svg/joy-filled.svg';
import Mintyn from '@/asset/svg/mintyn.svg';
import Clinch from '@/asset/svg/clinch.svg';
import CorkPro from '@/asset/svg/corkpro.svg';
import N from '@/asset/svg/n.svg';
import X from '@/asset/svg/x.svg';
import TestimonialsCarousel from "@/components/TestimonialCarousel/TestimonialsCarousel";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import ScaleConsultSection from "@/components/ScaleConsultSection/ScaleConsultSection";
import FAQSection from "@/components/FAQSection/FAQSection";

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
    const services = [
        { name: 'HR Consultation', content: "Offering tailored solutions, from recruitment and staffing to specialized legal and administrative services." },
        { name: 'Software Development', content: "Building mobile apps, web apps, and websites that are functional, beautiful, and user-friendly." },
        { name: 'Design', content: "Creating brand identities that stand out, with services ranging from logo design and social media templates to full corporate and personal branding packages." },
        { name: 'Legal Services', content: "Lorem ipsum dolor sit amet consectetur. Ornare dis nisl vel platea quam vitae scelerisque faucibus. Lorem ipsum dolor sit amet consectetur. Ornare dis nisl vel platea quam vitae scelerisque faucibus." },
        { name: 'SEO Consultations', content: "We offer Content & Writing Services – Producing SEO-rich articles, Press Releases, Blog Posts, website copy, and engaging content that connects with audiences." },
    ];
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center w-screen py-2">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                {/* Hero Section */}
                <div className="p-10 max-lg:p-4 dark:bg-[#363636] bg-[#F8F8F8] text-black dark:text-white rounded-lg flex flex-col items-center justify-center w-full">
                    <div className="flex flex-row max-lg:flex-col w-full justify-start items-center">
                        <div className="text-black dark:text-white font-monument-bold text-5xl max-lg:text-2xl w-7/12 ma p-12 pl-0 pr-22 max-lg:w-full">Powering Businesses with People, Technology & Identity</div>
                        <div className="w-5/12 max-lg:w-full flex flex-col items-start justify-start">
                            <div className="font-poppins">Helping you find skilled candidates, in-demand jobs and the solutions you need to help you do your best work yet.</div>
                            <div className="mt-4 bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center">Get in Touch</div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full max-lg:hidden justify-end items-center">
                        <div className='gap-1 flex flex-row justify-start lg:justify-center items-center'>
                            <Instagram className="w-12 lg:w-16 h-12 lg:h-16" />
                            <Facebook className="w-12 lg:w-16 h-12 lg:h-16" />
                            <Linkedin className="w-12 lg:w-16 h-12 lg:h-16" />
                            <X className="w-12 lg:w-16 h-12 lg:h-16" />
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center py-5">
                        <HeroLanding className="w-full h-auto" />
                    </div>
                    <div className="w-full flex max-lg:flex-wrap max-lg:grid max-lg:grid-cols-3 justify-between items-center py-5">
                        <div className="mx-auto"><Herbary className="max-lg:w-20" /></div>
                        <div className="mx-auto"><JoyFilled className="max-lg:w-20" /></div>
                        <div className="mx-auto"><Mintyn className="max-lg:w-20" /></div>
                        <div className="mx-auto"><Clinch className="max-lg:w-20" /></div>
                        <div className="mx-auto"><CorkPro className="max-lg:w-20" /></div>
                        <div className="mx-auto"><N className="max-lg:w-20" /></div>
                    </div>
                </div>
                {/* services section */}
                <div className="py-20 flex flex-col w-full">
                    <div className=" flex flex-row w-full justify-start items-center">
                        <h2 className="font-monument-ultrabold text-4xl text-center mb-10 px-5">
                            Our Services
                        </h2>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="flex dark:bg-[#1E1E1E] bg-white text-black dark:text-white flex-row max-lg:flex-wrap w-full justify-start items-center py-10 border-b border-gray-200 p-10 max-lg:p-5 rounded-lg">
                                <div className="font-monument-bold text-2xl max-lg:text-xl w-1/12 max-lg:w-auto max-lg:pr-2 max-xs:pr-[2px] flex">0{index + 1}</div>
                                <div className="w-5/12 flex flex-row items-center max-lg:w-auto gap-10 max-lg:px-2">
                                    <div className="w-[60%] font-monument-bold text-2xl max-lg:text-xl max-lg:w-auto">{service.name}</div>
                                    <div className="ml-4 w-[14px] h-[14px] rounded-full flex bg-[#6A01E1] max-lg:hidden" />
                                </div>
                                <div className="ml-4 w-5/12 flex max-lg:w-full max-lg:ml-0 max-lg:pt-2">{service.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
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

