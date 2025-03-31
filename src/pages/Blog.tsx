
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          <SectionTitle 
            title="Blog" 
            subtitle="Stories and updates from our work around the world"
          />
          <p className="text-muted-foreground">
            This page is under development. Please check back later for our latest articles and stories.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
