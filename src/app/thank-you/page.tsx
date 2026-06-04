import Link from "next/link";
import Magnetic from "@/components/animations/Magnetic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Confirmed | 180 Tattoo Studio",
  description: "Thank you for booking your session at 180 Tattoo Studio.",
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-6 text-center pt-32 pb-20">
      <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8">
        BOOKING CONFIRMED
      </div>
      
      <h1 className="font-display font-extrabold text-[clamp(50px,10vw,120px)] leading-[0.85] text-accent uppercase max-w-[1000px] mb-8">
        YOUR SESSION<br />IS SECURED.
      </h1>
      
      <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-16">
        Thank you for choosing 180 Tattoo Studio. We have received your booking details and will see you at the studio. Check your email for further instructions.
      </p>

      <Magnetic>
        <Link 
          href="/" 
          className="inline-flex bg-gold text-background border border-gold font-headline font-bold text-lg md:text-xl tracking-widest uppercase px-10 py-5 transition-all relative overflow-hidden group hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Return Home</span>
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-[650ms] ease-[cubic-bezier(0.77,0,0.18,1)] z-0" />
        </Link>
      </Magnetic>
    </div>
  );
}
