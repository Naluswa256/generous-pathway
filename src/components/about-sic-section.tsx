
import { SectionTitle } from "@/components/ui/section-title";
import { CTAButton } from "@/components/ui/cta-button";

export function AboutSICSection() {
  return (
    <section className="section py-16">
      <div className="container mx-auto">
        <SectionTitle 
          title="About SIC (Sharing is Caring)" 
          subtitle="Our mission and values"
          centered={true}
          animate={true}
        />
        
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <blockquote className="p-6 bg-charity-blue/10 border-l-4 border-charity-blue rounded-r-lg italic text-lg">
            <p className="text-charity-dark">"And do not forget to do good and to share with others, for with such sacrifices God is pleased."</p>
            <footer className="mt-2 font-bold text-charity-blue">- Hebrews 13:16</footer>
          </blockquote>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="prose max-w-none">
            <p className="mb-4">
              Sharing is Caring (SIC) was founded on the belief that everyone deserves dignity, care, and opportunity. 
              Our journey began when we witnessed the struggles faced by orphaned children, people with disabilities, 
              and elderly grandparents in Uganda who had been forgotten by society.
            </p>
            <p className="mb-4">
              What started as a small community initiative has grown into a dedicated mission. We work tirelessly to 
              provide education for orphans, assistive devices and skills training for people with disabilities, 
              and healthcare and support for elderly grandparents, many of whom are raising their orphaned grandchildren.
            </p>
            <p>
              Our approach focuses on sustainable, community-driven solutions that empower individuals to build better 
              lives for themselves and their families. We believe in the power of compassion and sharing to create 
              lasting change in the lives of the most vulnerable.
            </p>
            
            <div className="mt-8">
              <CTAButton>Learn More About Us</CTAButton>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
              alt="Uganda orphans" 
              className="rounded-lg shadow-md w-full h-40 md:h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop" 
              alt="Disabled children" 
              className="rounded-lg shadow-md w-full h-40 md:h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1452960962994-acf4fd70b632?q=80&w=2070&auto=format&fit=crop" 
              alt="Elderly care" 
              className="rounded-lg shadow-md w-full h-40 md:h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
              alt="Community support" 
              className="rounded-lg shadow-md w-full h-40 md:h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
