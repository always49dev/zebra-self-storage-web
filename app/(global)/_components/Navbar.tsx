"use client";

import Link from "next/link";
import { MapPin, MessageCircle, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Personal", href: "#personal" },
        { name: "Business", href: "#business" },
        { name: "Insurance", href: "/insurance" },
        { name: "Find Local Storage", href: "/find-location" },
    ];

    return (
        <>
            <nav className={`bg-white sticky top-0 z-40 transition-all duration-200 ${isScrolled ? "border-b border-slate-200 shadow-sm" : "border-b border-transparent"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <Link
                            href="/"
                            className="text-2xl font-black text-primary tracking-tighter hover:opacity-80 transition-opacity"
                        >
                            ZEBRA
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-bold text-primary hover:text-secondary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 text-primary">
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <button className="p-1 hover:text-secondary transition-colors cursor-pointer" aria-label="Locations">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                            </button>
                            <button className="p-1 hover:text-secondary transition-colors cursor-pointer" aria-label="Live Chat">
                                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                            </button>
                            <button className="p-1 hover:text-secondary transition-colors cursor-pointer" aria-label="Call Us">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                            </button>
                        </div>

                        <button
                            className="p-1 lg:hidden hover:text-secondary transition-colors cursor-pointer"
                            aria-label="Menu"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu className="w-7 h-7" />
                        </button>

                        <Link href="/find-location" className="hidden lg:flex btn-navy px-6 py-2.5 text-sm">
                            Find Storage
                        </Link>
                    </div>
                </div>
            </nav>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
}
