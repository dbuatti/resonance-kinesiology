"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart, Mic2, Leaf, BookOpen, Search, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const resources = [
  {
    category: "Nervous System Regulation",
    icon: Brain,
    color: "text-dyad-accent",
    bgColor: "bg-dyad-sky/10",
    items: [
      {
        title: "The PEACE Framework: A Clinical Approach to Somatic Healing",
        description: "Understanding the five-phase model: Preliminary Assessment, Ease the System, Align the Hierarchy, Correct, Embed.",
        type: "Guide",
        readTime: "8 min",
        href: "#peace-framework"
      },
      {
        title: "Polyvagal Theory in Practice: Why Safety Precedes Healing",
        description: "How the vagus nerve governs your capacity for connection, regulation, and resilience.",
        type: "Article",
        readTime: "12 min",
        href: "#polyvagal"
      },
      {
        title: "Primitive Reflex Integration for Adults",
        description: "Retained reflexes and their impact on anxiety, posture, learning, and chronic tension.",
        type: "Guide",
        readTime: "10 min",
        href: "#primitive-reflexes"
      }
    ]
  },
  {
    category: "Emotional & Somatic Clearing",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    items: [
      {
        title: "Root Beliefs & Meridian Balancing: The Kinesiology Approach",
        description: "How muscle monitoring accesses subconscious patterns that talk therapy alone can't reach.",
        type: "Article",
        readTime: "9 min",
        href: "#root-beliefs"
      },
      {
        title: "Emotional Clearing Protocols for Chronic Stress",
        description: "Step-by-step somatic techniques for releasing stored emotional charge from the body.",
        type: "Protocol",
        readTime: "15 min",
        href: "#emotional-clearing"
      }
    ]
  },
  {
    category: "Vocal & Performance Freedom",
    icon: Mic2,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    items: [
      {
        title: "The Diaphragm-Vagus Connection: Breath as Regulation",
        description: "Why singers and speakers need nervous system regulation, not just technique.",
        type: "Article",
        readTime: "7 min",
        href: "#diaphragm-vagus"
      },
      {
        title: "Performance Anxiety: A Neuro-Somatic Perspective",
        description: "Reframing stage fright as a nervous system state — and how to shift it.",
        type: "Guide",
        readTime: "11 min",
        href: "#performance-anxiety"
      }
    ]
  },
  {
    category: "Clinical Resources",
    icon: BookOpen,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    items: [
      {
        title: "FNH Neuro-Health Assessment: What to Expect",
        description: "Complete walkthrough of the 60-minute clinical study session: cranial nerves, reflexes, neurological pathways.",
        type: "Guide",
        readTime: "6 min",
        href: "#fnh-assessment"
      },
      {
        title: "Preparing for Your Session: Hydration, Clothing & Intention",
        description: "Simple preparation steps that significantly improve session outcomes.",
        type: "Checklist",
        readTime: "3 min",
        href: "#preparation"
      },
      {
        title: "Post-Session Integration: The 30-Minute Rule",
        description: "Why the time after your session matters as much as the session itself.",
        type: "Protocol",
        readTime: "5 min",
        href: "#integration"
      }
    ]
  }
];

const Resources = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/book-session", label: "Session Options" },
    { href: "/resources", label: "Resources" },
    { href: "/blog", label: "Journal" },
    { href: MUSIC_WORK_URL, label: "My Music Work", isExternal: true },
    { href: "https://resonance-with-daniele.vercel.app/", label: "RESONANCE CHOIR", isExternal: true },
  ];

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900 selection:bg-dyad-accent/20">
      <Header links={navLinks} />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-dyad-sky/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(165,180,252,0.1),transparent_70%)] pointer-events-none"></div>
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-4 tracking-tight">Resources & Learning</h1>
              <p className="text-xl md:text-2xl text-dyad-accent mb-8 font-serif italic">
                Clinical guides, somatic protocols, and neuro-somatic education
              </p>
              <div className="bg-white/60 backdrop-blur-md border border-dyad-soft/20 p-8 md:p-10 rounded-[2.5rem] max-w-3xl mx-auto shadow-xl">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                  Resources to deepen your understanding of neuro-somatic work, nervous system regulation, 
                  and the Functional Neuro Health model. Written for clients, practitioners, and curious minds.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((category, catIndex) => (
                <FadeIn key={category.category} direction="up" delay={0.1 * catIndex}>
                  <div className={`${category.bgColor} rounded-[2.5rem] p-8 border border-dyad-soft/20 h-full flex flex-col`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`h-12 w-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                        <category.icon className={`h-7 w-7 ${category.color}`} />
                      </div>
                      <h2 className="text-xl font-serif text-dyad-dark font-bold">{category.category}</h2>
                    </div>
                    <div className="space-y-5 flex-1">
                      {category.items.map((item, itemIndex) => (
                        <div key={item.title} className="group bg-white/50 rounded-xl p-5 border border-dyad-soft/10 transition-all hover:border-dyad-accent/30 hover:shadow-lg">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <span className={`text-xs font-bold uppercase tracking-wider ${category.color}`}>
                              {item.type}
                            </span>
                            <span className="text-xs text-slate-400 font-mono whitespace-nowrap">
                              {item.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-dyad-dark mb-2 group-hover:text-dyad-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className={`text-left p-0 h-auto font-medium ${category.color} hover:text-dyad-dark`}
                          >
                            Read More
                            <ChevronRight className="ml-1 h-4 w-4 inline" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter/CTA Section */}
        <section className="bg-dyad-dark py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <FadeIn>
              <Leaf className="h-10 w-10 text-dyad-accent mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Stay Connected</h2>
              <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Receive new resources, session availability updates, and neuro-somatic insights directly to your inbox.
                No spam — just valuable content once or twice a month.
              </p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-dyad-accent focus:bg-white/20 transition-all"
                  aria-label="Email address"
                />
                <Button 
                  size="lg" 
                  className="bg-dyad-accent hover:bg-white hover:text-dyad-dark text-white font-bold px-8 h-14 rounded-full transition-all"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-white/30 mt-4">By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.</p>
            </FadeIn>
          </div>
        </section>

        {/* Search/FAQ Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <FadeIn>
              <div className="text-center mb-12">
                <Search className="h-10 w-10 text-dyad-accent mx-auto mb-4" />
                <h2 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-4">Common Questions</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                  Quick answers to the most frequent questions about neuro-somatic kinesiology and FNH.
                </p>
              </div>
              <div className="bg-dyad-background-soft p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-dyad-soft/20">
                <div className="space-y-6">
                  {[
                    {
                      q: "What is the difference between Kinesiology and FNH?",
                      a: "Both use muscle monitoring as biofeedback. Kinesiology works with meridians and emotional blocks. FNH (Functional Neuro Health) interprets responses through a functional neurology lens — assessing neurological pathways, cranial nerves, and primitive reflexes."
                    },
                    {
                      q: "How many sessions will I need?",
                      a: "Many feel a shift after one session. Deep neurological repatterning typically unfolds over 3-5 sessions. We'll discuss a plan during your first meeting."
                    },
                    {
                      q: "Do you offer online sessions?",
                      a: "Currently, sessions are in-person at 685 Toorak Rd, Toorak VIC 3144. The hands-on nature of neurological assessment requires physical presence."
                    },
                    {
                      q: "Is this covered by private health insurance?",
                      a: "Some funds cover kinesiology under 'Natural Therapies' or 'Remedial Massage' extras. Check your policy and ask for a receipt with provider number."
                    }
                  ].map((faq, i) => (
                    <details key={i} className="group bg-white rounded-xl border border-dyad-soft/20 overflow-hidden">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-dyad-dark hover:bg-dyad-soft/30 transition-colors">
                        {faq.q}
                        <ChevronRight className="h-5 w-5 text-dyad-accent transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                      </summary>
                      <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <a href="/book-session#faq" className="text-dyad-accent hover:text-dyad-dark font-semibold underline underline-offset-4">
                    View all FAQs on the Session Options page →
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

export default Resources;