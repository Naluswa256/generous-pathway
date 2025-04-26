import { SectionTitle } from "@/components/ui/section-title";

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-charity-blue/10 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            title="About Sharing is Caring" 
            subtitle="Beginning our journey to transform lives through compassion and sustainable initiatives"
            highlightText
            centered
            animate
            className="mb-8"
          />
          
          <p className="text-lg mb-6 leading-relaxed animate-fade-in delay-300">
            At SIC, we've just begun our mission to create positive change in our community. 
            Founded in 2024, we're taking our first steps towards supporting those who need it most, 
            starting with orphaned children in our local community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="text-charity-blue text-4xl font-bold mb-2">1</div>
              <div className="text-gray-600">Month of Service</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="text-charity-blue text-4xl font-bold mb-2">20</div>
              <div className="text-gray-600">Children To Support</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="text-charity-blue text-4xl font-bold mb-2">1</div>
              <div className="text-gray-600">Community Project</div>
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
