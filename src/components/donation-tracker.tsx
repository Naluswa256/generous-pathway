
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Calendar, Heart, Users } from "lucide-react";

interface DonationTrackerProps {
  currentAmount: number;
  goalAmount: number;
  donorsCount?: number;
  daysLeft?: number;
  className?: string;
}

export function DonationTracker({
  currentAmount,
  goalAmount,
  donorsCount,
  daysLeft,
  className
}: DonationTrackerProps) {
  // Calculate percentage
  const percentage = Math.min(Math.round((currentAmount / goalAmount) * 100), 100);
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-sm border border-border", className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Raised so far</p>
          <h3 className="text-3xl font-bold text-charity-blue">{formatCurrency(currentAmount)}</h3>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-sm text-muted-foreground mb-1">Our goal</p>
          <h3 className="text-2xl font-semibold">{formatCurrency(goalAmount)}</h3>
        </div>
      </div>
      
      <div className="mt-4 mb-6">
        <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-charity-blue rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="mt-2 text-right">
          <span className="text-sm font-medium text-charity-blue">{percentage}% Complete</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-between mt-4">
        {donorsCount && (
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-charity-blue/10 mr-3">
              <Users className="w-5 h-5 text-charity-blue" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Donors</p>
              <p className="font-semibold">{donorsCount}</p>
            </div>
          </div>
        )}
        
        {daysLeft && (
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-charity-gold/10 mr-3">
              <Calendar className="w-5 h-5 text-charity-gold" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Days Left</p>
              <p className="font-semibold">{daysLeft}</p>
            </div>
          </div>
        )}
        
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-charity-green/10 mr-3">
            <Heart className="w-5 h-5 text-charity-green" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Every donation helps</p>
            <p className="font-semibold">Thank you!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
