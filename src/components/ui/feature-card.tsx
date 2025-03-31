
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl bg-white border border-border shadow-sm card-hover",
        className
      )}
    >
      <div className="mb-4 p-3 rounded-full bg-charity-blue/10 w-fit">
        <Icon className="w-6 h-6 text-charity-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
