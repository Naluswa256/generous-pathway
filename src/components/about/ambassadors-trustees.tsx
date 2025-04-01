
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define types for team members
interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
}

// Team members data
const ambassadors: TeamMember[] = [
  {
    id: "sarah-nakato",
    name: "Sarah Nakato",
    role: "Celebrity Ambassador",
    bio: "Sarah is an award-winning actress who has been supporting SIC since 2015. She first visited our projects in Uganda after hearing about our work through a friend. Deeply moved by the children she met, Sarah decided to use her platform to advocate for orphaned children. She has since hosted numerous fundraising galas and participated in our annual charity run. Sarah regularly visits our projects and shares her experiences with her audience, helping to raise awareness about our cause.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    socialLinks: [
      { platform: "Instagram", url: "#", icon: Instagram },
      { platform: "Twitter", url: "#", icon: Twitter },
      { platform: "Facebook", url: "#", icon: Facebook }
    ]
  },
  {
    id: "mark-johnson",
    name: "Mark Johnson",
    role: "Sports Ambassador",
    bio: "Mark is a professional football player who became involved with SIC after visiting Uganda as part of a sports outreach program. He was particularly touched by our work with disabled children, as his own sister has a physical disability. Mark now sponsors our annual sports camp for children with disabilities and has donated sporting equipment to several of our projects. He believes in the power of sports to build confidence and create inclusive communities.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    socialLinks: [
      { platform: "Instagram", url: "#", icon: Instagram },
      { platform: "Twitter", url: "#", icon: Twitter },
      { platform: "Linkedin", url: "#", icon: Linkedin }
    ]
  },
  {
    id: "amara-okafor",
    name: "Amara Okafor",
    role: "Business Ambassador",
    bio: "Amara is the CEO of a tech company who was introduced to SIC through a corporate social responsibility initiative. After seeing the impact of our skills training programs, she became passionate about creating economic opportunities for disabled adults. Amara has since implemented a hiring program at her company specifically for graduates of our vocational training center. She also provides mentorship to young entrepreneurs in our programs and has facilitated technology donations to our educational centers.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
    socialLinks: [
      { platform: "Linkedin", url: "#", icon: Linkedin },
      { platform: "Twitter", url: "#", icon: Twitter }
    ]
  }
];

const trustees: TeamMember[] = [
  {
    id: "john-mukasa",
    name: "John Mukasa",
    role: "Founder & President",
    bio: "John founded SIC in 2010 after witnessing the struggles of orphaned children in his hometown. With over 20 years of experience in community development, he leads the organization with vision and compassion. His personal experiences of being raised by his grandmother after losing his parents have shaped his understanding of the challenges faced by vulnerable children and their caregivers. John's leadership has been recognized with numerous humanitarian awards.",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=2021&auto=format&fit=crop",
    socialLinks: [
      { platform: "Instagram", url: "#", icon: Instagram },
      { platform: "Facebook", url: "#", icon: Facebook }
    ]
  },
  {
    id: "grace-nangobi",
    name: "Grace Nangobi",
    role: "Director of Programs",
    bio: "Grace has dedicated her life to serving the vulnerable in her community. With a background in social work and healthcare, she oversees all SIC programs ensuring they meet the needs of those we serve. Her passion for the elderly stems from caring for her grandmother, which inspired her to expand SIC's work to include elderly support services. Grace's innovative approaches have significantly improved the effectiveness of our programs.",
    image: "https://images.unsplash.com/photo-1559869823-b5e3407dfb01?q=80&w=1977&auto=format&fit=crop",
    socialLinks: [
      { platform: "Twitter", url: "#", icon: Twitter },
      { platform: "Linkedin", url: "#", icon: Linkedin }
    ]
  },
  {
    id: "david-okello",
    name: "David Okello",
    role: "Director of Finance",
    bio: "David joined SIC in 2015 after a successful career in banking. His expertise ensures that donor funds are managed with transparency and accountability. He believes that financial integrity is essential for building trust with supporters. Under his leadership, SIC has maintained excellent financial ratings and has implemented sustainable income projects that provide ongoing support for our programs. David's strategic thinking has been instrumental in the organization's growth.",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop",
    socialLinks: [
      { platform: "Linkedin", url: "#", icon: Linkedin }
    ]
  },
  {
    id: "lisa-nantume",
    name: "Lisa Nantume",
    role: "Director of Development",
    bio: "Lisa brings over 15 years of experience in international development to her role at SIC. Having worked with major global NGOs, she uses her expertise to expand SIC's reach and impact. Lisa has established key partnerships with international organizations that have significantly increased our capacity to serve vulnerable populations. Her passion for sustainable development ensures that all SIC programs build long-term resilience in the communities we serve.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1998&auto=format&fit=crop",
    socialLinks: [
      { platform: "Instagram", url: "#", icon: Instagram },
      { platform: "Twitter", url: "#", icon: Twitter },
      { platform: "Linkedin", url: "#", icon: Linkedin }
    ]
  }
];

export function AmbassadorsTrustees() {
  const [activeTab, setActiveTab] = useState("ambassadors");

  return (
    <section id="ambassadors-trustees" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Team" 
          subtitle="Meet the dedicated individuals behind our mission"
          highlightText
          centered
          animate
          className="mb-12"
        />
        
        <Tabs defaultValue="ambassadors" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 w-[400px]">
              <TabsTrigger value="ambassadors" className="text-lg">Ambassadors</TabsTrigger>
              <TabsTrigger value="trustees" className="text-lg">Trustees</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="ambassadors" className="animate-fade-in">
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {ambassadors.map((ambassador) => (
                  <CarouselItem key={ambassador.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                    <TeamMemberCard member={ambassador} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static mx-2 translate-y-0" />
                <CarouselNext className="relative static mx-2 translate-y-0" />
              </div>
            </Carousel>
          </TabsContent>
          
          <TabsContent value="trustees" className="animate-fade-in">
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {trustees.map((trustee) => (
                  <CarouselItem key={trustee.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                    <TeamMemberCard member={trustee} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static mx-2 translate-y-0" />
                <CarouselNext className="relative static mx-2 translate-y-0" />
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-bold text-xl">{member.name}</h3>
          <p className="text-white/80">{member.role}</p>
        </div>
      </div>
      
      <div className="p-4">
        <ScrollArea className="h-32 rounded mb-4">
          <p className="text-muted-foreground pr-4">{member.bio}</p>
        </ScrollArea>
        
        <div className="flex space-x-3 mt-4">
          {member.socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a 
                key={index} 
                href={link.url} 
                className="bg-muted hover:bg-muted/80 p-2 rounded-full text-charity-blue transition-colors"
                aria-label={`${member.name}'s ${link.platform}`}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
