"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { GALLERY_ITEMS, TEAM_MEMBERS } from "@/lib/data";

const Odometer = dynamic(() => import("@/components/animations/Odometer"), { ssr: false });
const Lightbox = dynamic(() => import("@/components/ui/Lightbox"), { ssr: false });
const HomeAnimations = dynamic(() => import("@/components/animations/HomeAnimations"), { ssr: false });

import Ticker from "@/components/ui/Ticker";
import Magnetic from "@/components/animations/Magnetic";
import Tilt from "@/components/animations/Tilt";
import HeroSlider from "@/components/ui/HeroSlider";

import { getBranchStatus, getBranchArrivalText } from "@/lib/branch-utils";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<null | (typeof GALLERY_ITEMS)[0]>(null);
  const [filter, setFilter] = useState("TATTOO");
  const sortedGallery = [...GALLERY_ITEMS].sort((a, b) => b.year - a.year);
  const filteredGallery = filter === "TATTOO"
    ? sortedGallery.filter(item => item.style.toUpperCase() !== "PIERCING")
    : sortedGallery.filter(item => item.style.toUpperCase() === "PIERCING");

  const branchStatus = getBranchStatus();
  const arrivalText = getBranchArrivalText();

  return (
    <div className="flex flex-col min-h-screen">
      <HomeAnimations />
      {/* SECTION 01 — HERO */}
      <section className="relative h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden">
        <HeroSlider 
          images={[
            "/gallery/IMG_0576.webp",
            "/gallery/IMG_0649.webp",
            "/gallery/IMG_2178.webp",
            "/gallery/IMG_2361.webp",
            "/gallery/IMG_2383.webp"
          ]} 
        />
        
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 md:pt-32">
          <h1 className="font-display font-extrabold text-[clamp(60px,12vw,160px)] leading-[0.8] tracking-tighter uppercase text-accent hero-logo" style={{ perspective: "1000px" }}>
            THE SKIN<br />IS THE CANVAS.
          </h1>
          <p className="font-body italic text-gold mt-6 text-base md:text-xl">
            Teynampet, Chennai · Est. 2019
          </p>

          <div className="mt-8 md:mt-10 relative z-10 hero-cta" style={{ opacity: 0 }}>
            <Magnetic>
              <Link 
                href="/booking" 
                className="inline-flex bg-gold text-background border border-gold font-headline font-bold text-lg md:text-xl tracking-widest uppercase px-10 py-5 transition-all relative overflow-hidden group hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Book Your Session</span>
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-[650ms] ease-[cubic-bezier(0.77,0,0.18,1)] z-0" />
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="font-meta text-[10px] tracking-widest uppercase text-accent">SCROLL</span>
          <div className="w-[1px] h-12 bg-accent/30 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-accent animate-[scrolldown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — TICKER STRIP */}
      <section className="bg-gold py-3">
        <Ticker speed={25}>
          <span className="font-display font-bold text-background text-2xl tracking-[0.2em] uppercase mx-4">
            CUSTOM WORK ✦ FINE LINE ✦ PORTRAIT ✦ REALISM ✦ COLOUR ✦ TEYNAMPET, CHENNAI ✦
          </span>
        </Ticker>
      </section>

      {/* SECTION 02.5 — THE MANIFESTO */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center relative overflow-hidden" data-skew>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30vw] h-[30vw] opacity-[0.02] pointer-events-none select-none z-0 translate-x-1/4">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
        <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8 md:mb-12 stencil-stamp">
          THE STANDARD
        </div>
        <h2 className="font-display font-extrabold text-[clamp(40px,7vw,100px)] leading-[0.85] text-accent uppercase max-w-[1200px] manifesto-text">
          Permanent means permanent. We don't rush. We don't compromise.
        </h2>
        <p className="font-body text-xl md:text-2xl text-text-secondary mt-8 md:mt-12 max-w-2xl mx-auto leading-relaxed">
          A tattoo is a commitment that lasts a lifetime. We believe the process of getting one should be just as intentional. No shortcuts.
        </p>
        </div>
      </section>

      {/* SECTION 02.75 — THE EXPANSION */}
      <section className="py-24 md:py-32 bg-background border-y border-gold-dim/10 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-[35vw] text-gold/[0.03] leading-none pointer-events-none select-none uppercase whitespace-nowrap">
          GEMINI FLYOVER
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="inline-block bg-gold text-background font-meta text-[10px] tracking-[0.2em] px-4 py-1.5 uppercase mb-8 md:mb-12">
            {branchStatus}
          </div>
          <h2 className="font-display font-extrabold text-[clamp(45px,8vw,110px)] leading-[0.8] text-accent uppercase max-w-[1000px] mb-10">
            {arrivalText}<br />G.N. Chetty Road.
          </h2>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            Our second home is rising at Gopathi Narayanaswami Chetty Road, Near Anna Flyover. The same standards, the same precision, a whole new space for your skin.
          </p>
          <Magnetic>
            <a 
              href="https://maps.app.goo.gl/C7qT1eyQEt72FGoe6?g_st=iwb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-headline font-bold text-lg md:text-xl text-gold hover:text-accent transition-colors flex items-center gap-3 uppercase group"
            >
              Discover the location 
              <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
            </a>
          </Magnetic>
        </div>
      </section>

      {/* SECTION 03 — GALLERY PREVIEW */}
      <section className="pt-12 pb-32 px-6 md:px-12 max-w-[1800px] mx-auto w-full">
        <div className="flex flex-col gap-6 mb-20 text-center items-center">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase stencil-stamp">
            SELECTED WORK
          </div>
          <h2 className="font-display font-extrabold text-[clamp(38px,5.5vw,80px)] leading-[0.9] text-accent uppercase">
            Over 1000 pieces.<br />Each one different.<br />Each one permanent.
          </h2>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 border-t border-gold-dim/10 pt-8 w-full max-w-xl">
            {["TATTOO", "PIERCING"].map((cat) => (
              <Magnetic key={cat} strength={20}>
                <button
                  onClick={() => setFilter(cat)}
                  className={`font-meta text-[9px] md:text-xs tracking-widest uppercase px-4 md:px-6 py-2 transition-all duration-300 border whitespace-nowrap ${
                    filter === cat 
                      ? "bg-gold border-gold text-background" 
                      : "border-gold-dim/30 text-text-secondary hover:border-gold hover:text-gold"
                  }`}
                >
                  {cat}
                </button>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-2 space-y-2">
          {filteredGallery.slice(0, 9).map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden group cursor-pointer break-inside-avoid"
              data-cursor="view"
              data-reveal
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative w-full overflow-hidden" style={{ paddingTop: item.id % 2 === 0 ? "130%" : "100%" }}>
                <Image
                  src={item.src}
                  alt={`Tattoo by ${item.artist}`}
                  fill
                  className="object-cover transition-transform duration-[850ms] ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Needle Trace Border */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
                <rect 
                  width="100%" height="100%" fill="none" stroke="#C8960C" strokeWidth="2"
                  className="stroke-dasharray-[2000] stroke-dashoffset-[2000] transition-all duration-500 ease-out group-hover:stroke-dashoffset-0"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Magnetic>
            <Link href="/gallery" className="font-headline font-bold text-2xl uppercase text-foreground hover:underline underline-offset-8 decoration-gold decoration-2 transition-all">
              SEE ALL WORK &rarr;
            </Link>
          </Magnetic>
        </div>
      </section>

      {/* SECTION 03.5 — SPECIALTIES */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-gold-dim/30 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[45vw] h-[45vw] opacity-[0.015] pointer-events-none select-none z-0 translate-x-1/3">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase stencil-stamp">
            CORE EXPERTISE
          </div>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-xl leading-relaxed">
            We don't do flash tattoos. We don't copy Pinterest. Every piece is custom-designed for the individual wearing it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { title: 'CUSTOMIZED TATTOO', desc: 'Original concepts crafted specifically for your body.' },
            { title: 'EAR PIERCING', desc: 'Professional piercing with extreme focus on hygiene.' },
            { title: 'FULL BODY', desc: 'Massive, detailed pieces that span multiple muscle groups.' },
            { title: 'FULL & HALF SLEEVE', desc: 'Comprehensive limb designs with seamless flow.' },
            { title: 'REALISM', desc: 'Hyper-realistic detail and shading.' },
            { title: 'PORTRAIT', desc: 'Capturing the soul of your loved ones.' },
            { title: 'FINE LINE', desc: 'Delicate, precise, and minimal.' },
            { title: 'BLACKWORK', desc: 'Bold contrast and solid ink packing.' },
          ].map((item, i) => (
            <Tilt key={item.title} rotation={10}>
              <div className="group cursor-pointer border border-gold-dim/20 p-6 md:p-8 hover:border-gold transition-colors duration-500 relative overflow-hidden bg-surface h-full" data-reveal>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-accent uppercase mb-4 relative z-10 group-hover:-translate-y-2 group-hover:text-background transition-all duration-500">
                  {item.title}
                </h3>
                <div className="w-8 h-[1px] bg-gold mb-6 relative z-10 group-hover:w-16 group-hover:bg-background transition-all duration-500" />
                <p className="font-meta text-[10px] text-text-secondary tracking-widest leading-relaxed relative z-10 group-hover:text-background transition-colors duration-500 delay-100 uppercase">
                  {item.desc}
                </p>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] z-0" />
              </div>
            </Tilt>
          ))}
        </div>
        </div>
      </section>

      {/* SECTION 04 — STATS BLOCK */}
      <section className="bg-surface py-24 px-6 border-y border-gold-dim/30" data-skew>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center" data-reveal>
          <div className="flex flex-col gap-2">
            <div className="font-mono text-4xl md:text-6xl text-foreground odometer"><Odometer value={1000} suffix="+" /></div>
            <div className="font-meta text-[10px] md:text-xs tracking-widest text-text-secondary uppercase">CLIENTS</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-mono text-4xl md:text-6xl text-foreground odometer"><Odometer value={5} suffix=".0" /></div>
            <div className="font-meta text-[10px] md:text-xs tracking-widest text-text-secondary uppercase">RATING</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-mono text-4xl md:text-6xl text-foreground odometer"><Odometer value={2019} /></div>
            <div className="font-meta text-[10px] md:text-xs tracking-widest text-text-secondary uppercase">FOUNDED</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-mono text-4xl md:text-6xl text-foreground odometer"><Odometer value={2} /></div>
            <div className="font-meta text-[10px] md:text-xs tracking-widest text-text-secondary uppercase">CERTIFIED ARTISTS</div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — TICKER STRIP 2 */}
      <section className="bg-gold py-3">
        <Ticker speed={25} direction="reverse">
          <span className="font-display font-bold text-background text-2xl tracking-[0.2em] uppercase mx-4">
            1000+ CLIENTS ✦ EST. 2019 ✦ CERTIFIED ARTISTS ✦ BODY PIERCING ✦ TRAINING ✦
          </span>
        </Ticker>
      </section>

      {/* SECTION 05.5 — THE PROCESS */}
      <section className="py-32 px-6 bg-surface border-y border-gold-dim/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-16 stencil-stamp">
            THE PROCESS
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-0">
            {[
              { num: "01", title: "THE CONSULTATION", desc: "Every tattoo starts with a conversation. We discuss your vision, the placement, the style, and what you want it to mean." },
              { num: "02", title: "THE DESIGN", desc: "We don't use templates. Your artist spends time sketching and refining the concept until it is a unique piece of art meant only for you." },
              { num: "03", title: "THE SESSION", desc: "The execution. In a hyper-hygienic, focused environment, your design becomes permanent. No rush, no compromises." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 md:p-12 border border-gold-dim/20 md:border-r-0 last:md:border-r hover:bg-background transition-colors duration-500 group" data-reveal>
                <div className="font-mono text-5xl text-gold-dim mb-8 group-hover:text-gold transition-colors">{step.num}</div>
                <h3 className="font-headline font-bold text-3xl text-accent uppercase mb-4">{step.title}</h3>
                <p className="font-meta text-xs text-text-secondary leading-relaxed tracking-widest uppercase">
                  {step.desc}
                </p>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05.7 — FIRST TATTOO TEASER */}
      <section className="py-20 md:py-32 px-6 bg-background relative overflow-hidden group">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-2 items-center justify-between gap-12 lg:gap-24">
          <div className="w-full">
            <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
              PLANNING YOUR FIRST?
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-accent uppercase mb-6 leading-[0.9]">
              Everything you need<br />to know before<br />the first needle.
            </h2>
            <p className="font-body text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              We know it’s a big decision. We’ve written a guide specifically for first-timers to help you understand the pain, the prep, and the process.
            </p>
            <Magnetic>
              <Link href="/first-timer" className="inline-flex items-center gap-4 group/link">
                <span className="font-headline font-bold text-xl md:text-2xl uppercase text-foreground group-hover/link:text-gold transition-colors">Read the Guide</span>
                <div className="w-12 h-[1px] bg-gold transition-all group-hover/link:w-20" />
              </Link>
            </Magnetic>
          </div>
          <div className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-[3/4] bg-surface border border-gold-dim/20 overflow-hidden" data-reveal-image>
             <Image 
                src="/gallery/teaser.png" 
                alt="First tattoo experience" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </div>
        </div>
      </section>

      {/* SECTION 06 — TEAM PREVIEW */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-6 stencil-stamp">
            THE ARTISTS
          </div>
          <p className="font-body text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
            A husband and wife who built this studio from the ground up — with their hands, their needles, and six years of work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {TEAM_MEMBERS.map((member) => (
            <Tilt key={member.id} rotation={5}>
              <Link href={`/team#${member.id}`} className="group relative block" data-cursor="view" data-reveal>
                <div className="aspect-[3/4] relative overflow-hidden bg-surface mb-6" data-parallax>
                  <Image
                    src={member.portrait}
                    alt={member.name}
                    fill
                    className="object-cover grayscale transition-all duration-[850ms] group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-display font-extrabold text-5xl md:text-6xl text-accent uppercase mb-2">
                  {member.name}
                </h3>
                <p className="font-meta text-xs text-text-secondary tracking-widest uppercase">
                  {member.title}
                </p>
              </Link>
            </Tilt>
          ))}
        </div>
        
        <div className="mt-12 text-center text-text-secondary font-meta text-xs tracking-widest uppercase">
          Studio managed by Pugazh
        </div>

        <div className="mt-16 text-center">
          <Link href="/team" className="font-headline font-bold text-2xl uppercase text-foreground hover:underline underline-offset-8 decoration-gold decoration-2 transition-all">
            MEET THE TEAM &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 07 — COURSES TEASER */}
      <section className="py-32 px-6 bg-surface relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] opacity-[0.03] pointer-events-none select-none z-0 translate-x-1/4">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-xl mb-20">
            <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-6 stencil-stamp">
              LEARN THE CRAFT
            </div>
            <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed">
              We don't just tattoo. We teach. Two courses. A to Z of the tattoo business — technique, realism, colour, piercing, client management, and how to build your studio from nothing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gold-dim/30 p-8 hover:border-gold transition-colors group">
              <h3 className="font-headline font-bold text-4xl text-accent uppercase mb-4">3 MONTH</h3>
              <p className="font-meta text-xs text-text-secondary leading-relaxed mb-8">
                Advanced Training · Realism · Colour · Body Piercing · Pencil Art · Business
              </p>
              <Link href="/courses/3-month" className="text-gold font-meta text-xs tracking-widest uppercase group-hover:text-gold-hover transition-colors">
                VIEW COURSE &rarr;
              </Link>
            </div>
            <div className="border border-gold-dim/30 p-8 hover:border-gold transition-colors group">
              <h3 className="font-headline font-bold text-4xl text-accent uppercase mb-4">45 DAYS</h3>
              <p className="font-meta text-xs text-text-secondary leading-relaxed mb-8">
                Advanced Training · Realism · Colour · Business
              </p>
              <Link href="/courses/45-days" className="text-gold font-meta text-xs tracking-widest uppercase group-hover:text-gold-hover transition-colors">
                VIEW COURSE &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07.5 — CLIENT VOICES */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto border-t border-gold-dim/30">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase stencil-stamp">
            CLIENT VOICES
          </div>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Rahul S.", review: "Absolutely phenomenal work by Thiyagu. The realism is on another level, but what impressed me most was the hygiene. Spotless studio, professional process from start to finish." },
            { name: "Priya M.", review: "Aishwarya designed my first tattoo. I was incredibly nervous but she walked me through every single step. The line work is so delicate and perfect. I'll never go anywhere else." },
            { name: "Karthik V.", review: "You get what you pay for. 180 is the real deal. They don't just tattoo you; they consult with you to make sure the design fits your anatomy perfectly. Highly recommended." }
          ].map((voice, idx) => (
            <div key={idx} className="border border-gold-dim/20 p-8 hover:border-gold transition-colors duration-500 bg-surface">
              <p className="font-body text-lg text-text-secondary leading-relaxed mb-8 italic">
                "{voice.review}"
              </p>
              <h4 className="font-headline font-bold text-xl text-accent uppercase">{voice.name}</h4>
              <p className="font-meta text-[10px] tracking-widest uppercase text-gold mt-2">Verified Client</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 08 — ABOUT TEASER */}
      <section className="py-32 px-6 max-w-[1000px] mx-auto text-center relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[35vw] h-[35vw] opacity-[0.02] pointer-events-none select-none z-0 -translate-x-1/4">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10">
        <h2 className="font-display font-extrabold text-[clamp(40px,6vw,90px)] leading-[0.9] text-accent uppercase mb-10">
          One of the cleanest tattoo<br />studios in India.
        </h2>
        <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-12">
          That's not our claim. That's what our clients tell us. Since 2019, Thiyagu and Aishwarya have built 180 around one rule: the work has to be something you're proud of in 20 years.
        </p>
        <Link href="/about" className="font-headline font-bold text-2xl uppercase text-foreground hover:underline underline-offset-8 decoration-gold decoration-2 transition-all">
          Our Story &rarr;
        </Link>
        </div>
      </section>



      <Lightbox 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
