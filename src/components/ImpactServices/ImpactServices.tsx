import React from "react";
import DesignX from '@/asset/svg/design-x.svg';

export const ImpactServices: React.FC = () => (
  <section className="w-full py-12 px-4 flex flex-col items-center bg-transparent">
    <h2 className="text-black dark:text-white text-3xl md:text-5xl text-center font-monument-ultrabold mb-2">
      Proven Result, Real Impact
    </h2>
    <p className="text-black dark:text-white/80 text-center max-w-2xl mb-10 leading-relaxed">
      Our designs don’t just look good—they solve real problems, enhance user experiences, and
      deliver measurable results that move your business forward.
    </p>
    <div className="flex flex-col w-full gap-4 justify-start items-start">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* UI/UX Design */}
        <div className="bg-[#0000D2] w-full lg:w-2/3 relative rounded-xl px-8 flex flex-row items-center justify-between min-h-[350px] text-black dark:text-white overflow-hidden">
          <div className="flex flex-col w-2/3 max-lg:w-full py-10 justify-end h-full items-start">
            <span className="text-2xl lg:text-3xl font-monument-ultrabold mb-2">UI/UX Design</span>
            <p className="text-black dark:text-white/90 text-base mt-2">
              Lorem ipsum dolor sit amet consectetur. Vulputate cras orci interdum nam mattis non. Suspendisse aliquet auctor urna tincidunt pulvinar.
            </p>
          </div>
          {/* Decorative pattern */}
          <div className="flex w-1/3 max-lg:hidden pointer-events-none">
            <DesignX />
          </div>
        </div>
        {/* Graphics Design */}
        <div className="bg-[#EDEDED] rounded-xl p-8 lg:w-1/3 flex flex-col justify-end h-full pt-auto items-start min-h-[350px] text-[#363636]">
          <span className="text-2xl lg:text-3xl font-monument-ultrabold mb-2">Graphics Design</span>
          <p className="text-[#363636]/90 text-base mt-2">
            Lorem ipsum dolor sit amet consectetur. Vulputate cras orci interdum nam mattis non. Suspendisse aliquet auctor
          </p>
        </div>
      </div>
      {/* Bottom Row */}
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-0">
        {/* 3D Design */}
        <div className="bg-[#EDEDED] rounded-xl p-8 lg:w-1/3 flex flex-col justify-end pt-auto h-full items-start min-h-[350px] text-[#363636]">
          <span className="text-2xl lg:text-3xl font-monument-ultrabold mb-2">3D Design</span>
          <p className="text-[#363636]/90 text-base mt-2">
            Lorem ipsum dolor sit amet consectetur. Vulputate cras orci interdum nam mattis non. Suspendisse aliquet auctor.
          </p>
        </div>
        {/* Branding */}
        <div className="bg-[#D779BB] w-full lg:w-2/3 relative rounded-xl px-8 flex flex-row items-center justify-between min-h-[350px] text-black dark:text-white overflow-hidden">
          <div className="flex flex-col w-2/3 max-lg:w-full py-10 justify-end h-full items-start">
            <span className="text-2xl lg:text-3xl font-monument-ultrabold mb-2">Branding</span>
            <p className="text-white/90 text-base mt-2">
              Lorem ipsum dolor sit amet consectetur. Vulputate cras orci interdum nam mattis non. Suspendisse aliquet auctor urna tincidunt pulvinar.
            </p>
          </div>
          {/* Decorative pattern */}
          <div className="flex w-1/3 max-lg:hidden pointer-events-none">
            <DesignX />
          </div>
        </div>
      </div>
    </div>
  </section>
);