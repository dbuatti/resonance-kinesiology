"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import Header from "@/components/Header";

const OnboardingDrafts = () => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const drafts = [
    {
      id: 'certified',
      title: 'Tier 1: Neuro-Somatic Kinesiology (Certified)',
      subject: 'Welcome to Resonance: Preparing for your Neuro-Somatic Session',
      body: `Hi [Client Name],

I’m so looking forward to our upcoming session. 

This 75-minute container is designed to give your nervous system the time and space it needs to settle, track, and repattern. We will be bridging the gap between traditional kinesiology and modern functional neurology to address the root of what you’re carrying.

How to prepare:
- Hydration: Please drink plenty of water before and after our session.
- Comfort: Wear comfortable clothing that allows for gentle movement.
- Integration: If possible, try to leave 15-30 minutes after our session for quiet integration before jumping back into your day.

Location: [Richmond/Toorak Address]
Time: [Date & Time]

If you have any questions before we meet, please don't hesitate to reach out.

Warmly,
Daniele`
    },
    {
      id: 'clinical',
      title: 'Tier 2: FNH Neuro-Health Assessment (Clinical Study)',
      subject: 'Welcome: Preparing for your FNH Neuro-Health Assessment',
      body: `Hi [Client Name],

Thank you for participating in this clinical case study session. As a Practitioner-in-Training of the Functional Neuro Health approach, I truly value your contribution to this research and practice.

In this 75-minute session, we will focus specifically on brain-based assessments, including cranial nerves and primitive reflex integration. This is a targeted approach to chronic pain, stress, and performance.

What to expect:
- We will be doing specific neurological testing (tracking eye movements, balance, and sensory responses).
- We will identify specific "drills" or corrections to help your brain feel safer and more regulated.
- As this is a clinical study session, I may take detailed notes on our findings for my case study logs (all data is anonymized).

Location: [Richmond/Toorak Address]
Time: [Date & Time]

I look forward to exploring your nervous system's unique map with you.

Warmly,
Daniele`
    },
    {
      id: 'community',
      title: 'Tier 3: Community — Free Access (Subsidised)',
      subject: 'Welcome to Resonance: Your Community Access Session',
      body: `Hi [Client Name],

I am so glad you’ve reached out and booked this community access session. It is a core part of my mission to ensure that neuro-somatic support is available to those who need it, regardless of current financial capacity.

This 75-minute session is identical in depth and care to my standard clinical offerings. We will follow the pace of your nervous system to find grounded safety and clarity.

How to prepare:
- Hydration: Drink plenty of water before we meet.
- Space: Ensure you have a quiet, comfortable environment (if online) or arrive a few minutes early to settle (if in-person).
- Intention: You don't need to have everything "figured out," but coming with a sense of what feels most present in your body right now is a great starting point.

Location: [Richmond/Toorak Address/Online Link]
Time: [Date & Time]

I’m honoured to work with you.

Warmly,
Daniele`
    }
  ];

  return (
    <div className="bg-dyad-background-soft min-h-screen text-slate-900">
      <Header links={[]} />
      
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-4">Onboarding Email Drafts</h1>
          <p className="text-lg text-slate-600">Templates for your three session tiers to ensure clients feel held and informed.</p>
        </div>

        <div className="space-y-12">
          {drafts.map((draft) => (
            <Card key={draft.id} className="border-dyad-soft/30 shadow-md overflow-hidden">
              <CardHeader className="bg-dyad-dark text-white">
                <CardTitle className="text-xl font-serif">{draft.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-dyad-accent block mb-1">Subject Line</span>
                  <div className="p-3 bg-slate-50 rounded border border-slate-200 font-medium flex justify-between items-center">
                    {draft.subject}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => copyToClipboard(draft.subject, `${draft.id}-subject`)}
                    >
                      {copiedId === `${draft.id}-subject` ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-dyad-accent block mb-1">Email Body</span>
                  <div className="p-4 bg-slate-50 rounded border border-slate-200 whitespace-pre-wrap text-slate-800 relative">
                    {draft.body}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(draft.body, `${draft.id}-body`)}
                    >
                      {copiedId === `${draft.id}-body` ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OnboardingDrafts;