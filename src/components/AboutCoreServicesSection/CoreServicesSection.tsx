"use client";

import React from "react"; 
import Image from "next/image";
import Link from "next/link"; 
import JsonLd from "@/components/SEO/JsonLd";

const Core1 = "/asset/image/core-1.webp";
const Core2 = "/asset/image/core-2.webp";
const Core3 = "/asset/image/core-3.webp";
const Core4 = "/asset/image/core-4.webp";
const Core5 = "/asset/image/core-5.webp";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  url: string; 
}

const services: ServiceItem[] = [
  {
    title: "HR Consulting",
    description:
      "Offering tailored solutions, from recruitment and staffing to specialised administrative services.",
    image: Core1,
    url: "/hr-consulting",
  },
  {
    title: "Software Development",
    description:
    "Building mobile apps, web apps, and websites that are functional and scalable.",
    image: Core2,
    url: "/software-development",
  },
  {
    title: "Design",
    description:
      "Creating brand identities that stand out, with services ranging from graphics to UI/UX.",
    image: Core3,
    url: "/design",
  },
  {
    title: "Legal",
    description:
      "Creating brand identities that stand out, with services ranging from legal advisory to documentation.",
    image: Core4,
    url: "/legal-services",
  },
  {
    title: "SEO Consulting",
    description:
      "We offer Content & Writing Services. Producing SEO rich content for your business.",
    image: Core5,
    url: "/seo-consultations", 
  },
];

export default function CoreServicesSection() {
  
  // Generate JSON-LD schema for each service
  const serviceSchema = services.map((service) => ({
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: service.url,
  }));

  return (
    <section
      className="w-full py-16 flex flex-col items-center px-6 max-sm:px-4 max-w-7xl mx-auto"
      role="region"
      aria-labelledby="core-services-heading"
    >
      {/* Updated JSON-LD to include specific Service schema for better SEO context */}
      <JsonLd
        id="ld-core-services-schema"
        data={{
          "@context": "https://schema.org",
          "@graph": serviceSchema,
        }}
      />

      <h2
        id="core-services-heading"
        className="text-black dark:text-white font-monument-ultrabold text-3xl max-lg:text-2xl mb-12 text-center tracking-wide"
      >
        5 Core Services
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 w-full"
        role="list"
        aria-label="Core services links"
      >
        {services.map((service, idx) => {
          
          return (
            <Link
              key={idx}
              href={service.url}
              role="listitem"
              aria-label={`View details for ${service.title}`}
              className={`
                relative rounded-3xl overflow-hidden shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6B18E7]/50
                transition-all duration-300 flex flex-col justify-end cursor-pointer group hover:shadow-2xl hover:scale-[1.01]
                
                no-underline 
                
                /* Consistent Height for all cards */
                h-[420px] sm:h-[400px] max-[350px]:h-[330px]
              `}
            >
              <Image
                src={service.image}
                width={600}
                height={800} 
                alt={service.title + " service page thumbnail"} 
                className="object-cover w-full h-full absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 20vw"
                priority={idx === 0} 
              />

              {/* Dark Overlay*/}
              <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/70" aria-hidden="true" />

              <div 
                className="relative z-10 p-6 flex flex-col justify-end h-full"
              >
                {/* Heading */}
                <h3 className="text-white text-lg mb-2">
                  {service.title}
                </h3>

                <p
                  className="text-white text-sm leading-relaxed line-clamp-3 opacity-90"
                >
                  {service.description}
                </p>
                
                {/* Visual cue that it is a link */}
                <span className="font-poppins text-sm text-purple-300 mt-2 transition-colors duration-300 group-hover:text-white">
                    View Details &rarr;
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}