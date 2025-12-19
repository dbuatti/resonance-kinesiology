"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Schedule = () => {
  const [searchParams] = useSearchParams();
  const appointmentType = searchParams.get('type');

  // Get the appropriate iframe URL based on the appointment type
  const getIframeUrl = () => {
    switch(appointmentType) {
      case 'community-discounted':
        return "https://app.acuityscheduling.com/schedule.php?owner=22925011&appointmentType=23329090";
      case 'free-access':
        return "https://app.acuityscheduling.com/schedule.php?owner=22925011&appointmentType=86951880";
      case 'full-fee':
      default:
        return "https://app.acuityscheduling.com/schedule.php?owner=22925011&appointmentType=83873258";
    }
  };

  // Get the session description based on the appointment type
  const getSessionDescription = () => {
    switch(appointmentType) {
      case 'community-discounted':
        return {
          title: "Community Kinesiology – Discounted",
          description: "90-minute session at a reduced rate of $30 for those who cannot currently afford standard rates.",
          price: "$30"
        };
      case 'free-access':
        return {
          title: "Community Kinesiology – Free Access",
          description: "90-minute free session for those who would otherwise not be able to access this work.",
          price: "Free"
        };
      case 'full-fee':
      default:
        return {
          title: "Kinesiology & Energy Balancing",
          description: "90-minute full fee session at $100, the standard rate that sustains this work.",
          price: "$100"
        };
    }
  };

  const { title, description, price } = getSessionDescription();

  return (
    <div className="bg-dyad-background-soft min-h-screen text-dyad-dark">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-dyad-background-soft/95 backdrop-blur-sm border-b border-dyad-soft/30">
        <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
          <a href="/book-session" className="flex items-center text-dyad-accent hover:text-dyad-dark transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Session Options
          </a>
          <a href="/" className="text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-colors">
            ✦ Resonance Kinesiology
          </a>
          <div className="w-12"></div> {/* Spacer for balance */}
        </nav>
      </header>

      {/* Schedule Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-4">Book Your Session</h1>
            <h2 className="text-2xl md:text-3xl font-serif text-dyad-accent mb-4">{title}</h2>
            <p className="text-xl text-gray-700 mb-2">{price} · 90 minutes</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Acuity Scheduling Embed - Dynamic based on appointment type */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Iframe container with custom styling to crop the top */}
            <div className="acuity-iframe-container relative h-[1000px] overflow-hidden">
              <iframe
                src={getIframeUrl()}
                width="100%"
                height="1800" // Increased height to accommodate more cropping
                frameBorder="0"
                allow="payment"
                className="w-full absolute top-[-600px] left-0" // Changed to -800px for significant cropping
                style={{ transform: 'scale(1.0)' }} // Ensure proper scaling
              ></iframe>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif text-dyad-dark mb-6">Need Help Booking?</h3>
            <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
              If you have any questions about which session type is right for you or need assistance with booking, please don't hesitate to reach out.
            </p>
            <a href="mailto:daniele.kinesiology@gmail.com" className="inline-flex items-center text-dyad-accent hover:text-dyad-dark transition-colors font-semibold">
              <Mail className="h-5 w-5 mr-2" />
              daniele.kinesiology@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dyad-accent text-white py-16 mt-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xl mb-8 opacity-90">
            I look forward to working with you.
          </p>
          <a href="/book-session" className="text-dyad-background-soft hover:text-dyad-soft transition-colors font-semibold">
            ← Back to Session Options
          </a>
          <div className="mt-12 text-sm opacity-70">
            <p>© {new Date().getFullYear()} Resonance Kinesiology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Schedule;