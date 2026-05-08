"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSliderProps {
  images: string[];
  interval?: number;
  opacity?: string;
}

export default function HeroSlider({ images, interval = 5000, opacity = "0.8" }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert Tailwind opacity class to numeric if needed, or just use numeric directly
  const numericOpacity = opacity.includes("opacity-") 
    ? parseInt(opacity.replace("opacity-", "")) / 100 
    : parseFloat(opacity);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 z-0 bg-[#080806] overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ 
            opacity: idx === currentIndex ? numericOpacity : 0,
            zIndex: idx === currentIndex ? 10 : 0
          }}
        >
          <Image
            src={src}
            alt="180 Tattoo Studio Masterpiece"
            fill
            className="object-cover object-top"
            priority={idx === 0}
            unoptimized
            sizes="100vw"
            style={{ filter: "brightness(1.1) contrast(1.05)" }}
          />
        </div>
      ))}
      
      {/* Visual Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080806]/60 via-transparent to-[#080806]/80 z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-black/10 z-20 pointer-events-none" />
      
      {/* Visual Indicator (Progress Dots) */}
      <div className="absolute bottom-12 right-12 flex gap-3 z-30">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`h-[2px] transition-all duration-700 ease-in-out ${
              idx === currentIndex ? "w-8 bg-gold" : "w-4 bg-gold/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
