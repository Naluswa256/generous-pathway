
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="Latest News" 
            subtitle="Stay updated with our latest developments"
          />
          <p className="text-muted-foreground">
            This page is under development. Please check back later for our latest news and updates.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
