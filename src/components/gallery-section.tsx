
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { CTAButton } from "@/components/ui/cta-button";
import { GalleryHorizontal, Video, Image } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useHomePageData } from "@/services/home-service";

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("images");
  const { data } = useHomePageData();
  
  // Default fallback images in case API fails
  const fallbackItems = [
    {
      id: "fallback1",
      type: "image" as const,
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
      caption: "Community work",
      altText: "Community volunteers"
    },
    {
      id: "fallback2",
      type: "image" as const,
      url: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop",
      caption: "Educational support",
      altText: "Children in classroom"
    }
  ];

  // Filter items by type
  const galleryItems = data?.gallery?.items || fallbackItems;
  const images = galleryItems.filter(item => item.type === "image");
  const videos = galleryItems.filter(item => item.type === "video");

  // YouTube video ID extractor
  const getYoutubeId = (url: string): string => {
    if (!url) return "";
    
    // Extract from URL if not provided
    const videoItem = galleryItems.find(item => item.url === url && item.type === "video");
    if (videoItem && 'youtubeId' in videoItem && videoItem.youtubeId) {
      return videoItem.youtubeId;
    }
    
    // Extract from URL if not provided
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : "";
  };

  return (
    <section className="section bg-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 animate-fade-in">
          <SectionTitle 
            title={data?.gallery?.title || "See Our Impact"} 
            subtitle={data?.gallery?.subtitle || "Videos and images showcasing our work"}
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
            {images.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
                              <img 
                                src={image.url} 
                                alt={image.altText || `Gallery image ${index + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-3xl">
                            <div>
                              <img 
                                src={image.url} 
                                alt={image.altText || `Gallery image ${index + 1}`} 
                                className="w-full rounded-lg"
                              />
                              {image.caption && (
                                <p className="mt-2 text-center text-sm text-muted-foreground">{image.caption}</p>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="-left-4 transition-transform duration-300 hover:scale-110" />
                  <CarouselNext className="-right-4 transition-transform duration-300 hover:scale-110" />
                </div>
              </Carousel>
            ) : (
              <p className="text-center text-muted-foreground">No images available.</p>
            )}
          </div>
        )}
        
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <div className="aspect-video bg-muted rounded-xl border hover:border-charity-blue transition-all duration-300 hover:shadow-md group relative cursor-pointer overflow-hidden">
                      {'thumbnail' in video && video.thumbnail ? (
                        <>
                          <img 
                            src={video.thumbnail} 
                            alt={video.altText || `Video thumbnail ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                            <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                              <Video className="w-8 h-8 text-charity-blue ml-1" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Video className="w-12 h-12 text-muted-foreground group-hover:text-charity-blue transition-colors" />
                        </div>
                      )}
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl">
                    <div className="aspect-video w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${getYoutubeId(video.url)}`}
                        title={video.caption || `Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    {video.caption && (
                      <p className="mt-2 text-center text-sm text-muted-foreground">{video.caption}</p>
                    )}
                  </DialogContent>
                </Dialog>
              ))
            ) : (
              <div className="col-span-2 text-center text-muted-foreground">No videos available.</div>
            )}
          </div>
        )}
        
        <div className="mt-8 text-center animate-fade-in">
          <CTAButton asChild size="lg" className="animate-pulse hover:animate-none transition-all duration-300 hover:scale-105">
            <a href="/donate">Donate Now</a>
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
