
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";
import { Play, Quote } from "lucide-react";
import { useState } from "react";
import { useHomePageData } from "@/services/home-service";

interface BaseTestimonialProps {
  id: string;
  author: string;
  position?: string;
  imageUrl?: string;
  className?: string;
  type: "text" | "video";
}

interface TextTestimonialProps extends BaseTestimonialProps {
  type: "text";
  quote: string;
}

interface VideoTestimonialProps extends BaseTestimonialProps {
  type: "video";
  videoUrl: string;
  youtubeId?: string;
}

type TestimonialProps = TextTestimonialProps | VideoTestimonialProps;

function Testimonial(props: TestimonialProps) {
  const { author, position, imageUrl, className, type } = props;
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };
  
  return (
    <div className={cn(
      "flex flex-col p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300", 
      className
    )}>
      <div className="mb-4">
        <Quote className="h-8 w-8 text-charity-blue/30" />
      </div>
      
      {type === "text" ? (
        <p className="italic text-lg mb-6">{props.quote}</p>
      ) : (
        <div className="mb-6 relative">
          {!videoPlaying ? (
            <div 
              className="aspect-video bg-muted rounded-lg overflow-hidden relative cursor-pointer group"
              onClick={handlePlayVideo}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="bg-white/90 rounded-full p-3 transform transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 text-charity-blue fill-charity-blue" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={`https://img.youtube.com/vi/${props.youtubeId || getYoutubeId(props.videoUrl)}/mqdefault.jpg`}
                  alt={`Video thumbnail for ${author}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${props.youtubeId || getYoutubeId(props.videoUrl)}?autoplay=1`}
                title={`Testimonial from ${author}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-auto flex items-center">
        {imageUrl && <img src={imageUrl} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />}
        <div>
          <h4 className="font-semibold">{author}</h4>
          {position && <p className="text-sm text-muted-foreground">{position}</p>}
        </div>
      </div>
    </div>
  );
}

// YouTube video ID extractor - similar to the one in gallery-section
function getYoutubeId(url: string): string {
  if (!url) return "";
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : "";
}

export function TestimonialSection() {
  const { data } = useHomePageData();
  
  // Default fallback testimonials in case API fails
  const fallbackTestimonials = [
    {
      id: "fallback1",
      type: "text" as const,
      quote: "The support has made a tremendous difference in our community.",
      author: "John Doe",
      position: "Community Member",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: "fallback2",
      type: "video" as const,
      author: "Jane Smith",
      position: "Program Recipient",
      imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
      youtubeId: "jfKfPfyJRdk"
    }
  ];

  const testimonials = data?.testimonials?.testimonials || fallbackTestimonials;

  return (
    <section className="section bg-gray-50 py-16">
      <div className="container mx-auto">
        <SectionTitle 
          title={data?.testimonials?.title || "Real Stories of Change"} 
          subtitle={data?.testimonials?.subtitle || "Hear from the people whose lives have been transformed by your support"}
          centered={true}
          animate={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-fade-in">
          {testimonials.map((testimonial) => {
            if (testimonial.type === "text" && testimonial.quote) {
              return (
                <Testimonial 
                  key={testimonial.id}
                  id={testimonial.id}
                  type="text"
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  imageUrl={testimonial.imageUrl}
                />
              );
            } else if (testimonial.type === "video" && "videoUrl" in testimonial) {
              return (
                <Testimonial 
                  key={testimonial.id}
                  id={testimonial.id}
                  type="video"
                  videoUrl={testimonial.videoUrl}
                  youtubeId={testimonial.youtubeId}
                  author={testimonial.author}
                  position={testimonial.position}
                  imageUrl={testimonial.imageUrl}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
