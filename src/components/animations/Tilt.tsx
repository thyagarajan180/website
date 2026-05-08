"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Tilt({ children, rotation = 15 }: { children: React.ReactNode, rotation?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const rotateX = (y - 0.5) * rotation;
      const rotateY = (x - 0.5) * -rotation;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: "power2.out",
        perspective: 1000
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [rotation]);

  return (
    <div ref={ref} className="transition-transform duration-500 ease-out">
      {children}
    </div>
  );
}
