"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { TEAM_MEMBERS } from "@/lib/data";
import FAQ from "@/components/ui/FAQ";
import HeroSlider from "@/components/ui/HeroSlider";

import { isNungambakkamOpened } from "@/lib/branch-utils";

export default function BookingPage() {
  const isOpened = isNungambakkamOpened();

  useEffect(()=>{
    (async function () {
      const cal = await getCalApi({"namespace":"default","embedJsUrl":"https://cal.id/embed-link/embed.js"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#ab8600"},"dark":{"cal-brand":"#ab8600","cal-bg":"#080806"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  const preparationFaqs = [
    {
      question: "What should I eat before my session?",
      answer: "We recommend a full, high-protein meal about 1-2 hours before your appointment. Maintaining stable blood sugar levels is critical for a comfortable experience."
    },
    {
      question: "Can I take pain relievers before coming in?",
      answer: "Please avoid blood-thinning medications like Aspirin or Ibuprofen. If you need something, Tylenol is generally fine, but we recommend consulting your artist first."
    },
    {
      question: "What should I wear?",
      answer: "Wear loose, comfortable clothing that provides easy access to the area being tattooed. Keep in mind that ink may occasionally get on your clothes, so don't wear anything irreplaceable."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 md:pt-44 pb-24 px-6 md:px-12 bg-surface overflow-hidden">
        <HeroSlider 
          images={[
            "/gallery/IMG_2178.webp",
            "/gallery/IMG_2361.webp",
            "/gallery/IMG_2383.webp",
            "/gallery/IMG_2865.webp"
          ]} 
          opacity="opacity-15"
        />
        <div className="absolute top-0 left-0 font-display font-extrabold text-[35vw] text-gold/5 leading-none -translate-x-1/4 -translate-y-1/4 pointer-events-none select-none uppercase">
          Book
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8 stencil-stamp">
            RESERVATIONS
          </div>
          <h1 className="font-display font-extrabold text-[clamp(60px,10vw,140px)] leading-[0.8] text-accent uppercase max-w-4xl mx-auto mb-12">
            Secure your<br />session.
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            Every masterpiece begins with a consultation. Choose your artist to view their availability and book your time.
          </p>
          <p className="font-meta text-[10px] tracking-[0.2em] text-gold uppercase opacity-80">
            {isOpened 
              ? "Bookings open for both Teynampet branches" 
              : "Current bookings: Teynampet HQ • Second Branch coming June 11"}
          </p>
        </div>
      </section>

      {/* ARTIST SELECTION */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="group relative bg-surface border border-gold-dim/10 hover:border-gold transition-all duration-500 overflow-hidden flex flex-col">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image 
                src={member.portrait} 
                alt={member.name} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            
            <div className="p-8 md:p-12 text-center flex-grow flex flex-col items-center">
              <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
                {member.title}
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-accent uppercase mb-4">{member.name}</h2>
              <div className="w-12 h-[1px] bg-gold mb-8" />
              
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                 {member.specialties.slice(0, 3).map(s => (
                   <span key={s} className="font-meta text-[9px] tracking-tighter text-text-secondary border border-gold-dim/20 px-2 py-0.5 uppercase">{s}</span>
                 ))}
              </div>
              <button 
                data-cal-namespace="default"
                data-cal-link={member.calLink}
                data-cal-origin="https://cal.id"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="mt-auto w-full bg-gold text-background py-4 md:py-5 font-headline font-bold text-lg md:text-xl uppercase hover:bg-gold-hover transition-all duration-300 shadow-xl"
              >
                View Availability
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* BOOKING INFO */}
      <section className="py-24 px-6 md:px-12 bg-surface border-t border-gold-dim/30">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="font-headline font-bold text-2xl text-gold uppercase">Payment Policy</h3>
            <p className="font-meta text-xs text-text-secondary tracking-widest leading-relaxed uppercase">
              We do not charge any amount upon booking. Full payment for your session will be collected only after your tattoo is completed.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-headline font-bold text-2xl text-gold uppercase">Consultation</h3>
            <p className="font-meta text-xs text-text-secondary tracking-widest leading-relaxed uppercase">
              First session? We recommend booking a free 15-minute consultation to discuss design, placement, and sizing before committing.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-headline font-bold text-2xl text-gold uppercase">Rescheduling</h3>
            <p className="font-meta text-xs text-text-secondary tracking-widest leading-relaxed uppercase">
              We require 48 hours notice for rescheduling. Failure to do so may result in forfeiture of your deposit.
            </p>
          </div>
        </div>
      </section>

      {/* PREPARATION FAQS */}
      <section className="bg-background">
        <FAQ items={preparationFaqs} title="How to Prepare" />
      </section>

      {/* WHAT TO BRING */}
      <section className="py-24 px-6 md:px-12 bg-surface border-y border-gold-dim/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-8 stencil-stamp">
            CHECKLIST
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-accent uppercase mb-12">The Essentials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Valid Govt Photo ID",
              "Reference Images",
              "Water & Light Snacks",
              "Headphones / Music"
            ].map((item, idx) => (
              <div key={idx} className="border border-gold-dim/20 p-8 flex flex-col items-center gap-4 group hover:border-gold transition-all">
                <div className="w-12 h-12 flex items-center justify-center border border-gold rounded-full font-mono text-gold group-hover:bg-gold group-hover:text-background transition-all">
                  {idx + 1}
                </div>
                <span className="font-headline font-bold text-lg text-accent uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM TEASER */}
      <section className="py-12 md:py-16 bg-gold text-center px-6">
         <p className="font-display font-bold text-lg md:text-2xl text-background uppercase tracking-[0.1em] md:tracking-[0.2em] leading-snug">
            Need help choosing? Call us at +91 90031 57338
         </p>
      </section>
    </div>
  );
}
