import React from "react";
import ApplyConsultImage from '@/asset/image/apply-consult.jpg';

export default function ConsultationBanner() {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-center rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
                src={typeof ApplyConsultImage === "string" ? ApplyConsultImage : ApplyConsultImage.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
                <h1 className="text-white font-monument-ultrabold text-3xl md:text-4xl text-center mb-10 leading-tight px-4">
                    Let's discuss making<br />something together
                </h1>
                <a
                    href="#"
                    className="text-white font-poppins text-2xl flex no-underline items-center gap-2"
                >
                    Apply for consultation <span className="text-3xl">&rarr;</span>
                </a>
            </div>
        </section>
    );
}