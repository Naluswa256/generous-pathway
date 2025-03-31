
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <SectionTitle 
            title="See Our Impact" 
            subtitle="Videos and images showcasing our work"
            animate={true}
          />
          
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
              onClick={() => setActiveTab("images")}
              className={`flex items-center px-4 py-2 rounded-full ${activeTab === "images" ? "bg-charity-blue text-white" : "bg-gray-100"}`}
            >
              <Image className="w-4 h-4 mr-2" />
              Images
            </button>
            <button 
              onClick={() => setActiveTab("videos")}
              className={`flex items-center px-4 py-2 rounded-full ${activeTab === "videos" ? "bg-charity-blue text-white" : "bg-gray-100"}`}
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </button>
          </div>
        </div>
        
        {activeTab === "images" && (
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="rounded-xl overflow-hidden aspect-[4/3]">
                        <img 
                          src={image} 
                          alt={`Gallery image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </div>
            </Carousel>
          </div>
        )}
        
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border">
              <p className="text-muted-foreground">Video content coming soon</p>
            </div>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border">
              <p className="text-muted-foreground">Video content coming soon</p>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <CTAButton size="lg">Donate Now</CTAButton>
        </div>
      </div>
    </section>
  );
}
