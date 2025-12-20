"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Users, Mail, MapPin, Clock, Phone } from "lucide-react";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const BookSession = () => {
  return (
    // Changed: Ensured the base background is clean and text is deep for high contrast
    <div className="bg-dyad-background-soft min-h-screen text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-dyad-soft/30 shadow-sm">
        <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
          <a href="/" className="text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-colors">
            ✦ Resonance Kinesiology
          </a>
          <div className="flex items-center space-x-4">
            <a href="/book-session">
              <Button 
                size="sm" 
                className="bg-dyad-dark hover:bg-black text-white shadow-md text-sm px-4 py-2 rounded-full transition-colors"
              >
                Session Options
              </Button>
            </a>
            <a href={MUSIC_WORK_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                variant="outline"
                className="border-dyad-dark text-dyad-dark hover:bg-dyad-dark hover:text-white shadow-sm text-sm px-4 py-2 rounded-full transition-colors"
              >
                My Music Work
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-dyad-background-soft">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-4">Kinesiology Sessions in Toorak</h1>
          {/* Changed: Increased gray weight from 700 to 800 for better readability */}
          <p className="text-xl text-slate-800 mb-2 font-medium">Friday mornings · 90-minute sessions · Toorak, Victoria</p>
          <p className="text-lg text-slate-700 mb-6">Conveniently located in Toorak, serving Melbourne and surrounding areas</p>

          <div className="bg-white border border-dyad-soft/50 p-8 rounded-3xl shadow-sm mb-4 max-w-3xl mx-auto">
            <p className="text-lg text-slate-900 mb-4 leading-relaxed">
              I currently offer kinesiology sessions on Friday mornings in Toorak, Victoria, with three access options depending on your capacity to pay.
            </p>
            <p className="text-lg text-slate-900 font-medium leading-relaxed">
              Please choose the option that genuinely reflects your current circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Location Info Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-dyad-dark mb-6">My Toorak Practice</h2>
              <p className="text-xl text-slate-800 mb-6">
                I offer kinesiology sessions in Toorak, Victoria (3142), serving Melbourne and surrounding areas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-dyad-soft/30 p-2 rounded-full mr-3">
                    <MapPin className="h-6 w-6 text-dyad-dark" />
                  </div>
                  <span className="text-lg font-medium">Toorak, Victoria 3142</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-dyad-soft/30 p-2 rounded-full mr-3">
                    <Clock className="h-6 w-6 text-dyad-dark" />
                  </div>
                  <span className="text-lg font-medium">Friday mornings by appointment</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-dyad-soft/30 p-2 rounded-full mr-3">
                    <Phone className="h-6 w-6 text-dyad-dark" />
                  </div>
                  <span className="text-lg font-medium">0424 174 067</span>
                </div>
              </div>
            </div>
            <div className="bg-dyad-background-soft p-8 rounded-2xl border border-dyad-soft/20">
              <h3 className="text-2xl font-serif text-dyad-dark mb-4">Why Work With Me in Toorak?</h3>
              <ul className="space-y-4 text-slate-800">
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-3 text-dyad-accent mt-1 flex-shrink-0" />
                  <span className="font-medium">Personalized one-on-one sessions</span>
                </li>
                {/* ... other list items with slate-800 ... */}
                <li className="flex items-start">
                    <Leaf className="h-5 w-5 mr-3 text-dyad-accent mt-1 flex-shrink-0" />
                    <span className="font-medium">Accessible pricing options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

{/* Session Options Section */}
<section className="py-0">
  <div className="flex flex-col">

    {/* Option 1: DARK BACKGROUND */}
    {/* Use: Pure white text and a bright highlight color for the price */}
    <div className="bg-dyad-dark text-white">
      <div className="container mx-auto px-6 max-w-6xl py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded bg-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
              Option 01
            </span>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Full Fee — Kinesiology & Energy Balancing</h3>
            {/* Price highlight: Using a bright tint so it pops against the dark bg */}
            <p className="text-2xl font-bold mb-8 text-dyad-soft">$100 · 90 minutes · Toorak</p>
            <div className="space-y-6 text-white/95 text-lg leading-relaxed max-w-lg">
              <p>This is the standard full-fee session and the primary way my work is sustained.</p>
              <p>A deep, one-to-one session in Toorak supporting regulation and clarity, guided by your body's innate intelligence.</p>
            </div>
            <div className="mt-10">
              <a href="/schedule?type=full-fee">
                <Button size="lg" className="bg-white text-dyad-dark hover:bg-dyad-soft font-bold shadow-xl h-14 px-8 rounded-full">
                  Book Full Fee Session
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center opacity-10">
            <Leaf className="h-64 w-64 text-white" />
          </div>
        </div>
      </div>
    </div>

    {/* Option 2: ACCENT BACKGROUND (The most challenging) */}
    {/* Fix: We use slate-950 (near black) for text. If text is black on a colored bg, it is always readable. */}
    <div className="bg-dyad-accent text-slate-950">
      <div className="container mx-auto px-6 max-w-6xl py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded bg-black/10 text-slate-900 text-xs font-black uppercase tracking-[0.2em] mb-6">
              Option 02
            </span>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-slate-950">Community — Discounted Access</h3>
            <p className="text-2xl font-bold mb-8 text-slate-900">$30 · 90 minutes · Toorak</p>
            <div className="space-y-6 text-slate-900 text-lg leading-relaxed max-w-lg">
              <p className="font-medium">Same depth of care, offered at a reduced contribution for those who cannot currently afford standard rates.</p>
              <p>These sessions are part of a community-care model that balances accessibility with sustainability.</p>
            </div>
            <div className="mt-10">
              <a href="/schedule?type=community-discounted">
                <Button size="lg" className="bg-slate-950 text-white hover:bg-black font-bold shadow-xl h-14 px-8 rounded-full">
                  Book Community Session ($30)
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center opacity-20">
            <Heart className="h-64 w-64 text-slate-950" />
          </div>
        </div>
      </div>
    </div>

    {/* Option 3: SOFT/LIGHT BACKGROUND */}
    {/* Fix: Use your deep 'dyad-dark' color for text to ensure it contrasts against the soft bg. */}
    <div className="bg-dyad-soft text-dyad-dark">
      <div className="container mx-auto px-6 max-w-6xl py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded bg-dyad-dark/10 text-dyad-dark text-xs font-black uppercase tracking-[0.2em] mb-6">
              Option 03
            </span>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Community — Free Access (Limited)</h3>
            <p className="text-2xl font-bold mb-8 text-dyad-accent">Free · 90 minutes · Toorak</p>
            <div className="space-y-6 text-dyad-dark/90 text-lg leading-relaxed max-w-lg">
              <p>Once per week, I offer a fully free kinesiology session for someone who would otherwise not be able to access this work.</p>
              <p className="italic font-medium">Please book this option only if payment of any kind is not currently possible for you.</p>
            </div>
            <div className="mt-10">
              <a href="/schedule?type=free-access">
                <Button size="lg" className="bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-xl h-14 px-8 rounded-full">
                  Book Free Access Session
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center opacity-10">
            <Users className="h-64 w-64 text-dyad-dark" />
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* Integrity Note */}
      <section className="bg-dyad-background-soft py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif text-dyad-dark mb-8">A note on integrity & access</h2>
          <p className="text-xl text-slate-800 leading-relaxed font-medium max-w-2xl mx-auto">
            These options exist to support access while respecting the energetic and practical sustainability of my work. 
          </p>
          <div className="mt-12">
            <a href="mailto:daniele.kinesiology@gmail.com" className="inline-flex items-center text-xl text-dyad-accent hover:text-dyad-dark underline decoration-2 underline-offset-4 transition-colors font-bold">
              <Mail className="h-6 w-6 mr-3" />
              daniele.kinesiology@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer - High Contrast */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-lg mb-6 text-slate-300">
            I'd be honoured to work with you in Toorak.
          </p>
          <a href="/" className="text-white hover:text-dyad-accent transition-colors font-bold underline underline-offset-4">
            ← Return to Home
          </a>
          <div className="mt-8 pt-8 border-t border-white/10 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Resonance Kinesiology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookSession;