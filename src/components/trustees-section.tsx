
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";

interface Trustee {
  id: string;
  name: string;
  position: string;
  story: string;
  image: string;
}

const trustees: Trustee[] = [
  {
    id: "Nabulime Sandra",
    name: "Nabulime Sandra",
    position: "Founder & President",
    story: "Sandra founded SIC in 2024 with a vision to support orphaned children in her community. Having witnessed the struggles of vulnerable children firsthand, she is dedicated to creating positive change in their lives.",
    image: "https://i.imgur.com/MxqOAxA.jpeg"
  }
];

export function TrusteesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Our Founder" 
          subtitle="The vision behind SIC's mission"
          centered
          highlightText
          animate
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          {trustees.map(trustee => (
            <Card key={trustee.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center p-6">
                <div className="relative h-[400px] overflow-hidden rounded-xl">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-charity-blue">{trustee.name}</h3>
                  <p className="text-lg font-semibold text-charity-dark/70">{trustee.position}</p>
                  <div className="h-1 w-24 bg-charity-gold"></div>
                  <p className="text-charity-dark/90 leading-relaxed">{trustee.story}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
