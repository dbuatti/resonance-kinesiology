"use client";

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dyad-background-soft p-6">
      <div className="max-w-md w-full text-center">
        <FadeIn direction="down">
          <span className="text-9xl font-serif text-dyad-accent/20 block mb-4">404</span>
          <h1 className="text-4xl font-serif text-dyad-dark mb-6">Page Not Found</h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            The page you are looking for might have been moved, deleted, or never existed. Let's get you back to a place of resonance.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="w-full sm:w-auto bg-dyad-dark hover:bg-dyad-accent text-white rounded-full px-8 h-12 font-bold transition-all">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto border-dyad-dark/20 text-dyad-dark hover:bg-dyad-dark hover:text-white rounded-full px-8 h-12 font-bold transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default NotFound;