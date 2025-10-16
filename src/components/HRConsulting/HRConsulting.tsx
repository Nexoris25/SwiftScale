"use client";
import React from "react";
import HrImage1 from '@/asset/image/hr-consulting-1.png';
import HrImage2 from '@/asset/image/hr-consulting-2.png';
import HrImage3 from '@/asset/image/hr-consulting-3.png';
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HrBg from '@/asset/image/hr-consulting-bg-purple.png';
import X from '@/asset/svg/x.svg';

export const HRConsulting: React.FC = () => {
    return (
        <section className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-16">
            {/* Decorative Blob */}
            <img
                src={typeof HrBg === 'string' ? HrBg : HrBg.src}
                alt=""
                className="absolute w-[80%] -bottom-48 aspect-square z-0 pointer-events-none"
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                <h1 className="text-black dark:text-white text-4xl md:text-5xl mb-4 text-center font-monument-ultrabold">
                    HR Consulting
                </h1>
                <p className="text-black dark:text-white/80 text-center mb-8">
                    We provide tailored HR strategies that align people, culture, and business goals
                    <br />
                    —helping your organization attract, retain, and grow top talent.
                </p>
                <div className=" bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center">Get in Touch</div>
                <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5'>
                    <Instagram className="w-12 lg:w-16 h-12 lg:h-16" />
                    <Facebook className="w-12 lg:w-16 h-12 lg:h-16" />
                    <Linkedin className="w-12 lg:w-16 h-12 lg:h-16" />
                    <X className="w-12 lg:w-16 h-12 lg:h-16" />
                </div>
                {/* Images */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-2 p-10">
                    <img
                        src={typeof HrImage1 === 'string' ? HrImage1 : HrImage1.src}
                        alt="HR Consulting 1"
                        className="rounded-xl aspect-square w-full object-cover"
                    />
                    <img
                        src={typeof HrImage2 === 'string' ? HrImage2 : HrImage2.src}
                        alt="HR Consulting 2"
                        className="rounded-xl aspect-square w-full object-cover"
                    />
                    <img
                        src={typeof HrImage3 === 'string' ? HrImage3 : HrImage3.src}
                        alt="HR Consulting 3"
                        className="rounded-xl aspect-square w-full object-cover"
                    />
                </div>
            </div>
        </section>);
};