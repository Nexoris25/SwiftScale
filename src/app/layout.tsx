"use client";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from 'next-themes';
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, ...props }: PropsWithChildren) {


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
                <meta name="description" content="Elwalkre E-commerce Platform - Shop for the best products online" />
                <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#222529" media="(prefers-color-scheme: dark)" />
            </head>
            <body
                className={`${inter.className} h-screen w-screen overflow-scroll bg-white text-black dark:bg-custom-black dark:text-white`}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div
                        className="bg-white text-black dark:bg-custom-black dark:text-white bg-cover w-screen h-screen overflow-hidden"
                    >
                        <div id="main-content" tabIndex={-1} className="outline-none">
                            <Header />
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
