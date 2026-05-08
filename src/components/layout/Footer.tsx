import Link from "next/link";
import { isNungambakkamOpened } from "@/lib/branch-utils";
import Logo from "./Logo";

export default function Footer() {
  const isOpened = isNungambakkamOpened();
  return (
    <footer className="bg-surface pt-10 pb-16 px-6 md:px-12 mt-auto border-t border-gold-dim/30">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start mb-12 md:mb-0">
          <Logo variant="footer" />
        </div>

        {/* Center: Nav */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4 font-meta text-[10px] md:text-xs tracking-widest uppercase text-foreground">
            <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
            <Link href="/team" className="hover:text-gold transition-colors">Team</Link>
            <Link href="/courses" className="hover:text-gold transition-colors">Courses</Link>
            <Link href="/about" className="hover:text-gold transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
          <div className="mt-4">
            <a 
              href="https://instagram.com/180_tattoo_studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-meta text-[10px] tracking-widest uppercase text-gold hover:text-foreground transition-all duration-300 border-b border-gold/30 pb-1"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>

        {/* Right: Contact info */}
        <div className="flex flex-col gap-3 font-mono text-sm text-text-secondary w-full md:w-auto text-center md:text-right mt-8 md:mt-0">
          <a href="mailto:180tattooaishuthiyagu@gmail.com" className="hover:text-gold transition-colors">180tattooaishuthiyagu@gmail.com</a>
          <a href="tel:+919003157338" className="hover:text-gold transition-colors">+91 90031 57338</a>
          <p className="uppercase text-[10px] tracking-widest opacity-60">Walk-ins: 10:00–22:00 | Appointments: 24/7</p>
        </div>

      </div>

      <div className="max-w-[1800px] mx-auto mt-16 pt-8 border-t border-gold-dim/30 flex flex-col-reverse md:flex-row justify-between items-center gap-6 font-meta text-[11px] tracking-widest uppercase text-text-secondary">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p>&copy; 2025 180 Tattoo Studio, Chennai. All work original.</p>
          <div className="flex gap-4 opacity-60">
            <span>Teynampet (HQ)</span>
            <span className="text-gold">•</span>
            <span>Nungambakkam ({isOpened ? "Now Open" : "Opening June 11, 2026"})</span>
          </div>
        </div>
        <div className="flex gap-6">
          <a href="https://instagram.com/180_tattoo_studio" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
          <a href="https://www.youtube.com/channel/UCLHG6ty7TIioM1WrEWflFNQ" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
