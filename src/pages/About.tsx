
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="About Us" 
            subtitle="Learn more about our mission and impact"
          />
          <p className="text-muted-foreground">
            This page is under development. Please check back later for more information about SIC.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
