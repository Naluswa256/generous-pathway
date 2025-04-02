
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Heart, Briefcase, Utensils, School, Users, Heart as HeartIcon, Home } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { CTAButton } from "@/components/ui/cta-button";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-charity-blue/10 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <SectionTitle 
                  title="What We Do" 
                  subtitle="Our programs and initiatives"
                  highlightText
                  animate
                />
                <p className="text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  At Sharing is Caring, we believe in a holistic approach to community support. 
                  Our programs focus on three vulnerable groups: orphaned children, people with 
                  disabilities, and elderly grandparents who often serve as primary caregivers 
                  for orphaned children.
                </p>
                <CTAButton 
                  className="animate-fade-in" 
                  style={{ animationDelay: '0.4s' }}
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Programs
                </CTAButton>
              </div>
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-lg shadow-lg h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Children at school" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-lg h-64 mt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
                      alt="Community support" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section */}
        <section id="programs" className="py-20">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Our Programs" 
              subtitle="Transforming lives through comprehensive support"
              highlightText
              centered
              animate
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <FeatureCard 
                title="Child Education & Care"
                description="We provide educational support, healthcare, and emotional care for orphaned children to ensure they have the foundation for a bright future."
                icon={School}
                accentColor="bg-charity-blue/10"
                iconColor="text-charity-blue"
                animate
              />
              
              <FeatureCard 
                title="Disability Support"
                description="Our programs provide assistive devices, vocational training, and advocacy for people with disabilities to promote independence and inclusion."
                icon={Users}
                accentColor="bg-charity-gold/10"
                iconColor="text-charity-gold"
                animate
              />
              
              <FeatureCard 
                title="Elderly Care"
                description="We support elderly grandparents who care for orphaned children with healthcare, household assistance, and community connection programs."
                icon={Home}
                accentColor="bg-charity-green/10"
                iconColor="text-charity-green"
                animate
              />
              
              <FeatureCard 
                title="Community Health"
                description="Our health initiatives focus on preventative care, education, and access to medications for vulnerable community members."
                icon={HeartIcon}
                accentColor="bg-red-100"
                iconColor="text-red-500"
                animate
              />
              
              <FeatureCard 
                title="Skills Development"
                description="We provide vocational training and entrepreneurship support to help community members build sustainable livelihoods."
                icon={Briefcase}
                accentColor="bg-purple-100"
                iconColor="text-purple-500"
                animate
              />
              
              <FeatureCard 
                title="Food Security"
                description="Our agricultural training and food distribution programs ensure that vulnerable families have reliable access to nutritious food."
                icon={Utensils}
                accentColor="bg-amber-100"
                iconColor="text-amber-500"
                animate
              />
            </div>
          </div>
        </section>
        
        {/* Approach Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?q=80&w=2071&auto=format&fit=crop" 
                  alt="Community-based approach" 
                  className="rounded-lg shadow-lg animate-fade-in"
                />
              </div>
              
              <div>
                <SectionTitle 
                  title="Our Approach" 
                  subtitle="Community-centered and sustainable solutions"
                  highlightText
                  animate
                />
                
                <div className="space-y-6 mt-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-charity-blue/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-charity-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Community Leadership</h3>
                      <p className="text-muted-foreground">
                        We believe that lasting change comes from within communities. 
                        Our programs are developed with local input and led by community members.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-charity-gold/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-charity-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Holistic Support</h3>
                      <p className="text-muted-foreground">
                        We address multiple aspects of well-being including physical health, 
                        education, economic stability, and emotional support.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-charity-green/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-charity-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sustainable Impact</h3>
                      <p className="text-muted-foreground">
                        Our goal is to create programs that can eventually be sustained by the communities 
                        themselves, fostering independence rather than dependence.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/donate">
                    <CTAButton>Support Our Work</CTAButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WhatWeDo;
