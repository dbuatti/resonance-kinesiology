"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Users, Mail, MapPin, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const BookSession = () => {
  const navLinks = [
    { href: MUSIC_WORK_URL, label: "My Music Work", isExternal: true, isPrimary: false },
  ];

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900">
      <Header links={navLinks} />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-4">Kinesiology Sessions in Toorak</h1>
          <p className="text-xl text-slate-800 mb-2 font-medium">Friday mornings · 90-minute sessions · Toorak, Victoria</p>
          
          <div className="bg-white/50 border border-dyad-soft/50 p-8 rounded-3xl mt-8 max-w-3xl mx-auto shadow-sm">
            <p className="text-lg text-slate-900 mb-4 leading-relaxed">
              I currently offer kinesiology sessions on Friday mornings in Toorak, Victoria, with three access options depending on your capacity to pay.
              All sessions are 90 minutes and held with the same depth of care, professionalism, and presence.
            </p>
            <p className="text-lg text-slate-900 font-semibold leading-relaxed">
              Please choose the option that genuinely reflects your current circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Location Info Section */}
      <section className="bg-white py-20 border-y border-dyad-soft/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-dyad-dark mb-6">My Toorak Practice</h2>
              <p className="text-xl text-slate-800 mb-8 leading-relaxed">
                I offer kinesiology sessions in Toorak, Victoria (3142), serving Melbourne and surrounding areas.
              </p>
              <div className="space-y-5">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-dyad-accent shrink-0" />
                  <span className="text-lg font-medium">Toorak, Victoria 3142</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-4 text-dyad-accent shrink-0" />
                  <span className="text-lg font-medium">Friday mornings by appointment</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-dyad-accent shrink-0" />
                  <span className="text-lg font-medium text-slate-900">0424 174 067</span>
                </div>
              </div>
            </div>
            <div className="bg-dyad-background-soft p-8 rounded-3xl border border-dyad-soft/30">
              <h3 className="text-2xl font-serif text-dyad-dark mb-6">Why Work With Me in Toorak?</h3>
              <ul className="space-y-4">
                {["Personalized one-on-one sessions", "Convenient Toorak location", "Accessible pricing options", "Years of professional experience"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Leaf className="h-5 w-5 mr-3 text-dyad-accent mt-1 flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Session Options */}
      <section className="py-0">
        <div className="flex flex-col">

          {/* Option 1: Full Fee (Dark Block) */}
          <div className="bg-dyad-dark text-white">
            <div className="container mx-auto px-6 max-w-6xl py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded bg-white/10 text-white/80 text-xs font-black uppercase tracking-[0.2em] mb-6">Option 01</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Full Fee — Kinesiology & Energy Balancing</h3>
                  <p className="text-2xl font-bold mb-8 text-dyad-soft">$100 · 90 minutes · Toorak</p>
                  <div className="space-y-6 text-white/90 text-lg leading-relaxed mb-10">
                    <p>This is the standard full-fee session and the primary way my work is sustained.</p>
                    <p>A deep, one-to-one kinesiology session in Toorak supporting regulation, clarity, and integration within your body and nervous system. Sessions are guided by your body's innate intelligence and may work with stress patterns, emotional load, and held tension.</p>
                    <p className="font-semibold italic">Best if you are financially able to pay the full rate to support the ongoing availability of this work.</p>
                  </div>
                  <a href="/schedule?type=full-fee">
                    <Button size="lg" className="bg-white text-dyad-dark hover:bg-dyad-soft font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                      Book a Full Fee Session
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <div className="hidden md:flex justify-center opacity-10">
                  <Leaf className="h-64 w-64 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Option 2: Community Discount (Accent Block) */}
          {/* Note: Near-black text used for contrast on colored background */}
          <div className="bg-dyad-accent text-slate-950">
            <div className="container mx-auto px-6 max-w-6xl py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="hidden md:flex justify-center opacity-20 order-1">
                  <Heart className="h-64 w-64 text-slate-950" />
                </div>
                <div className="order-2">
                  <span className="inline-block px-3 py-1 rounded bg-black/10 text-slate-900 text-xs font-black uppercase tracking-[0.2em] mb-6">Option 02</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-slate-950">Community — Discounted Access</h3>
                  <p className="text-2xl font-bold mb-8 text-slate-900">$30 · 90 minutes · Toorak</p>
                  <div className="space-y-6 text-slate-900 text-lg leading-relaxed mb-10">
                    <p>This session offers the same depth of care and attention as the full-fee session, at a reduced contribution for those who cannot currently afford standard rates.</p>
                    <p>These sessions are limited and offered as part of my community-care model that balances accessibility with sustainability.</p>
                    <p className="font-bold">Please choose this option only if the full fee is genuinely out of reach at this time.</p>
                  </div>
                  <a href="/schedule?type=community-discounted">
                    <Button size="lg" className="bg-slate-950 text-white hover:bg-black font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                      Book a Community Session ($30)
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Option 3: Free Access (Soft Block) */}
          <div className="bg-dyad-soft text-dyad-dark border-y border-dyad-soft/30">
            <div className="container mx-auto px-6 max-w-6xl py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded bg-dyad-dark/10 text-dyad-dark text-xs font-black uppercase tracking-[0.2em] mb-6">Option 03</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Community — Free Access (Limited)</h3>
                  <p className="text-2xl font-bold mb-8 text-dyad-accent">Free · 90 minutes · Toorak</p>
                  <div className="space-y-6 text-dyad-dark/90 text-lg leading-relaxed mb-10">
                    <p>Once per week, I offer a fully free kinesiology session in Toorak for someone who would otherwise not be able to access this work.</p>
                    <p>This session is identical in structure and care to the paid offerings and is available by direct booking when released.</p>
                    <p className="font-medium italic">Please book this option only if payment of any kind is not currently possible for you.</p>
                  </div>
                  <a href="/schedule?type=free-access">
                    <Button size="lg" className="bg-dyad-accent hover:bg-dyad-dark text-white font-bold shadow-xl h-14 px-10 rounded-full transition-transform hover:scale-105">
                      Book a Free Access Session
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <div className="hidden md:flex justify-center opacity-10">
                  <Users className="h-64 w-64 text-dyad-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Integrity Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl font-serif text-dyad-dark mb-8">Integrity & Access</h2>
          <p className="text-xl text-slate-800 leading-relaxed mb-10 font-medium">
            Thank you for choosing the option that aligns honestly with your current capacity. 
            If you're unsure which option is right for you, feel free to reach out.
          </p>
          <div className="bg-dyad-background-soft p-8 rounded-2xl inline-block w-full max-w-md shadow-sm border border-dyad-soft/20">
            <Mail className="h-6 w-6 text-dyad-accent mx-auto mb-4" />
            {/* Added break-all and block to fix stacking on small screens */}
            <a href="mailto:daniele.kinesiology@gmail.com" className="text-lg md:text-xl text-dyad-dark font-bold hover:text-dyad-accent transition-colors block break-all leading-tight underline underline-offset-4">
              daniele.kinesiology@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-lg mb-8 text-slate-400">
            I'd be honoured to work with you in Toorak.
          </p>
          <a href="/" className="text-white hover:text-dyad-accent transition-colors font-bold underline underline-offset-4">
            ← Return to Home
          </a>
          <div className="mt-12 text-xs opacity-50 tracking-widest uppercase">
            <p>© {new Date().getFullYear()} Resonance Kinesiology • Melbourne</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookSession;