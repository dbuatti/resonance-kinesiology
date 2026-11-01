"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const blogPosts = [
  {
    slug: "peace-framework-neuro-somatic-healing",
    title: "The PEACE Framework: A Clinical Approach to Somatic Healing",
    excerpt: "Understanding the five-phase model that guides every Resonance Kinesiology session: Preliminary Assessment, Ease the System, Align the Hierarchy, Correct, and Embed.",
    category: "Nervous System Regulation",
    date: "2025-01-15",
    readTime: "8 min read",
    featured: true
  },
  {
    slug: "polyvagal-theory-in-practice",
    title: "Polyvagal Theory in Practice: Why Safety Precedes Healing",
    excerpt: "How the vagus nerve governs your capacity for connection, regulation, and resilience — and why creating safety is the prerequisite for all therapeutic change.",
    category: "Nervous System Regulation",
    date: "2025-01-08",
    readTime: "12 min read",
    featured: false
  },
  {
    slug: "primitive-reflex-integration-adults",
    title: "Primitive Reflex Integration for Adults: Beyond Childhood Development",
    excerpt: "Retained primitive reflexes and their surprising impact on adult anxiety, posture, learning difficulties, and chronic tension patterns.",
    category: "Functional Neuro Health",
    date: "2025-01-02",
    readTime: "10 min read",
    featured: false
  },
  {
    slug: "root-beliefs-meridian-balancing",
    title: "Root Beliefs & Meridian Balancing: The Kinesiology Approach",
    excerpt: "How muscle monitoring accesses subconscious patterns that talk therapy alone can't reach — bridging Eastern meridian theory with Western neuroscience.",
    category: "Emotional Clearing",
    date: "2024-12-20",
    readTime: "9 min read",
    featured: false
  },
  {
    slug: "performance-anxiety-neuro-somatic",
    title: "Performance Anxiety: A Neuro-Somatic Perspective",
    excerpt: "Reframing stage fright as a nervous system state rather than a psychological flaw — and the specific protocols that shift it.",
    category: "Vocal & Performance",
    date: "2024-12-10",
    readTime: "11 min read",
    featured: false
  },
  {
    slug: "preparing-for-kinesiology-session",
    title: "Preparing for Your Session: Hydration, Clothing & Intention",
    excerpt: "Simple preparation steps that significantly improve session outcomes — what to do in the 24 hours before your appointment.",
    category: "Clinical Guidance",
    date: "2024-12-01",
    readTime: "3 min read",
    featured: false
  }
];

const Blog = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/book-session", label: "Session Options" },
    { href: "/resources", label: "Resources" },
    { href: "/blog", label: "Journal" },
    { href: MUSIC_WORK_URL, label: "My Music Work", isExternal: true },
    { href: "https://resonance-with-daniele.vercel.app/", label: "RESONANCE CHOIR", isExternal: true },
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900 selection:bg-dyad-accent/20">
      <Header links={navLinks} />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-dyad-sky/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(165,180,252,0.1),transparent_70%)] pointer-events-none"></div>
          <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <FadeIn>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Tag className="h-6 w-6 text-dyad-accent" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-dyad-dark/40">Resonance Journal</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-dyad-dark mb-4 tracking-tight">Neuro-Somatic Insights</h1>
              <p className="text-xl md:text-2xl text-dyad-accent mb-8 font-serif italic">
                Clinical perspectives on nervous system regulation, somatic healing, and the Functional Neuro Health model
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            {blogPosts.filter(p => p.featured).map((post, i) => (
              <FadeIn key={post.slug} direction="up" delay={0.2 * i}>
                <article className="bg-white rounded-[3rem] shadow-2xl border border-dyad-soft/10 overflow-hidden group hover:border-dyad-accent/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-[1.2fr_1fr] items-stretch">
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-dyad-accent bg-dyad-sky/20 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <time className="text-sm text-slate-500 font-light">
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif text-dyad-dark mb-6 leading-snug group-hover:text-dyad-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-xl text-slate-700 mb-8 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="border-dyad-dark/20 text-dyad-dark hover:bg-dyad-dark hover:text-white font-medium"
                        >
                          Read Article
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-dyad-sky/10 p-10 flex items-center justify-center border-l border-dyad-soft/20">
                      <div className="text-center">
                        <Calendar className="h-16 w-16 text-dyad-accent/30 mx-auto mb-4" />
                        <p className="text-dyad-accent/60 font-light italic">Coming Soon</p>
                        <p className="text-xs text-dyad-accent/40 mt-1">Full article publishing January 2025</p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="py-16 md:py-24 bg-dyad-sky/5">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-4">All Articles</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                Explore the growing collection of neuro-somatic resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(p => !p.featured).map((post, i) => (
                <FadeIn key={post.slug} direction="up" delay={0.1 * i}>
                  <article className="bg-white rounded-[2.5rem] shadow-xl border border-dyad-soft/10 overflow-hidden group hover:border-dyad-accent/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-dyad-accent bg-dyad-sky/20 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <time className="text-sm text-slate-500 font-light">
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif text-dyad-dark mb-4 leading-snug group-hover:text-dyad-accent transition-colors flex-1">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sm text-slate-400">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                        <Button 
                          variant="ghost"
                          size="sm"
                          className="text-dyad-accent hover:text-dyad-dark font-medium p-0 h-auto"
                        >
                          Read More
                          <ChevronRight className="ml-1 h-4 w-4 inline" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-dyad-dark py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Don't Miss an Article</h2>
              <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                New clinical guides, somatic protocols, and neuro-somatic insights delivered to your inbox.
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
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;