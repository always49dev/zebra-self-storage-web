import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface LocationContactCardProps {
    title: string;
}

const LocationContactCard: React.FC<LocationContactCardProps> = ({ title }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-black text-primary">{title}</h2>
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="bg-primary/5 p-2 rounded-lg">
                        <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="h-3 w-56 bg-primary/10 rounded-full" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/5 p-2 rounded-lg">
                        <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="h-3 w-56 bg-primary/10 rounded-full" />
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/5 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-2 mt-1">
                        <div className="h-3 w-72 bg-primary/10 rounded-full" />
                        <div className="h-3 w-72 bg-primary/10 rounded-full" />
                        <div className="h-3 w-32 bg-primary/10 rounded-full" />
                    </div>
                </div>
            </div>
            <button className="px-6 py-2 rounded-full border border-primary text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all">
                Find us on a map
            </button>
        </div>
    );
};

export default LocationContactCard;
