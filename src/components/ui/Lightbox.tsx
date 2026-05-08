"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

interface LightboxProps {
  image: {
    id: number;
    src: string;
    style: string;
    artist: string;
    year: number;
  } | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (image) {
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = "hidden";

      // Animate in
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      tl.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.2)" },
        "-=0.2"
      );

      // Handle Escape key
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      window.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [image]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });
    tl.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
    });
    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      "-=0.2"
    );
  };

  if (!image) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background/95 backdrop-blur-xl opacity-0 px-6 md:px-12"
      onClick={handleClose}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-8 right-8 text-accent hover:text-gold transition-colors p-4 group z-20"
        aria-label="Close Lightbox"
      >
        <div className="relative w-8 h-8">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current rotate-45 transition-transform group-hover:scale-x-110" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -rotate-45 transition-transform group-hover:scale-x-110" />
        </div>
      </button>

      <div
        ref={contentRef}
        className="relative max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-square md:aspect-[4/5] bg-surface border border-gold-dim/30 overflow-hidden shadow-2xl">
          <Image
            src={image.src}
            alt={`Tattoo by ${image.artist}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 80vw"
            priority
          />
        </div>

        {/* Metadata */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[280px]">
          <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
            PIECE INFO
          </div>
          <h3 className="font-display font-extrabold text-5xl md:text-6xl text-accent uppercase leading-none mb-4">
            {image.style}
          </h3>
          <div className="w-12 h-[1px] bg-gold mb-8" />
          
          <div className="space-y-4">
            <div>
              <p className="font-meta text-[10px] tracking-widest text-text-secondary uppercase mb-1">Artist</p>
              <p className="font-headline font-bold text-2xl text-foreground uppercase">{image.artist}</p>
            </div>
            <div>
              <p className="font-meta text-[10px] tracking-widest text-text-secondary uppercase mb-1">Year</p>
              <p className="font-headline font-bold text-2xl text-foreground uppercase">{image.year}</p>
            </div>
          </div>

          <button
            onClick={() => window.open(`https://instagram.com/180_tattoo_studio`, '_blank')}
            className="mt-12 group flex items-center gap-4 text-gold hover:text-gold-hover transition-colors"
          >
            <span className="font-meta text-xs tracking-widest uppercase">Book Similar</span>
            <div className="w-8 h-[1px] bg-current transition-all group-hover:w-12" />
          </button>
        </div>
      </div>
    </div>
  );
}
