"use client";

import Link from "next/link";

export default function InsuranceGetStarted() {
    return (
        <section className="px-4 py-32 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-black text-primary tracking-tighter">
                    Get started
                </h2>
                <Link href="/find-location" className="btn-navy w-full lg:w-auto px-16 py-5 text-xl shadow-2xl shadow-primary/10">
                    Get An Insurance Quote
                </Link>
            </div>
        </section>
    );
}
