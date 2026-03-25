"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, MapPin, Gift, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";
const GIFT_CARD_URL = "https://buy.stripe.com/8x200lfmagH81vS4PU53O05";

const Index = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/book-session", label: "Session Options" },
    { href: MUSIC_WORK_URL, label: "My Music Work", isExternal: true },
  ];

  const peaceFramework = [
    { letter: "P", title: "Presence", description: "Establishing a safe, regulated container for the nervous system to settle." },
    { letter: "E", title: "Embodiment", description: "Tracking internal sensations and somatic signals in real-time." },
    { letter: "A", title: "Assessment", description: "Neurological testing of pathways, cranial nerves, and realised reflexes." },
    { letter: "C", title: "Correction", description: "Targeted kinesiology and neuro-balancing to shift stress patterns." },
    { letter: "E", title: "Expression", description: "Integrating shifts into voice, movement, and authentic action." }
  ];

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900 overflow-x-hidden">
      
      <Header links={navLinks} />

      <main>
        {/* Hero Section */}
        <section 
          className="relative pt-48 pb-24 md:pt-64 md:pb-40 border-b border-dyad-soft/30 overflow-hidden"
          style={{ 
            backgroundImage: 'url(/resonance-background-horizontal.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
          
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-32 md:-top-48 z-20">
              <div className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full shadow-2xl overflow-hidden border-4 border-white ring-8 ring-dyad-accent/20 transition-transform hover:scale-105 duration-700">
                <img 
                  src="/daniele-buatti-hero.jpeg" 
                  alt="Daniele Buatti, Neuro-Somatic Kinesiologist" 
                  className="w-full h-full object-cover object-center scale-110"
                  loading="eager"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight text-dyad-dark pt-24 md:pt-20 drop-shadow-sm">
              Neuro-Somatic <br className="hidden md:block" /> Kinesiology
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-dyad-dark/90 leading-relaxed">
              Brain-based nervous system regulation and somatic integration in <strong>Richmond & Toorak</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/book-session">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-lg md:text-xl px-10 py-7 md:h-16 bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-xl rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  Book Your Session
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </a>
              <a href="#peace-method">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full sm:w-auto text-lg md:text-xl px-10 py-7 md:h-16 border-dyad-dark text-dyad-dark hover:bg-dyad-dark hover:text-white font-bold shadow-md rounded-full transition-all"
                >
                  Explore the PEACE Method
                </Button>
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center text-sm text-dyad-accent font-semibold animate-pulse">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Practitioner of the Functional Neuro Health Approach (In-Training)
            </div>
          </div>
        </section>

        {/* Service Blocks */}
        <section className="bg-dyad-dark py-24 md:py-32 text-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dyad-accent/10 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Clinical Somatic Support</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Bridging the gap between traditional kinesiology and modern functional neurology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="relative bg-white/95 border-none p-8 transition-all hover:scale-[1.02] shadow-2xl group overflow-hidden cursor-default">
                <div className="relative z-10">
                  <div className="mb-4 text-dyad-accent group-hover:scale-110 transition-transform duration-300"><Heart className="h-10 w-10" /></div>
                  <CardTitle className="text-2xl font-serif mb-4 text-dyad-dark leading-snug">Somatic Kinesiology</CardTitle>
                  <p className="text-slate-800 leading-relaxed text-lg">
                    Focus on emotional clearing, root beliefs, and meridian balancing for deep internal safety and subconscious alignment.
                  </p>
                </div>
              </Card>

              <Card className="relative bg-white/95 border-none p-8 transition-all hover:scale-[1.02] shadow-2xl group overflow-hidden cursor-default">
                <div className="relative z-10">
                  <div className="mb-4 text-dyad-accent group-hover:scale-110 transition-transform duration-300"><Brain className="h-10 w-10" /></div>
                  <CardTitle className="text-2xl font-serif mb-4 text-dyad-dark leading-snug">Functional Neuro Health</CardTitle>
                  <p className="text-slate-800 leading-relaxed text-lg">
                    Direct assessment of neurological pathways, cranial nerves, and primitive reflexes to address chronic pain, stress, and performance.
                  </p>
                </div>
              </Card>

              <Card className="relative bg-white/95 border-none p-8 transition-all hover:scale-[1.02] shadow-2xl group overflow-hidden cursor-default">
                <div className="relative z-10">
                  <div className="mb-4 text-dyad-accent group-hover:scale-110 transition-transform duration-300"><Mic2 className="h-10 w-10" /></div>
                  <CardTitle className="text-2xl font-serif mb-4 text-dyad-dark leading-snug">Vocal & Performance</CardTitle>
                  <p className="text-slate-800 leading-relaxed text-lg">
                    Specialised support for vocal freedom, diaphragm release, and embodied expression for performers and leaders.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Richmond Clinic Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1 rounded bg-dyad-accent/10 text-dyad-accent text-xs font-bold uppercase tracking-widest mb-4">New Location</div>
                <h2 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-6">Now Practising at Cherish Health, Richmond</h2>
                <p className="text-xl text-slate-800 mb-6 leading-relaxed">
                  I am excited to bring my practice to the integrated health hub in Richmond. 
                </p>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Alongside standard Kinesiology, I am now offering <strong>Neuro-Health Assessments</strong> using the FNH framework—a brain-based approach to chronic pain, stress, and performance.
                </p>
                <a href="/book-session">
                  <Button className="bg-dyad-dark hover:bg-dyad-accent text-white rounded-full px-8 h-12 transition-all hover:shadow-lg">
                    View Richmond Availability
                  </Button>
                </a>
              </div>
              <div className="order-1 md:order-2 bg-dyad-sky/30 rounded-3xl p-8 border border-dyad-soft/30 flex items-center justify-center aspect-square md:aspect-auto md:h-full group">
                <MapPin className="h-32 w-32 text-dyad-accent opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* PEACE Framework Section */}
        <section id="peace-method" className="bg-dyad-sky/20 py-24 md:py-32 border-y border-dyad-soft/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif text-dyad-dark mb-6">The PEACE Framework</h2>
              <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                A structured, clinical approach to somatic and neurological transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {peaceFramework.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-dyad-soft/20 flex flex-col items-center text-center md:items-start md:text-left transition-all hover:scale-105 hover:shadow-md">
                  <div className="w-12 h-12 bg-dyad-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.letter}
                  </div>
                  <h3 className="text-xl font-bold text-dyad-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Card Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="bg-dyad-background-soft p-8 md:p-12 rounded-3xl shadow-lg border border-dyad-soft/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-dyad-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center justify-center mb-6">
                <Gift className="h-8 w-8 text-dyad-accent mr-3" />
                <h3 className="text-3xl font-serif text-dyad-dark font-bold">Gift a Session</h3>
              </div>
              <p className="text-lg text-slate-800 mb-8 leading-relaxed">
                Give the gift of neurological regulation and somatic balance.
              </p>
              <a href={GIFT_CARD_URL} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-md px-8 h-14 rounded-full transition-all hover:scale-105"
                >
                  Buy Gift Card
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;