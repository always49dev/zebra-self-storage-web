"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
        <div className="border-b border-slate-200">
            <button
                onClick={onToggle}
                className="w-full py-8 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-primary' : 'text-slate-700 group-hover:text-primary'}`}>
                    {question}
                </span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? (
                        <Minus className="w-6 h-6 text-primary stroke-[3px]" />
                    ) : (
                        <Plus className="w-6 h-6 text-slate-400 group-hover:text-primary stroke-[3px]" />
                    )}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-slate-600 leading-relaxed max-w-3xl">
                    {answer}
                </p>
            </div>
        </div>
    );
}

export default function FAQAccordion() {
    const faqs = [
        {
            question: "What items can I store?",
            answer: "You can store almost anything from furniture and household goods to business stock and archives. However, there are some restrictions: we do not allow the storage of perishable goods, flammable liquids, explosives, or illegal items."
        },
        {
            question: "How secure is my storage unit?",
            answer: "High-level security is our top priority. Our facilities feature 24/7 CCTV surveillance, individual unit alarms, gated access with personalized PIN codes, and regular staff patrols. Your belongings are in safe hands."
        },
        {
            question: "Do I need my own lock?",
            answer: "Yes, you will need a padlock to secure your individual unit. This ensures that only you have access to your space. We sell high-quality, high-security padlocks in all our store receptions if you don't have one."
        },
        {
            question: "Is there a minimum stay period?",
            answer: "Our minimum storage period is typically just 7 days. We offer flexible monthly contracts that automatically renew, and you only need to give us 7 days' notice when you're ready to move out."
        },
        {
            question: "Do I need insurance?",
            answer: "Yes, all customers must have insurance for their stored goods. You can use our StripeShield™ insurance, which is specifically designed for self-storage, or provide proof of your own adequate cover."
        },
        {
            question: "How do I pay for my storage?",
            answer: "We accept all major credit and debit cards. To make life easier, most of our customers set up a recurring payment or Direct Debit so they don't have to worry about missing a payment."
        },
        {
            question: "Can I change my unit size later?",
            answer: "Absolutely! If you find you need more or less space, you can move to a different unit size at any time, subject to availability. Our staff will be happy to help you with the transition."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="px-4 pb-24 max-w-4xl mx-auto">
            <div className="divide-y-0">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
}
