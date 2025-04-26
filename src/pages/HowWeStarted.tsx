
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTAButton } from "@/components/ui/cta-button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HowWeStarted = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-charity-blue/10 py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <SectionTitle 
                  title="How We Started" 
                  subtitle="The beginning of our journey"
                  highlightText
                  animate
                />
                <p className="text-lg mb-8 animate-fade-in delay-200">
                  In 2024, Sharing is Caring (SIC) took its first steps. 
                  We are a newly established organization committed to making a difference 
                  in the lives of vulnerable communities in Uganda.
                </p>
                <CTAButton 
                  className="animate-fade-in delay-400"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                >
                  Our First Year
                </CTAButton>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?q=80&w=2070&auto=format&fit=crop" 
                    alt="SIC beginnings" 
                    className="rounded-lg shadow-lg w-full object-cover animate-fade-in"
                  />
                  <div className={cn(
                    "absolute -bottom-5 -left-5 p-4 rounded-lg shadow-lg transition-all duration-500",
                    scrolled ? "bg-white rotate-0" : "bg-charity-blue text-white rotate-[-5deg]"
                  )}>
                    <p className={cn(
                      "font-bold text-xl transition-colors duration-500",
                      scrolled ? "text-charity-blue" : "text-white"
                    )}>Est. 2024</p>
                    <p className="text-muted-foreground">Uganda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle 
              title="Our Journey" 
              subtitle="We are just beginning"
              highlightText
              centered
              animate
              className="mb-16"
            />
            
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground mb-8">
                As a newly established organization in 2024, we have laid the foundation 
                for our mission. Our first year is dedicated to understanding community needs, 
                building partnerships, and preparing for meaningful impact.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold mb-4 text-charity-blue">2024: Our First Steps</h3>
                <ul className="space-y-4 text-left">
                  <li>• Established the organization's core mission and values</li>
                  <li>• Initiated preliminary community assessments</li>
                  <li>• Started building our initial support network</li>
                  <li>• Preparing for our first community projects</li>
                </ul>
              </div>
              
              <p className="mt-8 text-muted-foreground italic">
                More details and milestones will be added as we grow and develop.
              </p>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-charity-blue to-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us at the Beginning</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We are excited about our journey and invite you to be part of our story 
              from the very beginning. Your support can help us make a meaningful impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton 
                asChild
                variant="accent" 
                className="bg-white text-charity-blue hover:bg-gray-100"
              >
                <a href="/donate">Support Our Mission</a>
              </CTAButton>
              <CTAButton 
                asChild
                variant="secondary"
                className="bg-charity-gold hover:bg-amber-500"
              >
                <a href="/contact">Get Involved</a>
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HowWeStarted;

