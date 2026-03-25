"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, MapPin, Gift, ShieldCheck, Sparkles, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

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

  const testimonials = [
    {
      text: "Daniele's approach is unlike any other. He has a way of making the complex language of the nervous system feel accessible and deeply healing.",
      author: "Sarah M.",
      role: "Creative Professional"
    },
    {
      text: "I came in with chronic tension and left with a sense of space and clarity I hadn't felt in years. The neuro-health assessment was a game changer.",
      author: "James L.",
      role: "Performance Artist"
    }
  ];

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900 overflow-x-hidden selection:bg-dyad-accent/20 selection:text-dyad-dark">
      
      <Header links={navLinks} />

      <main>
        {/* Hero Section */}
        <section 
          className="relative pt-32 pb-24 md:pt-48 md:pb-40 border-b border-dyad-soft/10 overflow-hidden"
          style={{ 
            backgroundImage: 'url(/resonance-background-horizontal.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
          
          <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
            
            <FadeIn direction="down" duration={1} delay={0.2}>
              <div className="relative inline-block mb-12 md:mb-16">
                <div className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full shadow-2xl overflow-hidden border-4 border-white ring-8 ring-dyad-accent/10 transition-all duration-700 hover:ring-dyad-accent/20">
                  <img 
                    src="/daniele-buatti-hero.jpeg" 
                    alt="Daniele Buatti, Neuro-Somatic Kinesiologist" 
                    className="w-full h-full object-cover object-center scale-110"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg border border-dyad-soft/20">
                  <Sparkles className="h-5 w-5 text-dyad-accent" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1] text-dyad-dark tracking-tight">
                Neuro-Somatic <br className="hidden md:block" /> <span className="italic text-dyad-accent">Kinesiology</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto text-dyad-dark/80 leading-relaxed">
                Brain-based nervous system regulation and somatic integration in <span className="font-semibold text-dyad-dark">Richmond & Toorak</span>.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} direction="up">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="/book-session" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-lg px-10 py-7 md:h-16 bg-dyad-dark hover:bg-dyad-accent text-white font-bold shadow-xl rounded-full transition-all hover:scale-105 active:scale-95"
                  >
                    Book Your Session
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </a>
                <a href="#peace-method" className="w-full sm:w-auto">
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="w-full sm:w-auto text-lg px-10 py-7 md:h-16 border-dyad-dark/20 text-dyad-dark hover:bg-dyad-dark hover:text-white font-bold shadow-md rounded-full transition-all"
                  >
                    The PEACE Method
                  </Button>
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={1} direction="none">
              <div className="mt-12 flex items-center justify-center text-xs text-dyad-accent font-bold uppercase tracking-[0.2em] opacity-70">
                <ShieldCheck className="h-4 w-4 mr-2" />
                Functional Neuro Health Practitioner (In-Training)
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Service Blocks */}
        <section className="bg-dyad-dark py-24 md:py-32 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,106,155,0.15),transparent_50%)] pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-serif mb-6">Clinical Somatic Support</h2>
                <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
                  Bridging the gap between traditional kinesiology and modern functional neurology.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Somatic Kinesiology", desc: "Focus on emotional clearing, root beliefs, and meridian balancing for deep internal safety and subconscious alignment." },
                { icon: Brain, title: "Functional Neuro Health", desc: "Direct assessment of neurological pathways, cranial nerves, and primitive reflexes to address chronic pain, stress, and performance." },
                { icon: Mic2, title: "Vocal & Performance", desc: "Specialised support for vocal freedom, diaphragm release, and embodied expression for performers and leaders." }
              ].map((service, i) => (
                <FadeIn key={i} delay={0.2 * i} direction="up">
                  <Card className="relative bg-white/5 border border-white/10 p-10 transition-all hover:bg-white/10 hover:border-white/20 shadow-2xl group h-full flex flex-col">
                    <div className="mb-8 text-dyad-accent group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="h-12 w-12" />
                    </div>
                    <CardTitle className="text-2xl font-serif mb-4 text-white leading-snug">{service.title}</CardTitle>
                    <p className="text-white/70 leading-relaxed text-lg font-light">
                      {service.desc}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Richmond Clinic Section */}
        <section className="bg-white py-24 md:py-40">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div className="relative">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-dyad-accent/10 text-dyad-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6">New Location</div>
                  <h2 className="text-4xl md:text-6xl font-serif text-dyad-dark mb-8 leading-tight">Now Practising at Cherish Health, Richmond</h2>
                  <p className="text-xl text-slate-700 mb-6 leading-relaxed font-light">
                    I am excited to bring my practice to the integrated health hub in Richmond. 
                  </p>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    Alongside standard Kinesiology, I am now offering <strong>Neuro-Health Assessments</strong> using the FNH framework—a brain-based approach to chronic pain, stress, and performance.
                  </p>
                  <a href="/book-session">
                    <Button className="bg-dyad-dark hover:bg-dyad-accent text-white rounded-full px-10 h-14 text-base font-bold transition-all hover:shadow-xl hover:-translate-y-1">
                      View Richmond Availability
                    </Button>
                  </a>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.3}>
                <div className="relative aspect-square md:aspect-[4/5] bg-dyad-sky/20 rounded-[2rem] border border-dyad-soft/20 flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-dyad-accent/5 to-transparent"></div>
                  <MapPin className="h-32 w-32 text-dyad-accent opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
                    <p className="text-dyad-dark font-serif text-lg font-bold">Cherish Health</p>
                    <p className="text-slate-500 text-sm">Richmond, VIC</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PEACE Framework Section */}
        <section id="peace-method" className="bg-dyad-sky/10 py-24 md:py-40 border-y border-dyad-soft/10">
          <div className="container mx-auto px-6 max-w-6xl">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-serif text-dyad-dark mb-6">The PEACE Framework</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                  A structured, clinical approach to somatic and neurological transformation.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {peaceFramework.map((item, i) => (
                <FadeIn key={i} delay={0.1 * i} direction="up">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-dyad-soft/10 flex flex-col items-center text-center md:items-start md:text-left transition-all hover:shadow-xl hover:-translate-y-2 h-full">
                    <div className="w-14 h-14 bg-dyad-accent text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-dyad-accent/20">
                      {item.letter}
                    </div>
                    <h3 className="text-xl font-bold text-dyad-dark mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Client Words Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-serif text-dyad-dark mb-6">Client Words</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                  Reflections from those who have walked the path of resonance.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12">
              {testimonials.map((t, i) => (
                <FadeIn key={i} delay={0.2 * i} direction={i % 2 === 0 ? "right" : "left"}>
                  <div className="bg-dyad-background-soft p-10 rounded-[2.5rem] border border-dyad-soft/10 relative h-full flex flex-col">
                    <Quote className="h-10 w-10 text-dyad-accent/20 absolute top-8 left-8" />
                    <p className="text-xl text-slate-700 italic mb-8 leading-relaxed relative z-10 pt-6">
                      "{t.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-bold text-dyad-dark">{t.author}</p>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Card Section */}
        <section className="bg-dyad-sky/5 py-24 md:py-32">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <FadeIn>
              <div className="bg-white p-10 md:p-20 rounded-[3rem] shadow-2xl border border-dyad-soft/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-dyad-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-110 duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <Gift className="h-10 w-10 text-dyad-accent mr-4" />
                    <h3 className="text-3xl md:text-4xl font-serif text-dyad-dark font-bold">Gift a Session</h3>
                  </div>
                  <p className="text-xl text-slate-700 mb-12 leading-relaxed font-light">
                    Give the gift of neurological regulation and somatic balance to someone you care about.
                  </p>
                  <a href={GIFT_CARD_URL} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-xl px-12 h-16 rounded-full transition-all hover:scale-105 active:scale-95"
                    >
                      Buy Gift Card
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;