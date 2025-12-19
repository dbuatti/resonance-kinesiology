"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Heart, Mic2, Play, Phone, Mail, User } from "lucide-react";

const BOOKING_URL = "https://danielebuatti.as.me/kinesiology";
const MUSIC_WORK_URL = "https://www.danielebuatti.com/";

const Index = () => {
  return (
    <>
      {/* Header - Added consistent navigation */}
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
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button 
                size="sm" 
                className="bg-dyad-accent hover:bg-dyad-dark text-dyad-background-soft shadow-md text-sm px-4 py-2 rounded-full transition-colors"
              >
                Book Session
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero - Purple background */}
      <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center text-white relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Kinesiology &<br className="hidden lg:block"/> 
              <span className="block text-3xl md:text-4xl font-light mt-4">Embodiment Practice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Melbourne-based. Nervous system regulation, emotional clarity, authentic expression.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-xl px-12 py-8 bg-white text-purple-600 hover:bg-gray-50 font-semibold shadow-2xl h-16">
                Book 90min Session
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* Hero image placeholder */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white/20 to-transparent flex items-end justify-center">
          <div className="w-full max-w-6xl h-64 bg-gradient-to-r from-purple-400/50 to-indigo-400/50 rounded-t-3xl shadow-2xl animate-pulse"></div>
        </div>
      </section>

      {/* Contact - White background */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Daniele Buatti
              </h1>
              <div className="space-y-4 text-xl text-gray-700">
                <p className="flex items-center gap-3">
                  <Mail className="h-8 w-8 text-purple-600" />
                  daniele.kinesiology@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-8 w-8 text-purple-600" />
                  0424 174 067
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              {/* Contact image placeholder */}
              <div className="w-full h-80 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl shadow-2xl border-4 border-purple-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <User className="h-24 w-24 mx-auto mb-4 text-purple-400" />
                  <p className="text-2xl font-medium">Photo</p>
                  <p className="text-sm">300x400px recommended</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Purple background */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-32 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What I Do</h2>
            <p className="text-2xl opacity-90 max-w-2xl mx-auto">
              Working with the body’s natural intelligence to shift stress patterns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all group h-64 flex flex-col">
              <CardContent className="flex flex-col justify-between p-8 h-full group-hover:text-purple-100">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all">
                  <Brain className="h-10 w-10" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold mb-4 group-hover:underline">Nervous System</CardTitle>
                  <p className="opacity-90 leading-relaxed">Threat responses, vagal patterns, system protection.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all group h-64 flex flex-col">
              <CardContent className="flex flex-col justify-between p-8 h-full group-hover:text-purple-100">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all">
                  <Heart className="h-10 w-10" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold mb-4 group-hover:underline">Emotional Clarity</CardTitle>
                  <p className="opacity-90 leading-relaxed">Root of patterns, beliefs, identity in the body.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all group h-64 flex flex-col">
              <CardContent className="flex flex-col justify-between p-8 h-full group-hover:text-purple-100">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all">
                  <Mic2 className="h-10 w-10" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold mb-4 group-hover:underline">Voice & Expression</CardTitle>
                  <p className="opacity-90 leading-relaxed">Tension release for singers, performers, creatives.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-all group h-64 flex flex-col">
              <CardContent className="flex flex-col justify-between p-8 h-full group-hover:text-purple-100">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all">
                  <Play className="h-10 w-10" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold mb-4 group-hover:underline">Body-Mind Integration</CardTitle>
                  <p className="opacity-90 leading-relaxed">Physical symptoms, emotions, unconscious patterns.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA - White background */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-12 lg:p-20 rounded-3xl shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-8">90 Minute Sessions</h3>
              <p className="text-xl mb-12 opacity-95 leading-relaxed max-w-2xl mx-auto">
                Time, space, and depth. Opening → activation → corrections → integration.
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
              <Button size="lg" className="text-xl px-12 py-8 h-16 bg-white text-purple-600 hover:bg-gray-50 font-semibold shadow-2xl w-full">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;