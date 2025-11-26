import "@/app/globals.css";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from 'next-themes'; 
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import JsonLd from "@/components/SEO/JsonLd";

import { Metadata, Viewport } from "next"; 

const manrope = Manrope({ 
    weight: ['300', '400', '500', '700', '800'],
    subsets: ["latin"],
    variable: '--font-manrope',
    display: 'swap',
});

// --- SEO Metadata ---
const origin = 'https://swiftscale.com.ng';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1.0,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#222529' },
    ],
};

export const metadata: Metadata = {
    title: {
        default: "SwiftScale Consult - Driving Strategic Growth",
        template: "%s | SwiftScale Consult",
    },
    description: "SwiftScale - Your Partner in Growth. Specialists in digital transformation and strategic consulting.",

    icons: {
        icon: [
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};


// --- Root Layout Component (Server Component) ---
export default async function RootLayout({ children }: PropsWithChildren) {
    const orgData = {
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
    };

    return (
        <html lang="en" className={`${manrope.variable}`}>
            
            <body
                className={`${manrope.className} antialiased min-h-screen bg-white text-black dark:bg-custom-black dark:text-white`}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div
                        className="bg-white text-black dark:bg-custom-black dark:text-white bg-cover w-full h-auto overflow-x-hidden"
                    >
                        {/* JSON-LD is fine as a component */}
                        <JsonLd
                            id="ld-site"
                            data={[orgData]}
                        />
                        <Header />
                        <main id="main-content" tabIndex={-1} className="outline-none w-full min-h-[calc(100vh-56px)] pt-14">
                            <div className="w-full overflow-x-hidden h-auto block py-10">{children}</div>
                            <Footer />
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}