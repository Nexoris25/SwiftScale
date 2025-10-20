"use client";
import React from "react";
import HrImage1 from '@/asset/image/software-development-service.png';
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HrBg from '@/asset/image/hr-consulting-bg-purple.png';
import X from '@/asset/svg/x.svg';
import Flutter from '@/asset/svg/flutter.svg';
import Python from '@/asset/svg/python.svg';
import Dart from '@/asset/svg/dart.svg';
import Firebase from '@/asset/svg/firebase.svg';
import Html5 from '@/asset/svg/html5.svg';
import Tailwind from '@/asset/svg/tailwind.svg';


const techIcons = [
    { src: <Flutter />, alt: "Flutter" },
    { src: <Python />, alt: "Python" },
    { src: <Dart />, alt: "Dart" },
    { src: <Firebase />, alt: "Firebase" },
    { src: <Html5 />, alt: "HTML5" },
    { src: <Tailwind />, alt: "Tailwind CSS" },
];

export const SoftwareDevelopmentServices: React.FC = () => {
    return (
        <>
            <section className="relative dark:bg-[#363636] bg-[#F8F8F8] w-full min-h-[600px] flex flex-col items-center rounded-lg justify-center px-4 py-16" role="region" aria-labelledby="sd-heading">
                {/* Decorative Blob */}
                <img
                    src={typeof HrBg === 'string' ? HrBg : HrBg.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute w-[80%] -bottom-48 max-lg:hidden aspect-square z-0 pointer-events-none"
                />
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                    <h1 id="sd-heading" className="text-black dark:text-white text-4xl md:text-5xl mb-4 text-center font-monument-ultrabold">
                        Software Development Services
                    </h1>
                    <p className="text-black dark:text-white/80 text-center mb-8">
                        Building mobile apps, web apps, and websites that are functional, beautiful,
                        <br />
                        and user-friendly.
                    </p>
                    <button type="button" className=" bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 cursor-pointer text-center" aria-label="Get in touch about software development">Get in Touch</button>
                    <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center py-5' role='group' aria-label='Social media icons'>
                        <Instagram className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                        <Facebook className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                        <Linkedin className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                        <X className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                    </div>
                    {/* Images */}
                    <div className="w-full flex justify-center items-center p-10">
                        <img
                            src={typeof HrImage1 === 'string' ? HrImage1 : HrImage1.src}
                            alt="Software development showcase image"
                            className="rounded-lg aspect-video w-full max-w-[900px] object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full h-auto">
                <TechStackIcons />
            </section>
        </>
    );
};

export const TechStackIcons: React.FC = () => (
    <div className="flex flex-row w-full items-center justify-center gap-12 py-8 bg-transparent">
        {techIcons.map((icon) => (
            <div key={icon.alt} className="flex flex-col items-center mx-auto">{icon.src}</div>
        ))}
    </div>
);