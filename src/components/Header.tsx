"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
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
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={cn("sticky top-0 z-40 bg-dyad-background-soft/95 backdrop-blur-md border-b border-dyad-soft/30 shadow-sm", className)}>
      <nav className="container mx-auto px-6 py-4 max-w-6xl flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-all duration-300">
          {logoText}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {links.map((link, index) => {
            const active = isActive(link.href);
            
            const buttonClasses = cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
              link.isPrimary 
                ? "bg-dyad-accent hover:bg-dyad-dark text-white shadow-md hover:shadow-lg" 
                : active 
                  ? "bg-dyad-dark text-white shadow-inner" 
                  : "text-dyad-dark hover:bg-dyad-soft/50"
            );

            if (link.isExternal) {
              return (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" className={buttonClasses}>
                    {link.label}
                  </Button>
                </a>
              );
            }
            
            return (
              <Link key={index} to={link.href}>
                <Button variant={active ? "default" : "ghost"} className={buttonClasses}>
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-dyad-soft/30">
              <Menu className="h-6 w-6 text-dyad-dark" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-dyad-background-soft border-l border-dyad-soft/30 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-dyad-soft/20 flex justify-between items-center">
                <span className="font-serif font-bold text-dyad-dark">Menu</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {links.map((link, index) => {
                  const active = isActive(link.href);
                  
                  if (link.isExternal) {
                    return (
                      <a 
                        key={index} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-lg h-14 rounded-xl border-dyad-soft/30"
                        >
                          {link.label}
                        </Button>
                      </a>
                    );
                  }

                  return (
                    <SheetClose asChild key={index}>
                      <Link to={link.href} className="block">
                        <Button 
                          variant={active ? "default" : "outline"} 
                          className={cn(
                            "w-full justify-start text-lg h-14 rounded-xl border-dyad-soft/30",
                            active && "bg-dyad-dark text-white"
                          )}
                        >
                          {link.label}
                        </Button>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
              <div className="p-6 border-t border-dyad-soft/20 bg-dyad-soft/10">
                <p className="text-xs text-dyad-dark/50 uppercase tracking-widest font-bold mb-4">Contact</p>
                <p className="text-sm text-dyad-dark mb-2">daniele.kinesiology@gmail.com</p>
                <p className="text-sm text-dyad-dark">0424 174 067</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;