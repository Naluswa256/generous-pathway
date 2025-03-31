
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlightText?: boolean;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = false, 
  className,
  highlightText = false
}: SectionTitleProps) {
  return (
    <div className={cn("mb-8 md:mb-12", centered && "text-center", className)}>
      <h2 className={cn("font-bold", highlightText && "text-charity-blue")}>{title}</h2>
      {subtitle && (
        <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
