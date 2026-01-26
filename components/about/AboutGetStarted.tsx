"use client";

import Link from "next/link";

export default function AboutGetStarted() {
    return (
        <section className="px-4 py-24 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">
                    Get started
                </h2>
                <Link href="/find-location" className="btn-navy w-full max-w-lg py-5 text-xl">
                    Find your store
                </Link>
            </div>
        </section>
    );
}
