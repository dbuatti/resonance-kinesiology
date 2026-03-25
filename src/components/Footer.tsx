"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dyad-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-wider font-bold hover:text-dyad-soft transition-colors">
              ✦ Resonance Kinesiology
            </Link>
            <p className="text-white/70 leading-relaxed max-w-xs">
              Neuro-somatic support for nervous system regulation, emotional clarity, and authentic expression.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-dyad-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-dyad-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest text-dyad-soft">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/book-session" className="text-white/80 hover:text-white transition-colors">Session Options</Link></li>
              <li><a href="https://www.danielebuatti.com/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">My Music Work</a></li>
              <li><Link to="/onboarding-drafts" className="text-white/80 hover:text-white transition-colors">Client Resources</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest text-dyad-soft">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:daniele.kinesiology@gmail.com" className="flex items-center text-white/80 hover:text-white transition-colors group">
                <Mail className="h-5 w-5 mr-3 text-dyad-soft group-hover:text-white transition-colors" />
                daniele.kinesiology@gmail.com
              </a>
              <a href="tel:+61424174067" className="flex items-center text-white/80 hover:text-white transition-colors group">
                <Phone className="h-5 w-5 mr-3 text-dyad-soft group-hover:text-white transition-colors" />
                0424 174 067
              </a>
              <div className="flex items-start text-white/80">
                <MapPin className="h-5 w-5 mr-3 text-dyad-soft mt-1" />
                <span>Richmond & Toorak<br />Melbourne, VIC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} Resonance Kinesiology. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;