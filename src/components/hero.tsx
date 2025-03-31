
import { CTAButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  className?: string;
  showOverlay?: boolean;
}

export function Hero({ title, subtitle, imageUrl, className, showOverlay = false }: HeroProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className={cn(
        "absolute inset-0 z-10",
        showOverlay 
          ? "bg-gradient-to-r from-charity-dark/90 to-charity-dark/70" 
          : "bg-gradient-to-r from-charity-dark/80 to-charity-dark/40"
      )} />
      <div 
        className="h-[650px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-white font-bold mb-4 md:text-5xl lg:text-6xl">{title}</h1>
            <p className="text-white/90 text-xl mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton size="lg" className="bg-charity-gold hover:bg-amber-600">Make a Difference Today</CTAButton>
              <CTAButton size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50">Learn More</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
