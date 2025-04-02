
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { CTAButton } from "@/components/ui/cta-button";
import { AboutHero } from "@/components/about/about-hero";
import { OurStory } from "@/components/about/our-story";
import { OurMission } from "@/components/about/our-mission";
import { AmbassadorsTrustees } from "@/components/about/ambassadors-trustees";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AboutHero />
        <OurStory />
        <OurMission />
        <AmbassadorsTrustees />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
