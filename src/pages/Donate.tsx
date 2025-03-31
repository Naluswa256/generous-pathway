
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="Donate" 
            subtitle="Support our mission with your contribution"
          />
          <p className="text-muted-foreground">
            This page is under development. Please check back later for donation options.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
