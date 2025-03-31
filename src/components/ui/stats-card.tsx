
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  className?: string;
}

export function StatsCard({ title, value, description, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl bg-white border border-border shadow-sm card-hover",
        className
      )}
    >
      <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-charity-blue">{value}</p>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
