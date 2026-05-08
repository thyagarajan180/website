"use client";

import Link from "next/link";
import Ticker from "@/components/ui/Ticker";
import FAQ from "@/components/ui/FAQ";
import HeroSlider from "@/components/ui/HeroSlider";

export default function CoursesPage() {
  const courses = [
    {
      duration: "3 MONTHS",
      title: "Master Course",
      subtitle: "The complete journey from art to business.",
      description: "Our most comprehensive program. We take you from the fundamentals of pencil art to the complexities of color realism and studio management. This is not just a tattoo course; it's a career builder.",
      features: [
        "Advanced Realism & Portrait Training",
        "Color Packing & Blending Techniques",
        "Body Piercing Certification",
        "Pencil Art & Anatomy Fundamentals",
        "Client Management & Studio Ethics",
        "Full Studio Setup Guidance"
      ],
      price: "Premium Investment"
    },
    {
      duration: "45 DAYS",
      title: "Advanced Craft",
      subtitle: "Accelerated training for focused artists.",
      description: "Designed for those who have the art foundation and want to master the needle. We focus heavily on technique, needle depth, and realistic shading. Intensive, focused, and high-standard.",
      features: [
        "Intensive Realism Training",
        "Lining & Shading Mastery",
        "Hygienic Standards (The 180 Way)",
        "Equipment Maintenance",
        "Business Foundations",
        "Live Model Sessions"
      ],
      price: "Accelerated Path"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 md:pt-44 pb-24 px-6 md:px-12 bg-surface overflow-hidden">
        <HeroSlider 
          images={[
            "/gallery/IMG_3891.webp",
            "/gallery/IMG_4032.webp",
            "/gallery/IMG_4135.webp",
            "/gallery/IMG_0156.webp"
          ]} 
          opacity="opacity-15"
        />
        <div className="absolute top-0 right-0 font-display font-extrabold text-[35vw] text-gold/5 leading-none translate-x-1/4 -translate-y-1/4 pointer-events-none select-none uppercase">
          Learn
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="inline-block border border-gold text-gold font-meta text-xs tracking-widest px-4 py-1.5 uppercase mb-8 stencil-stamp">
            180 ACADEMY
          </div>
          <h1 className="font-display font-extrabold text-[clamp(60px,10vw,140px)] leading-[0.8] text-accent uppercase max-w-4xl mb-12">
            The craft is<br />passed, not taught.
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
            We don't sell 'how-to' videos. We open our studio to you. Learn the standards that built 180 Tattoo Studio directly from the founders.
          </p>
        </div>
      </section>

      {/* THE PHILOSOPHY */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-6 stencil-stamp">
            WHY US?
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-7xl text-accent uppercase mb-8 leading-none">
            We built this<br />from nothing.
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              Thiyagu and Aishwarya started with one machine and a vision. Our courses aren't academic; they are battle-tested. We teach you how to survive and thrive in the tattoo business.
            </p>
            <p className="font-body text-lg text-text-secondary leading-relaxed">
              Every student gets hands-on time, personal critiques, and the real truth about what it takes to succeed in this industry.
            </p>
          </div>
        </div>
        <div className="bg-surface p-12 border border-gold-dim/20 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
          <h3 className="font-headline font-bold text-4xl text-accent uppercase mb-8">The 180 Promise</h3>
          <ul className="space-y-4">
            {[
              "1-on-1 Mentorship sessions",
              "Lifetime community access",
              "Certified Studio Hygiene training",
              "Professional portfolio building"
            ].map((p, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-gold rotate-45" />
                <span className="font-meta text-sm tracking-widest uppercase text-text-secondary">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COURSES TICKER */}
      <section className="bg-gold py-4">
        <Ticker speed={25}>
          <span className="font-display font-bold text-background text-2xl tracking-[0.2em] uppercase mx-8">
            3 MONTHS MASTER ✦ 45 DAYS ACCELERATED ✦ TATTOO ACADEMY ✦ LEARN THE CRAFT ✦ CHENNAI ✦
          </span>
        </Ticker>
      </section>

      {/* COURSE CARDS */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, i) => (
          <div key={i} className="flex flex-col bg-surface border border-gold-dim/10 hover:border-gold transition-colors duration-500 overflow-hidden group">
            <div className="p-8 md:p-12 flex-grow">
              <div className="font-mono text-gold text-lg md:text-xl mb-4">{course.duration}</div>
              <h3 className="font-display font-extrabold text-4xl md:text-6xl text-accent uppercase mb-6 group-hover:text-gold transition-colors">
                {course.title}
              </h3>
              <p className="font-headline font-bold text-lg md:text-xl text-foreground uppercase mb-8 tracking-wide">
                {course.subtitle}
              </p>
              <div className="w-12 h-[1px] bg-gold mb-8" />
              <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed mb-10 md:mb-12">
                {course.description}
              </p>
              <ul className="space-y-4">
                {course.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <span className="font-mono text-gold text-xs mt-1">→</span>
                    <span className="font-meta text-[10px] md:text-[11px] tracking-widest uppercase text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-12 pt-0">
              <Link 
                href="/contact?subject=Academy Inquiry"
                className="block w-full bg-background border border-gold text-gold text-center py-4 md:py-5 font-headline font-bold text-lg md:text-xl uppercase hover:bg-gold hover:text-background transition-all duration-300"
              >
                Inquire for Pricing
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CURRICULUM TIMELINE */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background overflow-hidden border-t border-gold-dim/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-block border border-gold text-gold font-meta text-[10px] tracking-widest px-3 py-1 uppercase mb-12 stencil-stamp">
            THE PATHWAY
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-7xl text-accent uppercase mb-12 md:mb-20 leading-none text-center lg:text-left">
            Mastery takes time.
          </h2>

          <div className="relative">
            {/* Horizontal Line (Desktop) */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-[1px] bg-gold-dim/20 mt-8" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {[
                { week: "Weeks 1-3", title: "The Foundation", desc: "Art theory, pencil shading, skin anatomy, and cross-contamination prevention." },
                { week: "Weeks 4-6", title: "Technical Control", desc: "Machine mechanics, voltage mastery, needle configurations, and linework on synthetic skin." },
                { week: "Weeks 7-10", title: "The Realism Shift", desc: "Advanced shading, color theory, packing techniques, and grey-wash gradients." },
                { week: "Weeks 11-12", title: "Studio Launch", desc: "Live model sessions, client psychology, business management, and portfolio finalization." }
              ].map((step, idx) => (
                <div key={idx} className="relative pt-12 group">
                  <div className="hidden lg:block absolute top-[-5px] left-0 w-2.5 h-2.5 bg-gold rotate-45" />
                  <div className="font-mono text-gold text-lg mb-4">{step.week}</div>
                  <h3 className="font-headline font-bold text-2xl text-accent uppercase mb-4 group-hover:text-gold transition-colors">{step.title}</h3>
                  <p className="font-meta text-[10px] tracking-widest uppercase text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COURSE FAQS */}
      <FAQ 
        items={[
          {
            question: "Is a tattoo kit included in the course fee?",
            answer: "Yes, our 3-Month Master Course includes a professional starter kit with a wireless rotary machine, power supply, and a curated selection of needles and pigments to get you started immediately."
          },
          {
            question: "Do I get a certificate upon completion?",
            answer: "Upon successful completion and passing of our final technical exam, you will receive a 180 Academy Certification, recognized for its high standards in technical skill and hygiene."
          },
          {
            question: "Do you provide job placements?",
            answer: "While we don't guarantee placement, exceptional students may be invited to apprentice at 180 Tattoo Studio. All students receive guidance on how to set up their own studio or apply to others."
          }
        ]} 
        title="Academy FAQs" 
      />

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-surface border-t border-gold-dim/30 text-center">
        <h2 className="font-display font-extrabold text-5xl md:text-7xl text-accent uppercase mb-8">Ready to start?</h2>
        <p className="font-body text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          We only take a limited number of students each year to ensure high-quality, personal training. Apply early.
        </p>
        <Link 
          href="/contact?subject=Academy Application" 
          className="inline-block bg-gold text-background px-12 py-5 font-headline font-bold text-2xl uppercase hover:bg-gold-hover transition-all duration-300 shadow-[0_10px_30px_rgba(200,150,12,0.2)]"
        >
          Submit Application
        </Link>
      </section>
    </div>
  );
}
