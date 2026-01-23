"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Contact Strip - Clean */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-20 pb-12 border-b border-white/10">
                    <div className="text-center md:text-left">
                        <p className="text-white/40 text-xs font-black uppercase tracking-[0.3em] mb-4">Questions? Call us free</p>
                        <h3 className="text-4xl sm:text-5xl font-black tracking-tight cursor-pointer">0800 000 0000</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        <button className="h-12 px-8 bg-white text-primary rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 active:scale-95 transition-all">Get Quote</button>
                        <button className="h-12 px-8 bg-white/10 border border-white/20 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 active:scale-95 transition-all">Find Store</button>
                        <button className="h-12 px-8 bg-secondary text-white rounded-xl font-black text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all">Live Chat</button>
                    </div>
                </div>

                {/* Links Grid - Clean */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center sm:text-left">
                    <div className="col-span-1">
                        <Link href="/" className="text-4xl font-black tracking-tighter mb-6 block">ZEBRA</Link>
                        <p className="text-white/50 text-sm font-medium leading-relaxed max-w-xs mx-auto sm:mx-0">
                            Making self-storage simple, secure, and accessible for everyone across the UK. milestone by milestone.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-black mb-6 flex items-center justify-center sm:justify-start gap-2 text-secondary">
                            <MapPin className="w-5 h-5" />
                            Store Locations
                        </h4>
                        <ul className="space-y-4 text-white/40 text-sm font-bold">
                            <li><Link href="#" className="hover:text-white transition-colors">London Central</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Manchester North</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Birmingham South</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Bristol West</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">View All 42 Stores</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-black mb-6">Storage Solutions</h4>
                        <ul className="space-y-4 text-white/40 text-sm font-bold">
                            <li><Link href="#" className="hover:text-white transition-colors">Personal Storage</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Business Solutions</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Student Lockers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Vehicle Units</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Container Storage</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-black mb-6">Help & Support</h4>
                        <ul className="space-y-4 text-white/40 text-sm font-bold">
                            <li><Link href="#" className="hover:text-white transition-colors">How It Works</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Unit Size Guide</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Insurance Info</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Security Standards</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Customer FAQs</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Clean */}
                <div className="w-full pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} Zebra Self Storage. Milestone Makers.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-secondary transition-all"><Facebook className="w-6 h-6" /></Link>
                        <Link href="#" className="hover:text-secondary transition-all"><Instagram className="w-6 h-6" /></Link>
                        <Link href="#" className="hover:text-secondary transition-all flex items-center gap-1">
                            <span className="font-black text-sm tracking-tighter">TIC</span>
                            <span className="font-black text-sm tracking-tighter">TOK</span>
                        </Link>
                        <Link href="#" className="hover:text-secondary transition-all"><Youtube className="w-6 h-6" /></Link>
                        <Link href="#" className="hover:text-secondary transition-all"><Mail className="w-6 h-6" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
