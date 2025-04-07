
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
import { LatestNewsSection } from "@/components/latest-news-section";
import { TrusteesSection } from "@/components/trustees-section";
import { DonateSection } from "@/components/donate-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHomePageData } from "@/services/home-service";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Alert } from "@/components/ui/alert";

const Index = () => {
  const [animationReady, setAnimationReady] = useState(false);
  const { data, isLoading, error, refetch } = useHomePageData();
  
  useEffect(() => {
    // Set animation ready after initial page load
    setTimeout(() => {
      setAnimationReady(true);
    }, 100);
  }, []);
  
  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
        <Footer />
      </div>
    );
  }
  
  // Handle error state
  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto py-16 px-4">
          <Alert variant="destructive" className="mb-4">
            Error loading content: {error.message}
          </Alert>
          <Button onClick={() => refetch()}>Try Again</Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // If data is not available, show placeholder
  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto py-16 px-4">
          <p>No content available.</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          imageUrl={data.hero.imageUrl}
          showOverlay={true}
        />
        
        <QuickLinksSection />
        
        <AboutSICSection />
        
        <MissionSection />
        
        <ImpactSection />
        
        <GallerySection />
        
        <LatestNewsSection />
        
        <TrusteesSection />
        
        <DonateSection />
        
        <TestimonialSection />
        
        <section className="section bg-charity-blue text-white text-center">
          <div className="container mx-auto py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              {data.callToAction.title}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
              {data.callToAction.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
              <CTAButton asChild className="bg-white text-charity-blue hover:bg-gray-100 transition-all duration-300 hover:scale-105" size="lg">
                <Link to={data.callToAction.primaryButton.link}>
                  {data.callToAction.primaryButton.text}
                </Link>
              </CTAButton>
              <CTAButton asChild className="bg-transparent border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105" variant="secondary" size="lg">
                <Link to={data.callToAction.secondaryButton.link}>
                  {data.callToAction.secondaryButton.text}
                </Link>
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

export default Index;
