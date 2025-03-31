
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { ImpactSection } from "@/components/impact-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { QuickLinksSection } from "@/components/quick-links-section";
import { GallerySection } from "@/components/gallery-section";
import { AboutSICSection } from "@/components/about-sic-section";
import { CTAButton } from "@/components/ui/cta-button";
import { DonationTracker } from "@/components/donation-tracker";

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
        
        <QuickLinksSection />
        
        <AboutSICSection />
        
        <MissionSection />
        
        <ImpactSection />
        
        <GallerySection />
        
        <section className="section">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in">
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
