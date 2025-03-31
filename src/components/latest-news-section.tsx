
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar, Clock } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Clean Water Project Completed in Kampala",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1555896917-d0a5f5a32186?q=80&w=2070&auto=format&fit=crop",
    summary: "SIC has successfully completed a new water borehole project providing clean water to over 500 families."
  },
  {
    id: 2,
    title: "Education Support for 120 Orphans",
    date: "August 3, 2023",
    image: "https://images.unsplash.com/photo-1534373722076-83c4990c34c1?q=80&w=2070&auto=format&fit=crop",
    summary: "Our latest education initiative has provided schooling materials and uniforms to 120 orphaned children."
  },
  {
    id: 3,
    title: "Medical Outreach for Elderly in Rural Communities",
    date: "October 12, 2023",
    image: "https://images.unsplash.com/photo-1536247412572-7aa586a94b86?q=80&w=2070&auto=format&fit=crop",
    summary: "Medical teams visited 5 rural villages to provide essential healthcare to elderly grandparents."
  },
  {
    id: 4,
    title: "Vocational Training for Disabled Youth",
    date: "February 8, 2024",
    image: "https://images.unsplash.com/photo-1522101076466-a379a545f2b3?q=80&w=2070&auto=format&fit=crop",
    summary: "25 disabled youth have completed vocational training in tailoring and crafts to help them earn a living."
  }
];

export function LatestNewsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto">
        <SectionTitle 
          title="Latest News" 
          subtitle="Stay updated with our recent activities"
          centered
          animate
        />
        
        <div className="mt-12 max-w-5xl mx-auto">
          <Carousel 
            className="w-full"
            onSelect={(api) => {
              if (api) {
                setActiveSlide(api.selectedScrollSnap());
              }
            }}
          >
            <CarouselContent>
              {newsItems.map((news) => (
                <CarouselItem key={news.id}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="h-64 w-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-3/5">
                        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                        <div className="flex items-center text-muted-foreground mb-4 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{news.date}</span>
                        </div>
                        <p className="mb-4">{news.summary}</p>
                        <a 
                          href="/news" 
                          className="inline-flex items-center text-charity-blue hover:text-charity-blue/80"
                        >
                          Read full story
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeSlide === index ? "bg-charity-blue w-6" : "bg-gray-300"
                  }`}
                  onClick={() => {
                    // This will be handled by the carousel's API
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselPrevious className="left-2 lg:-left-12" />
            <CarouselNext className="right-2 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
