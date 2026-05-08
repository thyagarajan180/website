"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Magnetic from "@/components/animations/Magnetic";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "First Timer", href: "/first-timer" },
  { label: "Team", href: "/team" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(".mobile-menu-link", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power4.out", delay: 0.2 }
      );
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-surface/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-28 md:h-32 flex items-center justify-between relative">
          <Logo />

          <div className="hidden lg:flex items-center gap-10 font-meta text-xs tracking-widest uppercase">
            {NAV_LINKS.map(link => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`transition-colors ${isActive ? "text-gold" : "text-foreground hover:text-gold"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <Magnetic>
              <Link 
                href="/booking" 
                className={`hidden lg:inline-flex border border-gold font-meta text-xs tracking-widest uppercase px-6 py-2.5 transition-colors relative overflow-hidden group ${pathname.startsWith("/booking") ? "bg-gold text-background" : "text-gold hover:bg-gold hover:text-background"}`}
              >
                <span className="relative z-10">BOOK NOW</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-[550ms] ease-[cubic-bezier(0.77,0,0.18,1)] z-0" />
              </Link>
            </Magnetic>

            <Magnetic>
              <button 
                className="lg:hidden font-meta text-xs tracking-widest uppercase text-foreground hover:text-gold transition-colors p-2"
                onClick={() => setMenuOpen(true)}
              >
                MENU
              </button>
            </Magnetic>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background z-[100] flex flex-col justify-center px-6 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button 
          className="absolute top-8 right-6 font-meta text-xs tracking-widest uppercase hover:text-gold transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          CLOSE
        </button>

        <div className="flex flex-col gap-2 md:gap-4 font-display font-extrabold text-[clamp(40px,12vw,100px)] leading-[0.85] uppercase overflow-hidden">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link 
                key={link.label}
                href={link.href} 
                className={`mobile-menu-link transition-colors text-left inline-block ${isActive ? "text-gold" : "text-foreground hover:text-gold"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/booking" className={`mobile-menu-link text-left inline-block mt-4 md:mt-8 ${pathname.startsWith("/booking") ? "text-gold-hover" : "text-gold hover:text-gold-hover"}`}>Book Now</Link>
        </div>
      </div>
    </>
  );
}
