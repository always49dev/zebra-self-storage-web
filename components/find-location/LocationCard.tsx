"use client";

import { Phone, Mail, MapPin, ChevronRight, Star } from "lucide-react";

interface LocationCardProps {
    name: string;
    distance: string;
    address: string;
    phone: string;
    email: string;
    imageUrl: string;
}

export default function LocationCard({ name, distance, address, phone, email, imageUrl }: LocationCardProps) {
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden group hover:border-primary transition-all flex flex-col h-full bg-white shadow-sm hover:shadow-md">
            {/* Image Section */}
            <div className="h-56 w-full relative overflow-hidden bg-slate-100">
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider z-10 backdrop-blur-sm">
                    {distance}
                </div>
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-black text-primary tracking-tight">{name}</h3>
                    <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="ml-1 font-bold text-sm text-secondary">New</span>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <p className="ml-3 text-sm font-medium text-slate-600 leading-snug">{address}</p>
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-5 h-5 text-primary shrink-0" />
                        <p className="ml-3 text-sm font-bold text-primary">{phone}</p>
                    </div>
                    <div className="flex items-center">
                        <Mail className="w-5 h-5 text-primary shrink-0" />
                        <p className="ml-3 text-sm font-medium text-slate-600">{email}</p>
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                    <button className="w-full flex items-center justify-center p-3 rounded-xl border-2 border-slate-200 font-bold text-primary hover:bg-primary hover:text-white hover:border-primary transition-all group/btn">
                        <span>Find us on a map</span>
                        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button className="btn-navy w-full mt-3 py-3 shadow-lg shadow-primary/10">
                        Select Location
                    </button>
                </div>
            </div>
        </div>
    );
}
