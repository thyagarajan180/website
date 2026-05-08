"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import HeroSlider from "@/components/ui/HeroSlider";
const FAQ = dynamic(() => import("@/components/ui/FAQ"), { ssr: false });
const Ticker = dynamic(() => import("@/components/ui/Ticker"), { ssr: false });

import Magnetic from "@/components/animations/Magnetic";
import Tilt from "@/components/animations/Tilt";

import { useState } from "react";
import { isNungambakkamOpened } from "@/lib/branch-utils";

export default function ContactPage() {
  const isOpened = isNungambakkamOpened();
  
  const [formData, setFormData] = useState({ name: "", email: "", subject: "Tattoo Inquiry", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "Tattoo Inquiry", message: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message.");
    }
  };

  const generalFaqs = [
    {
      question: "What is the minimum age for a tattoo?",
      answer: "In accordance with legal standards, you must be at least 18 years of age. We require a valid government-issued ID for all sessions. No exceptions."
    },
    {
      question: "Is there parking available at the studio?",
      answer: "Yes, we have dedicated parking for clients directly in front of the studio in Teynampet. Please let us know if you're driving so we can assist you."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash, UPI (GPay/PhonePe), and all major Credit/Debit cards. Deposits are typically handled via UPI for convenience."
    },
    {
      question: "Can I bring my own design?",
      answer: "We love seeing your ideas, but our artists will always re-draw or adapt your design to ensure it works perfectly for your body's anatomy and skin type."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-24 px-6 md:px-12 bg-surface overflow-hidden border-b border-gold-dim/20">
        <HeroSlider 
          images={[
            "/gallery/IMG_4135.webp",
            "/gallery/IMG_4204.webp",
            "/gallery/IMG_5138.webp",
            "/gallery/IMG_5555.webp"
          ]} 
          opacity="opacity-10"
        />
        <div className="absolute top-12 right-12 w-32 h-32 md:w-64 md:h-64 opacity-[0.03] pointer-events-none select-none z-10">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8 stencil-stamp">
            GET IN TOUCH
          </div>
          <h1 className="font-display font-extrabold text-[clamp(60px,10vw,140px)] leading-[0.8] text-accent uppercase max-w-4xl mb-12">
            The studio is<br />always open.
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
            Located in the heart of Teynampet, Chennai. Whether it's a first inquiry or a complex masterpiece, we are here to talk.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[45vw] opacity-[0.02] pointer-events-none select-none z-0 translate-x-1/4">
          <Image src="/logo-v6.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 border-b border-gold-dim/20 pb-24">
          <Magnetic>
            <div className="flex flex-col gap-2" data-reveal>
              <span className="font-meta text-[10px] tracking-widest text-gold uppercase">Phone</span>
              <a href="tel:+919003157338" className="font-headline font-bold text-2xl md:text-3xl text-accent hover:text-gold transition-colors">+91 90031 57338</a>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="flex flex-col gap-2" data-reveal>
              <span className="font-meta text-[10px] tracking-widest text-gold uppercase">Email</span>
              <a href="mailto:180tattooaishuthiyagu@gmail.com" className="font-headline font-bold text-2xl md:text-3xl text-accent hover:text-gold transition-colors">180tattooaishuthiyagu@gmail.com</a>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="flex flex-col gap-2" data-reveal>
              <span className="font-meta text-[10px] tracking-widest text-gold uppercase">Social</span>
              <a href="https://instagram.com/180_tattoo_studio" target="_blank" rel="noopener noreferrer" className="font-headline font-bold text-2xl md:text-3xl text-accent hover:text-gold transition-colors">@180_tattoo_studio</a>
            </div>
          </Magnetic>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 gap-12">
              <div className="grid md:grid-cols-2 gap-12 border-b border-gold-dim/20 pb-16">
                <Tilt rotation={5}>
                  <div data-reveal>
                    <h3 className="font-meta text-[10px] tracking-widest uppercase text-gold mb-4">Branch 01 (HQ)</h3>
                    <p className="font-headline font-bold text-xl md:text-2xl text-accent uppercase leading-snug">
                      No 114/128, Eldams Rd <br />
                      opposite market, Teynampet, <br />
                      CHENNAI -18
                    </p>
                    <a href="https://goo.gl/maps/n32qiBhwLzMhWZ5y8" target="_blank" rel="noopener noreferrer" className="font-meta text-[9px] tracking-widest text-gold hover:underline mt-2 inline-block">View Map &rarr;</a>
                  </div>
                </Tilt>
                <Tilt rotation={5}>
                  <div data-reveal>
                    <h3 className="font-meta text-[10px] tracking-widest uppercase text-gold mb-4">Branch 02 ({isOpened ? "Now Open" : "Opening June 11"})</h3>
                    <p className="font-headline font-bold text-xl md:text-2xl text-accent uppercase leading-snug">
                      First floor, New No: 11, Old No: 6, <br />
                      G.N. Chetty Road, Near Anna Flyover, <br />
                      Teynampet, Chennai - 600006
                    </p>
                    <a href="https://maps.app.goo.gl/C7qT1eyQEt72FGoe6?g_st=iwb" target="_blank" rel="noopener noreferrer" className="font-meta text-[9px] tracking-widest text-gold hover:underline mt-2 inline-block">View Map &rarr;</a>
                  </div>
                </Tilt>
              </div>
            </div>

            <div>
              <h3 className="font-meta text-[10px] tracking-widest uppercase text-gold mb-6">Studio Hours</h3>
              <div className="space-y-3">
                {[
                  { day: "Walk-ins", hours: "10:00 AM — 10:00 PM" },
                  { day: "Appointments", hours: "24 Hours / 7 Days" }
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-gold-dim/10 pb-3 max-w-md">
                    <span className="font-headline font-bold text-xl text-foreground uppercase">{h.day}</span>
                    <span className="font-meta text-xs tracking-widest text-text-secondary">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-surface p-8 md:p-12 border border-gold-dim/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rotate-45 translate-x-1/2 -translate-y-1/2" />
            <h2 className="font-display font-extrabold text-4xl text-accent uppercase mb-10">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-background border-b border-gold-dim/30 py-3 px-1 text-foreground focus:outline-none focus:border-gold transition-colors font-body" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-background border-b border-gold-dim/30 py-3 px-1 text-foreground focus:outline-none focus:border-gold transition-colors font-body" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-background border-b border-gold-dim/30 py-3 px-1 text-foreground focus:outline-none focus:border-gold transition-colors font-meta text-xs uppercase tracking-widest"
                >
                  <option>Tattoo Inquiry</option>
                  <option>Academy Enrollment</option>
                  <option>Business Opportunity</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-meta text-[10px] tracking-widest uppercase text-text-secondary">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-background border-b border-gold-dim/30 py-3 px-1 text-foreground focus:outline-none focus:border-gold transition-colors font-body resize-none" 
                />
              </div>

              {status === "success" && (
                <div className="p-4 bg-gold/10 border border-gold text-gold font-body text-sm text-center">
                  Thank you. Your message has been sent successfully. We will get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-error/10 border border-error text-error font-body text-sm text-center">
                  {errorMessage}
                </div>
              )}

              <Magnetic>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-gold text-background py-5 font-headline font-bold text-xl uppercase hover:bg-gold-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </button>
              </Magnetic>
            </form>

          </div>
        </div>
        </div>
      </section>

      {/* GENERAL FAQS */}
      <section className="bg-background">
        <FAQ items={generalFaqs} title="General Inquiries" />
      </section>

      {/* PREPARATION TICKER */}
      <section className="bg-surface py-6 border-y border-gold-dim/30 overflow-hidden">
        <Ticker speed={35}>
          <span className="font-display font-bold text-gold text-3xl tracking-[0.3em] uppercase mx-12">
            STAY HYDRATED ✦ EAT WELL ✦ SLEEP 8 HOURS ✦ NO ALCOHOL ✦ WEAR LOOSE CLOTHING ✦
          </span>
        </Ticker>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="h-[300px] md:h-[400px] w-full bg-surface relative flex items-center justify-center grayscale overflow-hidden">
         <div className="text-center z-10 px-6">
            <h3 className="font-display font-extrabold text-3xl md:text-5xl text-gold/20 uppercase mb-4 tracking-tighter">View Map</h3>
            <a href="https://goo.gl/maps/n32qiBhwLzMhWZ5y8" target="_blank" rel="noopener noreferrer" className="font-headline font-bold text-lg md:text-xl text-gold hover:underline uppercase">Open in Google Maps &rarr;</a>
         </div>
         <div className="absolute inset-0 bg-gold/5" />
      </section>
    </div>
  );
}
