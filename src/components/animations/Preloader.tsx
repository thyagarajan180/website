"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    const hasBeenShown = sessionStorage.getItem("preloaderShown");
    if (hasBeenShown) {
      setIsVisible(false);
      return;
    }

    // Simulate progress
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Speed up progress as we go
        const step = prev > 80 ? 0.5 : 2;
        return Math.min(100, prev + step);
      });
    }, 15);

    // Fast-track if window is loaded
    const handleLoad = () => setProgress(100);
    window.addEventListener("load", handleLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          sessionStorage.setItem("preloaderShown", "true");
        }
      });

      tl.to(".preloader-content", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in"
      })
      .to(".preloader-overlay", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power4.inOut"
      });
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="preloader-overlay fixed inset-0 z-[9999] bg-surface flex flex-col items-center justify-center overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="preloader-content relative flex flex-col items-center">
        <div className="mb-10 scale-110 md:scale-125">
          <Image 
            src="/logo-v6.png" 
            alt="180 Tattoo Logo" 
            width={300} 
            height={300} 
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
            priority
          />
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-[1px] bg-gold/20 relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-gold transition-all duration-100 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}%
          </span>
          <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-[0.4em] px-4 py-1 uppercase stencil-stamp">
            INITIALIZING THE STANDARD
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-12 font-meta text-[10px] tracking-widest text-gold/30 uppercase hidden md:block">
        EST. 2019 / CHENNAI
      </div>
      <div className="absolute bottom-12 right-12 font-meta text-[10px] tracking-widest text-gold/30 uppercase hidden md:block">
        HYGIENE + ARTISTRY
      </div>
    </div>
  );
}
