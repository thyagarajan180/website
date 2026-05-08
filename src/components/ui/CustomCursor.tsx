"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const [hoverState, setHoverState] = useState<string | null>(null);

  useEffect(() => {
    // Disable on mobile
    if (window.matchMedia("(max-width: 768px)").matches) return;
    
    // Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.055, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.055, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Setup global hover listeners using event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const hoverView = target.closest('[data-cursor="view"]');
      const hoverChat = target.closest('[data-cursor="chat"]');
      const hoverEnrol = target.closest('[data-cursor="enrol"]');

      if (hoverView) setHoverState("VIEW");
      else if (hoverChat) setHoverState("CHAT");
      else if (hoverEnrol) setHoverState("ENROL");
      else setHoverState(null);
    };

    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  // If mobile, we don't render it at all. We handle this via CSS media queries too.
  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hidden md:flex ${
        hoverState ? "w-20 h-20 bg-gold rounded-full" : "w-4 h-4"
      }`}
      style={{
        mixBlendMode: hoverState ? "normal" : "difference"
      }}
    >
      {!hoverState && (
        <>
          <div className="absolute w-[16px] h-[1px] bg-gold" />
          <div className="absolute h-[16px] w-[1px] bg-gold" />
        </>
      )}
      
      {hoverState && (
        <div ref={cursorTextRef} className="text-[#080806] font-meta text-xs font-medium tracking-wide">
          {hoverState}
        </div>
      )}
    </div>
  );
}
