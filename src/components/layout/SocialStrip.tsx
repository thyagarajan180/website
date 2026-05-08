import Link from "next/link";
import Image from "next/image";

export default function SocialStrip() {
  return (
    <section className="border-t border-gold-dim/30 bg-surface relative overflow-hidden group">
      {/* Background Big Logo Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] opacity-[0.03] pointer-events-none select-none z-0">
        <Image src="/logo-v6.png" alt="" fill className="object-contain" />
      </div>

      <a 
        href="https://instagram.com/180_tattoo_studio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative z-10 flex items-center justify-between px-6 py-16 md:py-28 md:px-12 group/link hover:bg-gold transition-colors duration-700"
      >
        <div className="flex flex-col">
          <span className="font-meta text-[10px] md:text-xs tracking-[0.4em] uppercase text-gold group-hover/link:text-background/60 transition-colors mb-4">
            Join the community
          </span>
          <h2 className="font-display font-extrabold text-[clamp(32px,9vw,90px)] text-accent uppercase group-hover/link:text-background transition-colors duration-500 leading-none">
            @180_tattoo_studio
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-headline font-bold text-2xl uppercase text-foreground group-hover/link:text-background transition-colors duration-500 hidden lg:block">
            Follow on Instagram
          </span>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gold group-hover/link:border-background flex items-center justify-center transition-all duration-500 transform group-hover/link:scale-110">
            <span className="font-headline font-bold text-2xl md:text-3xl text-gold group-hover/link:text-background">&rarr;</span>
          </div>
        </div>
      </a>
    </section>
  );
}
