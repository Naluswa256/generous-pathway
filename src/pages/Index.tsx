
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { ImpactSection } from "@/components/impact-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionTitle } from "@/components/ui/section-title";
import { Calendar, Gift, GraduationCap, HandHeart, Heart, Home, Users } from "lucide-react";
import { DonationTracker } from "@/components/donation-tracker";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Empowering the Forgotten, One Life at a Time"
          subtitle="We're dedicated to supporting orphans, disabled individuals, and elderly grandparents in Uganda through community-driven initiatives and compassionate care."
          imageUrl="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          showOverlay={true}
        />
        
        <section className="section">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <SectionTitle 
                  title="Our Story" 
                  subtitle="How we began our journey to empower the vulnerable in Uganda"
                  highlightText={true}
                />
                <p className="mb-6">
                  Our journey began in a small village outside Kampala, where we witnessed firsthand 
                  the struggles faced by orphaned children, people with disabilities, and elderly 
                  grandparents raising their grandchildren after losing their own children.
                </p>
                <p className="mb-6">
                  What started as a small community initiative has grown into a dedicated mission to 
                  provide education, healthcare, and sustainable support to those who have been 
                  forgotten by society. Every day, we work alongside local communities to create 
                  lasting change and restore dignity to those who need it most.
                </p>
                <CTAButton variant="secondary">Read Our Full Story</CTAButton>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop" 
                  alt="Children in Uganda" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <MissionSection />
        
        <ImpactSection />
        
        <section className="section bg-muted">
          <div className="container mx-auto">
            <SectionTitle 
              title="How We Help" 
              subtitle="Our approach to creating sustainable change in vulnerable communities"
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
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Education for Orphans</h3>
                  <p className="text-white/80">Providing schooling, supplies, and mentorship for children who have lost their parents</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Healthcare Program"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charity-dark to-transparent p-6 flex flex-col justify-end">
                  <div className="mb-2 p-2 bg-charity-green/90 rounded-full w-10 h-10 flex items-center justify-center">
                    <HandHeart className="text-white" size={20} />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Support for Disabled</h3>
                  <p className="text-white/80">Assistive devices, therapy, and vocational training for people with disabilities</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1452960962994-acf4fd70b632?q=80&w=2070&auto=format&fit=crop" 
                  alt="Community Development Program"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charity-dark to-transparent p-6 flex flex-col justify-end">
                  <div className="mb-2 p-2 bg-charity-gold/90 rounded-full w-10 h-10 flex items-center justify-center">
                    <Home className="text-white" size={20} />
                  </div>
                  <h3 className="text-white text-xl font-semibold">Elderly Care</h3>
                  <p className="text-white/80">Supporting grandparents who are raising orphaned grandchildren with resources and care</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <SectionTitle 
                title="Help Us Reach Our Goal" 
                subtitle="Your contribution makes a real difference in the lives of those we serve"
                centered={true}
              />
              <DonationTracker 
                currentAmount={15000} 
                goalAmount={50000} 
                donorsCount={237}
                daysLeft={45}
              />
              <div className="mt-8 text-center">
                <CTAButton size="lg">Donate Now</CTAButton>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialSection />
        
        <section className="section bg-charity-blue text-white text-center">
          <div className="container mx-auto py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your support can transform lives in Uganda. Join us in our mission to empower the forgotten and create a better world for everyone.
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
