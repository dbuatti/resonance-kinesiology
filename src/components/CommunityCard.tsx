import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface CommunityCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: React.ReactNode;
  colorClass: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ title, description, link, linkText, icon, colorClass }) => {
  return (
    <div className={`p-8 rounded-3xl shadow-xl transition-all duration-300 ${colorClass} flex flex-col justify-between h-full`}>
      <div>
        <div className="mb-6 text-white">
          {icon}
        </div>
        <h3 className="text-4xl font-serif font-bold mb-4 text-white leading-snug">
          {title}
        </h3>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          {description}
        </p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg" 
          className="w-full bg-white text-dyad-dark hover:bg-gray-100 font-semibold shadow-md h-14"
        >
          {linkText}
          <ArrowRight className="ml-3 h-5 w-5" />
        </Button>
      </a>
    </div>
  );
};

export default CommunityCard;