
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";

const HowWeStarted = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="How We Started" 
            subtitle="The journey of SIC from the beginning"
          />
          <p className="text-muted-foreground">
            This page is under development. Please check back later for the full story of our organization.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowWeStarted;
