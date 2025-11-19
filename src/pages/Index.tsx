"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, Leaf, MessageSquare } from "lucide-react";

const Index = () => {
  // Custom colors defined in tailwind.config.ts:
  // dyad-dark: #1E3261 (Deep Indigo)
  // dyad-accent: #67447A (Muted Violet)
  // dyad-background-soft: #F8F7F4 (Creamy)

  return (
    <div className="bg-dyad-background-soft min-h-screen text-dyad-dark">
      
      {/* Header - Fixed and Minimal */}
      <header className="sticky top-0 z-20 bg-dyad-background-soft/95 backdrop-blur-sm border-b border-dyad-soft/30">
        <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
          <h1 className="text-2xl font-serif tracking-wider text-dyad-dark font-bold">
            Resonance Kinesiology
          </h1>
          <Button 
            size="sm" 
            className="bg-dyad-accent hover:bg-dyad-dark text-dyad-background-soft shadow-md text-sm px-4 py-2 rounded-full transition-colors"
          >
            Book Session
          </Button>
        </nav>
      </header>

      {/* Hero Section - Full Width, Dark, High Contrast */}
      <section className="bg-dyad-dark text-dyad-background-soft py-32 md:py-48">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Embodied Clarity.
          </h1>
          <p className="text-2xl font-light mb-12 max-w-3xl mx-auto opacity-90">
            Kinesiology, Somatic Awareness, and Vocal Liberation.
          </p>
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 h-16 bg-dyad-accent hover:bg-dyad-soft text-white font-semibold shadow-xl rounded-full transition-colors"
          >
            Start Your Session
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About/Philosophy - Image Focused, Split Layout */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            
            {/* Text Column */}
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-dyad-accent mb-4">
                Daniele Buatti
              </h3>
              <h2 className="text-4xl font-serif text-dyad-dark mb-8 leading-snug">
                The body doesn’t lie. It also doesn’t rush.
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                My approach is simple: slow down, get present, and listen to what the body is actually saying. I facilitate awareness, helping clients safely reconnect with their *felt sense* to make it comprehensible and grounded.
              </p>
              <p className="text-lg text-gray-600 mb-8 border-l-4 border-dyad-accent/50 pl-4 italic">
                "Healing comes from *being* in the body, not escaping it."
              </p>
              <Button variant="link" className="text-dyad-accent text-lg p-0 hover:text-dyad-dark">
                Read Full Profile →
              </Button>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-2">
              {/* Practitioner Photo - Reduced zoom and object-top to shift focus down */}
              <div className="w-full h-[450px] rounded-3xl shadow-2xl overflow-hidden border-8 border-white ring-4 ring-dyad-soft/50">
                <img 
                  src="/daniele-buatti-practitioner.jpeg" 
                  alt="Daniele Buatti, The Embodied Practitioner" 
                  className="w-full h-full object-cover object-top scale-[1.3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Minimalist Grid (using dyad-dark background for contrast) */}
      <section className="bg-dyad-dark py-32 text-dyad-background-soft">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-6">What We Transform</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Working with the body’s natural intelligence to shift stress patterns and liberate expression.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Brain className="h-12 w-12 text-dyad-accent mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-3">Nervous System Regulation</CardTitle>
              <p className="opacity-70 leading-relaxed">
                Understanding threat responses, vagal patterns, and moving toward grounded, internal safety.
              </p>
            </div>

            <div className="text-center">
              <Heart className="h-12 w-12 text-dyad-accent mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-3">Emotional Clarity & Roots</CardTitle>
              <p className="opacity-70 leading-relaxed">
                Tracing the root of emotional patterns, belief systems, and identity structures in the body.
              </p>
            </div>

            <div className="text-center">
              <Mic2 className="h-12 w-12 text-dyad-accent mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-3">Vocal Liberation & Expression</CardTitle>
              <p className="opacity-70 leading-relaxed">
                Transforming emotional suppression into vocal freedom for singers, performers, and creatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section - Soft Background */}
      <section className="bg-dyad-background-soft py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-3xl font-light italic text-dyad-dark leading-relaxed mb-6">
            "During my visit to Australia, Daniele's kindness and depth of knowledge immensely lightened my emotional burden. Highly recommend her uplifting and healing sessions."
          </p>
          <p className="text-lg font-medium text-gray-600">— Eleanor, Business Owner, Canada</p>
        </div>
      </section>

      {/* Footer / CTA - Accent Color Block */}
      <footer className="bg-dyad-accent text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-serif mb-8">Ready to find your resonance?</h3>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Book your 90-minute session today to move through life with more ease, clarity, and internal freedom.
          </p>
          
          <Button size="lg" className="text-xl px-12 py-8 h-16 bg-dyad-dark hover:bg-dyad-soft text-white font-semibold shadow-2xl w-full sm:w-auto rounded-full transition-colors">
            Book Your 90-Minute Session
          </Button>
          
          <div className="mt-16 text-sm opacity-70 space-y-2">
            <p>Toorak, Melbourne Vic</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="mailto:daniele.kinesiology@gmail.com" className="hover:text-dyad-soft transition-colors flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
              <a href="tel:+61424174067" className="hover:text-dyad-soft transition-colors flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call
              </a>
            </div>
            <p className="pt-4">© {new Date().getFullYear()} Resonance Kinesiology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;