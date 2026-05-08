"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { TEAM_MEMBERS } from "@/lib/data";
import HeroSlider from "@/components/ui/HeroSlider";
import Ticker from "@/components/ui/Ticker";
import FAQ from "@/components/ui/FAQ";

export default function TeamPage() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi({"namespace":"default","embedJsUrl":"https://cal.id/embed-link/embed.js"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#ab8600"},"dark":{"cal-brand":"#ab8600","cal-bg":"#080806"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  const teamFaqs = [
    {
      question: "Can I choose which artist works on my design?",
      answer: "Absolutely. We encourage clients to book with the artist whose style resonates most with their vision. Each artist handles their own consultations and design process to ensure creative continuity."
    },
    {
      question: "Do you take walk-ins?",
      answer: "We are primarily an appointment-based studio to ensure each client gets the dedicated time they deserve. However, if a cancellation occurs, we may announce 'walk-in' availability on our Instagram."
    },
    {
      question: "How long is the wait time for a session?",
      answer: "Wait times vary by artist and complexity of the design. Typically, lead times range from 2 weeks to 2 months. We recommend booking your consultation early."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 md:pt-44 pb-24 px-6 md:px-12 bg-surface overflow-hidden">
        <HeroSlider 
          images={[
            "/gallery/IMG_2865.webp",
            "/gallery/IMG_3724.webp",
            "/gallery/IMG_3891.webp",
            "/gallery/IMG_4032.webp"
          ]} 
          opacity="opacity-15"
        />
        <div className="absolute top-12 right-12 w-32 h-32 md:w-64 md:h-64 opacity-[0.03] pointer-events-none select-none z-10">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8 stencil-stamp">
            THE ARTISTS
          </div>
          <h1 className="font-display font-extrabold text-[clamp(60px,10vw,140px)] leading-[0.8] text-accent uppercase max-w-4xl mb-12">
            Built by hand.<br />Led by needles.
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed">
            180 is not a studio of random artists. It is a house built by two people who committed their lives to the craft. Every session is personal.
          </p>
        </div>
      </section>

      {/* ARTIST PROFILES */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col gap-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] opacity-[0.02] pointer-events-none select-none z-0 translate-x-1/4">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10 flex flex-col gap-32">
        {TEAM_MEMBERS.map((member, idx) => (
          <div 
            key={member.id} 
            className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
          >
            {/* Portrait */}
            <div className="relative w-full lg:w-1/2 aspect-[4/5] bg-surface border border-gold-dim/20 overflow-hidden group">
              <Image
                src={member.portrait}
                alt={member.name}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
                {member.title}
              </div>
              <h2 className="font-display font-extrabold text-6xl md:text-8xl text-accent uppercase mb-6 leading-none">
                {member.name}
              </h2>
              <div className="w-16 h-[1px] bg-gold mb-10" />
              
              <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
                {member.statement}
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-12">
                {member.specialties.map(spec => (
                  <span key={spec} className="px-4 py-1.5 bg-surface border border-gold-dim/20 text-accent font-meta text-[10px] tracking-widest uppercase">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button 
                  data-cal-namespace="default"
                  data-cal-link={member.calLink}
                  data-cal-origin="https://cal.id"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className="bg-gold text-background px-8 py-4 font-headline font-bold text-lg md:text-xl uppercase hover:bg-gold-hover transition-all duration-300 text-center flex-grow"
                >
                  Book with {member.name.split(' ')[0]}
                </button>
                <Link 
                  href={`/gallery?artist=${member.id}`}
                  className="border border-gold text-gold px-8 py-4 font-headline font-bold text-lg md:text-xl uppercase hover:bg-gold hover:text-background transition-all duration-300 text-center flex-grow"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* TEAM TICKER */}
      <section className="bg-surface py-4 md:py-6 border-y border-gold-dim/30 mt-8 md:mt-12">
        <Ticker speed={40}>
          <span className="font-display font-bold text-gold/30 text-3xl md:text-6xl tracking-[0.4em] uppercase mx-8 md:mx-12">
            THIYAGARAJAN ✦ AISHWARYA ✦ PUGAZH ✦ THIYAGARAJAN ✦ AISHWARYA ✦ PUGAZH ✦
          </span>
        </Ticker>
      </section>

      {/* STUDIO MANAGER SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-gold-dim/20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3 aspect-[3/4] relative bg-surface border border-gold-dim/20 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/team/Pugazh___Manager__.webp" 
              alt="Pugazh - Studio Manager" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-8 stencil-stamp">
              STUDIO MANAGEMENT
            </div>
            <h2 className="font-display font-extrabold text-5xl text-accent uppercase mb-6">Pugazh</h2>
            <p className="font-body text-xl text-text-secondary leading-relaxed max-w-2xl">
              Behind every great artist is an even better manager. Pugazh ensures that your 180 experience is seamless from the first inquiry to the final aftercare check-in. He handles all logistics so the artists can focus solely on your skin.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM FAQS */}
      <section className="bg-background">
        <FAQ items={teamFaqs} title="Artist & Studio FAQs" />
      </section>
    </div>
  );
}
