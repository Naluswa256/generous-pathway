
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="Events" 
            subtitle="Join us at our upcoming events"
          />
          <p className="text-muted-foreground">
            This page is under development. Please check back later for information about our upcoming events.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
