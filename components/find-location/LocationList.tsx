"use client";

import LocationCard from "./LocationCard";

export default function LocationList() {
    const locations = [
        {
            name: "Torquay",
            distance: "0.5 miles",
            address: "Unit 1, Woodland Close, Torquay, TQ2 7AS",
            phone: "01803 313131",
            email: "torquay@zebraselfstorage.co.uk",
            imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2025-11-27-14-45-44-1920w.jpg"
        },
        {
            name: "Paignton",
            distance: "3.2 miles",
            address: "12 Marisco Way, Paignton, TQ4 7PL",
            phone: "01803 555555",
            email: "paignton@zebraselfstorage.co.uk",
            imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/Paignton+10-1920w.jpg"
        },
        {
            name: "Newton Abbot",
            distance: "6.8 miles",
            address: "Brunel Industrial Estate, Newton Abbot, TQ12 4PH",
            phone: "01626 222222",
            email: "newtonabbot@zebraselfstorage.co.uk",
            imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2024-07-15-08-27-50-1920w.jpg"
        },
        {
            name: "Exeter",
            distance: "21 miles",
            address: "Sowton Industrial Estate, Exeter, EX2 7HY",
            phone: "01392 444444",
            email: "exeter@zebraselfstorage.co.uk",
            imageUrl: "https://le-cdn.website-editor.net/s/f81352ab0232402a86e95bde88021ae4/dms3rep/multi/opt/PHOTO-2023-08-23-10-08-22-1920w.jpg"
        }
    ];

    return (
        <section className="px-4 py-16 w-full bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {locations.map((loc) => (
                        <LocationCard key={loc.name} {...loc} />
                    ))}
                </div>
            </div>
        </section>
    );
}
