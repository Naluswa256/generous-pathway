
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
    <section className="section">
      <div className="container mx-auto">
        <SectionTitle 
          title="Real Stories of Change" 
          subtitle="Hear from the people whose lives have been transformed by your support"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Testimonial 
            quote="Before the program, I had no hope for education. Now I am in school and dreaming of becoming a doctor to help others in my village."
            name="Esther Nakato"
            role="Orphan Program Beneficiary"
            imageUrl="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop"
          />
          <Testimonial 
            quote="The wheelchair and vocational training changed everything. I can now move independently and earn an income as a tailor to support my family."
            name="David Mutumba"
            role="Disability Support Program"
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
          />
          <Testimonial 
            quote="At my age, raising six grandchildren seemed impossible after losing my daughter. The monthly food support and school fees assistance has been life-saving."
            name="Sarah Namukasa"
            role="Elderly Support Program"
            imageUrl="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=150&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
