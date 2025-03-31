
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  className?: string;
}

function Testimonial({ quote, name, role, imageUrl, className }: TestimonialProps) {
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
      <p className="italic text-lg mb-6">{quote}</p>
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
    <section className="section bg-muted">
      <div className="container mx-auto">
        <SectionTitle 
          title="Stories of Change" 
          subtitle="Hear from those whose lives have been impacted by our work"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Testimonial 
            quote="SIC's education program gave me the skills I needed to secure a job and support my family. I'm forever grateful for their support."
            name="Sarah Johnson"
            role="Program Beneficiary"
            imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
          />
          <Testimonial 
            quote="Volunteering with SIC has been the most rewarding experience. The impact we're making in communities is truly life-changing."
            name="David Chen"
            role="Volunteer"
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
          />
          <Testimonial 
            quote="The community development project transformed our village. We now have clean water and better infrastructure thanks to SIC."
            name="Maria Rodriguez"
            role="Community Leader"
            imageUrl="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=150&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
