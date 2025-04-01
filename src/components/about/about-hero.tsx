
import { SectionTitle } from "@/components/ui/section-title";

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-charity-blue/10 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            title="About Sharing is Caring" 
            subtitle="Empowering communities and transforming lives through compassion and sustainable initiatives"
            highlightText
            centered
            animate
            className="mb-8"
          />
          
          <p className="text-lg mb-6 leading-relaxed animate-fade-in delay-300">
            At SIC, we believe in the power of community and shared responsibility. 
            Our organization was founded on the principle that by working together and 
            sharing our resources, knowledge, and compassion, we can create lasting change 
            in the lives of those who need it most.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="text-charity-blue text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="text-charity-blue text-4xl font-bold mb-2">10,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="text-charity-blue text-4xl font-bold mb-2">24</div>
              <div className="text-gray-600">Community Projects</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-charity-gold"></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-charity-blue"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-charity-green"></div>
      </div>
    </section>
  );
}
