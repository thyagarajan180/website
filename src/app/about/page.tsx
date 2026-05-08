"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
const Ticker = dynamic(() => import("@/components/ui/Ticker"), { ssr: false });
import Magnetic from "@/components/animations/Magnetic";
import Tilt from "@/components/animations/Tilt";
import HeroSlider from "@/components/ui/HeroSlider";

import Link from "next/link";
import { isNungambakkamOpened } from "@/lib/branch-utils";

export default function AboutPage() {
  const isOpened = isNungambakkamOpened();
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative pt-40 md:pt-44 pb-32 px-6 md:px-12 bg-surface overflow-hidden">
        <HeroSlider 
          images={[
            "/gallery/IMG_0156.webp",
            "/gallery/IMG_0488.webp",
            "/gallery/IMG_1832.webp",
            "/gallery/IMG_0649.webp"
          ]} 
          opacity="opacity-10"
        />
        <div className="absolute top-12 right-12 w-32 h-32 md:w-64 md:h-64 opacity-[0.03] pointer-events-none select-none z-10">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8 stencil-stamp">
            THE STORY
          </div>
          <h1 className="font-display font-extrabold text-[clamp(60px,10vw,140px)] leading-[0.8] text-accent uppercase max-w-4xl mb-12">
            Built from one<br />needle and a dream.
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
            In 2019, Thiyagarajan and Aishwarya founded 180 Tattoo Studio in Chennai. Not just to make tattoos, but to set a standard for what a studio could be.
          </p>
        </div>
      </section>

      {/* MISSION/VISION */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[35vw] h-[35vw] opacity-[0.02] pointer-events-none select-none z-0 translate-x-1/4 translate-y-1/4">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="font-display font-extrabold text-5xl text-accent uppercase mb-8 leading-none">
                The 180 Standard
              </h2>
              <div className="w-16 h-[1px] bg-gold mb-8" />
              <p className="font-body text-lg text-text-secondary leading-relaxed">
                We believe a tattoo is a permanent addition to your identity. It deserves a hyper-hygienic environment, a master’s precision, and a custom design that reflects your story. We don't copy; we create.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gold-dim/10 pt-12">
              <div>
                <h3 className="font-headline font-bold text-3xl text-gold mb-2">100%</h3>
                <p className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">Custom Designs</p>
              </div>
              <div>
                <h3 className="font-headline font-bold text-3xl text-gold mb-2">Zero</h3>
                <p className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">Flash Sheets</p>
              </div>
              <div>
                <h3 className="font-headline font-bold text-3xl text-gold mb-2">Hospital</h3>
                <p className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">Grade Hygiene</p>
              </div>
              <div>
                <h3 className="font-headline font-bold text-3xl text-gold mb-2">Lifetime</h3>
                <p className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">Artistic Support</p>
              </div>
            </div>
          </div>
          
          <Tilt rotation={5} className="w-full">
            <div className="relative aspect-square md:aspect-[4/5] bg-surface border border-gold-dim/20 overflow-hidden" data-reveal-image>
              <Image 
                src="/gallery/IMG_0576.webp" 
                alt="Studio founder working" 
                fill 
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-multiply" />
            </div>
          </Tilt>
        </div>
      </section>

      {/* THE SPACE GALLERY */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-6 stencil-stamp">
              THE SPACE
            </div>
            <h2 className="font-display font-extrabold text-5xl md:text-8xl text-accent uppercase leading-[0.85]">
              Designed for<br />Comfort & Safety.
            </h2>
          </div>
          <p className="font-body text-xl text-text-secondary max-w-sm leading-relaxed pb-2">
            Every inch of our studio is meticulously maintained to provide a sanctuary for your skin and soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Image - Exterior */}
          <div className="md:col-span-8 relative overflow-hidden group border border-gold-dim/10 aspect-square md:aspect-auto min-h-[500px]">
            <Image 
              src="/studio/Exterior View.jpeg" 
              alt="Studio Exterior View" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-6 left-6 inline-block bg-gold text-background font-meta text-[10px] tracking-widest px-3 py-1 uppercase z-10">
              EXTERIOR VIEW
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Interior 1 */}
            <div className="relative flex-grow overflow-hidden group border border-gold-dim/10 aspect-square md:aspect-auto min-h-[350px]">
              <Image 
                src="/studio/Interior.jpeg" 
                alt="Studio Interior" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Interior 2 */}
            <div className="relative flex-grow overflow-hidden group border border-gold-dim/10 aspect-square md:aspect-auto min-h-[350px]">
              <Image 
                src="/studio/Interior 2.jpeg" 
                alt="Studio Detail" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Bottom Row - Now with much better height */}
          <div className="md:col-span-4 relative overflow-hidden group border border-gold-dim/10 aspect-square md:aspect-[4/5] min-h-[450px]">
            <Image 
              src="/studio/Interior 3.jpeg" 
              alt="Studio Interior Perspective" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="md:col-span-4 relative overflow-hidden group border border-gold-dim/10 aspect-square md:aspect-[4/5] min-h-[450px]">
            <Image 
              src="/studio/Interior 4.jpeg" 
              alt="Studio Equipment" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="md:col-span-4 relative overflow-hidden group border border-gold-dim/10 aspect-square md:aspect-[4/5] min-h-[450px]">
            <Image 
              src="/studio/Interior 5.jpeg" 
              alt="Studio Workstation" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* TIMELINE TICKER */}
      <section className="bg-surface py-6 border-y border-gold-dim/30">
        <Ticker speed={30}>
          <span className="font-display font-bold text-gold/20 text-4xl tracking-[0.4em] uppercase mx-12">
            EST. 2019 ✦ CHENNAI ✦ MASTER ARTISTS ✦ 1000+ CLIENTS ✦ HYGIENE FIRST ✦ CUSTOM ART ✦
          </span>
        </Ticker>
      </section>

      {/* THE PARTNERSHIP */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <Tilt rotation={5}>
               <div className="relative overflow-hidden group" data-reveal-image>
                 <Image 
                    src="/team/Aishwarya___Shop_Owner__.webp" 
                    alt="Aishwarya - Shop Owner" 
                    width={600} 
                    height={800} 
                    className="w-full h-auto grayscale opacity-90 border border-gold-dim/20 transition-all duration-700 group-hover:grayscale-0"
                 />
               </div>
             </Tilt>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
              OWNERSHIP
            </div>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl text-accent uppercase mb-8 leading-[0.85]" data-reveal>
              Vision Led by<br />Aishwarya.
            </h2>
            <p className="font-body text-xl text-text-secondary leading-relaxed mb-8" data-reveal>
              Aishwarya founded 180 Tattoo Studio with a vision to create a space where art and hygiene coexist at the highest level. Together with Thiyagu, she has built a legacy of precision and trust in Chennai. Their partnership ensures that every client receives the benefit of two lifetimes of dedication.
            </p>
            <Magnetic>
              <Link href="/team" className="font-headline font-bold text-2xl uppercase text-foreground hover:underline underline-offset-8 decoration-gold decoration-2 transition-all">
                Meet the Team &rarr;
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* STUDIO TECHNOLOGY */}
      <section className="py-32 px-6 md:px-12 bg-background border-y border-gold-dim/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
              OUR TOOLS
            </div>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl text-accent uppercase leading-none">
              High Tech.<br />High Craft.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* TECH CARDS */}
            {[{ title: "Precision Machines", desc: "We use Bishop and FK Irons rotary machines for consistent needle depth and reduced skin trauma." },
              { title: "World Class Inks", desc: "Our studio uses only World Famous and Dynamic Ink pigments, known for their brilliance and safety." },
              { title: isOpened ? "Our Expansion" : "Expansion 2026", desc: isOpened ? "Our second studio is now open at G.N. Chetty Road, Teynampet, bringing the 180 standard to more of Chennai." : "Opening June 11 at G.N. Chetty Road, Teynampet. Expanding our reach while maintaining the same 180 standard." }
            ].map((tech, idx) => (
              <Tilt key={idx} rotation={5}>
                <div className="border border-gold-dim/10 p-8 md:p-10 hover:border-gold transition-all duration-500 group bg-surface h-full" data-reveal>
                  <h3 className="font-headline font-bold text-xl md:text-2xl text-accent uppercase mb-4 group-hover:text-gold transition-colors">{tech.title}</h3>
                  <p className="font-meta text-[10px] tracking-widest uppercase text-text-secondary leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO ETIQUETTE */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] opacity-[0.02] pointer-events-none select-none z-0 translate-x-1/4">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
            THE EXPERIENCE
          </div>
          <h2 className="font-display font-extrabold text-5xl text-accent uppercase mb-8 leading-none">
            Your Session,<br />Your Sanctuary.
          </h2>
          <p className="font-body text-lg text-text-secondary leading-relaxed mb-8">
            We maintain a focused, professional environment. To ensure the best result for your tattoo, we ask that you follow our studio etiquette:
          </p>
          <ul className="space-y-6">
            {[
              { title: "One Guest Policy", desc: "You are welcome to bring one friend for moral support, but no more, to keep the space calm." },
              { title: "No Photography", desc: "We love it when you share, but please ask before filming or taking photos during the session." },
              { title: "Punctuality", desc: "Please arrive 10 minutes early. Being late by more than 20 minutes may result in rescheduling." }
            ].map((rule, idx) => (
              <li key={idx} className="flex gap-6">
                <span className="font-mono text-gold text-lg">{idx + 1}</span>
                <div>
                  <h4 className="font-headline font-bold text-xl text-accent uppercase mb-1">{rule.title}</h4>
                  <p className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">{rule.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12 lg:mt-0">
          <div className="aspect-[3/4] relative border border-gold-dim/20 overflow-hidden">
             <Image 
                src="/gallery/IMG_0015.webp" 
                alt="Studio detail" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                sizes="(max-width: 1024px) 50vw, 25vw"
             />
          </div>
          <div className="aspect-[3/4] relative border border-gold-dim/20 translate-y-8 md:translate-y-12 overflow-hidden">
             <Image 
                src="/gallery/IMG_1832.webp" 
                alt="Studio detail" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                sizes="(max-width: 1024px) 50vw, 25vw"
             />
          </div>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t border-gold-dim/30">
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-accent uppercase mb-10">
          Ready to make it permanent?
        </h2>
        <div className="flex justify-center gap-8">
          <Magnetic>
            <Link href="/gallery" className="font-headline font-bold text-2xl uppercase text-foreground hover:text-gold transition-colors">
              Our Work &rarr;
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/contact" className="font-headline font-bold text-2xl uppercase text-foreground hover:text-gold transition-colors">
              Find Us &rarr;
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
