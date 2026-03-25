"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Users, Mail, MapPin, Clock, Phone, Brain, Zap, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const BookSession = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/book-session", label: "Session Options" },
    { href: MUSIC_WORK_URL, label: "My Music Work", isExternal: true },
  ];

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900 selection:bg-dyad-accent/20">
      <Header links={navLinks} />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-dyad-sky/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(165,180,252,0.1),transparent_70%)] pointer-events-none"></div>
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-serif text-dyad-dark mb-6 tracking-tight">Clinical Session Options</h1>
              <p className="text-xl md:text-2xl text-dyad-accent mb-10 font-serif italic">Richmond & Toorak · 75-minute sessions</p>
              
              <div className="bg-white/60 backdrop-blur-md border border-dyad-soft/20 p-10 rounded-[2.5rem] max-w-3xl mx-auto shadow-xl">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                  I offer specialised neuro-somatic sessions that bridge the gap between brain-based assessment and emotional integration. 
                  All clinical sessions are now <span className="font-bold text-dyad-dark">75 minutes</span> to ensure the depth required for neurological repatterning.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Location Info Section */}
        <section className="bg-white py-24 md:py-32 border-y border-dyad-soft/10">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-8">The Clinics</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                  Practising from two professional health hubs in Melbourne, designed for safety and regulation.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="h-12 w-12 rounded-2xl bg-dyad-sky/30 flex items-center justify-center mr-5 shrink-0 group-hover:bg-dyad-accent/20 transition-colors">
                      <MapPin className="h-6 w-6 text-dyad-accent" />
                    </div>
                    <div>
                      <span className="text-xl font-bold block text-dyad-dark mb-1">Cherish Health, Richmond</span>
                      <span className="text-slate-500 font-light">Integrated health hub for neuro-somatic work.</span>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="h-12 w-12 rounded-2xl bg-dyad-sky/30 flex items-center justify-center mr-5 shrink-0 group-hover:bg-dyad-accent/20 transition-colors">
                      <MapPin className="h-6 w-6 text-dyad-accent" />
                    </div>
                    <div>
                      <span className="text-xl font-bold block text-dyad-dark mb-1">Toorak Practice</span>
                      <span className="text-slate-500 font-light">Quiet, dedicated space for deep regulation.</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-dyad-dark p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-2xl font-serif text-white mb-8">Clinical Focus</h3>
                  <ul className="space-y-5">
                    {[
                      "Functional Neuro Health (FNH) Assessments",
                      "Cranial nerve & reflex integration",
                      "Subconscious emotional repatterning",
                      "Vocal & Performance Integration"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-4 text-dyad-accent mt-1 flex-shrink-0" />
                        <span className="text-white/80 font-light text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Session Options */}
        <section className="py-24 md:py-40">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 gap-12">

              {/* Option 1: Certified Kinesiology */}
              <FadeIn direction="up">
                <div className="bg-white rounded-[3rem] shadow-2xl border border-dyad-soft/10 overflow-hidden group hover:border-dyad-accent/30 transition-all duration-500">
                  <div className="grid md:grid-cols-[1fr_1.5fr] items-stretch">
                    <div className="bg-dyad-dark p-12 md:p-16 text-white flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dyad-soft mb-6">Tier 01</span>
                      <h3 className="text-3xl md:text-4xl font-serif mb-4">Neuro-Somatic Kinesiology</h3>
                      <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-4xl font-bold text-dyad-accent">$150</span>
                        <span className="text-white/50 font-light">/ 75 min</span>
                      </div>
                      <a href="/schedule?type=full-fee">
                        <Button size="lg" className="w-full bg-white text-dyad-dark hover:bg-dyad-accent hover:text-white font-bold h-14 rounded-full transition-all">
                          Book Session
                        </Button>
                      </a>
                    </div>
                    <div className="p-12 md:p-16 flex flex-col justify-center">
                      <p className="text-xl text-slate-700 mb-8 leading-relaxed font-light">
                        A comprehensive clinical session integrating professional kinesiology with somatic tracking and nervous system regulation.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex items-start">
                          <Brain className="h-5 w-5 mr-3 text-dyad-accent shrink-0 mt-1" />
                          <span className="text-slate-600 text-sm">Brain-based assessment</span>
                        </div>
                        <div className="flex items-start">
                          <Heart className="h-5 w-5 mr-3 text-dyad-accent shrink-0 mt-1" />
                          <span className="text-slate-600 text-sm">Emotional clearing</span>
                        </div>
                        <div className="flex items-start">
                          <Zap className="h-5 w-5 mr-3 text-dyad-accent shrink-0 mt-1" />
                          <span className="text-slate-600 text-sm">Meridian balancing</span>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 mr-3 text-dyad-accent shrink-0 mt-1" />
                          <span className="text-slate-600 text-sm">Deep integration time</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Option 2: FNH Clinical Study */}
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white rounded-[3rem] shadow-2xl border border-dyad-soft/10 overflow-hidden group hover:border-dyad-accent/30 transition-all duration-500">
                  <div className="grid md:grid-cols-[1fr_1.5fr] items-stretch">
                    <div className="bg-dyad-accent p-12 md:p-16 text-white flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-6">Tier 02</span>
                      <h3 className="text-3xl md:text-4xl font-serif mb-4">FNH Neuro-Health Assessment</h3>
                      <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-4xl font-bold text-white">$120</span>
                        <span className="text-white/60 font-light">/ 75 min</span>
                      </div>
                      <a href="/schedule?type=community-discounted">
                        <Button size="lg" className="w-full bg-dyad-dark text-white hover:bg-white hover:text-dyad-dark font-bold h-14 rounded-full transition-all">
                          Book Assessment
                        </Button>
                      </a>
                    </div>
                    <div className="p-12 md:p-16 flex flex-col justify-center">
                      <p className="text-xl text-slate-700 mb-8 leading-relaxed font-light">
                        Practitioner-in-Training sessions focused specifically on neurological assessments, cranial nerves, and primitive reflex integration.
                      </p>
                      <div className="bg-dyad-sky/10 p-6 rounded-2xl border border-dyad-soft/20">
                        <p className="text-sm text-slate-500 italic">
                          *Reduced rate for clinical case study work. Data is anonymized for research purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Option 3: Free Access */}
              <FadeIn direction="up" delay={0.4}>
                <div className="bg-dyad-sky/20 rounded-[3rem] border border-dyad-soft/30 overflow-hidden group transition-all duration-500">
                  <div className="grid md:grid-cols-[1fr_1.5fr] items-stretch">
                    <div className="p-12 md:p-16 flex flex-col justify-center border-r border-dyad-soft/20">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dyad-dark/40 mb-6">Tier 03</span>
                      <h3 className="text-3xl md:text-4xl font-serif mb-4 text-dyad-dark">Community — Free Access</h3>
                      <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-4xl font-bold text-dyad-accent">Free</span>
                        <span className="text-dyad-dark/40 font-light">/ 75 min</span>
                      </div>
                      <a href="/schedule?type=free-access">
                        <Button size="lg" className="w-full bg-dyad-dark text-white hover:bg-dyad-accent font-bold h-14 rounded-full transition-all">
                          Check Availability
                        </Button>
                      </a>
                    </div>
                    <div className="p-12 md:p-16 flex flex-col justify-center">
                      <p className="text-xl text-slate-700 mb-6 leading-relaxed font-light">
                        Once per week, I offer a fully free session for someone who would otherwise not be able to access this clinical work.
                      </p>
                      <p className="text-slate-500 font-light">
                        Identical in structure and care to the paid offerings. Released weekly.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact & Integrity Section */}
        <section className="bg-white py-24 md:py-40">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-8">Integrity & Access</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
                Thank you for choosing the path that aligns honestly with your current capacity. 
                If you're unsure which level is right for you, feel free to reach out.
              </p>
              <div className="bg-dyad-background-soft p-10 rounded-[2.5rem] inline-block w-full max-w-md shadow-xl border border-dyad-soft/20 group hover:border-dyad-accent/30 transition-all">
                <Mail className="h-8 w-8 text-dyad-accent mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                <a href="mailto:daniele.kinesiology@gmail.com" className="text-xl md:text-2xl text-dyad-dark font-bold hover:text-dyad-accent transition-colors block break-all leading-tight underline underline-offset-8 decoration-dyad-soft/30">
                  daniele.kinesiology@gmail.com
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookSession;