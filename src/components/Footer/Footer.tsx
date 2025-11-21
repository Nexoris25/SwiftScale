"use client";
import * as React from "react";
import Logo from "@/asset/svg/logo.svg";
import Instagram from "@/asset/svg/instagram.svg";
import Facebook from "@/asset/svg/facebook.svg";
import Linkedin from "@/asset/svg/linkedin.svg";
import EmailFooter from "@/asset/svg/email-footer-white.svg";
import LocationFooter from "@/asset/svg/location-footer-white.svg";
import X from "@/asset/svg/x.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
    const year = new Date().getFullYear();
    const navigate = useRouter();

    return (
        <footer
            className="w-full max-w-full overflow-hidden bg-custom-white flex flex-col items-start justify-center"
            role="contentinfo"
            aria-label="Footer"
        >
            {/* Top Section */}
            <div className="w-full bg-[#6A01E1] text-white py-10 lg:py-14 px-4">
                <div className="container mx-auto max-w-[1400px] flex flex-col lg:flex-row gap-10 lg:gap-0 px-2">

                    {/* Logo + Social */}
                    <div className="flex flex-col w-full lg:w-5/12 gap-8">
                        <div className="flex flex-col gap-6 items-center lg:items-start">

                            {/* Logo */}
                            <div
                                onClick={() => navigate.push("/")}
                                className="flex items-center cursor-pointer gap-3"
                            >
                                <Logo className="h-14 w-14 sm:h-16 sm:w-16" />
                                <div className="flex flex-col leading-none">
                                    <div className="font-poppins font-medium text-xl sm:text-2xl">
                                        SwiftScale
                                    </div>
                                    <div className="font-poppins font-medium text-xl sm:text-2xl">
                                        Consult
                                    </div>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div
                                className="flex flex-row gap-5 sm:gap-6 items-center"
                                role="group"
                                aria-label="Social media links"
                            >
                                {/* Standard icon size: 40px mobile, 48px desktop */}
                                <Instagram
                                    onClick={() =>
                                        navigate.push(
                                            "https://www.instagram.com/swiftscale_consult?igsh=OWtuaWx0ZnQ1aWw0"
                                        )
                                    }
                                    className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer transition-transform duration-200 hover:scale-110"
                                />
                                <Facebook
                                    onClick={() =>
                                        navigate.push(
                                            "https://www.facebook.com/share/1BPjVCVArv/?mibextid=wwXIfr"
                                        )
                                    }
                                    className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer transition-transform duration-200 hover:scale-110"
                                />
                                <Linkedin
                                    onClick={() =>
                                        navigate.push(
                                            "https://www.linkedin.com/company/swiftscale-consult"
                                        )
                                    }
                                    className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer transition-transform duration-200 hover:scale-110"
                                />
                                <X
                                    onClick={() =>
                                        navigate.push(
                                            "https://x.com/swiftscale_con?s=11&t=4EAGtqs2PYQtDji4VQY7Ng"
                                        )
                                    }
                                    className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer transition-transform duration-200 hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Links & Contact */}
                    <div className="flex flex-col lg:flex-row w-full lg:w-6/12 gap-10 lg:gap-28">

                        {/* Company */}
                        <div className="flex flex-col gap-4 items-center lg:items-start">
                            <h2 className="font-monument-bold text-base sm:text-lg">Company</h2>
                            <Link
                                className="text-white no-underline cursor-pointer font-light text-sm sm:text-base hover:text-gray-200"
                                href="/about"
                            >
                                About Us
                            </Link>
                            <Link
                                className="text-white no-underline cursor-pointer font-light text-sm sm:text-base hover:text-gray-200"
                                href="/contact"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-8 lg:gap-6 w-full">

                            {/* Location */}
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <LocationFooter className="h-6 w-6 sm:h-8 sm:w-8" />
                                <div className="flex flex-col gap-1 sm:gap-2 text-center lg:text-left">
                                    <h2 className="font-monument-bold text-base sm:text-lg">
                                        Location
                                    </h2>
                                    <p className="font-light text-sm sm:text-base">
                                        Plot 952B Idejo Street, VI Lagos.
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <EmailFooter className="h-6 w-6 sm:h-8 sm:w-8" />
                                <div className="flex flex-col gap-1 sm:gap-2 text-center lg:text-left">
                                    <h2 className="font-monument-bold text-base sm:text-lg">
                                        Email Address
                                    </h2>
                                    <p className="font-light text-sm sm:text-base break-words">
                                        info@swiftscale.com.ng
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full max-w-full flex text-white bg-custom-black dark:text-black dark:bg-custom-white h-14 justify-center items-center px-4">
                <div className="font-poppins text-xs sm:text-sm md:text-base text-center">
                    © {year} SwiftScale. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
