"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, User, Leaf } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Daniele Buatti
            </h1>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 shadow-md">
              Book 90min Session
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero - Purple Block */}
      <section className="min-h-[80vh] bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 flex items-center justify-center text-white relative overflow-hidden py-24">
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            The Embodied Practitioner
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-10 opacity-90">
            Kinesiology, Somatic Awareness, and Vocal Liberation.
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
            I help people move from chaos to clarity, and from performance to presence.
          </p>
          <Button size="lg" className="text-xl px-12 py-8 bg-white text-purple-700 hover:bg-gray-100 font-semibold shadow-2xl h-16 transition-all">
            Book 90min Session
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Philosophy/About - White Block */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              {/* Image Placeholder */}
              <div className="w-full h-96 bg-gray-100 rounded-3xl shadow-xl flex items-center justify-center border-4 border-gray-200">
                <div className="text-center text-gray-500">
                  <User className="h-24 w-24 mx-auto mb-4 text-gray-400" />
                  <p className="text-2xl font-medium">Practitioner Photo</p>
                  <p className="text-sm">300x400px recommended</p>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4">
                Core Philosophy
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-snug">
                The body doesn’t lie. It also doesn’t rush.
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                My approach is simple: slow down, get present, and listen to what the body is actually saying. I facilitate awareness, helping clients safely reconnect with their *felt sense* to make it comprehensible and grounded.
              </p>
              <p className="text-lg text-gray-600 mb-8 border-l-4 border-purple-400 pl-4 italic">
                "Healing comes from *being* in the body, not escaping it."
              </p>
              <Button variant="link" className="text-purple-600 text-lg p-0">
                Read Daniele's Full Profile →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Purple Block */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-32 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What We Transform</h2>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">
              Working with the body’s natural intelligence to shift stress patterns and liberate expression.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all group h-full flex flex-col">
              <CardContent className="p-8 h-full group-hover:text-purple-100">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all">
                  <Brain className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3 group-hover:underline">Nervous System Regulation</CardTitle>
                <p className="opacity-90 leading-relaxed">
                  Understanding threat responses, vagal patterns, and what your system is protecting you from. Moving toward grounded, internal safety.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all group h-full flex flex-col">
              <CardContent className="p-8 h-full group-hover:text-purple-100">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3 group-hover:underline">Emotional Clarity & Roots</CardTitle>
                <p className="opacity-90 leading-relaxed">
                  Tracing the root of emotional patterns, belief systems, and identity structures, and where they live in the body.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all group h-full flex flex-col">
              <CardContent className="p-8 h-full group-hover:text-purple-100">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all">
                  <Mic2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3 group-hover:underline">Vocal Liberation & Expression</CardTitle>
                <p className="opacity-90 leading-relaxed">
                  Transforming emotional suppression into vocal freedom. Tension release for singers, performers, and creatives blocked in expression.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Session Structure - White Block */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">How We Work</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            I only offer 90-minute sessions, blending kinesiology, somatic tracking, and neurological reflex work.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { title: "Opening & Goal Setting", desc: "Clear, grounded intention-setting, often expressed in emotional or somatic language." },
                { title: "Activation", desc: "Preparing the system by identifying patterns, themes, and emotional stress points." },
                { title: "Corrections", desc: "Using acupoints, neurological reflexes, and embodied awareness to shift the stress pattern." },
                { title: "Integration", desc: "Landing the work so the shift is felt, understood, and held in the body." },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xl border-2 border-purple-300">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-gray-600 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="hidden md:block">
              {/* Image Placeholder */}
              <div className="w-full h-full min-h-96 bg-purple-50 rounded-3xl shadow-inner flex items-center justify-center border-4 border-purple-100">
                <div className="text-center text-gray-500">
                  <Leaf className="h-24 w-24 mx-auto mb-4 text-purple-400" />
                  <p className="text-2xl font-medium">Session Flow Imagery</p>
                  <p className="text-sm">e.g., hands, nature, or subtle movement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact - Purple Block */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-24 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Ready for Clarity?</h3>
          <p className="text-xl mb-12 opacity-95 leading-relaxed max-w-2xl mx-auto">
            If you’re exhausted, overwhelmed, or disconnected from your body, this work meets you where you are.
          </p>
          
          <div className="space-y-4 mb-12 max-w-md mx-auto">
            <Button variant="ghost" size="lg" className="justify-start h-14 text-white hover:bg-white/20 w-full">
              <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
              daniele.kinesiology@gmail.com
            </Button>
            <Button variant="ghost" size="lg" className="justify-start h-14 text-white hover:bg-white/20 w-full">
              <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
              0424 174 067
            </Button>
          </div>
          <Button size="lg" className="text-xl px-12 py-8 h-16 bg-white text-purple-600 hover:bg-gray-50 font-semibold shadow-2xl w-full sm:w-auto">
            Book Your 90-Minute Session
          </Button>
        </div>
      </section>

      <MadeWithDyad />
    </>
  );
};

export default Index;