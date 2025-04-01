
import React from "react";
import { cn } from "@/lib/utils";

interface PaymentOptionProps {
  name: string;
  icon: React.ComponentType<any>;
  className?: string;
}

export function PaymentOption({ name, icon: Icon, className }: PaymentOptionProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Icon className={cn("w-10 h-10 mb-2", className)} />
      <span className="font-medium">{name}</span>
    </div>
  );
}
