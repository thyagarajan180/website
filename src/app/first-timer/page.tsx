"use client";

import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/ui/FAQ";
import HeroSlider from "@/components/ui/HeroSlider";

export default function FirstTimerGuide() {
  const aftercareFaqs = [
    {
      question: "How long should I keep the wrap on?",
      answer: "We typically use 'second skin' bandages. Keep the first bandage on for 24 hours. If it leaks or peels, remove it under lukewarm running water, pat dry with a clean paper towel, and apply the second bandage for another 3-5 days."
    },
    {
      question: "Can I go to the gym after my tattoo?",
      answer: "We recommend avoiding heavy exercise, sweating, or direct sun exposure for at least 7-10 days. The movement and sweat can irritate the fresh wound and impact the healing of fine details."
    },
    {
      question: "Is it normal for my tattoo to itch?",
      answer: "Yes, itching is a sign of healing. DO NOT scratch or pick at it. Apply a tiny amount of unscented lotion or use a clean hand to gently 'slap' the area to relieve the itch."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-32 px-6 md:px-12 bg-surface overflow-hidden">
        <HeroSlider 
          images={[
            "/gallery/IMG_0156.webp",
            "/gallery/IMG_2865.webp",
            "/gallery/IMG_3724.webp",
            "/gallery/IMG_3891.webp"
          ]} 
          opacity="opacity-15"
        />
        <div className="absolute top-0 right-0 font-display font-extrabold text-[40vw] text-gold/5 leading-none translate-x-1/4 -translate-y-1/4 pointer-events-none select-none">
          FIRST
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8 stencil-stamp">
            THE ESSENTIALS
          </div>
          <h1 className="font-display font-extrabold text-[clamp(60px,10vw,140px)] leading-[0.8] text-accent uppercase max-w-4xl mb-12">
            Your first time<br />at 180 Studio.
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
            Nervous? That's normal. Every person with a full sleeve once sat exactly where you are. Here is how we make it permanent.
          </p>
        </div>
      </section>

      {/* THE FEELING */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square bg-surface border border-gold-dim/20 overflow-hidden">
          <Image 
            src="/gallery/IMG_0156.webp" 
            alt="The precision of tattooing" 
            fill 
            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div>
          <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
            THE SENSATION
          </div>
          <h2 className="font-display font-extrabold text-5xl text-accent uppercase mb-8 leading-none">
            What does it<br />actually feel like?
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              Most people describe it as a steady vibration or a scratchy heat. It’s not a sharp, stabbing pain. Depending on the location, it can range from a minor annoyance to a meditative challenge.
            </p>
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              Our artists are trained to work with you. If you need a break, we take one. If you need to breathe, we wait. This is a session, not a race.
            </p>
          </div>
        </div>
      </section>

      {/* PAIN SCALE SECTION */}
      <section className="py-32 px-6 md:px-12 bg-background border-y border-gold-dim/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-8 stencil-stamp">
            THE REALITY
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-7xl text-accent uppercase mb-16 leading-none">
            Does it hurt?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <p className="font-body text-xl text-text-secondary leading-relaxed">
                Pain is subjective, but for most people, the sensation is more like an irritating scratch or a rhythmic vibration. It's perfectly manageable, and our artists work at a pace that keeps you comfortable.
              </p>
              
              <div className="space-y-8">
                {[
                  { label: "Bony Areas", value: 8, color: "bg-red-500" },
                  { label: "Soft Tissue", value: 3, color: "bg-green-500" },
                  { label: "Sensitive Areas", value: 5, color: "bg-orange-500" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="font-headline font-bold text-base md:text-lg text-accent uppercase">{item.label}</span>
                      <span className="font-mono text-gold text-sm">{item.value}/10</span>
                    </div>
                    <div className="w-full h-1.5 md:h-2 bg-surface border border-gold-dim/10">
                      <div className={`h-full ${item.color} opacity-80 transition-all duration-1000 delay-300`} style={{ width: `${item.value * 10}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-video border border-gold-dim/20 overflow-hidden group">
               <Image 
                 src="/gallery/pain-scale.png" 
                 alt="Client session" 
                 fill 
                 priority
                 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                  <p className="font-meta text-xs tracking-widest uppercase text-accent">A calm session is a better tattoo.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface py-32 px-6 md:px-12 border-y border-gold-dim/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-6 stencil-stamp">
              PRE-SESSION CHECKLIST
            </div>
            <h2 className="font-display font-extrabold text-6xl text-accent uppercase">How to Prepare</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "HYDRATE & FEED", 
                desc: "Drink plenty of water 24 hours before and eat a solid meal 1-2 hours before your session. Low blood sugar is the #1 cause of lightheadedness." 
              },
              { 
                title: "REST WELL", 
                desc: "A well-rested body handles pain much better. Get a full 8 hours the night before. Avoid alcohol for at least 24 hours prior." 
              },
              { 
                title: "DRESS SMART", 
                desc: "Wear loose, comfortable clothing that allows easy access to the area being tattooed. Expect that ink might get on your clothes." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gold-dim/10 bg-background hover:border-gold transition-colors duration-500">
                <div className="font-mono text-gold text-2xl mb-6">0{i+1}</div>
                <h3 className="font-headline font-bold text-2xl text-accent uppercase mb-4">{item.title}</h3>
                <p className="font-meta text-xs text-text-secondary leading-relaxed tracking-widest uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS RECAP */}
      <section className="py-32 px-6 md:px-12 max-w-[1000px] mx-auto text-center">
        <h2 className="font-display font-extrabold text-[clamp(40px,6vw,80px)] leading-[0.9] text-accent uppercase mb-10">
          Still have questions?
        </h2>
        <p className="font-body text-xl text-text-secondary leading-relaxed mb-12">
          We offer free consultations for every new client. No pressure, just a conversation about your vision and what to expect.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
          <Link href="/about" className="font-headline font-bold text-xl md:text-2xl uppercase text-foreground hover:underline underline-offset-8 decoration-gold decoration-2 transition-all">
            STUDIO STORY &rarr;
          </Link>
          <button className="w-full sm:w-auto bg-gold text-background px-8 py-4 font-headline font-bold text-xl uppercase hover:bg-gold-hover transition-colors">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* AFTERCARE FAQS */}
      <section className="bg-background">
        <FAQ items={aftercareFaqs} title="Aftercare 101" />
      </section>

      {/* AFTERCARE TEASER */}
      <section className="bg-gold py-16 px-6 text-center">
        <h3 className="font-display font-bold text-3xl text-background uppercase tracking-widest mb-4">
          The tattoo is only 50% of the work.
        </h3>
        <p className="font-headline text-background/80 uppercase font-bold text-xl">
          The other 50% is how you heal it. Full guide coming soon.
        </p>
      </section>
    </div>
  );
}
