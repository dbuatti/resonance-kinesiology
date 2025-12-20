"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Users, Mail, MapPin, Clock, Phone } from "lucide-react";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const BookSession = () => {
  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900">
      {/* Header - Added shadow-sm for depth */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-dyad-soft/30 shadow-sm">
        <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
          <a href="/" className="text-xl md:text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-colors">
            ✦ Resonance Kinesiology
          </a>
          <div className="flex items-center space-x-3 md:space-x-4">
            <a href={MUSIC_WORK_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button 
                variant="ghost"
                className="text-dyad-dark hover:text-dyad-accent font-medium"
              >
                Music Work
              </Button>
            </a>
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
          <p className="text-lg text-slate-600 mb-8">Serving Melbourne from our quiet Toorak practice</p>

          <div className="bg-white/50 backdrop-blur-sm border border-dyad-soft/50 p-6 md:p-10 rounded-3xl shadow-sm max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-slate-900 leading-relaxed italic">
              "I offer three access options to balance sustainability with community care. 
              Please choose the one that aligns with your current financial capacity."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Blocks */}
      <section className="py-0">
        <div className="flex flex-col">

          {/* Option 1: Full Fee (Dark) */}
          <div className="bg-dyad-dark text-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left order-2 md:order-1">
                  <span className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 text-xs font-black uppercase tracking-[0.2em] mb-6">Option 01</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">Full Fee Session</h3>
                  <p className="text-2xl font-bold mb-8 text-dyad-soft">$100 · 90 minutes</p>
                  <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                    The standard rate that sustains this practice. Ideal for those with stable income and personal assets.
                  </p>
                  <a href="/schedule?type=full-fee">
                    <Button size="lg" className="bg-white text-dyad-dark hover:bg-dyad-soft font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                      Book Full Fee
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <div className="order-1 md:order-2 flex justify-center opacity-20 md:opacity-10">
                  <Leaf className="h-40 w-40 md:h-64 md:w-64 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Option 2: Community (Accent) */}
          <div className="bg-dyad-accent text-slate-950 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="hidden md:flex justify-center opacity-20">
                  <Heart className="h-64 w-64 text-slate-950" />
                </div>
                <div className="text-center md:text-left">
                  <span className="inline-block px-3 py-1 rounded bg-black/10 text-slate-900 text-xs font-black uppercase tracking-[0.2em] mb-6">Option 02</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">Community Discount</h3>
                  <p className="text-2xl font-bold mb-8 text-slate-900">$30 · 90 minutes</p>
                  <p className="text-lg text-slate-900/90 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
                    A reduced rate for students, pensioners, or those currently experiencing financial tightening. 
                  </p>
                  <a href="/schedule?type=community-discounted">
                    <Button size="lg" className="bg-slate-950 text-white hover:bg-black font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                      Book Community Session
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Option 3: Free Access (Soft) */}
          <div className="bg-dyad-soft text-dyad-dark overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left order-2 md:order-1">
                  <span className="inline-block px-3 py-1 rounded bg-dyad-dark/10 text-dyad-dark text-xs font-black uppercase tracking-[0.2em] mb-6">Option 03</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">Free Access</h3>
                  <p className="text-2xl font-bold mb-8 text-dyad-accent">Fully Subsidised · 90 minutes</p>
                  <p className="text-lg text-dyad-dark/90 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                    Reserved for those for whom any payment is currently a barrier to care. One session is released weekly.
                  </p>
                  <a href="/schedule?type=free-access">
                    <Button size="lg" className="bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                      Check Availability
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <div className="order-1 md:order-2 flex justify-center opacity-10">
                  <Users className="h-40 w-40 md:h-64 md:w-64 text-dyad-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details - Refined for clarity */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-dyad-background-soft rounded-[2rem] p-8 md:p-12 border border-dyad-soft/20 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-serif text-dyad-dark mb-6">Toorak Practice</h2>
              <div className="space-y-5">
                <div className="flex items-center text-slate-800">
                  <MapPin className="h-5 w-5 mr-4 text-dyad-accent" />
                  <span className="text-lg font-medium">Toorak, Victoria 3142</span>
                </div>
                <div className="flex items-center text-slate-800">
                  <Clock className="h-5 w-5 mr-4 text-dyad-accent" />
                  <span className="text-lg font-medium">Fridays: 8:00am — 1:00pm</span>
                </div>
                <div className="flex items-center text-slate-800">
                  <Phone className="h-5 w-5 mr-4 text-dyad-accent" />
                  <span className="text-lg font-medium">0424 174 067</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-left bg-white p-6 rounded-2xl shadow-sm">
               <Mail className="h-8 w-8 text-dyad-accent mb-4 mx-auto md:mx-0" />
               <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Questions?</p>
               <a href="mailto:daniele.kinesiology@gmail.com" className="text-dyad-dark font-bold hover:text-dyad-accent break-all">
                daniele.kinesiology@gmail.com
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <a href="/" className="inline-block mb-10 text-white/60 hover:text-white transition-colors">
            ← Return to home
          </a>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Resonance Kinesiology. <br className="sm:hidden"/> 
            All sessions held in Toorak, Melbourne.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BookSession;