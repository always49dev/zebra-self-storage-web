import React from 'react';

interface PricingTableProps {
    title: string;
    description: string;
}

const PricingTable: React.FC<PricingTableProps> = ({ title, description }) => {
    const prices = [
        { size: '25 sq ft', perWeek: '£15.00', perMonth: '£65.00' },
        { size: '50 sq ft', perWeek: '£25.00', perMonth: '£108.33' },
        { size: '75 sq ft', perWeek: '£35.00', perMonth: '£151.67' },
        { size: '100 sq ft', perWeek: '£45.00', perMonth: '£195.00' },
        { size: '150 sq ft', perWeek: '£60.00', perMonth: '£260.00' },
    ];

    return (
        <section className="py-12 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
                    <p className="text-lg text-slate-600 max-w-3xl">
                        {description}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="py-4 px-6 font-semibold">Unit Size</th>
                                    <th className="py-4 px-6 font-semibold">Avg. Price per Week</th>
                                    <th className="py-4 px-6 font-semibold">Avg. Price per Month</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {prices.map((item, index) => (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6 text-slate-700 font-medium">{item.size}</td>
                                        <td className="py-4 px-6 text-slate-600">{item.perWeek}</td>
                                        <td className="py-4 px-6 text-slate-600">{item.perMonth}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-slate-50 border-t border-slate-200">
                        <p className="text-sm text-slate-500 italic">
                            * Prices are indicative and vary by location, availability and duration. Contact us for a precise quote.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTable;
