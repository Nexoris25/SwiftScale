"use server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Title",
        description: "Decription",
        openGraph: {
            title: "Title",
            description: "Decription",
        },
        twitter: {
            title: "Title",
            description: "Decription",
        },
    }
};

export default async function Page() {
    "use client";
    return (
        <div className="bg-white text-black dark:bg-custom-black dark:text-white flex flex-col items-center justify-center min-h-screen py-2">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold">Welcome to the Home Screen</h1>
                <p className="mt-4 text-lg">This is the main landing page of the application.</p>
            </div>
        </div>
    )
};

