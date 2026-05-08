"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface OdometerProps {
  value: number;
  suffix?: string;
}

export default function Odometer({ value, suffix = "" }: OdometerProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const target = { val: 0 };
    
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.innerText = Math.round(value).toString() + suffix;
      return;
    }

    const anim = gsap.to(target, {
      val: value,
      duration: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: node,
        start: "top 85%",
      },
      onUpdate: () => {
        if (node) {
          node.innerText = Math.round(target.val).toString() + suffix;
        }
      }
    });

    return () => {
      anim.kill();
    };
  }, [value, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}
