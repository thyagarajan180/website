"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal new page
    if (panelRef.current && containerRef.current) {
      gsap.fromTo(
        panelRef.current,
        { scaleX: 1, transformOrigin: "right" },
        { scaleX: 0, duration: 0.65, ease: "power3.inOut" }
      );
      
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, delay: 0.3 }
      );
    }
  }, []);

  return (
    <>
      <div 
        ref={panelRef} 
        className="fixed inset-0 z-[100] bg-gold pointer-events-none"
        style={{ transformOrigin: "left" }}
      />
      <div ref={containerRef} className="opacity-0">
        {children}
      </div>
    </>
  );
}
