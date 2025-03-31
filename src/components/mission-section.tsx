
import { SectionTitle } from "@/components/ui/section-title";
import { FeatureCard } from "@/components/ui/feature-card";
import { GraduationCap, HandHeart, Heart, Home, Utensils } from "lucide-react";

export function MissionSection() {
  return (
    <section className="section bg-gradient-to-b from-white to-muted/50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Mission" 
          subtitle="We believe in empowering the most vulnerable through sustainable solutions and compassionate care"
          centered={true}
          highlightText={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <FeatureCard 
            icon={Heart}
            title="Care for Orphans" 
            description="Providing housing, education, healthcare, and emotional support to children who have lost their parents." 
            accentColor="bg-charity-gold/10"
            iconColor="text-charity-gold"
          />
          <FeatureCard 
            icon={HandHeart}
            title="Empower the Disabled" 
            description="Creating opportunities through adaptive equipment, therapy, and skills training for people with disabilities." 
            accentColor="bg-charity-green/10"
            iconColor="text-charity-green"
          />
          <FeatureCard 
            icon={Home}
            title="Support Elderly Caregivers" 
            description="Helping grandparents who are raising orphaned grandchildren with resources, healthcare, and community support." 
            accentColor="bg-charity-blue/10"
            iconColor="text-charity-blue"
          />
        </div>
      </div>
    </section>
  );
}
