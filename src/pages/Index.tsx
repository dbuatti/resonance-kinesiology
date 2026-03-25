"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, Leaf, Gift, MapPin, Zap, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";
const GIFT_CARD_URL = "https://buy.stripe.com/8x200lfmagH81vS4PU53O05";

const Index = () => {
  const navLinks = [
    { href: "/book-session", label: "Session Options", isPrimary: false },
    { href: MUSIC_WORK_URL, label: "My Music Work", isExternal: true, isPrimary: false },
  ];

  const peaceFramework = [
    { letter: "P", title: "Presence", description: "Establishing a safe, regulated container for the nervous system to settle." },
    { letter: "E", title: "Embodiment", description: "Tracking internal sensations and somatic signals in real-time." },
    { letter: "A", title: "Assessment", description: "Neurological testing of pathways, cranial nerves, and reflexes." },
    { letter: "C", title: "Correction", description: "Targeted kinesiology and neuro-balancing to shift stress patterns." },
    { letter: "E", title: "Expression", description: "Integrating shifts into voice, movement, and authentic action." }
  ];

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900 overflow-x-hidden">
      
      <Header links={navLinks} />

      <main>
        {/* Hero Section - Updated for Neuro-Somatic Branding */}
        <section 
          className="relative pt-64 pb-24 md:pt-80 md:pb-40 border-b border-dyad-soft/30 overflow-hidden"
          style={{ 
            backgroundImage: 'url(/resonance-background-horizontal.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundColor: '#F8F7F4', 
          }}
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
          
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-40 md:-top-56 z-20">
              <div className="w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full shadow-2xl overflow-hidden border-4 border-white ring-8 ring-dyad-dark/5 transition-transform hover:scale-105 duration-700">
                <img 
                  src="/daniele-buatti-hero.jpeg" 
                  alt="Daniele Buatti, Neuro-Somatic Kinesiologist" 
                  className="w-full h-full object-cover object-center scale-110"
                  loading="eager"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight text-dyad-dark pt-12 md:pt-0">
              Neuro-Somatic <br className="hidden md:block" /> Kinesiology
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-slate-800 leading-relaxed">
              Brain-based nervous system regulation and somatic integration in <strong>Richmond & Toorak</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/book-session">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-lg md:text-xl px-10 py-7 md:h-16 bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-xl rounded-full transition-transform hover:scale-105"
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
            
            <div className="mt-8 flex items-center justify-center text-sm text-dyad-accent font-semibold">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Practitioner of the Functional Neuro Health Approach (In-Training)
            </div>
          </div>
        </section>

        {/* Quick Contact Bar */}
        <div className="bg-white py-8 border-b border-dyad-soft/20">
          <div className="container mx-auto px-6 max-w-4xl flex flex-wrap justify-center gap-8 md:gap-16 text-slate-600 font-medium">
             <div className="flex items-center"><Phone className="h-4 w-4 mr-2 text-dyad-accent" /> 0424 174 067</div>
             <div className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-dyad-accent" /> Richmond & Toorak, VIC</div>
          </div>
        </div>

        {/* Service Blocks - Updated for FNH Authority */}
        <section className="bg-dyad-dark py-24 md:py-32 text-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Clinical Somatic Support</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Bridging the gap between traditional kinesiology and modern functional neurology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="relative bg-white border-none p-8 transition-all hover:scale-[1.02] shadow-2xl group overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-4 text-dyad-accent"><Heart className="h-10 w-10" /></div>
                  <CardTitle className="text-2xl font-serif mb-4 text-dyad-dark leading-snug">Somatic Kinesiology</CardTitle>
                  <p className="text-slate-800 leading-relaxed text-lg">
                    Focus on emotional clearing, root beliefs, and meridian balancing for deep internal safety and subconscious alignment.
                  </p>
                </div>
              </Card>

              <Card className="relative bg-white border-none p-8 transition-all hover:scale-[1.02] shadow-2xl group overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-4 text-dyad-accent"><Brain className="h-10 w-10" /></div>
                  <CardTitle className="text-2xl font-serif mb-4 text-dyad-dark leading-snug">Functional Neuro Health</CardTitle>
                  <p className="text-slate-800 leading-relaxed text-lg">
                    Direct assessment of neurological pathways, cranial nerves, and primitive reflexes to address chronic pain, stress, and performance.
                  </p>
                </div>
              </Card>

              <Card className="relative bg-white border-none p-8 transition-all hover:scale-[1.02] shadow-2xl group overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-4 text-dyad-accent"><Mic2 className="h-10 w-10" /></div>
                  <CardTitle className="text-2xl font-serif mb-4 text-dyad-dark leading-snug">Vocal & Performance</CardTitle>
                  <p className="text-slate-800 leading-relaxed text-lg">
                    Specialized support for vocal freedom, diaphragm release, and embodied expression for performers and leaders.
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
                  <Button className="bg-dyad-dark hover:bg-dyad-accent text-white rounded-full px-8 h-12">
                    View Richmond Availability
                  </Button>
                </a>
              </div>
              <div className="order-1 md:order-2 bg-dyad-background-soft rounded-3xl p-8 border border-dyad-soft/30 flex items-center justify-center aspect-square md:aspect-auto md:h-full">
                <MapPin className="h-32 w-32 text-dyad-accent opacity-20" />
              </div>
            </div>
          </div>
        </section>

        {/* PEACE Framework Section */}
        <section id="peace-method" className="bg-dyad-background-soft py-24 md:py-32 border-y border-dyad-soft/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif text-dyad-dark mb-6">The PEACE Framework</h2>
              <p className="text-xl text-slate-700 max-w-2xl mx-auto">
                A structured, clinical approach to somatic and neurological transformation.
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-4">
              {peaceFramework.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-dyad-soft/20 flex flex-col items-center text-center md:items-start md:text-left transition-transform hover:scale-105">
                  <div className="w-12 h-12 bg-dyad-dark text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.letter}
                  </div>
                  <h3 className="text-xl font-bold text-dyad-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="text-2xl md:text-4xl font-serif text-dyad-dark italic leading-snug mb-8">
              “Daniele’s sessions were profoundly grounding... clarity and ease I hadn’t felt in years.”
            </p>
            <p className="text-lg font-bold text-dyad-accent uppercase tracking-widest">— Deborah, Melbourne</p>
          </div>
        </section>

        {/* Gift Card Section */}
        <section className="bg-dyad-background-soft py-20 md:py-24">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-dyad-soft/30">
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
                  className="bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-md px-8 h-14 rounded-full transition-transform hover:scale-105"
                >
                  Buy Gift Card
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Updated for 75-minute sessions and new locations */}
      <footer className="bg-dyad-accent text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-serif mb-8 text-white">Ready to Begin</h3>
          <p className="text-xl mb-10 text-white font-medium max-w-xl mx-auto leading-relaxed">
            <strong>75-minute Clinical Sessions</strong> available in Richmond, Toorak, & Online.
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
              <p className="font-semibold text-white/90">Richmond & Toorak, Melbourne VIC</p>
            </div>
            <p className="opacity-60 italic pt-4">© {new Date().getFullYear()} Resonance Kinesiology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;