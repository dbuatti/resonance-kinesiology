"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ArrowRight, Play, Mic2, Brain, Heart, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-6">
            Kinesiology & Embodiment
            <span className="block text-2xl md:text-3xl font-normal mt-4 text-gray-600 dark:text-gray-400">
              with Daniele Buatti
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Melbourne-based kinesiologist working at the intersection of <strong>nervous system regulation</strong>,{" "}
            <strong>emotional clarity</strong>, and <strong>authentic expression</strong>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            No fluff. No spiritual bypassing. Just the body, the brain, and the stories we’ve stored in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-xl px-8 py-6 bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 font-medium group">
              Book a Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-8 py-6 border-gray-300 dark:border-gray-700 font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-24" />

      {/* What I Do Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">What I Do</h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed">
            I help people shift out of overwhelm, stress patterns, and disconnection by working with the body’s natural intelligence.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Nervous system regulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Understanding threat responses, vagal patterns, and what your system is protecting you from.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Emotional clarity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Tracing the root of emotional patterns, belief systems, identity structures, and where they live in the body.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mic2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Voice & expression
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Supporting singers, performers, and everyday people to release tension and access grounded expression.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Body–mind integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Connecting physical symptoms, emotional states, and unconscious patterns so the body can reorganise naturally.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">90-Minute Sessions</h3>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              The work requires time, space, and depth. Sessions move through opening, activation, corrections, and integration.
            </p>
            <Button size="lg" className="text-xl px-12 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold shadow-lg">
              Book Now
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;