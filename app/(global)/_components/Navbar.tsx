"use client";

import Link from "next/link";
import { MapPin, MessageCircle, Phone, Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-2xl font-black text-primary tracking-tighter hover:opacity-80 transition-opacity"
                >
                    ZEBRA
                </Link>
                <div className="flex items-center space-x-6 text-primary">
                    <button className="p-1 hover:text-secondary transition-colors cursor-pointer" aria-label="Locations">
                        <MapPin className="w-6 h-6 fill-current" />
                    </button>
                    <button className="p-1 hover:text-secondary transition-colors cursor-pointer" aria-label="Live Chat">
                        <MessageCircle className="w-6 h-6 fill-current" />
                    </button>
                    <button className="p-1 hover:text-secondary transition-colors cursor-pointer" aria-label="Call Us">
                        <Phone className="w-6 h-6 fill-current" />
                    </button>
                    <button className="p-1 hover:text-secondary transition-colors cursor-pointer" aria-label="Menu">
                        <Menu className="w-7 h-7" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
