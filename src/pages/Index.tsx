"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, Leaf, MapPin, Clock } from "lucide-react";

const BOOKING_URL = "https://danielebuatti.as.me/kinesiology";
const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const Index = () => {
  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900 overflow-x-hidden">
      
      {/* Header - Optimized for Mobile */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-dyad-soft/30 shadow-sm">
        <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
          <a href="/" className="text-xl md:text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-colors">
            ✦ Resonance Kinesiology
          </a>
          <div className="flex items-center space-x-2 md:space-x-4">
            <a href="/book-session">
              <Button 
                size="sm" 
                className="bg-dyad-dark hover:bg-black text-white shadow-md text-xs md:text-sm px-4 py-2 rounded-full transition-all"
              >
                Book Session
              </Button>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section - Refined Layout */}
        <section 
          className="relative pt-64 pb-24 md:pt-80 md:pb-40 border-b border-dyad-soft/30 overflow-hidden"
          style={{ 
            backgroundImage: 'url(/resonance-background-horizontal.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundColor: '#F8F7F4', 
          }}
        >
          {/* Overlay - Darkened slightly for text pop */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
          
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            
            {/* Circular Photo Overlay - Scaled for Mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-48 md:-top-56 z-20">
              <div className="w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full shadow-2xl overflow-hidden border-4 border-white ring-8 ring-dyad-dark/5">
                <img 
                  src="/daniele-buatti-hero.jpeg" 
                  alt="Daniele Buatti, Kinesiologist in Toorak" 
                  className="w-full h-full object-cover object-center scale-110"
                  loading="eager"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight text-dyad-dark">
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
                Book Your Session
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        {/* Location Info Section - High Visibility */}
        <section className="bg-white py-12 border-b border-dyad-soft/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="flex items-center text-slate-700">
                <MapPin className="h-5 w-5 mr-3 text-dyad-accent" />
                <span className="font-semibold">Toorak, Victoria 3142</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Phone className="h-5 w-5 mr-3 text-dyad-accent" />
                <span className="font-semibold">0424 174 067</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Clock className="h-5 w-5 mr-3 text-dyad-accent" />
                <span className="font-semibold">Fridays 8am - 1pm</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards - Improved Contrast & Readability */}
        <section className="bg-dyad-dark py-24 md:py-32 text-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Expert Somatic Support</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Facilitating deep shifts in your body’s internal landscape through specialized kinesiology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Cards - Fixed text colors for accessibility */}
              {[
                {
                  title: "Nervous System",
                  desc: "Resolve fight, flight, and freeze patterns to restore grounded internal safety.",
                  icon: <Brain className="h-40 w-40" />
                },
                {
                  title: "Emotional Clarity",
                  desc: "Transform body-held beliefs into wisdom. Deep processing for emotional load.",
                  icon: <Heart className="h-40 w-40" />
                },
                {
                  title: "Vocal Freedom",
                  desc: "Release physical and emotional blocks in the throat for natural expression.",
                  icon: <Mic2 className="h-40 w-40" />
                }
              ].map((service, idx) => (
                <Card key={idx} className="relative bg-white border-none p-8 md:p-10 transition-all hover:scale-[1.02] shadow-2xl group overflow-hidden">
                  <div className="relative z-10">
                    <CardTitle className="text-2xl md:text-3xl font-serif mb-4 text-dyad-dark leading-snug">{service.title}</CardTitle>
                    <p className="text-slate-800 leading-relaxed text-lg font-medium">
                      {service.desc}
                    </p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity text-dyad-dark">
                    {service.icon}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Professional Focus */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <Leaf className="h-10 w-10 text-dyad-accent mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-serif text-dyad-dark mb-8">About Your Practitioner</h2>
            <p className="text-xl text-slate-900 mb-8 leading-relaxed font-medium">
              I guide you into relationship with your own internal intelligence. My work integrates professional kinesiology, somatic modalities, and my background as a vocal coach and artist.
            </p>
            <p className="text-lg text-slate-600">
              Based in Toorak, serving the wider Melbourne community with presence and care.
            </p>
          </div>
        </section>

        {/* FAQ - High Contrast */}
        <section className="bg-dyad-background-soft py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-serif text-dyad-dark mb-12 text-center">Common Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What is Kinesiology?", a: "It uses muscle monitoring to identify stressors in the body's bio-feedback system, helping resolve physical and emotional imbalances." },
                { q: "Where is the Toorak clinic?", a: "Conveniently located in the heart of Toorak (3142), with easy parking and public transport access from Melbourne CBD." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-dyad-soft/20">
                  <h3 className="text-xl font-bold text-dyad-dark mb-3">{faq.q}</h3>
                  <p className="text-slate-800 text-lg leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / CTA - Fixed Email Stacking */}
      <footer className="bg-dyad-accent text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-serif mb-8 text-white">Ready to Begin</h3>
          <p className="text-xl mb-10 text-white font-medium max-w-xl mx-auto leading-relaxed">
            90-minute Balance Sessions available in Toorak and online.
          </p>
          
          <a href="/book-session">
            <Button size="lg" className="bg-dyad-dark hover:bg-black text-white font-bold shadow-2xl px-12 h-16 rounded-full transition-all">
              Choose an Access Option
            </Button>
          </a>
          
          <div className="mt-20 pt-10 border-t border-white/20 text-sm space-y-6">
            <div className="flex flex-col items-center gap-4">
              <a href="mailto:daniele.kinesiology@gmail.com" className="hover:underline break-all font-bold text-lg md:text-xl">
                daniele.kinesiology@gmail.com
              </a>
              <div className="flex gap-6 opacity-80">
                <span className="flex items-center"><Phone className="h-4 w-4 mr-2" /> 0424 174 067</span>
              </div>
            </div>
            <p className="opacity-60 italic">© {new Date().getFullYear()} Resonance Kinesiology • Toorak, Victoria</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;