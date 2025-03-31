
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  accentColor?: string;
  iconColor?: string;
  animate?: boolean;
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  className,
  accentColor = "bg-charity-blue/10",
  iconColor = "text-charity-blue",
  animate = false
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl bg-white border border-border shadow-sm card-hover",
        animate && "animate-fade-in",
        className
      )}
    >
      <div className={cn("mb-4 p-3 rounded-full w-fit", accentColor)}>
        <Icon className={cn("w-6 h-6", iconColor)} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
