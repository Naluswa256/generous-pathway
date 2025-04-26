
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, Filter } from "lucide-react";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-16 px-4">
          <SectionTitle 
            title="Latest Stories & Updates" 
            subtitle="News, insights and stories from our work empowering communities in Uganda"
            centered={true}
            animate={true}
          />
          
          {/* Search and filter section */}
          <div className="max-w-4xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" className="bg-charity-blue hover:bg-blue-600">Search</Button>
            </form>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center mr-2">
                <Filter className="w-4 h-4 mr-1 text-muted-foreground" />
                <span className="text-sm">Filter by:</span>
              </div>
            </div>
          </div>
          
          {/* No Blog Posts Section */}
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold mb-4">No Blog Posts Yet</h3>
            <p className="text-muted-foreground mb-6">
              We are just getting started and will be sharing our stories and insights soon. 
              Check back regularly for updates from Sharing is Caring.
            </p>
            <p className="text-sm text-muted-foreground">
              Our first blog posts will provide deeper insights into our mission and impact.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;

