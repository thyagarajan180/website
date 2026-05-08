"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto py-24 px-6">
      <div className="text-center mb-16">
        <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
          FAQS
        </div>
        <h2 className="font-display font-extrabold text-5xl md:text-7xl text-accent uppercase leading-none">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="border border-gold-dim/20 bg-surface group transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-8 flex items-center justify-between gap-6"
            >
              <span className="font-headline font-bold text-xl md:text-2xl text-accent uppercase group-hover:text-gold transition-colors">
                {item.question}
              </span>
              <div className="relative w-6 h-6 flex-shrink-0">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gold -translate-y-1/2" />
                <div className={`absolute top-0 left-1/2 h-full w-[2px] bg-gold -translate-x-1/2 transition-transform duration-500 ${activeIndex === index ? "rotate-90 scale-y-0" : ""}`} />
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
                activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-8 pt-0 font-body text-lg text-text-secondary leading-relaxed border-t border-gold-dim/10 mt-4">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
