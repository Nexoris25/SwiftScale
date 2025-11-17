"use client";
import * as React from 'react';
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import Herbary from '@/asset/svg/herbary.svg';
import JoyFilled from '@/asset/svg/joy-filled.svg';
import Mintyn from '@/asset/svg/mintyn.svg';
import MintynLight from '@/asset/svg/mintyn-dark.svg';
import Clinch from '@/asset/svg/clinch.svg';
import ClinchLight from '@/asset/svg/clinch-dark.svg';
import HeroLandingImg from '@/asset/image/hero-landing.jpg';
import CorkPro from '@/asset/svg/corkpro.svg';
import N from '@/asset/svg/n.svg';
import NDark from '@/asset/svg/n-white.svg';
import X from '@/asset/svg/x.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FacebookLight from '@/asset/svg/facebook-lightmode.svg';
import InstagramLight from '@/asset/svg/instagram-lightmode.svg';
import LinkedinLight from '@/asset/svg/linkedin-lightmode.svg';
import XLight from '@/asset/svg/x-lightmode.svg';
import { useTheme } from "next-themes";
export interface ILandingHeroProps {
}

function LandingHero(props: ILandingHeroProps) {
    const { theme } = useTheme();
    const navigate = useRouter();
    return (
        <div className="p-10 max-lg:p-4 dark:bg-[#363636] bg-[#F8F8F8] text-black dark:text-white rounded-lg flex flex-col items-start justify-start gap-1 w-full">
            <div className="flex flex-row max-lg:flex-col w-full justify-start items-center">
                <div className="text-black dark:text-white font-monument-bold text-5xl max-lg:text-2xl w-7/12 p-12 pl-0 pr-22 max-lg:w-full">Powering Businesses with People, Technology & Identity</div>
                <div className="w-5/12 max-lg:w-full flex flex-col items-start justify-start">
                    <div className="font-poppins">Helping you find skilled candidates, in-demand jobs and the solutions you need to help you do your best work yet.</div>
                    <Link
                        href="/contact"
                        className="mt-4 bg-primary text-white px-5 max-lg:w-full py-3 rounded-full hover:bg-purple-700 no-underline transition-colors duration-300 cursor-pointer text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        aria-label="Get in touch with SwiftScale"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
            <div className="flex flex-row w-full max-lg:hidden justify-end items-center">
                <div className='gap-1 flex flex-row justify-start lg:justify-center items-center'>
                    <>
                        <Instagram onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" aria-hidden="true" />
                        <Facebook onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" aria-hidden="true" />
                        <Linkedin onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" aria-hidden="true" />
                        <X onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16 dark:block hidden" aria-hidden="true" />
                    </>
                    <>
                        <InstagramLight onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" aria-hidden="true" />
                        <FacebookLight onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" aria-hidden="true" />
                        <LinkedinLight onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" aria-hidden="true" />
                        <XLight onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16 dark:hidden block" aria-hidden="true" />
                    </>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center px-4 items-center max-lg:px-0 max-lg:py-5">
                <img
                    src={HeroLandingImg.src}
                    alt="Hero Landing"
                    fetchPriority="high"
                    className="rounded-2xl object-cover w-full max-h-[400px] aspect-video max-lg:min-h-[300px]"
                />
            </div>
            <div className="w-full flex max-lg:flex-wrap max-lg:grid max-lg:grid-cols-3 justify-between items-center">
                <div className="mx-auto"><Herbary className="max-lg:w-20" /></div>
                <div className="mx-auto"><JoyFilled className="max-lg:w-20" /></div>
                <div className="mx-auto">{theme === "dark" ? <Mintyn className="max-lg:w-20" /> : <MintynLight className="max-lg:w-20" />}</div>
                <div className="mx-auto">{theme === "dark" ? <Clinch className="max-lg:w-20" /> : <ClinchLight className="max-lg:w-20" />}</div>
                <div className="mx-auto"><CorkPro className="max-lg:w-20" /></div>
                <div className="mx-auto">{theme === "dark" ? <NDark className="max-lg:w-20" /> : <N className="max-lg:w-20" />}</div>
            </div>
        </div>
    );
}
export default LandingHero;
