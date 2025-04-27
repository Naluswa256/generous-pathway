
import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DonateSection } from "@/components/donate-section";
import { ImpactSection } from "@/components/impact-section";
import { ImpactStories } from "@/components/donate/impact-stories";
import { DonationImpactGallery } from "@/components/donate/donation-impact-gallery";
import { DonationUsageChart } from "@/components/donate/donation-usage-chart";
import { DonationImpactCounter } from "@/components/donate/donation-impact-counter";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTAButton } from "@/components/ui/cta-button";
import { Heart, ChevronDown } from "lucide-react";

const Donate = () => {
  const scrollToPayment = () => {
    document.getElementById('donate-now-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Parallax Effect */}
        <div className="relative overflow-hidden bg-charity-dark text-white">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80')] bg-cover bg-center"
            style={{
              transform: "scale(1.1)",
              backgroundAttachment: "fixed"
            }}
          ></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Be Part of Our Beginning</h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in">Join us in taking the first steps towards transforming lives in Uganda</p>
              
              <div className="mt-10 animate-fade-in">
                <CTAButton 
                  variant="accent" 
                  size="lg" 
                  onClick={scrollToPayment}
                  className="text-lg py-6 px-10"
                >
                  Make a Donation Now
                </CTAButton>
              </div>
              
              <div className="mt-16 animate-bounce-slow">
                <button 
                  onClick={() => document.getElementById('impact-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-white flex flex-col items-center transition-colors"
                  aria-label="Scroll to see impact"
                >
                  <span className="mb-2">See Our Vision</span>
                  <ChevronDown className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Impact Metrics Section */}
        <div id="impact-section">
          <ImpactSection />
        </div>
        
        {/* Dynamic Impact Counter */}
        <DonationImpactCounter />
        
        {/* Impact Stories */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Our Vision for Change</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              See how your support will help transform lives in our community
            </p>
            
            <ImpactStories />
          </div>
        </section>
        
        {/* Impact Gallery - Photos and Videos */}
        <DonationImpactGallery />
        
        {/* Donation Usage Chart */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">How We Will Use Your Donation</h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We are committed to transparent and effective use of your generous contributions.
            </p>
            
            <DonationUsageChart />
            
            <div className="mt-12 flex justify-center">
              <CTAButton 
                variant="default" 
                showIcon={false}
                onClick={scrollToPayment}
              >
                Make Your Impact Today
              </CTAButton>
            </div>
          </div>
        </section>
        
        {/* Donation Form Section */}
        <div id="donate-now-section">
          <DonateSection />
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Donate;
