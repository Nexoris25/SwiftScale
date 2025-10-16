"use client";
import React from "react";
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import HrBg from '@/asset/image/hr-consulting-bg-purple.png';
import X from '@/asset/svg/x.svg';
import Jvf from '@/asset/svg/jvf.svg';
import Cac from '@/asset/svg/cac.svg';
import Son from '@/asset/svg/son.svg';
import Nda from '@/asset/svg/nda.svg';


export const LegalServices: React.FC = () => {
  const services = [
    {
      icon: <Cac />,
      title:
        "Business Name Registration, Company Incorporation (LLC, PLC, NGO, etc), Filing Annual Returns, Change of Directors/ShareHolders, Change of Company Name or Address, Post-Incorporation Filings",
    },
    {
      icon: <Nda />,
      title:
        "Offer Letters for Staff, Employment Contracts, Employee Handbook/Policies, Non-Disclosure Agreements (NDA), Termination & Exit Letters",
    },
    {
      icon: <Jvf />,
      title:
        "Service Agreements, Partnership Agreements (Joint Venture, Founders Agreement), Deed of Assignment, Contract of Sale, Search Report, Deed of Gift, Memorandum of Understanding (MoU)",
    },
    {
      icon: <Son />,
      title:
        "Compliance & Legal Advisor, Data Protection Compliance (NDPR), FCCPC Approval, Money Lenders Licence.",
    },
  ];
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
          Legal Services
        </h1>
        <p className="text-black dark:text-white/80 text-center mb-8">
          From contracts to compliance, we simplify legal complexities so you can focus
          <br />
          on growing your business.
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
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};