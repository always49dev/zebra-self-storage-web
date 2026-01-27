"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Contact Section */}
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-black mb-8 tracking-tight">Call 0800 000 0000</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-primary px-10 py-3 rounded-full font-black text-sm hover:bg-slate-50 transition-all active:scale-95">
                            Get quote
                        </button>
                        <button className="bg-white text-primary px-10 py-3 rounded-full font-black text-sm hover:bg-slate-50 transition-all active:scale-95">
                            Find store
                        </button>
                        <button className="bg-white text-primary px-10 py-3 rounded-full font-black text-sm hover:bg-slate-50 transition-all active:scale-95">
                            Live chat
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/20 my-10" />

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Near Me */}
                    <div>
                        <h3 className="text-xl font-black mb-8 tracking-tight">Self storage near me</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Torquay</Link></li>
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Paignton</Link></li>
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Exeter</Link></li>
                            </ul>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Plymouth</Link></li>
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Newton Abbot</Link></li>
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Bristol</Link></li>
                            </ul>
                            <ul className="space-y-4">
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Cardiff</Link></li>
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">London</Link></li>
                                <li><Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">View All</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Types */}
                    <div>
                        <h3 className="text-xl font-black mb-8 tracking-tight">Self storage types</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Personal</Link>
                            <Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Business</Link>
                            <Link href="#" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Student</Link>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-xl font-black mb-8 tracking-tight">About</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <ul className="space-y-4">
                                <li><Link href="/about" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Who we are</Link></li>
                                <li><Link href="/about" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Our vision</Link></li>
                                <li><Link href="/contact" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Contact Us</Link></li>
                            </ul>
                            <ul className="space-y-4">
                                <li><Link href="/careers" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Careers</Link></li>
                                <li><Link href="/privacy" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">T&Cs</Link></li>
                            </ul>
                            <ul className="space-y-4">
                                <li><Link href="/pricing" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">How it works</Link></li>
                                <li><Link href="/sizing-guide" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Unit Size Guide</Link></li>
                                <li><Link href="/insurance" className="text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">Insurance Info</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mb-8" />

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="h-4 w-48 bg-white/20 rounded-full" aria-hidden="true" /> {/* Placeholder for brand bar */}
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-white/70 transition-colors"><Facebook className="w-5 h-5 fill-current" /></Link>
                        <Link href="#" className="hover:text-white/70 transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-white/70 transition-colors">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                            </svg>
                        </Link>
                        <Link href="#" className="hover:text-white/70 transition-colors"><Youtube className="w-5 h-5 fill-current" /></Link>
                        <Link href="#" className="hover:text-white/70 transition-colors"><Mail className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
