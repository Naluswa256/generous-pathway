
import { SectionTitle } from "@/components/ui/section-title";
import { StatsCard } from "@/components/ui/stats-card";
import { Book, Heart, Home, Users } from "lucide-react";

export function ImpactSection() {
  return (
    <section className="section bg-muted">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Initial Impact" 
          subtitle="Taking our first steps in making a difference"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            title="Orphans Supported" 
            value="20" 
            description="Children receiving initial support and care" 
            icon={Heart}
            accentColor="bg-charity-gold text-white"
          />
          <StatsCard 
            title="Communities" 
            value="1" 
            description="Village where we've started our work" 
            icon={Home}
            accentColor="bg-charity-blue text-white"
          />
          <StatsCard 
            title="Volunteers" 
            value="5" 
            description="Dedicated team members helping our cause" 
            icon={Users}
            accentColor="bg-charity-green text-white"
          />
          <StatsCard 
            title="Programs" 
            value="2" 
            description="Initial support programs launched" 
            icon={Book}
            accentColor="bg-charity-dark text-white"
          />
        </div>
      </div>
    </section>
  );
}
