
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="Contact Us" 
            subtitle="Get in touch with our team"
          />
          <p className="text-muted-foreground">
            This page is under development. Please check back later for contact information.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
