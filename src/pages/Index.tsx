"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ArrowRight, Brain, Heart, Mic2, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Daniele Buatti
          </h1>
          <Button variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
            Book Session
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Kinesiology &<br/>
            <span className="text-2xl md:text-3xl font-normal text-gray-700 mt-4 block">
              Embodiment Practice
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Melbourne-based. Nervous system regulation, emotional clarity, authentic expression.
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
            No fluff. Just the body, the brain, and what’s stored in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
              Book 90min Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-300">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-24 bg-gray-200" />

      {/* Services */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">What I Do</h2>
          <p className="text-xl text-center text-gray-600 mb-20 max-w-2xl mx-auto">
            Working with the body’s natural intelligence to shift stress patterns.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all border-indigo-100 hover:border-indigo-200 bg-white/80">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-indigo-100 group-hover:bg-indigo-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <Brain className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Nervous System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Threat responses, vagal patterns, system protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-purple-100 hover:border-purple-200 bg-white/80">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 group-hover:bg-purple-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  Emotional Clarity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Root of patterns, beliefs, identity in the body.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-pink-100 hover:border-pink-200 bg-white/80">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-pink-100 group-hover:bg-pink-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <Mic2 className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                  Voice & Expression
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Tension release for singers, performers, creatives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-blue-100 hover:border-blue-200 bg-white/80 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Body-Mind Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Physical symptoms, emotions, unconscious patterns.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 mb-24">
        <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">90 Minute Sessions</h3>
            <p className="text-xl mb-10 opacity-95 leading-relaxed">
              Time, space, and depth. Opening → activation → corrections → integration.
            </p>
            <Button size="lg" className="text-lg px-12 py-8 bg-white text-indigo-600 hover:bg-gray-50 font-semibold shadow-lg w-full sm:w-auto">
              Book Now
            </Button>
          </CardContent>
        </Card>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;