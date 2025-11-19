"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, Leaf, MessageSquare } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  // Custom colors defined in tailwind.config.ts:
  // dyad-dark: #1E3261 (Deep Indigo)
  // dyad-accent: #67447A (Muted Violet)
  // dyad-background-soft: #F8F7F4 (Creamy)

  return (
    <div className="bg-dyad-background-soft min-h-screen text-dyad-dark">
      
      {/* Header - Minimalist */}
      <header className="container mx-auto px-6 py-8 max-w-6xl">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Placeholder for a simple logo/initials */}
            <div className="h-10 w-10 rounded-full bg-dyad-dark flex items-center justify-center text-dyad-background-soft font-serif text-xl font-bold">
              RK
            </div>
            <h1 className="text-2xl font-serif tracking-wider text-dyad-dark">
              Resonance Kinesiology
            </h1>
          </div>
          <Button 
            size="lg" 
            className="bg-dyad-accent hover:bg-dyad-dark text-dyad-background-soft shadow-md text-base px-6 py-3 rounded-full transition-colors"
          >
            Book Session
          </Button>
        </nav>
      </header>

      {/* Hero Section - Text Focused with Ethereal Background */}
      <section 
        className="relative py-24 md:py-32 border-b border-dyad-soft/30 overflow-hidden"
        style={{ 
          backgroundImage: 'url(/resonance-background-horizontal.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-dyad-background-soft/90 backdrop-blur-[1px]"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif text-dyad-dark mb-8 leading-tight">
            The Embodied Practitioner
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-dyad-dark/80 leading-relaxed">
            Kinesiology, Somatic Awareness, and Vocal Liberation.
          </p>
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 h-16 bg-dyad-accent hover:bg-dyad-dark text-white font-semibold shadow-xl rounded-full transition-colors"
          >
            Book 90min Session
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About/Philosophy - White Block with Image */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              {/* Practitioner Photo - Increased height and object-center for better crop */}
              <div className="w-full h-[650px] rounded-3xl shadow-2xl overflow-hidden border-8 border-white ring-4 ring-dyad-soft/50">
                <img 
                  src="/daniele-buatti-practitioner.jpeg" 
                  alt="Daniele Buatti, The Embodied Practitioner" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-dyad-accent mb-4">
                Core Philosophy
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-8 leading-snug">
                The body doesn’t lie. It also doesn’t rush.
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                My approach is simple: slow down, get present, and listen to what the body is actually saying. I facilitate awareness, helping clients safely reconnect with their *felt sense* to make it comprehensible and grounded.
              </p>
              <p className="text-lg text-gray-600 mb-8 border-l-4 border-dyad-accent/50 pl-4 italic">
                "Healing comes from *being* in the body, not escaping it."
              </p>
              <Button variant="link" className="text-dyad-accent text-lg p-0 hover:text-dyad-dark">
                Read Daniele's Full Profile →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Minimalist Grid */}
      <section className="bg-dyad-background-soft py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-6">Kinesiology & Somatics</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Working with the body’s natural intelligence to shift stress patterns and liberate expression.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Brain className="h-12 w-12 text-dyad-accent mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-3 text-dyad-dark">Nervous System Regulation</CardTitle>
              <p className="text-gray-600 leading-relaxed">
                Understanding threat responses, vagal patterns, and moving toward grounded, internal safety.
              </p>
            </div>

            <div className="text-center">
              <Heart className="h-12 w-12 text-dyad-accent mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-3 text-dyad-dark">Emotional Clarity & Roots</CardTitle>
              <p className="text-gray-600 leading-relaxed">
                Tracing the root of emotional patterns, belief systems, and identity structures in the body.
              </p>
            </div>

            <div className="text-center">
              <Mic2 className="h-12 w-12 text-dyad-accent mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold mb-3 text-dyad-dark">Vocal Liberation & Expression</CardTitle>
              <p className="text-gray-600 leading-relaxed">
                Transforming emotional suppression into vocal freedom for singers, performers, and creatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-3xl font-light italic text-dyad-dark leading-relaxed mb-6">
            "During my visit to Australia, Daniele's kindness and depth of knowledge immensely lightened my emotional burden. Highly recommend her uplifting and healing sessions."
          </p>
          <p className="text-lg font-medium text-gray-600">— Eleanor, Business Owner, Canada</p>
        </div>
      </section>

      {/* Footer / Contact - Dark Block */}
      <footer className="bg-dyad-dark text-dyad-background-soft py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-serif mb-8">Contact Daniele</h3>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Ready to move through life with more ease, clarity, and internal freedom?
          </p>
          
          <div className="space-y-4 mb-12 max-w-xs mx-auto">
            <a href="mailto:daniele.kinesiology@gmail.com" className="flex items-center justify-center h-12 text-lg text-dyad-background-soft hover:text-dyad-soft transition-colors">
              <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
              daniele.kinesiology@gmail.com
            </a>
            <a href="tel:+61424174067" className="flex items-center justify-center h-12 text-lg text-dyad-background-soft hover:text-dyad-soft transition-colors">
              <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
              0424 174 067
            </a>
          </div>
          
          <Button size="lg" className="text-xl px-12 py-8 h-16 bg-dyad-accent hover:bg-dyad-soft text-white font-semibold shadow-2xl w-full sm:w-auto rounded-full transition-colors">
            Book Your 90-Minute Session
          </Button>
          
          <div className="mt-16 text-sm opacity-70">
            <p>Bayside Melbourne, VIC</p>
            <p className="mt-4">© {new Date().getFullYear()} Resonance Kinesiology. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <MadeWithDyad />
    </div>
  );
};

export default Index;