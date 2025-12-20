"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Users, Mail, MapPin, Clock, Phone } from "lucide-react";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const BookSession = () => {
  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-dyad-soft/30 shadow-sm">
        <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
          <a href="/" className="text-xl md:text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-colors">
            ✦ Resonance Kinesiology
          </a>
          <div className="flex items-center space-x-3 md:space-x-4">
            <a href="/book-session">
              <Button 
                size="sm" 
                className="bg-dyad-dark hover:bg-black text-white shadow-md text-sm px-5 py-2 rounded-full transition-all"
              >
                Book Now
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-dyad-background-soft">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-dyad-dark mb-6 leading-tight">Kinesiology Sessions <br className="hidden md:block"/> in Toorak</h1>
          <p className="text-xl text-slate-800 mb-2 font-semibold">Friday mornings · 90-minute sessions</p>
          <div className="bg-white/50 backdrop-blur-sm border border-dyad-soft/50 p-6 md:p-10 rounded-3xl shadow-sm max-w-3xl mx-auto mt-8">
            <p className="text-lg md:text-xl text-slate-900 leading-relaxed italic">
              "I offer three access options to balance sustainability with community care."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Blocks - Using high-contrast logic */}
      <section className="py-0">
        <div className="flex flex-col">
          {/* Option 1: Dark */}
          <div className="bg-dyad-dark text-white">
            <div className="container mx-auto px-6 max-w-6xl py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
                <div className="order-2 md:order-1">
                  <span className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 text-xs font-black uppercase tracking-[0.2em] mb-6">Option 01</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">Full Fee Session</h3>
                  <p className="text-2xl font-bold mb-8 text-dyad-soft">$100 · 90 mins</p>
                  <Button size="lg" className="bg-white text-dyad-dark hover:bg-dyad-soft font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                    Book Full Fee <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
                <div className="order-1 md:order-2 flex justify-center opacity-10">
                  <Leaf className="h-40 w-40 md:h-64 md:w-64" />
                </div>
              </div>
            </div>
          </div>

          {/* Option 2: Accent - High Contrast Near-Black Text */}
          <div className="bg-dyad-accent text-slate-950">
            <div className="container mx-auto px-6 max-w-6xl py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
                <div className="flex justify-center opacity-20">
                  <Heart className="h-40 w-40 md:h-64 md:w-64" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded bg-black/10 text-slate-900 text-xs font-black uppercase tracking-[0.2em] mb-6">Option 02</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">Community Discount</h3>
                  <p className="text-2xl font-bold mb-8 text-slate-900">$30 · 90 mins</p>
                  <Button size="lg" className="bg-slate-950 text-white hover:bg-black font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                    Book Community <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Option 3: Soft */}
          <div className="bg-dyad-soft text-dyad-dark">
            <div className="container mx-auto px-6 max-w-6xl py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
                <div className="order-2 md:order-1">
                  <span className="inline-block px-3 py-1 rounded bg-dyad-dark/10 text-dyad-dark text-xs font-black uppercase tracking-[0.2em] mb-6">Option 03</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">Free Access</h3>
                  <p className="text-2xl font-bold mb-8 text-dyad-accent">Subsidised · 90 mins</p>
                  <Button size="lg" className="bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                    Check Availability <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
                <div className="order-1 md:order-2 flex justify-center opacity-10">
                  <Users className="h-40 w-40 md:h-64 md:w-64" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXED: Location and Contact Note */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-dyad-background-soft rounded-[2rem] p-8 md:p-12 border border-dyad-soft/20 flex flex-col gap-10">
            
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-dyad-dark">Toorak Practice</h2>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-800">
                    <MapPin className="h-5 w-5 mr-4 text-dyad-accent shrink-0" />
                    <span className="text-lg font-medium">Toorak, Victoria 3142</span>
                  </div>
                  <div className="flex items-center text-slate-800">
                    <Clock className="h-5 w-5 mr-4 text-dyad-accent shrink-0" />
                    <span className="text-lg font-medium">Fridays: 8:00am — 1:00pm</span>
                  </div>
                </div>
              </div>

              {/* Email handling fixed here with break-all and flex-col */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-dyad-soft/10">
                <Mail className="h-6 w-6 text-dyad-accent mb-3" />
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Direct Contact</p>
                <a 
                  href="mailto:daniele.kinesiology@gmail.com" 
                  className="text-lg md:text-xl text-dyad-dark font-bold hover:text-dyad-accent transition-colors block break-all leading-tight underline underline-offset-4 decoration-dyad-accent/30"
                >
                  daniele.kinesiology@gmail.com
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 text-center">
        <a href="/" className="text-white/60 hover:text-white transition-colors text-sm mb-4 inline-block italic">
          ← Return to Resonance Kinesiology
        </a>
        <p className="text-xs text-slate-500 mt-4 uppercase tracking-widest">
          © {new Date().getFullYear()} Daniele Buatti
        </p>
      </footer>
    </div>
  );
};

export default BookSession;