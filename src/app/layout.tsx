"use client";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from 'next-themes';
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import JsonLd from "@/components/SEO/JsonLd";

const inter = Inter({ subsets: ["latin"] });

const monumentExtended = localFont({
    src: [
        {
            path: '../../public/fonts/MonumentExtended-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/MonumentExtended-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/MonumentExtended-Ultrabold.otf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-monument',
    display: 'swap',
});

export default function RootLayout({ children, ...props }: PropsWithChildren) {
    const origin = 'https://example.com';

    return (
        <html lang="en">
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="description" content="SwiftScale - Your Partner in Growth" />
                <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#222529" media="(prefers-color-scheme: dark)" />
            </head>
            <body
                className={`${inter.className} ${monumentExtended.variable} h-screen w-screen overflow-scroll bg-white text-black dark:bg-custom-black dark:text-white`}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div
                        className="bg-white text-black dark:bg-custom-black dark:text-white bg-cover w-screen h-auto overflow-x-hidden"
                    >
                        <JsonLd
                            id="ld-site"
                            data={[
                                {
                                    "@context": "https://schema.org",
                                    "@type": "Organization",
                                    "@id": `${origin}/#organization`,
                                    name: "SwiftScale",
                                    url: `${origin}/`,
                                    logo: `${origin}/favicon-32x32.png`,
                                    sameAs: [
                                        "https://www.linkedin.com/company/swiftscale",
                                        "https://instagram.com/swiftscale",
                                        "https://x.com/swiftscale",
                                        "https://facebook.com/swiftscale"
                                    ],
                                    contactPoint: {
                                        "@type": "ContactPoint",
                                        contactType: "customer support",
                                        availableLanguage: ["English"],
                                        url: `${origin}/contact`
                                    },
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress: "Plot 952B Idejo Street",
                                        addressLocality: "Lagos",
                                        addressRegion: "LA",
                                        addressCountry: "NG"
                                    }
                                },
                            ]}
                        />
                        <Header />
                        <div id="main-content" tabIndex={-1} className="outline-none w-screen h-screen overflow-y-auto  pt-14">
                            <div className="w-screen overflow-x-hidden h-auto block py-10">{children}</div>
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
