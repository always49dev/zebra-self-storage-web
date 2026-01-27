import React from 'react';
import { Phone, Mail } from 'lucide-react';

const SalesCard = () => {
    return (
        <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-black text-primary mb-6">Sales</h2>
            <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                    <div className="bg-primary/5 p-3 rounded-xl">
                        <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="h-4 w-64 bg-primary/10 rounded-full" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/5 p-3 rounded-xl">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="h-4 w-64 bg-primary/10 rounded-full" />
                </div>
            </div>
            <button className="w-full md:w-auto px-10 py-3 rounded-full border-2 border-primary text-primary font-black text-sm hover:bg-primary hover:text-white transition-all">
                Request a callback
            </button>
        </div>
    );
};

export default SalesCard;
