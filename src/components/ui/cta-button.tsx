
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?: "default" | "secondary" | "accent";
  size?: "default" | "sm" | "lg";
  onClick?: () => void;
  asChild?: boolean; // Added this property to support the Slot pattern
}

export function CTAButton({
  children,
  className,
  showIcon = true,
  variant = "default",
  size = "default",
  onClick,
  asChild = false, // Default to false to maintain backward compatibility
}: CTAButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-charity-green hover:bg-green-600";
      case "accent":
        return "bg-charity-gold hover:bg-amber-600";
      default:
        return "bg-charity-blue hover:bg-blue-600";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "text-sm py-1 px-3";
      case "lg":
        return "text-lg py-3 px-6";
      default:
        return "py-2 px-4";
    }
  };

  const Comp = asChild ? Slot : Button;
  
  return (
    <Comp
      className={cn(
        getVariantStyles(),
        getSizeStyles(),
        "font-medium transition-all duration-200 rounded-md text-white flex items-center justify-center gap-2 shadow-sm hover:shadow",
        className
      )}
      onClick={onClick}
    >
      {!asChild && showIcon && <Heart className="w-4 h-4" />}
      {children}
    </Comp>
  );
}
