
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ["All Categories"];

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="Latest News" 
            subtitle="Stay updated with our recent activities and developments"
            animate
          />
          
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="font-medium text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button 
                      key={category}
                      variant="ghost"
                      className="w-full justify-start text-left"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No News Yet</h3>
              <p className="text-muted-foreground mb-6">
                As a newly established organization, we are just beginning our journey. 
                Stay tuned for updates about our upcoming initiatives and activities.
              </p>
              <p className="text-sm text-muted-foreground">
                Check back soon for the latest news from Sharing is Caring.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default News;

