"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Brain, Heart, Zap, Wind, Shield, Sparkles } from 'lucide-react';

const states = [
  {
    id: 'overwhelmed',
    label: 'Overwhelmed',
    icon: Zap,
    color: 'bg-dyad-accent',
    tip: 'Your system is in high-alert. Try a "physiological sigh": inhale deeply through the nose, add a second short inhale at the top, then a long, slow exhale through the mouth.'
  },
  {
    id: 'numb',
    label: 'Numb / Shut Down',
    icon: Shield,
    color: 'bg-dyad-dark',
    tip: 'Your system is protecting you by disconnecting. Try "orienting": slowly look around the room and name three blue objects you see. Let your eyes rest on each one.'
  },
  {
    id: 'anxious',
    label: 'Anxious / Racing',
    icon: Wind,
    color: 'bg-dyad-soft',
    tip: 'There is excess energy in the system. Try "grounding": feel the weight of your feet on the floor. Imagine roots growing from your heels into the earth.'
  },
  {
    id: 'tense',
    label: 'Physically Tense',
    icon: Brain,
    color: 'bg-slate-400',
    tip: 'Your body is holding a pattern. Try "gentle humming": the vibration of your own voice can help stimulate the vagus nerve and signal safety to the brain.'
  }
];

const SomaticCheckIn = () => {
  const [selectedState, setSelectedState] = React.useState<typeof states[0] | null>(null);

  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-dyad-soft/10 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dyad-accent mb-4 block">Interactive Practice</span>
        <h3 className="text-3xl md:text-4xl font-serif text-dyad-dark mb-4">A Moment of Resonance</h3>
        <p className="text-lg text-slate-600 font-light">How does your nervous system feel right now?</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {states.map((state) => (
          <button
            key={state.id}
            onClick={() => setSelectedState(state)}
            className={`p-6 rounded-3xl border-2 transition-all duration-500 flex flex-col items-center text-center gap-4 group ${
              selectedState?.id === state.id 
                ? `${state.color} border-transparent text-white shadow-xl scale-105` 
                : 'border-dyad-soft/20 hover:border-dyad-accent/50 text-dyad-dark'
            }`}
          >
            <state.icon className={`h-8 w-8 ${selectedState?.id === state.id ? 'text-white' : 'text-dyad-accent group-hover:scale-110 transition-transform'}`} />
            <span className="font-bold text-sm">{state.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedState ? (
          <motion.div
            key={selectedState.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-dyad-sky/20 p-8 rounded-[2rem] border border-dyad-soft/30 text-center"
          >
            <Sparkles className="h-6 w-6 text-dyad-accent mx-auto mb-4" />
            <p className="text-xl text-dyad-dark leading-relaxed font-light italic">
              "{selectedState.tip}"
            </p>
            <div className="mt-8">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedState(null)}
                className="text-dyad-accent hover:text-dyad-dark font-bold"
              >
                Try another check-in
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="h-32 flex items-center justify-center border-2 border-dashed border-dyad-soft/20 rounded-[2rem]">
            <p className="text-slate-400 italic font-light">Select a state to receive a regulation tip...</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SomaticCheckIn;