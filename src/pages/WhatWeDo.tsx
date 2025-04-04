
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
                <p className="text-lg mb-8 animate-fade-in delay-200">
                  At Sharing is Caring, we believe in a holistic approach to community support. 
                  Our programs focus on three vulnerable groups: orphaned children, people with 
                  disabilities, and elderly grandparents who often serve as primary caregivers 
                  for orphaned children.
                </p>
                <CTAButton 
                  className="animate-fade-in delay-400"
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
        
        {/* SIC Beliefs Section */}
        <section className="py-20 bg-charity-blue/5">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Our Beliefs" 
              subtitle="The foundation of all we do"
              highlightText
              centered
              animate
            />
            
            <div className="max-w-3xl mx-auto mt-10 space-y-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-charity-blue">The Authority of God's Word</h3>
                <p>SIC believes in the authority of the word of God as our ultimate guide for faith and practice.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-charity-blue">The Holy Trinity</h3>
                <p>SIC Uganda believes in God the Father, God the Son, and God the Holy Spirit - the three persons of the divine Trinity.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-charity-blue">The Incarnation of Christ</h3>
                <p>SIC Uganda believes in the incarnation of Jesus Christ in human form to bring salvation to the world.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-charity-blue">Salvation by Grace</h3>
                <p>SIC Uganda believes in salvation by grace through faith in Jesus Christ.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision Section */}
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
                  title="Our Vision" 
                  subtitle="Creating sustainable change"
                  highlightText
                  animate
                />
                
                <div className="mt-6">
                  <p className="text-lg mb-6">
                    <span className="font-semibold text-charity-blue">SIC Vision:</span> Showing compassion to the poor and needy people to make them self-sustainable persons.
                  </p>
                  <p className="mb-6">
                    We believe that true transformation comes not just from providing aid, but from empowering individuals and communities to build their own sustainable futures. Our approach is holistic, addressing immediate needs while developing long-term solutions.
                  </p>
                  <p className="mb-8">
                    Through education, healthcare, economic empowerment, and spiritual nurturing, we aim to break the cycle of poverty and create lasting positive change.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link to="/donate">
                    <CTAButton>Support Our Vision</CTAButton>
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
