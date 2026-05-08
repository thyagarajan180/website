"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/data";
import Lightbox from "@/components/ui/Lightbox";
import Ticker from "@/components/ui/Ticker";
import Magnetic from "@/components/animations/Magnetic";
import HeroSlider from "@/components/ui/HeroSlider";


const CATEGORIES = ["TATTOO", "PIERCING"];
export default function GalleryPage() {
  const [filter, setFilter] = useState("TATTOO");
  const [selectedImage, setSelectedImage] = useState<null | (typeof GALLERY_ITEMS)[0]>(null);

  const sortedItems = [...GALLERY_ITEMS].sort((a, b) => b.year - a.year);
  
  const filteredItems = filter === "TATTOO"
    ? sortedItems.filter(item => item.style.toUpperCase() !== "PIERCING")
    : sortedItems.filter(item => item.style.toUpperCase() === "PIERCING");

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <section className="relative pt-40 md:pt-44 pb-24 px-6 md:px-12 bg-surface overflow-hidden">
        <HeroSlider 
          images={[
            "/gallery/IMG_0576.webp",
            "/gallery/IMG_0649.webp",
            "/gallery/IMG_2178.webp",
            "/gallery/IMG_2361.webp"
          ]} 
          opacity="opacity-15"
        />
        <div className="absolute top-0 right-0 font-display font-extrabold text-[30vw] text-gold/5 leading-none translate-x-1/4 -translate-y-1/4 pointer-events-none select-none">
          WORK
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8 stencil-stamp">
            SELECTED PORTFOLIO
          </div>
          <h1 className="font-display font-extrabold text-[clamp(60px,10vw,140px)] leading-[0.8] text-accent uppercase max-w-4xl mb-12">
            The collection of<br />permanent art.
          </h1>
          
          {/* FILTERS */}
          <div className="flex flex-wrap md:flex-nowrap lg:flex-wrap gap-2 md:gap-4 mt-12 md:mt-16 border-t border-gold-dim/20 pt-8 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <Magnetic key={cat} strength={20}>
                <button
                  onClick={() => setFilter(cat)}
                  className={`font-meta text-[10px] md:text-xs tracking-widest uppercase px-4 md:px-6 py-2 transition-all duration-300 border whitespace-nowrap ${
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
      </section>

      {/* MASONRY GRID */}
      <section className="py-12 px-6 md:px-12 max-w-[1800px] mx-auto w-full flex-grow">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden group cursor-pointer break-inside-avoid bg-surface"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              
              {/* Overlay Info on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                <p className="font-meta text-[10px] tracking-widest text-gold uppercase mb-1">{item.artist}</p>
                <h3 className="font-headline font-bold text-xl text-accent uppercase">{item.style}</h3>
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
        
        {filteredItems.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-body text-xl text-text-secondary">No pieces found in this category yet. Check back soon.</p>
          </div>
        )}
      </section>

      {/* HEALED WORK SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] md:aspect-[4/3] border border-gold-dim/20 overflow-hidden group order-2 lg:order-1" data-reveal-image>
            <Image 
              src="/gallery/longevity.png" 
              alt="Healed realism tattoo" 
              fill 
              priority
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-6 left-6 bg-gold text-background font-meta text-[10px] tracking-widest px-3 py-1 uppercase z-30">
              Healed 2 Years
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
              LONGEVITY
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-7xl text-accent uppercase mb-6 md:mb-8 leading-none">
              Art that ages<br />with grace.
            </h2>
            <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              A tattoo is only as good as it looks five years after the session. We use specific techniques in saturation and depth to ensure your piece remains sharp, vibrant, and legible as the skin matures.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["No over-saturation", "Correct needle depth", "Premium pigments", "Post-healing care"].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
                  <span className="font-meta text-[10px] tracking-widest uppercase text-accent leading-tight">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO STANDARDS */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center border-t border-gold-dim/10">
        <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-8 stencil-stamp">
          TRANSPARENCY
        </div>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-accent uppercase mb-8">No Filters. No Edits.</h2>
        <p className="font-body text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          What you see in our gallery is what you see on the skin. We never use photo filters, contrast-boosting apps, or digital touch-ups. Real art requires real representation.
        </p>
      </section>

      {/* FOOTER TICKER */}
      <section className="bg-gold py-4 mt-12">
        <Ticker speed={30}>
          <span className="font-display font-bold text-background text-3xl tracking-[0.3em] uppercase mx-8">
            EVERY TATTOO IS CUSTOM ✦ NO FLASH ✦ NO COPIES ✦ DESIGNED FOR YOU ✦ 180 STANDARD ✦
          </span>
        </Ticker>
      </section>

      <Lightbox 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
