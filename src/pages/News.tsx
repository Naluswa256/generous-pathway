
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { Calendar } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
  category: string;
  slug: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Clean Water Project Completed in Kampala",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1555896917-d0a5f5a32186?q=80&w=2070&auto=format&fit=crop",
    summary: "SIC has successfully completed a new water borehole project providing clean water to over 500 families in the outskirts of Kampala. The project, which took three months to complete, will significantly reduce waterborne diseases in the community.",
    category: "Projects",
    slug: "clean-water-project-completed"
  },
  {
    id: 2,
    title: "Education Support for 120 Orphans",
    date: "August 3, 2023",
    image: "https://images.unsplash.com/photo-1534373722076-83c4990c34c1?q=80&w=2070&auto=format&fit=crop",
    summary: "Our latest education initiative has provided schooling materials and uniforms to 120 orphaned children in rural Uganda. These supplies will ensure they can continue their education despite challenging circumstances.",
    category: "Education",
    slug: "education-support-orphans"
  },
  {
    id: 3,
    title: "Medical Outreach for Elderly in Rural Communities",
    date: "October 12, 2023",
    image: "https://images.unsplash.com/photo-1536247412572-7aa586a94b86?q=80&w=2070&auto=format&fit=crop",
    summary: "Medical teams visited 5 rural villages to provide essential healthcare to elderly grandparents who often lack access to basic medical services. The team conducted health screenings and distributed needed medications.",
    category: "Healthcare",
    slug: "medical-outreach-elderly"
  },
  {
    id: 4,
    title: "Vocational Training for Disabled Youth",
    date: "February 8, 2024",
    image: "https://images.unsplash.com/photo-1522101076466-a379a545f2b3?q=80&w=2070&auto=format&fit=crop",
    summary: "25 disabled youth have completed vocational training in tailoring and crafts to help them earn a living. The six-month program equips them with practical skills for self-employment and financial independence.",
    category: "Vocational Training",
    slug: "vocational-training-disabled-youth"
  },
  {
    id: 5,
    title: "Annual Fundraising Gala Raises Record Amount",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    summary: "Our annual fundraising gala was a tremendous success, raising over $50,000 for our programs. The event featured performances by local artists and testimonials from people we've helped.",
    category: "Fundraising",
    slug: "annual-fundraising-gala"
  },
  {
    id: 6,
    title: "New Community Center Opens in Eastern Uganda",
    date: "April 20, 2024",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2074&auto=format&fit=crop",
    summary: "SIC has opened a new community center that will serve as a hub for education, healthcare, and vocational training. The center will benefit over 2,000 people in the surrounding villages.",
    category: "Infrastructure",
    slug: "new-community-center-opens"
  }
];

const News = () => {
  const categories = ["All Categories", ...Array.from(new Set(newsItems.map(item => item.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  const filteredNews = selectedCategory === "All Categories" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

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
                      variant={selectedCategory === category ? "default" : "ghost"}
                      className={`w-full justify-start text-left ${selectedCategory === category ? 'bg-charity-blue hover:bg-charity-blue/90' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                
                <h3 className="font-medium text-lg mb-4 mt-8">Recent Posts</h3>
                <div className="space-y-4">
                  {newsItems.slice(0, 3).map(item => (
                    <Link to={`/news/${item.slug}`} key={item.id} className="flex items-center gap-3 group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md transition-transform group-hover:scale-105"
                      />
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-charity-blue transition-colors">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No news found</h3>
                  <p className="text-muted-foreground">No news articles found in this category</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredNews.map((news) => (
                    <Link to={`/news/${news.slug}`} key={news.id} className="block">
                      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                          <span className="absolute top-4 right-4 bg-charity-blue text-white text-xs font-medium px-2.5 py-1 rounded">
                            {news.category}
                          </span>
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <div className="flex items-center text-muted-foreground mb-2 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{news.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 transition-colors duration-200 hover:text-charity-blue">{news.title}</h3>
                          <p className="mb-4 line-clamp-3 flex-grow">{news.summary}</p>
                          <div className="mt-auto">
                            <span className="inline-flex items-center text-charity-blue hover:text-charity-blue/80 group">
                              Read full story
                              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              
              {filteredNews.length > 6 && (
                <Pagination className="mt-12">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
