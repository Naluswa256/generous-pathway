
import { SectionTitle } from "@/components/ui/section-title";

export function TestimonialSection() {
  return (
    <section className="section bg-gray-50 py-16">
      <div className="container mx-auto">
        <SectionTitle 
          title="Community Voices" 
          subtitle="We look forward to sharing stories of impact as our journey begins"
          centered={true}
          animate={true}
        />
        
        <div className="text-center mt-8 max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            As we begin our work in the community, we'll soon be sharing testimonials 
            and stories from the lives we touch. Stay connected with us to hear these 
            inspiring stories of change and hope.
          </p>
        </div>
      </div>
    </section>
  );
}
