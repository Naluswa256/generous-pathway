
import { SectionTitle } from "@/components/ui/section-title";
import { StatsCard } from "@/components/ui/stats-card";
import { Book, Heart, Home, Users } from "lucide-react";

export function ImpactSection() {
  return (
    <section className="section bg-muted">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Impact" 
          subtitle="Real change in the lives of vulnerable people across Uganda"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            title="Orphans Supported" 
            value="450+" 
            description="Children receiving education and care" 
            icon={Heart}
            accentColor="bg-charity-gold text-white"
          />
          <StatsCard 
            title="Disabled Individuals" 
            value="325" 
            description="People given tools and support for independence" 
            icon={Users}
            accentColor="bg-charity-green text-white"
          />
          <StatsCard 
            title="Elderly Grandparents" 
            value="175" 
            description="Seniors receiving healthcare and household support" 
            icon={Home}
            accentColor="bg-charity-blue text-white"
          />
          <StatsCard 
            title="Communities Served" 
            value="28" 
            description="Villages where we've implemented programs" 
            icon={Book}
            accentColor="bg-charity-dark text-white"
          />
        </div>
      </div>
    </section>
  );
}
