"use client";
import React from "react";
import Diamond from '@/asset/svg/diamond.svg';
import Flower from '@/asset/svg/flower.svg';
import Infinity from '@/asset/svg/infinity.svg';

const features = [
  {
    icon: Infinity,
    title: "Unlock the Power of Top Talent",
    description:
      "We connect your business with highly skilled professionals who drive growth, innovation, and efficiency—helping you scale faster without compromise.",
  },
  {
    icon: Diamond,
    title: "Tailored Solutions for Lasting Impact",
    description:
      "Every business is unique. That's why we provide customized recruitment and consulting strategies designed to meet your goals, strengthen your team, and position you for long-term success.",
  },
  {
    icon: Flower,
    title: "Scale with Confidence",
    description:
      "From identifying the right talent to optimizing your workforce, SwiftScale Consult equips you with the people and strategies needed to stay ahead in today's competitive market.",
  },
];

export default function ScaleConsultSection() {
  return (
    <section className="w-full py-20 px-2 flex flex-col items-center">
      <h2 className="font-monument-ultrabold text-4xl max-w-4xl mx-auto mb-16 text-center tracking-wide text-black dark:text-white">
        How can SwiftScale Consult scale and help your business
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-start text-start justify-start gap-4">
            <div className="flex items-start justify-start max-lg:items-center max-lg:justify-center max-lg:w-full rounded-xl mb-4">
              <feature.icon className="w-16 h-16" />
            </div>
            <h3 className="font-monument-ultrabold text-2xl mb-4 text-black dark:text-white">{feature.title}</h3>
            <p className="font-poppins text-base leading-relaxed text-black dark:text-white">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}