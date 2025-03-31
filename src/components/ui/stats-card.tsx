
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  className?: string;
  icon?: LucideIcon;
  accentColor?: string;
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  className,
  icon: Icon,
  accentColor = "bg-charity-blue text-white"
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl bg-white border border-border shadow-sm card-hover",
        className
      )}
    >
      {Icon && (
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", accentColor)}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-charity-blue">{value}</p>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
