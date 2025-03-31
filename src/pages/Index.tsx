
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { ImpactSection } from "@/components/impact-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionTitle } from "@/components/ui/section-title";
import { Calendar, Globe, HandHeart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Together We Can Make a Difference"
          subtitle="SIC is dedicated to empowering communities and creating sustainable change through humanitarian aid, education, and development initiatives."
          imageUrl="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop"
        />
        
        <MissionSection />
        
        <section className="section">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
                  alt="About SIC" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="animate-slide-up">
                <SectionTitle 
                  title="Who We Are" 
                  subtitle="A global charity organization dedicated to making a difference"
                />
                <p className="mb-6">
                  Founded in 2005, SIC has been at the forefront of humanitarian work for over 15 years. 
                  Our mission is to empower communities through sustainable development, education, and 
                  emergency relief programs. We believe in creating long-term solutions that address 
                  the root causes of poverty and inequality.
                </p>
                <p className="mb-6">
                  With operations in over 20 countries, our dedicated team works tirelessly to bring 
                  positive change to those who need it most. Through partnerships with local organizations, 
                  governments, and donors, we're able to maximize our impact and reach.
                </p>
                <CTAButton variant="secondary">Learn More About Us</CTAButton>
              </div>
            </div>
          </div>
        </section>
        
        <ImpactSection />
        
        <section className="section">
          <div className="container mx-auto">
            <SectionTitle 
              title="Our Programs" 
              subtitle="Discover how we're making an impact across different areas"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="relative rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop" 
                  alt="Education Program"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charity-dark to-transparent p-6 flex flex-col justify-end">
                  <div className="mb-2 p-2 bg-charity-blue/90 rounded-full w-10 h-10 flex items-center justify-center">
                    <Globe className="text-white" size={20} />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Education</h3>
                  <p className="text-white/80">Providing access to quality education for children and adults</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Healthcare Program"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charity-dark to-transparent p-6 flex flex-col justify-end">
                  <div className="mb-2 p-2 bg-charity-green/90 rounded-full w-10 h-10 flex items-center justify-center">
                    <HandHeart className="text-white" size={20} />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Healthcare</h3>
                  <p className="text-white/80">Improving access to essential health services and resources</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop" 
                  alt="Community Development Program"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charity-dark to-transparent p-6 flex flex-col justify-end">
                  <div className="mb-2 p-2 bg-charity-gold/90 rounded-full w-10 h-10 flex items-center justify-center">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Community Development</h3>
                  <p className="text-white/80">Building stronger, more resilient communities</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialSection />
        
        <section className="section bg-charity-blue text-white text-center">
          <div className="container mx-auto py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your support can transform lives and communities. Join us in our mission to create a better world for everyone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton className="bg-white text-charity-blue hover:bg-gray-100" size="lg">
                Donate Now
              </CTAButton>
              <CTAButton className="bg-transparent border-2 border-white hover:bg-white/10" variant="secondary" size="lg">
                Become a Volunteer
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
