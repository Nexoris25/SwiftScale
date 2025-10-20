"use client";
import React from "react";
import DImage2 from '@/asset/image/seo-const-banner.jpg';
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HrBg from '@/asset/image/hr-consulting-bg-purple.png';
import X from '@/asset/svg/x.svg';


export const SEOConsulting: React.FC = () => {
    return (
        <section className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-16" role="region" aria-labelledby="seo-consulting-heading">
            {/* Decorative Blob */}
            <img
                src={typeof HrBg === 'string' ? HrBg : HrBg.src}
                alt=""
                aria-hidden="true"
                className="absolute w-[80%] -bottom-48 max-lg:hidden aspect-square z-0 pointer-events-none"
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                <h1 id="seo-consulting-heading" className="text-black dark:text-white text-4xl md:text-5xl mb-4 text-center font-monument-ultrabold">
                    Seo Consulting
                </h1>
                <p className="text-black dark:text-white/80 text-center mb-8">
                   Have a consultation with us, Let us know how we can help you boost your online 
                    <br />
                    presence and drive sales to your Business.
                </p>
                <button type="button" className=" bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center" aria-label="Get in touch about SEO consulting">Get in Touch</button>
                <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5' role='group' aria-label='Social media icons'>
                    <Instagram className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                    <Facebook className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                    <Linkedin className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                    <X className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                </div>
                {/* Images */}
                <div className="w-full flex flex-row mt-2 p-10 max-lg:px-4 justify-center items-center">
                    <img
                        src={typeof DImage2 === 'string' ? DImage2 : DImage2.src}
                        alt="Design Service 2"
                        className="rounded-xl aspect-video max-h-[600px] max-lg:max-h-auto w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};