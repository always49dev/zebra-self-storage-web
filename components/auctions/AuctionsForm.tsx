import React from 'react';

const AuctionsForm = () => {
    return (
        <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-black text-primary mb-6">Get notified next time there is an auction</h2>
            <div className="space-y-4 mb-10">
                <div className="h-3 w-full bg-primary/5 rounded-full" />
                <div className="h-3 w-[40%] bg-primary/5 rounded-full" />
            </div>

            <form className="space-y-8">
                <div className="space-y-3">
                    <label className="text-sm font-black text-primary block">Name</label>
                    <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-6 py-4 rounded-xl border border-primary/20 bg-primary/[0.02] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-primary/30"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-sm font-black text-primary block">Email</label>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-6 py-4 rounded-xl border border-primary/20 bg-primary/[0.02] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-primary/30"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <input type="checkbox" className="w-5 h-5 rounded border-primary/20 text-primary focus:ring-primary transition-all cursor-pointer" />
                    <div className="h-3 w-full bg-primary/10 rounded-full" />
                </div>
                <button type="button" className="w-full md:w-auto px-16 py-4 rounded-full bg-primary text-white font-black text-lg hover:bg-primary/95 transition-all shadow-xl shadow-primary/10">
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default AuctionsForm;
