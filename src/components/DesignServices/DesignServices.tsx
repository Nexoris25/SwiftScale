"use client";
import React from "react";
import DImage2 from '@/asset/image/design-service-2.jpg';
import DImage3 from '@/asset/image/design-service-3.jpg';
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HrBg from '@/asset/image/hr-consulting-bg-purple.png';
import X from '@/asset/svg/x.svg';


export const DesignServices: React.FC = () => {
    return (
        <section className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-16">
            {/* Decorative Blob */}
            <img
                src={typeof HrBg === 'string' ? HrBg : HrBg.src}
                alt=""
                className="absolute w-[80%] -bottom-48 max-lg:hidden aspect-square z-0 pointer-events-none"
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                <h1 className="text-black dark:text-white text-4xl md:text-5xl mb-4 text-center font-monument-ultrabold">
                    Design Services
                </h1>
                <p className="text-black dark:text-white/80 text-center mb-8">
                    Creating brand identities that stand out, with services ranging from logo design and social
                    <br />
                    media templates to full corporate and personal branding packages.
                </p>
                <div className=" bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center">Get in Touch</div>
                <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5'>
                    <Instagram className="w-12 lg:w-16 h-12 lg:h-16" />
                    <Facebook className="w-12 lg:w-16 h-12 lg:h-16" />
                    <Linkedin className="w-12 lg:w-16 h-12 lg:h-16" />
                    <X className="w-12 lg:w-16 h-12 lg:h-16" />
                </div>
                {/* Images */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-2 p-10">
                    <video
                        // controls
                        src='/assets/design-service-1.mp4'
                        className="rounded-xl aspect-[3/4] w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <img
                        src={typeof DImage2 === 'string' ? DImage2 : DImage2.src}
                        alt="Design Service 2"
                        className="rounded-xl aspect-[3/4] w-full object-cover"
                    />
                    <img
                        src={typeof DImage3 === 'string' ? DImage3 : DImage3.src}
                        alt="Design Service 3"
                        className="rounded-xl aspect-[3/4] w-full object-cover"
                    />
                    <video
                        // controls
                        src='/assets/design-service-4.mp4'
                        className="rounded-xl aspect-[3/4] w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};