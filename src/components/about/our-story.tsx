
import { SectionTitle } from "@/components/ui/section-title";
import { CTAButton } from "@/components/ui/cta-button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Story" 
          subtitle="The journey that led to Sharing is Caring"
          highlightText
          centered
          animate
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-[1.01]">
              <img 
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop" 
                alt="John Mukasa, Founder of SIC" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-charity-blue text-white p-4 rounded-lg shadow-lg transform rotate-3 z-10">
              <p className="font-bold">Founded in 2010</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-charity-blue mb-6">Meet Our Founder</h3>
            <p className="mb-4 text-lg">
              John Mukasa founded Sharing is Caring (SIC) in 2010 after witnessing firsthand the struggles 
              faced by orphaned children in his hometown in Uganda. Having lost his own parents at a young age, 
              John understands the challenges these children face.
            </p>
            
            <ScrollArea className="h-64 rounded-md border p-4 mb-6">
              <div className="pr-4">
                <p className="mb-4">
                  "The idea for SIC came to me when I visited my childhood village after completing my education," 
                  John recalls. "I found many children without parents, being raised by elderly grandparents who 
                  were struggling to provide for them. Many of these children had lost their parents to HIV/AIDS, 
                  and their grandparents were doing their best with very limited resources."
                </p>
                
                <p className="mb-4">
                  What began as a small initiative to provide school supplies to orphaned children has grown into 
                  a comprehensive organization addressing multiple community needs. John's vision expanded when he 
                  observed that many people with disabilities in the community lacked access to assistive devices 
                  and opportunities for economic independence.
                </p>
                
                <p className="mb-4">
                  "I realized that sharing resources, knowledge, and opportunities could transform lives," says John. 
                  "That's where our name comes from—the simple but powerful principle that sharing is indeed caring."
                </p>
                
                <p>
                  Today, SIC works across Uganda, providing education for orphans, assistive devices and skills 
                  training for people with disabilities, and healthcare and support for elderly caregivers. 
                  John's leadership has been recognized nationally and internationally, earning him several 
                  humanitarian awards for his dedication to community service.
                </p>
              </div>
            </ScrollArea>
            
            <div className="mt-8">
              <CTAButton onClick={() => document.getElementById('ambassadors-trustees')?.scrollIntoView({ behavior: 'smooth' })}>
                Meet Our Ambassadors & Trustees
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
