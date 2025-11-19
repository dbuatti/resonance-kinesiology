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
            ✦ Resonance Kinesiology
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
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-dyad-background-soft/70 backdrop-blur-[1px]"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          
          {/* Circular Photo Overlay */}
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
            Come Home to Your Body
          </h1>
          <p className="text-2xl font-light mb-6 max-w-3xl mx-auto opacity-90">
            The body speaks in sensation, impulse, emotion, tension, and subtle knowing.
            It never lies — and it never rushes.
          </p>
          <p className="text-xl font-light mb-6 max-w-3xl mx-auto opacity-90">
            My work meets you at the pace of your nervous system.
            I slow down, listen, track, and make sense of what your body is trying to communicate.
          </p>
          <p className="text-xl font-light mb-12 max-w-3xl mx-auto opacity-90">
            Together I unwind survival patterns, dissolve old emotional imprints, and rebuild safety from the inside out — so expression, clarity, and presence become natural again.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 h-16 bg-dyad-accent hover:bg-dyad-dark text-white font-semibold shadow-xl rounded-full transition-colors"
            >
              Book Your Session
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-6">What I Offer</h2>
          <h3 className="text-xl font-semibold uppercase tracking-widest text-dyad-accent mb-8">
            Kinesiology • Somatic Awareness • Vocal Freedom
          </h3>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            This work is for people who feel:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 mb-10 max-w-md mx-auto text-left">
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>overwhelmed, overthinking, or shut down</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>stuck in emotional cycles they can’t reason their way out of</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>numb, tense, anxious, or disconnected from the body</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>unable to express how they really feel — in voice or life</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>tired of coping and ready to transform</span>
            </li>
          </ul>
          <p className="text-xl text-gray-700 leading-relaxed">
            This is not about fixing you.
            It’s about restoring connection to the intelligence already in you.
          </p>
        </div>
      </section>

      {/* How Sessions Work Section */}
      <section className="bg-dyad-background-soft py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-6">How Sessions Work</h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            A balance session might include:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 mb-10 max-w-md mx-auto text-left">
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Emotional stress release</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Muscle monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Meridian and acupressure points</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Survival brain pattern balancing</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Somatic tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Breath, gentle movement, meditative stillness</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Vocal release or sound work</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Integration coaching and reflection</span>
            </li>
          </ul>
          <p className="text-xl text-gray-700 leading-relaxed">
            Sessions are gentle, safe, and collaborative.
            I follow the body, not the mind — and the body always knows the way.
          </p>
        </div>
      </section>

      {/* What I Work With (formerly What I Transform) */}
      <section className="bg-dyad-dark py-32 text-dyad-background-soft">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-6">What I Work With</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Working with the body's natural intelligence to shift stress patterns and free your expression.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nervous System Regulation Card */}
            <Card className="relative bg-dyad-soft border border-dyad-soft/30 p-8 transition-all hover:border-dyad-accent/50 hover:shadow-lg overflow-hidden">
              <div className="relative z-10">
                <CardTitle className="text-3xl font-bold mb-4 text-dyad-dark leading-snug">Nervous System Regulation</CardTitle>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Understanding and resolving fight, flight, freeze, fawn and dorsal shutdown patterns so the body can return to grounded internal safety.
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
                  Tracing emotional patterns, root beliefs, and identity structures held in the body — and transforming them into wisdom.
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
                  For singers, creatives, leaders, and anyone who has swallowed their voice.
                  I repattern the emotional blocks held in the throat, diaphragm, and breath so your voice can emerge naturally, powerfully, and without force.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-0">
                <Mic2 className="h-64 w-64 text-dyad-dark opacity-10" />
              </div>
            </Card>
          </div>

          {/* Reconnection to Self Sub-section */}
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <h3 className="text-4xl font-serif mb-6">Reconnection to Self</h3>
            <p className="text-xl opacity-80 mb-6">
              Sessions often support people moving through:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-dyad-background-soft max-w-2xl mx-auto">
              <p className="bg-dyad-accent/20 text-dyad-background-soft px-4 py-2 rounded-full">burnout</p>
              <p className="bg-dyad-accent/20 text-dyad-background-soft px-4 py-2 rounded-full">grief</p>
              <p className="bg-dyad-accent/20 text-dyad-background-soft px-4 py-2 rounded-full">boundaries and self-worth</p>
              <p className="bg-dyad-accent/20 text-dyad-background-soft px-4 py-2 rounded-full">perfectionism and people-pleasing</p>
              <p className="bg-dyad-accent/20 text-dyad-background-soft px-4 py-2 rounded-full">performance anxiety</p>
              <p className="bg-dyad-accent/20 text-dyad-background-soft px-4 py-2 rounded-full">identity shifts</p>
              <p className="bg-dyad-accent/20 text-dyad-background-soft px-4 py-2 rounded-full">creative blocks</p>
              <p className="bg-dyad-accent/20 text-dyad-background-soft px-4 py-2 rounded-full">transitions and life pivots</p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Feels Like Section */}
      <section className="bg-dyad-background-soft py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-12">What It Feels Like</h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Clients describe this work as:
          </p>
          <div className="space-y-8 mb-12">
            <blockquote className="text-3xl font-light italic text-dyad-dark leading-relaxed">
              “quietly transformative,”
            </blockquote>
            <blockquote className="text-3xl font-light italic text-dyad-dark leading-relaxed">
              “profound but grounded,”
            </blockquote>
            <blockquote className="text-3xl font-light italic text-dyad-dark leading-relaxed">
              “deep emotional clarity without overwhelm,”
            </blockquote>
            <blockquote className="text-3xl font-light italic text-dyad-dark leading-relaxed">
              “finally feeling at home in my body.”
            </blockquote>
          </div>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Many leave sessions with:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 mb-10 max-w-md mx-auto text-left">
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>more space, breath, and ease</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>clarity on what they’re feeling and why</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>immediate physical shifts</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>reduced overwhelm and body tension</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>a greater sense of possibility and choice</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>a voice that feels freer, truer, and more alive</span>
            </li>
          </ul>
        </div>
      </section>

      {/* A Note on Philosophy Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-12">A Note on Philosophy</h2>
          <p className="text-3xl font-light italic text-dyad-dark leading-relaxed mb-8">
            “Healing comes from being in the body, not escaping it.”
          </p>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            In a world that values speed, output, and constant doing, I reclaim something revolutionary:
          </p>
          <h3 className="text-5xl font-serif text-dyad-accent mb-8">
            Presence.
          </h3>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            I go slow enough that the nervous system can stop bracing…
            slow enough that emotion can complete…
            slow enough that the body can speak, and be heard.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed font-semibold">
            This is where transformation happens.
          </p>
        </div>
      </section>

      {/* About Daniele Section */}
      <section className="bg-dyad-background-soft py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-6">About Daniele</h2>
          <h3 className="text-xl font-semibold uppercase tracking-widest text-dyad-accent mb-8">
            Kinesiologist • Somatic Practitioner • Vocal Coach
          </h3>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            I work at the crossroads of the body, emotion, voice, and identity.
          </p>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            My background includes:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 mb-10 max-w-md mx-auto text-left">
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Professional kinesiology training</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Somatic and nervous system modality certifications</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Years as a performing artist, vocal coach, and facilitator</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>A decade of teaching voice, presence, and self-expression</span>
            </li>
            <li className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-dyad-accent mt-1 flex-shrink-0" />
              <span>Hundreds of clinical sessions supporting clients out of shutdown, tension, and emotional suppression</span>
            </li>
          </ul>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            I don’t diagnose, fix, or direct your journey.
            I guide you into <strong>relationship with your own internal intelligence</strong> —
            the part that already knows how to heal.
          </p>
        </div>
      </section>

      {/* Community & Group Work Section (Revised) */}
      <section className="bg-white py-32">
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
              description="A gentle weekly space to breathe, connect, and drop back into your body. Online and in-person."
              icon={<Zap className="h-10 w-10" />}
              colorClass="bg-dyad-dark"
            />
            <CommunityCard
              title="Resonance Choir"
              description="A slow, somatic choir experience combining breath, mindful movement, sound, and group resonance. You don’t need to “be a singer.” Just a body and a voice."
              link="https://resonance-with-daniele.vercel.app/"
              linkText="Visit Choir Website"
              icon={<Music className="h-10 w-10" />}
              colorClass="bg-dyad-accent"
            />
          </div>
        </div>
      </section>

      {/* Client Words (Testimonial) Section (Revised) */}
      <section className="bg-dyad-background-soft py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-12">Client Words</h2>
          <p className="text-3xl font-light italic text-dyad-dark leading-relaxed mb-6">
            “Daniele’s sessions were profoundly grounding. His depth of knowledge and gentle approach helped me find clarity and ease I hadn’t felt in years.”
          </p>
          <p className="text-lg font-medium text-gray-600">— Deborah, Creative Director, Melbourne</p>
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
          
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-xl px-12 py-8 h-16 bg-dyad-dark hover:bg-dyad-soft text-white font-semibold shadow-2xl w-full sm:w-auto rounded-full transition-colors">
              Book Your Session
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