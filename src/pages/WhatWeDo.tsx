
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="What We Do" 
            subtitle="Our programs and initiatives"
          />
          <p className="text-muted-foreground">
            This page is under development. Please check back later for detailed information about our programs.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhatWeDo;
