"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, Leaf, MessageSquare, Music, Zap } from "lucide-react";
import CommunityCard from "@/components/CommunityCard";

const BOOKING_URL = "https://danielebuatti.as.me/kinesiology";

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
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button 
              size="sm" 
              className="bg-dyad-accent hover:bg-dyad-dark text-dyad-background-soft shadow-md text-sm px-4 py-2 rounded-full transition-colors"
            >
              Book Session
            </Button>
          </a>
        </nav>
      </header>

      {/* Hero Section - Ethereal Background, Text Focused, Photo Overlay */}
      <section 
        className="relative pt-80 pb-32 md:pt-96 md:pb-48 border-b border-dyad-soft/30 overflow-hidden text-dyad-dark"
        style={{ 
          backgroundImage: 'url(/resonance-background-horizontal.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for contrast - reduced opacity from /90 to /70 */}
        <div className="absolute inset-0 bg-dyad-background-soft/70 backdrop-blur-[1px]"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          
          {/* Circular Photo Overlay - Adjusted positioning */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 -top-20 z-20">
            <div className="w-56 h-56 mx-auto rounded-full shadow-2xl overflow-hidden border-8 border-dyad-dark ring-4 ring-dyad-soft/50">
              <img 
                src="/daniele-buatti-hero.jpeg" 
                alt="Daniele Buatti, The Embodied Practitioner" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight pt-16">
            Embodied Clarity.
          </h1>
          <p className="text-2xl font-light mb-12 max-w-3xl mx-auto opacity-90">
            I offer Kinesiology, Somatic Awareness, and Vocal Freedom.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 h-16 bg-dyad-accent hover:bg-dyad-dark text-white font-semibold shadow-xl rounded-full transition-colors"
            >
              Start Your Session
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* About/Philosophy - Text Block Only, Centered */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-dyad-accent mb-4">
            Daniele Buatti
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-8 leading-snug">
            The body doesn't lie. It also doesn't rush.
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            My approach is simple: slow down, get present, and listen to your body. I help clients safely reconnect with their <strong>felt sense</strong> for grounded understanding.
          </p>
          <p className="text-lg text-gray-600 mb-8 italic">
            "Healing comes from <em>being</em> in the body, not escaping it."
          </p>
          <Button variant="link" className="text-dyad-accent text-lg p-0 hover:text-dyad-dark">
            Read Full Profile →
          </Button>
        </div>
      </section>

      {/* Community Offerings Section */}
      <section className="bg-dyad-background-soft py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-6">Community & Group Work</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Beyond one-on-one, I offer group spaces for connection, movement, and vocal freedom.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <CommunityCard
              title="Mindful Mondays"
              description="Start your week with calm and connection. Gentle catch-ups to pause, breathe, and move mindfully. In-person or online."
              icon={<Zap className="h-10 w-10" />}
              colorClass="bg-dyad-dark"
            />
            <CommunityCard
              title="Resonance Choir"
              description="A welcoming space to reset body and mind with guided breathing, mindful movement, and meditation. Find your voice and connect."
              link="https://resonance-with-daniele.vercel.app/"
              linkText="Visit Choir Website"
              icon={<Music className="h-10 w-10" />}
              colorClass="bg-dyad-accent"
            />
          </div>
        </div>
      </section>

      {/* Services - Minimalist Grid (using dyad-dark background for contrast) */}
      <section className="bg-dyad-dark py-32 text-dyad-background-soft">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-6">What I Transform</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Using the body's wisdom to release stress and free your expression.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nervous System Regulation Card */}
            <Card className="relative bg-dyad-soft border border-dyad-soft/30 p-8 transition-all hover:border-dyad-accent/50 hover:shadow-lg overflow-hidden">
              <div className="relative z-10">
                <CardTitle className="text-3xl font-bold mb-4 text-dyad-dark leading-snug">Nervous System Regulation</CardTitle>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Release threat responses, find calm, and feel safe within.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0">
                <Brain className="h-64 w-64 text-dyad-dark opacity-10" />
              </div>
            </Card>

            {/* Emotional Clarity & Roots Card */}
            <Card className="relative bg-dyad-soft border border-dyad-soft/30 p-8 transition-all hover:border-dyad-accent/50 hover:shadow-lg overflow-hidden">
              <div className="relative z-10">
                <CardTitle className="text-3xl font-bold mb-4 text-dyad-dark leading-snug">Emotional Clarity & Roots</CardTitle>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Uncover and shift emotional patterns, beliefs, and identity held in the body.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0">
                <Heart className="h-64 w-64 text-dyad-dark opacity-10" />
              </div>
            </Card>

            {/* Vocal Freedom & Expression Card */}
            <Card className="relative bg-dyad-soft border border-dyad-soft/30 p-8 transition-all hover:border-dyad-accent/50 hover:shadow-lg overflow-hidden">
              <div className="relative z-10">
                <CardTitle className="text-3xl font-bold mb-4 text-dyad-dark leading-snug">Vocal Freedom & Expression</CardTitle>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Turn emotional blocks into free vocal expression for singers, performers, and creatives.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0">
                <Mic2 className="h-64 w-64 text-dyad-dark opacity-10" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section - Soft Background */}
      <section className="bg-dyad-background-soft py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-3xl font-light italic text-dyad-dark leading-relaxed mb-6">
            "Daniele's sessions were profoundly grounding. His depth of knowledge and gentle approach helped me find clarity and ease I hadn't felt in years. Highly recommend his uplifting and healing work."
          </p>
          <p className="text-lg font-medium text-gray-600">— Deborah, Creative Director, Melbourne</p>
        </div>
      </section>

      {/* Footer / CTA - Accent Color Block */}
      <footer className="bg-dyad-accent text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-serif mb-8">Ready to find your resonance?</h3>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Book your 90-minute session for more ease, clarity, and inner freedom.
          </p>
          
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-xl px-12 py-8 h-16 bg-dyad-dark hover:bg-dyad-soft text-white font-semibold shadow-2xl w-full sm:w-auto rounded-full transition-colors">
              Book Your 90-Minute Session
            </Button>
          </a>
          
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