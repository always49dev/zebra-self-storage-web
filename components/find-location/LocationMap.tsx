"use client";

import { Maximize2, MapPin } from "lucide-react";

export default function LocationMap() {
    return (
        <section className="w-full h-[400px] bg-slate-100 relative overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40600.43576066228!2d-3.56586!3d50.485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486d30f78e474581%3A0xc3f5f3e4e9a6df79!2sTorquay%2C%20UK!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale-[0.2] contrast-[1.1]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Expand Button Overlay */}
            <button className="absolute top-4 right-4 bg-primary text-white p-3 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer z-10">
                <Maximize2 className="w-6 h-6" />
            </button>
        </section>
    );
}
