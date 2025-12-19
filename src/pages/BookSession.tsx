"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Users, Mail, MapPin, Clock, Phone } from "lucide-react";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const BookSession = () => {
  return (
    <div className="bg-dyad-background-soft min-h-screen text-dyad-dark">
      {/* Header */}
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

      {/* Hero Section - Reduced padding */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-4">Kinesiology Sessions in Toorak</h1>
          <p className="text-xl text-gray-700 mb-2">Friday mornings · 90-minute sessions · Toorak, Victoria</p>
          <p className="text-lg text-gray-600 mb-6">Conveniently located in Toorak, serving Melbourne and surrounding areas</p>

          <div className="bg-dyad-soft p-8 rounded-3xl mb-4 max-w-3xl mx-auto">
            <p className="text-lg text-dyad-dark mb-4 leading-relaxed">
              I currently offer kinesiology sessions on Friday mornings in Toorak, Victoria, with three access options depending on your capacity to pay.
              All sessions are 90 minutes and held with the same depth of care, professionalism, and presence.
            </p>
            <p className="text-lg text-dyad-dark leading-relaxed">
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
              <h2 className="text-4xl font-serif text-dyad-dark mb-6">Find Us in Toorak</h2>
              <p className="text-xl text-gray-700 mb-6">
                Conveniently located in Toorak, Victoria (3142), our practice serves Melbourne and surrounding suburbs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-dyad-accent" />
                  <span className="text-lg">Toorak, Victoria 3142</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-dyad-accent" />
                  <span className="text-lg">Friday mornings by appointment</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-dyad-accent" />
                  <span className="text-lg">0424 174 067</span>
                </div>
              </div>
            </div>
            <div className="bg-dyad-soft p-8 rounded-2xl">
              <h3 className="text-2xl font-serif text-dyad-dark mb-4">Why Choose Kinesiology in Toorak?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-2 text-dyad-accent mt-1 flex-shrink-0" />
                  <span>Convenient Toorak location</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-2 text-dyad-accent mt-1 flex-shrink-0" />
                  <span>Personalized 90-minute sessions</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-2 text-dyad-accent mt-1 flex-shrink-0" />
                  <span>Accessible pricing options</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 mr-2 text-dyad-accent mt-1 flex-shrink-0" />
                  <span>Experienced practitioner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Session Options - Full width */}
      <section className="py-0 -mt-8">
        <div className="space-y-0"> {/* Removed container to allow full width */}

          {/* Full Fee Session - Full width */}
          <div className="bg-dyad-dark text-dyad-background-soft">
            <div className="container mx-auto px-6 max-w-6xl py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-sm font-semibold uppercase tracking-widest text-dyad-background-soft/80">Option 1</span>
                  </div>
                  <h3 className="text-4xl font-serif mb-6">Full Fee — Kinesiology & Energy Balancing in Toorak</h3>
                  <p className="text-2xl font-semibold mb-8">$100 · 90 minutes · Toorak, Victoria</p>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    This is the standard full-fee session and the primary way this work is sustained.
                  </p>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    A deep, one-to-one kinesiology session in Toorak supporting regulation, clarity, and integration within the body and nervous system. Sessions are guided by your body's innate intelligence and may work with stress patterns, emotional load, nervous system responses, and held tension.
                  </p>
                  <p className="text-lg opacity-90 mb-8 leading-relaxed">
                    This option is best if you are financially able to pay the full rate and wish to support the ongoing availability of this work.
                  </p>
                  <a href="/schedule?type=full-fee">
                    <Button size="lg" className="bg-dyad-accent hover:bg-dyad-soft text-white font-semibold shadow-lg h-14">
                      Book a Full Fee Session in Toorak
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <div className="hidden md:flex justify-center">
                  <Leaf className="h-48 w-48 text-white/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Community Discounted Session - Full width */}
          <div className="bg-dyad-accent text-dyad-background-soft">
            <div className="container mx-auto px-6 max-w-6xl py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-sm font-semibold uppercase tracking-widest text-dyad-dark/80">Option 2</span>
                  </div>
                  <h3 className="text-4xl font-serif mb-6">Community — Discounted Access in Toorak</h3>
                  <p className="text-2xl font-semibold mb-8">$30 · 90 minutes · Toorak, Victoria</p>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    This session offers the same depth of care and attention as the full-fee session, at a reduced contribution for those who cannot currently afford standard rates.
                  </p>
                  <p className="text-lg opacity-90 mb-6 leading-relaxed">
                    These sessions are limited and offered as part of a community-care model that balances accessibility with sustainability.
                  </p>
                  <p className="text-lg opacity-90 mb-8 leading-relaxed">
                    Please choose this option only if the full fee is genuinely out of reach for you at this time.
                  </p>
                  <a href="/schedule?type=community-discounted">
                    <Button size="lg" className="bg-dyad-dark hover:bg-dyad-soft text-white font-semibold shadow-lg h-14">
                      Book a Community Session in Toorak ($30)
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <div className="hidden md:flex justify-center">
                  <Heart className="h-48 w-48 text-white/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Community Free Session - Full width */}
          <div className="bg-dyad-soft border-t border-b border-dyad-soft/30">
            <div className="container mx-auto px-6 max-w-6xl py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-sm font-semibold uppercase tracking-widest text-dyad-accent">Option 3</span>
                  </div>
                  <h3 className="text-4xl font-serif mb-6">Community — Free Access in Toorak (Limited)</h3>
                  <p className="text-2xl font-semibold mb-8">Free · 90 minutes · one session per week · Toorak, Victoria</p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Once per week, I offer a fully free kinesiology session in Toorak for someone who would otherwise not be able to access this work.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This session is identical in structure and care to the paid offerings and is available by direct booking when released.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Please book this option only if payment of any kind is not currently possible for you. If you are able to contribute financially, I invite you to choose one of the paid options so this space can remain available to those most in need.
                  </p>
                  <a href="/schedule?type=free-access">
                    <Button size="lg" className="bg-dyad-accent hover:bg-dyad-dark text-white font-semibold shadow-lg h-14">
                      Book a Free Access Session in Toorak
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <div className="hidden md:flex justify-center">
                  <Users className="h-48 w-48 text-dyad-dark/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity Note */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-dyad-dark mb-8">A note on integrity & access</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              These options exist to support access while respecting the energetic and practical sustainability of the work. Thank you for choosing the option that aligns honestly with your current capacity.
            </p>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              If you're unsure which option is right for you, you're welcome to reach out before booking.
            </p>
            <div className="mt-10">
              <a href="mailto:daniele.kinesiology@gmail.com" className="inline-flex items-center text-dyad-accent hover:text-dyad-dark transition-colors font-semibold">
                <Mail className="h-5 w-5 mr-2" />
                daniele.kinesiology@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dyad-accent text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xl mb-8 opacity-90">
            I'd be honoured to work with you in Toorak.
          </p>
          <a href="/" className="text-dyad-background-soft hover:text-dyad-soft transition-colors font-semibold">
            ← Return to Home
          </a>
          <div className="mt-12 text-sm opacity-70">
            <p>© {new Date().getFullYear()} Resonance Kinesiology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookSession;