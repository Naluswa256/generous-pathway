
import { CTAButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  className?: string;
}

export function Hero({ title, subtitle, imageUrl, className }: HeroProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-charity-dark/80 to-charity-dark/40 z-10" />
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-white font-bold mb-4">{title}</h1>
            <p className="text-white/90 text-xl mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton size="lg">Donate Now</CTAButton>
              <CTAButton size="lg" variant="secondary">Learn More</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
