"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Phone, Mail, User, Leaf } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="bg-white">
      {/* Header - Clean and simple */}
      <header className="container mx-auto px-6 py-6 max-w-6xl">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider text-gray-800">
            Daniele Buatti
          </h1>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 shadow-md text-lg px-6 py-3 rounded-full">
            Book Session
          </Button>
        </nav>
      </header>

      {/* Hero - Soft Background */}
      <section className="min-h-[80vh] bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center text-gray-900 relative overflow-hidden py-32">
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extralight mb-6 leading-tight tracking-tight">
            The Embodied Practitioner
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-10 text-gray-600">
            Kinesiology, Somatic Awareness, and Vocal Liberation.
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-700 leading-relaxed">
            I help people move from chaos to clarity, and from performance to presence.
          </p>
          <Button size="lg" className="text-xl px-12 py-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-xl h-16 rounded-full transition-all">
            Book 90min Session
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Philosophy/About - White Block with Image */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              {/* Practitioner Photo */}
              <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden border-8 border-white ring-4 ring-indigo-100">
                <img 
                  src="/daniele-buatti-practitioner.jpeg" 
                  alt="Daniele Buatti, The Embodied Practitioner" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-purple-500 mb-4">
                Core Philosophy
              </h3>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 leading-snug">
                The body doesn’t lie. It also doesn’t rush.
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                My approach is simple: slow down, get present, and listen to what the body is actually saying. I facilitate awareness, helping clients safely reconnect with their *felt sense* to make it comprehensible and grounded.
              </p>
              <p className="text-lg text-gray-600 mb-8 border-l-4 border-purple-300 pl-4 italic">
                "Healing comes from *being* in the body, not escaping it."
              </p>
              <Button variant="link" className="text-purple-600 text-lg p-0">
                Read Daniele's Full Profile →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Soft Accent Background */}
      <section className="bg-indigo-50 py-32 text-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-medium mb-6">What We Transform</h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              Working with the body’s natural intelligence to shift stress patterns and liberate expression.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-indigo-100 hover:shadow-xl transition-all group h-full flex flex-col rounded-xl">
              <CardContent className="p-8 h-full">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-all">
                  <Brain className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-3 group-hover:text-indigo-700">Nervous System Regulation</CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  Understanding threat responses, vagal patterns, and what your system is protecting you from. Moving toward grounded, internal safety.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-indigo-100 hover:shadow-xl transition-all group h-full flex flex-col rounded-xl">
              <CardContent className="p-8 h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-all">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-3 group-hover:text-purple-700">Emotional Clarity & Roots</CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  Tracing the root of emotional patterns, belief systems, and identity structures, and where they live in the body.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-indigo-100 hover:shadow-xl transition-all group h-full flex flex-col rounded-xl">
              <CardContent className="p-8 h-full">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-all">
                  <Mic2 className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-3 group-hover:text-pink-700">Vocal Liberation & Expression</CardTitle>
                <p className="text-gray-600 leading-relaxed">
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
          <h2 className="text-4xl font-medium text-center mb-4 text-gray-900">How We Work</h2>
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl border-2 border-indigo-300">
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

      {/* CTA / Contact - Strong Purple Block */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-24 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Ready for Clarity?</h3>
          <p className="text-xl mb-12 opacity-95 leading-relaxed max-w-2xl mx-auto">
            If you’re exhausted, overwhelmed, or disconnected from your body, this work meets you where you are.
          </p>
          
          <div className="space-y-4 mb-12 max-w-md mx-auto">
            <Button variant="ghost" size="lg" className="justify-start h-14 text-white hover:bg-white/20 w-full border border-white/30">
              <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
              daniele.kinesiology@gmail.com
            </Button>
            <Button variant="ghost" size="lg" className="justify-start h-14 text-white hover:bg-white/20 w-full border border-white/30">
              <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
              0424 174 067
            </Button>
          </div>
          <Button size="lg" className="text-xl px-12 py-8 h-16 bg-white text-purple-600 hover:bg-gray-50 font-semibold shadow-2xl w-full sm:w-auto rounded-full">
            Book Your 90-Minute Session
          </Button>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;