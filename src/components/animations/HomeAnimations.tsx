"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";

gsap.registerPlugin(ScrollTrigger);

export default function HomeAnimations() {
  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // The 180 Turn (Hero Logo)
    const hasTurned = sessionStorage.getItem("has180Turned");
    if (!hasTurned) {
      const heroLogo = document.querySelector(".hero-logo");
      if (heroLogo) {
        // Simple character split effect without external library
        const text = heroLogo.textContent || "";
        heroLogo.innerHTML = text.split("").map(char => 
          `<span class="char inline-block">${char === " " ? "&nbsp;" : char}</span>`
        ).join("");

        gsap.fromTo(
          ".hero-logo .char",
          { rotationX: 90, opacity: 0, y: 20 },
          { 
            rotationX: 0, 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.02, 
            ease: "power4.out", 
            delay: 0.3 
          }
        );

        gsap.fromTo(
          ".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.2 }
        );
      }
      sessionStorage.setItem("has180Turned", "true");
    } else {
      gsap.set(".hero-logo, .hero-cta", { opacity: 1 });
    }

    // Parallax Depth (Hero)
    gsap.to(".hero-logo", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-logo",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Manifesto Text Fade In
    const manifestoText = document.querySelector(".manifesto-text");
    if (manifestoText) {
      gsap.fromTo(manifestoText,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: manifestoText,
            start: "top 80%",
          }
        }
      );
    }

    // Stencil Stamp (Section Labels)
    const labels = document.querySelectorAll(".stencil-stamp");
    labels.forEach((label) => {
      gsap.fromTo(label,
        { scale: 1.15, filter: "blur(3px)", opacity: 0 },
        {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: label,
            start: "top 85%",
          }
        }
      );
    });

    // --- NEW PREMIUM ANIMATIONS ---

    // Global Reveal Logic (Staggered fade/slide)
    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Image Reveal (Masking effect)
    const imageReveals = document.querySelectorAll('[data-reveal-image]');
    imageReveals.forEach((el) => {
      const img = el.querySelector('img');
      let mask = el.querySelector('.reveal-mask');
      
      if (!mask) {
        mask = document.createElement('div');
        mask.className = 'reveal-mask absolute inset-0 bg-surface z-20';
        el.appendChild(mask);
      }

      gsap.to(mask, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      });

      if (img) {
        gsap.fromTo(img,
          { scale: 1.3 },
          {
            scale: 1,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            }
          }
        );
      }
    });

    // Subtle Section Skew on Scroll
    const skews = document.querySelectorAll('[data-skew]');
    skews.forEach((section) => {
      gsap.to(section, {
        skewY: 1.5,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: "top bottom",
          end: "bottom top"
        }
      });
    });

    // Image Parallax (Container based)
    const parallaxes = document.querySelectorAll('[data-parallax]');
    parallaxes.forEach((container) => {
      const img = container.querySelector('img');
      if (img) {
        gsap.fromTo(img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
