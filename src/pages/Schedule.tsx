"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";

const Schedule = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif text-dyad-dark mb-6">Book Your Session</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Select a time that works for you. All sessions are 90 minutes and held with the same depth of care and presence.
            </p>
          </div>

          {/* Acuity Scheduling Embed */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://app.acuityscheduling.com/schedule.php?owner=22925011"
              width="100%"
              height="1000"
              frameBorder="0"
              allow="payment"
              className="w-full"
            ></iframe>
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