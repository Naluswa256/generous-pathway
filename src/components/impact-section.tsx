
import { SectionTitle } from "@/components/ui/section-title";
import { StatsCard } from "@/components/ui/stats-card";

export function ImpactSection() {
  return (
    <section className="section bg-muted">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Impact" 
          subtitle="See how we're making a difference in communities worldwide"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            title="People Helped" 
            value="12,000+" 
            description="Individuals supported through our programs" 
          />
          <StatsCard 
            title="Communities Served" 
            value="56" 
            description="Locations where we've implemented projects" 
          />
          <StatsCard 
            title="Volunteer Hours" 
            value="45,000+" 
            description="Hours donated by our dedicated volunteers" 
          />
          <StatsCard 
            title="Projects Completed" 
            value="120+" 
            description="Successful initiatives across various sectors" 
          />
        </div>
      </div>
    </section>
  );
}
