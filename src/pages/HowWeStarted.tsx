
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTAButton } from "@/components/ui/cta-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const HowWeStarted = () => {
  // Timeline data
  const timelineEvents = [
    {
      year: 2010,
      title: "The Beginning",
      description: "John Mukasa founds Sharing is Caring with a focus on supporting orphaned children in his hometown.",
      icon: <Heart className="h-6 w-6 text-white" />,
      color: "bg-charity-blue"
    },
    {
      year: 2012,
      title: "Expanding Our Mission",
      description: "SIC expands its mission to include support for people with disabilities after identifying critical gaps in services.",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "bg-charity-green"
    },
    {
      year: 2015,
      title: "First International Recognition",
      description: "SIC receives its first international humanitarian award for community development initiatives.",
      icon: <Award className="h-6 w-6 text-white" />,
      color: "bg-charity-gold"
    },
    {
      year: 2018,
      title: "Elderly Support Program",
      description: "Launch of dedicated program to support elderly grandparents who care for orphaned children.",
      icon: <Heart className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      year: 2020,
      title: "10 Year Anniversary",
      description: "Celebrating a decade of community impact with the opening of our first comprehensive community center.",
      icon: <Calendar className="h-6 w-6 text-white" />,
      color: "bg-charity-dark"
    },
    {
      year: 2023,
      title: "Looking to the Future",
      description: "Launch of new strategic plan focusing on sustainability and expanded community leadership.",
      icon: <Heart className="h-6 w-6 text-white" />,
      color: "bg-charity-blue"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-charity-dark/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle 
                  title="How We Started" 
                  subtitle="The journey of SIC from the beginning"
                  highlightText
                  animate
                />
                <p className="text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  The story of Sharing is Caring begins with one man's vision to create 
                  lasting change in his community. Born from personal experience and a deep 
                  commitment to serving the most vulnerable, our organization has grown from 
                  humble beginnings to a comprehensive support system for those in need.
                </p>
                <CTAButton 
                  className="animate-fade-in" 
                  style={{ animationDelay: '0.4s' }}
                  onClick={() => document.getElementById('founder-story')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Read Our Story
                </CTAButton>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop" 
                  alt="John Mukasa, Founder of SIC" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-charity-blue text-white p-4 rounded-lg shadow-lg transform rotate-3 z-10">
                  <p className="font-bold">Founded in 2010</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Founder's Story */}
        <section id="founder-story" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <SectionTitle 
                  title="Our Founder's Story" 
                  subtitle="A personal journey of compassion"
                  highlightText
                  animate
                />
                
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
                
                <Link to="/about">
                  <CTAButton variant="secondary" className="mt-4">
                    Learn More About Our Team
                  </CTAButton>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <Card className="overflow-hidden shadow-lg transform transition-all hover:scale-[1.02] h-64">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=2070&auto=format&fit=crop" 
                      alt="Early days of SIC" 
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
                <Card className="overflow-hidden shadow-lg transform transition-all hover:scale-[1.02] h-64 mt-8">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=2070&auto=format&fit=crop" 
                      alt="First SIC project" 
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Our Journey" 
              subtitle="Key milestones in the SIC story"
              highlightText
              centered
              animate
            />
            
            <div className="relative mt-16">
              {/* Connector Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
              
              {/* Timeline Events */}
              <div className="space-y-24">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Year Marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                      <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center`}>
                        {event.icon}
                      </div>
                      <div className="font-bold text-2xl mt-2">{event.year}</div>
                    </div>
                    
                    {/* Event Card */}
                    <div 
                      className={`w-5/12 bg-white p-6 rounded-lg shadow-md animate-fade-in ${
                        index % 2 === 0 ? "mr-auto" : "ml-auto"
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-charity-blue text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Join Us in Making a Difference</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
              Our journey continues with your support. Together, we can create a world where everyone 
              has the opportunity to thrive, regardless of their circumstances.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
              <Link to="/donate">
                <CTAButton className="bg-white text-charity-blue hover:bg-gray-100" size="lg">
                  Donate Now
                </CTAButton>
              </Link>
              <Link to="/contact">
                <CTAButton className="bg-transparent border-2 border-white hover:bg-white/10" variant="secondary" size="lg">
                  Get Involved
                </CTAButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HowWeStarted;
