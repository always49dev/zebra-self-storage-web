"use client";

import Link from "next/link";
import { X, MapPin, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: Array<{ name: string; href: string }>;
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-primary/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            {/* Side Menu */}
            <aside
                className={`fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white z-[60] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="p-6 flex items-center justify-between border-b border-slate-100">
                    <span className="text-2xl font-black text-primary tracking-tighter">ZEBRA</span>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-primary hover:text-secondary transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-8">
                    <nav className="px-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={onClose}
                                className="flex items-center justify-between group py-4 border-b border-slate-50 last:border-0"
                            >
                                <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                                    {link.name}
                                </span>
                                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-secondary transition-colors" />
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-12 px-6 grid grid-cols-3 gap-4">
                        <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors text-primary group">
                            <MapPin className="w-6 h-6 mb-2 group-hover:text-secondary transition-colors" />
                            <span className="text-xs font-bold uppercase tracking-widest">Find</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors text-primary group">
                            <MessageCircle className="w-6 h-6 mb-2 group-hover:text-secondary transition-colors" />
                            <span className="text-xs font-bold uppercase tracking-widest">Chat</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors text-primary group">
                            <Phone className="w-6 h-6 mb-2 group-hover:text-secondary transition-colors" />
                            <span className="text-xs font-bold uppercase tracking-widest">Call</span>
                        </button>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100">
                    <button className="btn-navy w-full py-4 text-lg">
                        Get a Quote
                    </button>
                </div>
            </aside>
        </>
    );
}
