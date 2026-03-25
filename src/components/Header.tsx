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
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white/80 backdrop-blur-lg border-b border-dyad-soft/20 py-3 shadow-sm" 
        : "bg-transparent py-5",
      className
    )}>
      <nav className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-serif tracking-wider text-dyad-dark font-bold hover:text-dyad-accent transition-all duration-300">
          {logoText}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link, index) => {
            const active = isActive(link.href);
            
            if (link.isExternal) {
              return (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" className="rounded-full px-5 text-sm font-medium text-dyad-dark hover:bg-dyad-soft/30 transition-all">
                    {link.label}
                  </Button>
                </a>
              );
            }
            
            return (
              <Link key={index} to={link.href}>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "rounded-full px-5 text-sm font-medium transition-all",
                    active 
                      ? "bg-dyad-dark text-white hover:bg-dyad-dark/90" 
                      : "text-dyad-dark hover:bg-dyad-soft/30",
                    link.isPrimary && "bg-dyad-accent text-white hover:bg-dyad-accent/90 ml-2"
                  )}
                >
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-dyad-soft/30 rounded-full">
              <Menu className="h-6 w-6 text-dyad-dark" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-dyad-background-soft border-l border-dyad-soft/30 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-dyad-soft/20 flex justify-between items-center">
                <span className="font-serif font-bold text-dyad-dark text-lg">Menu</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-3">
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
                          className="w-full justify-start text-base h-12 rounded-xl border-dyad-soft/30 hover:bg-dyad-soft/10"
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
                            "w-full justify-start text-base h-12 rounded-xl border-dyad-soft/30",
                            active ? "bg-dyad-dark text-white" : "hover:bg-dyad-soft/10"
                          )}
                        >
                          {link.label}
                        </Button>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
              <div className="p-8 border-t border-dyad-soft/20 bg-dyad-soft/5">
                <p className="text-[10px] text-dyad-dark/40 uppercase tracking-[0.2em] font-bold mb-4">Contact</p>
                <p className="text-sm text-dyad-dark/80 mb-2">daniele.kinesiology@gmail.com</p>
                <p className="text-sm text-dyad-dark/80">0424 174 067</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;