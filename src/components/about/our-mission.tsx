
import { SectionTitle } from "@/components/ui/section-title";
import { Heart, BookOpen, Users, Home } from "lucide-react";

export function OurMission() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle 
              title="Our Mission" 
              subtitle="Empowering the vulnerable through sustainable solutions"
              highlightText
              animate
              className="mb-8"
            />
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-charity-blue/10 p-3 rounded-full mr-4">
                  <Heart className="text-charity-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Compassionate Care</h3>
                  <p className="text-muted-foreground">
                    We provide loving support to orphans, disabled individuals, and elderly caregivers, 
                    ensuring they have access to basic needs and emotional support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-charity-gold/10 p-3 rounded-full mr-4">
                  <BookOpen className="text-charity-gold h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Education & Training</h3>
                  <p className="text-muted-foreground">
                    We believe education is the key to breaking the cycle of poverty. Our programs 
                    provide educational opportunities and skills training for sustainable livelihoods.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-charity-green/10 p-3 rounded-full mr-4">
                  <Users className="text-charity-green h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Community Development</h3>
                  <p className="text-muted-foreground">
                    We empower communities to become self-sufficient through sustainable initiatives 
                    and locally-led projects that address their unique challenges.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Home className="text-purple-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Safe Environments</h3>
                  <p className="text-muted-foreground">
                    We create safe, supportive environments where vulnerable individuals can heal, 
                    grow, and reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-[1.02] h-64">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                alt="Children at school" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-[1.02] h-64 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
                alt="Community support" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-[1.02] h-64">
              <img 
                src="https://images.unsplash.com/photo-1452960962994-acf4fd70b632?q=80&w=2070&auto=format&fit=crop" 
                alt="Elderly care" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-[1.02] h-64 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1559869823-b5e3407dfb01?q=80&w=1977&auto=format&fit=crop" 
                alt="Disabled support" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
