
import { SectionTitle } from "@/components/ui/section-title";
import { FeatureCard } from "@/components/ui/feature-card";
import { Heart, Users, GraduationCap } from "lucide-react";

export function MissionSection() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Mission" 
          subtitle="Supporting communities through sustainable development and humanitarian aid"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <FeatureCard 
            icon={Heart}
            title="Humanitarian Aid" 
            description="Providing essential support to communities affected by crises through food, shelter, and healthcare initiatives." 
          />
          <FeatureCard 
            icon={Users}
            title="Community Building" 
            description="Strengthening local networks and empowering communities to create sustainable solutions to their challenges." 
          />
          <FeatureCard 
            icon={GraduationCap}
            title="Education & Training" 
            description="Offering learning opportunities and skill development programs to enable individuals to improve their lives." 
          />
        </div>
      </div>
    </section>
  );
}
