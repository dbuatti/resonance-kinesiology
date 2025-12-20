"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, Leaf } from "lucide-react";
import Header from "@/components/Header";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const Index = () => {
  const navLinks = [
    { href: "/book-session", label: "Session Options", isPrimary: false },
    { href: MUSIC_WORK_URL, label: "My Music Work", isExternal: true, isPrimary: false },
  ];

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900 overflow-x-hidden">
      
      <Header links={navLinks} />

      <main>
        {/* Hero Section - Refined for Image/Text Balance */}
        <section 
          className="relative pt-64 pb-24 md:pt-80 md:pb-40 border-b border-dyad-soft/30 overflow-hidden"
          style={{ 
            backgroundImage: 'url(/resonance-background-horizontal.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundColor: '#F8F7F4', 
          }}
        >
          {/* Enhanced Contrast Overlay */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
          
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            
            {/* Hero Photo - Adjusted for better mobile clearance */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-40 md:-top-56 z-20">
              <div className="w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full shadow-2xl overflow-hidden border-4 border-white ring-8 ring-dyad-dark/5 transition-transform hover:scale-105 duration-700">
                <img 
                  src="/daniele-buatti-hero.jpeg" 
                  alt="Daniele Buatti, Kinesiologist in Toorak" 
                  className="w-full h-full object-cover object-center scale-110"
                  loading="eager"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight text-dyad-dark pt-12 md:pt-0">
              Kinesiology <br className="hidden md:block" /> in Toorak
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-slate-800 leading-relaxed">
              Gentle, expert nervous system regulation and somatic awareness for Melbourne residents.
            </p>
            <a href="/book-session">
              <Button 
                size="lg" 
                className="text-lg md:text-xl px-10 py-7 md:h-16 bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-xl rounded-full transition-transform hover:scale-105"
              >
                Book Your Toorak Session
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Quick Contact Bar */}
        <div className="bg-white py-8 border-b border-dyad-soft/20">
          <div className="container mx-auto px-6 max-w-4xl flex flex-wrap justify-center gap-8 md:gap-16 text-slate-600 font-medium">
             <div className="flex items-center"><Phone className="h-4 w-4 mr-2 text-dyad-accent" /> 0424 174 067</div>
             <div className="flex items-center"><Leaf className="h-4 w-4 mr-2 text-dyad-accent" /> Toorak, VIC 3142</div>
          </div>
        </div>

        {/* Services Section - Contrast Fixed */}
        <section className="bg-dyad-dark py-24 md:py-32 text-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Somatic Support in Toorak</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Integrating professional kinesiology with somatic modalities to help you return to your body’s innate intelligence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Nervous System", icon: <Brain />, text: "Resolve fight, flight, and freeze patterns to restore grounded internal safety." },
                { title: "Emotional Clarity", icon: <Heart />, text: "Transform emotional patterns and root beliefs held in the body into wisdom." },
                { title: "Vocal Freedom", icon: <Mic2 />, text: "Release blocks in the throat and diaphragm for naturally powerful expression." }
              ].map((item, i) => (
                <Card key={i} className="relative bg-white border-none p-8 transition-all hover:scale-[1.02] shadow-2xl group overflow-hidden">
                  <div className="relative z-10">
                    <CardTitle className="text-2xl font-serif mb-4 text-dyad-dark leading-snug">{item.title}</CardTitle>
                    <p className="text-slate-800 leading-relaxed text-lg font-medium">
                      {item.text}
                    </p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity text-dyad-dark">
                    {/* Simplified icon scaling for background decorative use */}
                    <div className="h-48 w-48">{item.icon}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-dyad-background-soft py-24">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-2xl md:text-4xl font-serif text-dyad-dark italic leading-snug mb-8">
              “Daniele’s sessions were profoundly grounding... clarity and ease I hadn’t felt in years.”
            </p>
            <p className="text-lg font-bold text-dyad-accent uppercase tracking-widest">— Deborah, Melbourne</p>
          </div>
        </section>
      </main>

      {/* Footer - Stacking Fixed */}
      <footer className="bg-dyad-accent text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-serif mb-8 text-white">Ready to Begin</h3>
          <p className="text-xl mb-10 text-white font-medium max-w-xl mx-auto leading-relaxed">
            90-minute Balance Sessions available in Toorak, Melbourne & online.
          </p>
          
          <a href="/book-session">
            <Button size="lg" className="bg-dyad-dark hover:bg-black text-white font-bold shadow-2xl px-12 h-16 rounded-full transition-transform hover:scale-105">
              Book Your Session
            </Button>
          </a>
          
          <div className="mt-20 pt-10 border-t border-white/20 text-sm space-y-6">
            <div className="flex flex-col items-center gap-4">
              <a 
                href="mailto:daniele.kinesiology@gmail.com" 
                className="hover:underline break-all font-bold text-lg md:text-xl tracking-tight"
              >
                daniele.kinesiology@gmail.com
              </a>
              <p className="font-semibold text-white/90">Toorak, Melbourne Vic 3142</p>
            </div>
            <p className="opacity-60 italic pt-4">© {new Date().getFullYear()} Resonance Kinesiology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;