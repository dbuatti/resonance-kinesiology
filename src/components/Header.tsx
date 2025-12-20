"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
  isPrimary?: boolean;
}

interface HeaderProps {
  links: NavLink[];
  className?: string;
  logoText?: string;
}

const Header: React.FC<HeaderProps> = ({ links, className, logoText = '✦ Resonance Kinesiology' }) => {
  return (
    <header className={cn("sticky top-0 z-30 bg-dyad-background-soft/95 backdrop-blur-sm border-b border-dyad-soft/30 shadow-sm", className)}>
      <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-colors">
          {logoText}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => {
            const buttonClasses = link.isPrimary
              ? "bg-dyad-accent hover:bg-dyad-dark text-dyad-background-soft shadow-md text-sm px-4 py-2 rounded-full transition-colors"
              : "bg-dyad-dark hover:bg-dyad-accent text-white shadow-md text-sm px-4 py-2 rounded-full transition-colors";

            if (link.isExternal) {
              return (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className={buttonClasses}>
                    {link.label}
                  </Button>
                </a>
              );
            }
            
            return (
              <Link key={index} to={link.href}>
                <Button size="sm" className={buttonClasses}>
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-dyad-dark" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-dyad-background-soft">
            <div className="flex flex-col space-y-4 pt-10">
              {links.map((link, index) => {
                if (link.isExternal) {
                  return (
                    <a 
                      key={index} 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant={link.isPrimary ? 'default' : 'secondary'} 
                        className="w-full justify-start text-lg h-12"
                      >
                        {link.label}
                      </Button>
                    </a>
                  );
                }

                return (
                  <Link key={index} to={link.href}>
                    <Button 
                      variant={link.isPrimary ? 'default' : 'secondary'} 
                      className="w-full justify-start text-lg h-12"
                    >
                      {link.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;