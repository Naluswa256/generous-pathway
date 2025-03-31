
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { CTAButton } from "@/components/ui/cta-button";
import { GalleryHorizontal, Video, Image } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("images");
  
  const images = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section className="section bg-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 animate-fade-in">
          <SectionTitle 
            title="See Our Impact" 
            subtitle="Videos and images showcasing our work"
            animate={true}
          />
          
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
              onClick={() => setActiveTab("images")}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeTab === "images" ? "bg-charity-blue text-white scale-105" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              <Image className="w-4 h-4 mr-2" />
              Images
            </button>
            <button 
              onClick={() => setActiveTab("videos")}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeTab === "videos" ? "bg-charity-blue text-white scale-105" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </button>
          </div>
        </div>
        
        {activeTab === "images" && (
          <div className="relative animate-fade-in">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-lg transition-all duration-300 group">
                        <img 
                          src={image} 
                          alt={`Gallery image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-4 transition-transform duration-300 hover:scale-110" />
                <CarouselNext className="-right-4 transition-transform duration-300 hover:scale-110" />
              </div>
            </Carousel>
          </div>
        )}
        
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border hover:border-charity-blue transition-all duration-300 hover:shadow-md group">
              <p className="text-muted-foreground group-hover:text-charity-blue transition-colors duration-300">Video content coming soon</p>
            </div>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border hover:border-charity-blue transition-all duration-300 hover:shadow-md group">
              <p className="text-muted-foreground group-hover:text-charity-blue transition-colors duration-300">Video content coming soon</p>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center animate-fade-in">
          <CTAButton size="lg" className="animate-pulse hover:animate-none transition-all duration-300 hover:scale-105">Donate Now</CTAButton>
        </div>
      </div>
    </section>
  );
}
