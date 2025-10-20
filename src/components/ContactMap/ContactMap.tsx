import React from "react";
import ContactMapImage from '@/asset/image/contact-map.png';

export default function ContactMap() {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-center rounded-3xl overflow-hidden" role="region" aria-label="Location map">
            {/* Background Image */}
            <img
                src={typeof ContactMapImage === "string" ? ContactMapImage : ContactMapImage.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            />
        </section>
    );
}