import React from "react";
import ContactMapImage from '@/asset/image/contact-map.png';

export default function ContactMap() {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-center rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
                src={typeof ContactMapImage === "string" ? ContactMapImage : ContactMapImage.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />
        </section>
    );
}