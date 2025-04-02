
import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/data/blog-data";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTAButton } from "@/components/ui/cta-button";
import { SearchIcon, Clock, Filter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(blogPosts.map(post => post.category)));
  }, []);
  
  // Filter blog posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = 
        searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory = 
        !selectedCategory || 
        post.category === selectedCategory;
        
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is already reactive due to the useMemo above
  };
  
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
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
              
              <Button 
                onClick={() => setSelectedCategory(null)} 
                variant={!selectedCategory ? "default" : "outline"}
                size="sm"
                className={!selectedCategory ? "bg-charity-blue hover:bg-blue-600" : ""}
              >
                All
              </Button>
              
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={selectedCategory === category ? "bg-charity-blue hover:bg-blue-600" : ""}
                >
                  {category}
                </Button>
              ))}
              
              {(searchQuery || selectedCategory) && (
                <Button 
                  onClick={clearFilters} 
                  variant="ghost" 
                  size="sm"
                  className="ml-auto text-muted-foreground"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
          
          {/* Featured post (if available) */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <BlogCard post={filteredPosts[0]} featured={true} />
            </div>
          )}
          
          {/* Blog grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredPosts.slice(1).map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <p className="mb-2">No articles found for your search query.</p>
              <p>Try using different keywords or clearing your filters.</p>
            </div>
          )}
          
          {/* CTA Section */}
          <div className="bg-charity-blue text-white rounded-lg p-8 shadow-lg mt-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Support Our Mission</h3>
              <p className="text-white/90 mb-6">
                Your donation helps us continue our work with orphans, disabled individuals, 
                and elderly grandparents in Uganda. Every contribution makes a difference.
              </p>
              <CTAButton 
                className="bg-white text-charity-blue hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                size="lg"
                onClick={() => window.location.href = "/donate"}
              >
                Donate Now
              </CTAButton>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
