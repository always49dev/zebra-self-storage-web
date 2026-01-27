import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface JobCardProps {
    title: string;
    location: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, location }) => {
    return (
        <div className="bg-white border-2 border-primary/20 rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-all">
            <div className="aspect-[16/6] bg-secondary-light relative">
                {/* Image placeholder with brand color */}
                <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-black text-primary mb-4">{title}</h3>
                <div className="flex items-center gap-2 mb-6">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-primary font-bold">{location}</span>
                </div>
                <div className="space-y-4 mb-8">
                    <div className="h-3 w-full bg-primary/5 rounded-full" />
                    <div className="h-3 w-full bg-primary/5 rounded-full" />
                    <div className="h-3 w-[80%] bg-primary/5 rounded-full" />
                    <div className="h-3 w-[40%] bg-primary/5 rounded-full" />
                </div>
                <button className="px-8 py-3 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">
                    Learn more and apply
                </button>
            </div>
        </div>
    );
};

export default JobCard;
