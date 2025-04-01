
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface BaseTestimonialProps {
  name: string;
  role: string;
  imageUrl: string;
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
  thumbnailUrl: string;
}

type TestimonialProps = TextTestimonialProps | VideoTestimonialProps;

function Testimonial(props: TestimonialProps) {
  const { name, role, imageUrl, className, type } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const videoRef = useState<HTMLVideoElement | null>(null);
  
  const handlePlayPause = () => {
    if (type === "video" && videoRef[0]) {
      if (isPlaying) {
        videoRef[0].pause();
      } else {
        videoRef[0].play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleMuteToggle = () => {
    if (type === "video" && videoRef[0]) {
      videoRef[0].muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  return (
    <div className={cn(
      "flex flex-col p-6 rounded-xl bg-white border border-border shadow-sm card-hover", 
      className
    )}>
      <div className="mb-4">
        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-charity-blue/20">
          <path d="M13.05 36L0 24.3V18L12.6 0H21.6L13.5 22.5H22.5V36H13.05ZM35.55 36L22.5 24.3V18L35.1 0H44.1L36 22.5H45V36H35.55Z" fill="currentColor"/>
        </svg>
      </div>
      
      {type === "text" ? (
        <p className="italic text-lg mb-6">{props.quote}</p>
      ) : (
        <div className="mb-6 relative group">
          <div className="relative rounded-lg overflow-hidden">
            {!isPlaying && (
              <img 
                src={props.thumbnailUrl} 
                alt={`Video thumbnail for ${name}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            
            <video
              ref={(el) => videoRef[0] = el}
              src={props.videoUrl}
              className={cn(
                "w-full h-48 object-cover rounded-lg",
                !isPlaying && "hidden"
              )}
              onEnded={() => setIsPlaying(false)}
              loop={false}
              muted={isMuted}
            />
            
            {!isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
                aria-label={`Play testimonial video from ${name}`}
              >
                <div className="bg-white/90 rounded-full p-3 transform transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 text-charity-blue fill-charity-blue" />
                </div>
              </button>
            )}
            
            {isPlaying && (
              <div className="absolute bottom-2 right-2 flex gap-2">
                <button
                  onClick={handlePlayPause}
                  className="bg-black/60 rounded-full p-2 hover:bg-black/70 transition-colors"
                  aria-label="Pause video"
                >
                  <Play className="w-4 h-4 text-white" />
                </button>
                
                <button
                  onClick={handleMuteToggle}
                  className="bg-black/60 rounded-full p-2 hover:bg-black/70 transition-colors"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-auto flex items-center">
        <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <SectionTitle 
          title="Real Stories of Change" 
          subtitle="Hear from the children and people whose lives have been transformed by your support"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Testimonial 
            type="video"
            name="Joshua Kibuuka"
            role="Education Program Recipient"
            imageUrl="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop"
            videoUrl="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
            thumbnailUrl="https://images.unsplash.com/photo-1534373722076-83c4990c34c1?q=80&w=500&auto=format&fit=crop"
          />
          
          <Testimonial 
            type="text"
            quote="The wheelchair and vocational training changed everything. I can now move independently and earn an income as a tailor to support my family."
            name="David Mutumba"
            role="Disability Support Program"
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
          />
          
          <Testimonial 
            type="video"
            name="Sarah Namukasa"
            role="Elderly Support Program"
            imageUrl="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=150&auto=format&fit=crop"
            videoUrl="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
            thumbnailUrl="https://images.unsplash.com/photo-1536247412572-7aa586a94b86?q=80&w=500&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
