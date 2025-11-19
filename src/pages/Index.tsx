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

      {/* Hero Section - Image and Dark Overlay CTA */}
      <section className="relative">
        {/* Image Area */}
        <div className="w-full h-[60vh] overflow-hidden">
          <img 
            src="/daniele-buatti-practitioner.jpeg" 
            alt="Daniele Buatti, The Embodied Practitioner" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dark CTA Overlay */}
        <div className="bg-dyad-dark text-dyad-background-soft py-20 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-snug">
              Come home to yourself — body, mind, heart, and spirit.
            </h2>
            <p className="text-xl italic opacity-80 max-w-3xl mx-auto">
              Offering integrative sessions for nervous system regulation, emotional clarity, and authentic expression.
            </p>
            <Button 
              size="lg" 
              className="absolute top-4 right-4 bg-dyad-accent hover:bg-dyad-soft text-white shadow-lg transition-colors hidden md:inline-flex"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Let's Chat!
            </Button>
          </div>
        </div>
      </section>

      {/* About/Philosophy - Clean Text Block */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-10">
            Embark on your healing journey
          </h3>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            My approach is simple: slow down, get present, and listen to what the body is actually saying. I facilitate awareness, helping clients safely reconnect with their *felt sense* to make it comprehensible and grounded.
          </p>
          <p className="text-lg text-gray-600 mb-8 italic">
            I help people move from chaos to clarity, and from performance to presence.
          </p>
          <Button variant="link" className="text-dyad-accent text-lg p-0 hover:text-dyad-dark">
            Read Daniele's Full Profile →
          </Button>
        </div>
      </section>

      {/* Services - Minimalist Grid */}
      <section className="bg-white py-32">
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
      <section className="bg-dyad-background-soft py-24">
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