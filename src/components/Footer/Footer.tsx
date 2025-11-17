"use client";
import * as React from 'react';
import Logo from '@/asset/svg/logo.svg';
import Instagram from '@/asset/svg/instagram.svg';
import Facebook from '@/asset/svg/facebook.svg';
import Linkedin from '@/asset/svg/linkedin.svg';
import EmailFooter from '@/asset/svg/email-footer-white.svg';
import LocationFooter from '@/asset/svg/location-footer-white.svg';
import X from '@/asset/svg/x.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import LogoDark from '@/asset/svg/logo-full-dark.svg';

export interface IFooterProps { }

export function Footer(props: IFooterProps) {
    const year = new Date().getFullYear()
    const navigate = useRouter();
    return (
        <footer className='w-screen bg-custom-white flex flex-col items-start justify-center' role="contentinfo" aria-label="Footer">
            <div className='w-screen flex bg-[#6A01E1] text-white py-8 lg:py-14 px-4 lg:px-0'>
                <div className='container mx-auto flex flex-col lg:flex-row flex-grow gap-8 lg:gap-0 px-4 py-4'>
                    {/* Logo and Social Media Section */}
                    <div className='flex flex-col items-start justify-start w-full lg:w-5/12'>
                        <div className='flex items-start max-lg:mx-auto justify-start flex-col gap-6 lg:gap-4'>
                            <div onClick={() => navigate.push('/')} className='flex cursor-pointer max-lg:mx-auto items-center justify-center flex-row gap-3' aria-label='Go to homepage'>
                                <Logo className='h-16 w-16' aria-hidden="true" />
                                <div className='flex flex-col h-14 justify-start items-start'>
                                    <div className='flex font-poppins font-medium text-xl lg:text-2xl leading-[1] tracking-wide w-full'>SwiftScale</div>
                                    <div className='flex font-poppins font-medium text-xl lg:text-2xl leading-[1] tracking-wide w-full'>Consult</div>
                                </div>
                                  {/* <LogoDark className='h-10 w-auto lg:h-14 lg:w-auto block dark:block' aria-hidden="true" /> */}
                            </div>
                            <div className='gap-4 lg:gap-2 flex flex-row justify-start lg:justify-center items-center' role='group' aria-label='Follow us on social media'>
                                <Instagram onClick={() => navigate.push('https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                                <Facebook onClick={() => navigate.push('https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                                <Linkedin onClick={() => navigate.push('https://www.linkedin.com/company/swiftscale-consult')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                                <X onClick={() => navigate.push('https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng')} className="w-12 lg:w-16 h-12 lg:h-16" aria-hidden="true" />
                            </div>
                        </div>
                    </div>

                    {/* Links and Contact Section */}
                    <div className='lg:w-6/12 w-full flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-28'>
                        {/* Company Links */}
                        <div className='flex flex-col gap-4 max-lg:mx-auto w-auto'>
                            <h2 className='text-base lg:text-lg max-lg:mx-auto font-monument-bold'>Company</h2>
                            <Link className='text-white no-underline max-lg:mx-auto cursor-pointer font-thin hover:text-gray-200' href='/about'>About Us</Link>
                            <Link className='text-white no-underline max-lg:mx-auto cursor-pointer font-thin hover:text-gray-200' href='/contact'>Contact Us</Link>
                        </div>

                        {/* Contact Information */}
                        <div className='flex flex-col gap-6 lg:gap-4 w-auto max-lg:mx-auto lg:w-auto'>
                            {/* Location */}
                            <div className='flex flex-col lg:flex-row items-start justify-start gap-4'>
                                <div className='flex items-center max-lg:mx-auto' aria-hidden="true">
                                    <LocationFooter className='h-6 lg:h-8 w-6 lg:w-8' />
                                </div>
                                <div className='flex flex-col gap-2 lg:gap-4 max-lg:mx-auto'>
                                    <h2 className='text-base lg:text-lg font-monument-bold max-lg:mx-auto'>Location</h2>
                                    <p className='text-white no-underline cursor-pointer font-thin'>Plot 952B Idejo Street, VI Lagos.</p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className='flex flex-col lg:flex-row items-start justify-start gap-4'>
                                <div className='flex items-center max-lg:mx-auto' aria-hidden="true">
                                    <EmailFooter className='h-6 lg:h-8 w-6 lg:w-8' />
                                </div>
                                <div className='flex flex-col gap-2 lg:gap-4 max-lg:mx-auto'>
                                    <h2 className='text-base lg:text-lg font-monument-bold max-lg:mx-auto'>Email Address</h2>
                                    <p className='text-white no-underline cursor-pointer font-thin break-words'>info@swiftscale.com.ng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='w-full flex dark:text-black text-white dark:bg-custom-white bg-custom-black flex-row h-14 justify-center items-center px-4 lg:px-0'>
                <div className='font-poppins font-normal max-lg:mx-auto text-sm lg:text-xl text-center'>
                    © {year} SwiftScale. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}