"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, Leaf, MapPin, Clock } from "lucide-react";

const BOOKING_URL = "https://danielebuatti.as.me/kinesiology";
const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const Index = () => {
  return (
    <div className="bg-dyad-background-soft min-h-screen text-dyad-dark">
      
      {/* Header - Fixed and Minimal */}
      <header className="sticky top-0 z-20 bg-dyad-background-soft/95 backdrop-blur-sm border-b border-dyad-soft/30">
        <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
          <a href="/" className="text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-colors">
            ✦ Resonance Kinesiology
          </a>
          <div className="flex items-center space-x-4">
            <a href="/book-session">
              <Button 
                size="sm" 
                className="bg-dyad-dark hover:bg-dyad-accent text-white shadow-md text-sm px-4 py-2 rounded-full transition-colors"
              >
                Session Options
              </Button>
            </a>
            <a href={MUSIC_WORK_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                className="bg-dyad-dark hover:bg-dyad-accent text-white shadow-md text-sm px-4 py-2 rounded-full transition-colors"
              >
                My Music Work
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section - Ethereal Background, Text Focused, Photo Overlay */}
      <section 
        className="relative pt-80 pb-32 md:pt-96 md:pb-48 border-b border-dyad-soft/30 overflow-hidden text-dyad-dark"
        style={{ 
          backgroundImage: 'url(/resonance-background-horizontal.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundColor: '#F8F7F4', // Fallback background color
        }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-dyad-background-soft/70 backdrop-blur-[1px]"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          
          {/* Circular Photo Overlay */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4 -top-20 z-20">
            <div className="w-56 h-56 mx-auto rounded-full shadow-2xl overflow-hidden border-8 border-dyad-dark ring-4 ring-dyad-soft/50">
              <img 
                src="/daniele-buatti-hero.jpeg" 
                alt="Daniele Buatti, Kinesiologist in Toorak, Victoria" 
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight pt-16">
            Kinesiology in Toorak
          </h1>
          <p className="text-2xl font-light mb-12 max-w-3xl mx-auto opacity-90">
            Expert kinesiology sessions in Toorak, Victoria. Nervous system regulation, emotional clarity, and somatic awareness for Melbourne residents.
          </p>
          <a href="/book-session">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 h-16 bg-dyad-accent hover:bg-dyad-dark text-white font-semibold shadow-xl rounded-full transition-colors"
            >
              Book Your Toorak Session
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Location Info Section - Added for SEO */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif text-dyad-dark mb-6">Serving Toorak & Melbourne</h2>
          <p className="text-xl text-gray-700 mb-4">
            Conveniently located in Toorak, Victoria (3142), serving Melbourne and surrounding areas.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Find expert kinesiology services near you for nervous system regulation and emotional clarity.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-2 text-dyad-accent" />
              <span className="text-lg">0424 174 067</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-2 text-dyad-accent" />
              <span className="text-lg">daniele.kinesiology@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Work With Section - Core Offerings */}
      <section className="bg-dyad-dark py-24 md:py-32 text-dyad-background-soft">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Kinesiology Services in Toorak</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Professional kinesiology sessions in Toorak, Victoria for nervous system regulation, emotional clarity, and somatic awareness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nervous System Regulation Card */}
            <Card className="relative bg-dyad-soft border border-dyad-soft/30 p-8 transition-all hover:border-dyad-accent/50 hover:shadow-lg overflow-hidden">
              <div className="relative z-10">
                <CardTitle className="text-3xl font-bold mb-4 text-dyad-dark leading-snug">Nervous System Regulation</CardTitle>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Resolve fight, flight, freeze, and fawn patterns to restore grounded internal safety. Available in Toorak, Victoria.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0">
                <Brain className="h-64 w-64 text-dyad-dark opacity-10" />
              </div>
            </Card>

            {/* Emotional Clarity & Meaning Card */}
            <Card className="relative bg-dyad-soft border border-dyad-soft/30 p-8 transition-all hover:border-dyad-accent/50 hover:shadow-lg overflow-hidden">
              <div className="relative z-10">
                <CardTitle className="text-3xl font-bold mb-4 text-dyad-dark leading-snug">Emotional Clarity & Meaning</CardTitle>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Transform emotional patterns and root beliefs held in the body into wisdom. Toorak-based kinesiology sessions.
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
                  Release emotional blocks in the throat and diaphragm for a naturally powerful voice. Available in Toorak, Melbourne.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0">
                <Mic2 className="h-64 w-64 text-dyad-dark opacity-10" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Words (Testimonial) Section */}
      <section className="bg-dyad-background-soft py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-12">Client Words</h2>
          <p className="text-3xl font-light italic text-dyad-dark leading-relaxed mb-6">
            “Daniele’s sessions were profoundly grounding. His depth of knowledge and gentle approach helped me find clarity and ease I hadn’t felt in years.”
          </p>
          <p className="text-lg font-medium text-gray-600">— Deborah, Creative Director, Melbourne</p>
        </div>
      </section>

      {/* About Daniele Section (Simplified) */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-6">About Me</h2>
          <h3 className="text-xl font-semibold uppercase tracking-widest text-dyad-accent mb-8">
            Kinesiologist • Somatic Practitioner • Vocal Coach
          </h3>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            I guide you into relationship with your own internal intelligence — the part that already knows how to heal. My work asdsadasintegrates professional kinesiology, somatic modalities, and years of experience as a vocal coach and performing artist.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Based in Toorak, Victoria, serving Melbourne and surrounding areas.
          </p>
        </div>
      </section>

      {/* FAQ Section - Added for SEO */}
      <section className="bg-dyad-background-soft py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700">About Kinesiology in Toorak</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-serif text-dyad-dark mb-4">What is kinesiology and how can it help me?</h3>
              <p className="text-gray-700 leading-relaxed">
                Kinesiology is a holistic approach that combines muscle monitoring with traditional Chinese medicine principles to identify and resolve imbalances in the body's energy systems. It can help with stress reduction, emotional clarity, nervous system regulation, and overall well-being.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-serif text-dyad-dark mb-4">Where are you located in Toorak?</h3>
              <p className="text-gray-700 leading-relaxed">
                My practice is conveniently located in Toorak, Victoria (3142), easily accessible from Melbourne and surrounding suburbs. Sessions are available on Friday mornings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-serif text-dyad-dark mb-4">What can I expect from a kinesiology session in Toorak?</h3>
              <p className="text-gray-700 leading-relaxed">
                Each 90-minute session is tailored to your needs and may include muscle monitoring, emotional stress release, meridian balancing, nervous system regulation techniques, and somatic awareness practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-serif text-dyad-dark mb-4">How do I book a kinesiology session in Toorak?</h3>
              <p className="text-gray-700 leading-relaxed">
                You can easily book your session online through our booking system. We offer three access options depending on your capacity to pay, ensuring kinesiology is accessible to everyone in the Toorak community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA - Accent Color Block (Ready to Begin) */}
      <footer className="bg-dyad-accent text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-serif mb-8">Ready to Begin</h3>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            If you’re ready to meet your body — with honesty, safety, and respect — I’d be honoured to work with you.
          </p>
          <p className="text-2xl font-semibold mb-10">
            90-minute Balance Sessions available in Toorak, Melbourne & online.
          </p>
          
          <a href="/book-session">
            <Button size="lg" className="text-xl px-12 py-8 h-16 bg-dyad-dark hover:bg-dyad-soft text-white font-semibold shadow-2xl w-full sm:w-auto rounded-full transition-colors">
              Book Your Toorak Session
            </Button>
          </a>
          
          <div className="mt-16 text-sm opacity-70 space-y-2">
            <p>Toorak, Melbourne Vic 3142</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="mailto:daniele.kinesiology@gmail.com" className="hover:text-dyad-soft transition-colors flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
              <a href="tel:+61424174067" className="hover:text-dyad-soft transition-colors flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Phone
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