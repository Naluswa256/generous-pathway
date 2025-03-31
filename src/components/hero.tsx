
import { CTAButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  className?: string;
  showOverlay?: boolean;
}

export function Hero({ title, subtitle, imageUrl, className, showOverlay = false }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTextLoaded, setIsTextLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      
      setTimeout(() => {
        setIsTextLoaded(true);
      }, 400);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className={cn(
        "absolute inset-0 z-10 transition-opacity duration-1000",
        isLoaded ? "opacity-100" : "opacity-0",
        showOverlay 
          ? "bg-gradient-to-r from-charity-dark/90 to-charity-dark/70" 
          : "bg-gradient-to-r from-charity-dark/80 to-charity-dark/40"
      )} />
      <div 
        className="h-[650px] bg-cover bg-center transition-transform duration-1500 ease-out"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          transform: isLoaded ? "scale(1)" : "scale(1.05)" 
        }}
      />
      
      {/* Animated overlay image with improved animation */}
      <div className={cn(
        "absolute z-20 top-0 left-1/2 -translate-x-1/2 w-full max-w-xs md:max-w-md transition-all duration-1000 ease-out",
        isLoaded 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0"
      )}>
        <img 
          src="https://images.unsplash.com/photo-1548867476-3c764abbc55d?q=80&w=1974&auto=format&fit=crop" 
          alt="Ugandan child playing with water"
          className="w-full h-auto rounded-b-3xl shadow-2xl"
        />
      </div>
      
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="container mx-auto px-4">
          <div className={cn(
            "max-w-2xl mt-32 md:mt-48 transition-all duration-1000 ease-out",
            isTextLoaded 
              ? "translate-y-0 opacity-100" 
              : "translate-y-10 opacity-0"
          )}>
            <h1 className="text-white font-bold mb-4 md:text-5xl lg:text-6xl">{title}</h1>
            <p className="text-white/90 text-xl mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton size="lg" className="bg-charity-gold hover:bg-amber-600 transition-all duration-300 hover:scale-105">Make a Difference Today</CTAButton>
              <CTAButton size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 transition-all duration-300 hover:scale-105">Learn More</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
