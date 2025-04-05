
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTAButton } from "@/components/ui/cta-button";
import { Calendar, Award, Heart, Flag, Users, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
  isLeft?: boolean;
  delay?: number;
}

const TimelineItem = ({ 
  year, 
  title, 
  description, 
  image, 
  icon, 
  color, 
  isLeft = false, 
  delay = 0 
}: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center my-16 md:my-24 transition-all duration-1000 relative",
      isVisible ? "opacity-100" : "opacity-0",
      isLeft ? "md:flex-row-reverse" : ""
    )}>
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2 z-0 hidden md:block" />
      
      {/* Year Circle with Icon */}
      <div className={cn(
        "flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg flex items-center justify-center font-bold text-xl z-10 transition-transform duration-500 relative",
        isVisible ? "scale-100" : "scale-90",
        color
      )}>
        <div className="absolute inset-0 rounded-full animate-pulse opacity-30 z-0" style={{ background: color }}></div>
        {icon}
        <span className="absolute -bottom-10 font-bold text-xl">{year}</span>
      </div>
      
      {/* Content Container */}
      <div className={cn(
        "w-full md:w-5/6 lg:w-3/4 mt-16 md:mt-0 transition-all duration-700 z-20",
        isVisible ? (isLeft ? "md:-translate-x-6" : "md:translate-x-6") : (isLeft ? "md:translate-x-0" : "md:translate-x-0"),
        isLeft ? "md:mr-6" : "md:ml-6"
      )}>
        {/* Card with Content */}
        <div className={cn(
          "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4",
          `border-t-[${color}]`
        )}>
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
            />
            <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-xl md:text-2xl z-20">{title}</h3>
          </div>
          
          {/* Description */}
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getTimelineData = () => [
  {
    year: "2010",
    title: "Foundation of SIC",
    description: "Sharing is Caring (SIC) was founded by John Mukasa, who witnessed firsthand the struggles faced by orphaned children in his hometown in Uganda. Having lost his own parents at a young age, John began with a small initiative to provide school supplies to orphaned children.",
    image: "https://images.unsplash.com/photo-1503220317375-aa07e2709d3a?q=80&w=2070&auto=format&fit=crop",
    icon: <Flag className="w-8 h-8 text-white z-20" />,
    color: "bg-gradient-to-br from-red-500 to-orange-500",
    delay: 0
  },
  {
    year: "2012",
    title: "First Community Project",
    description: "SIC launched its first major community project, focusing on providing education and healthcare support to orphaned children in rural areas. The project reached over 100 children, providing them with educational materials, health checkups, and mentorship programs.",
    image: "https://images.unsplash.com/photo-1505673544989-39f0e8514893?q=80&w=2070&auto=format&fit=crop",
    icon: <Heart className="w-8 h-8 text-white z-20" />,
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    isLeft: true,
    delay: 200
  },
  {
    year: "2015",
    title: "Expansion of Programs",
    description: "SIC expanded its programs to include vocational training and economic empowerment initiatives for people with disabilities. This expansion was driven by John's observation that many people with disabilities in the community lacked access to assistive devices and opportunities for economic independence.",
    image: "https://images.unsplash.com/photo-1543076659-93816600eb9e?q=80&w=2070&auto=format&fit=crop",
    icon: <Users className="w-8 h-8 text-white z-20" />,
    color: "bg-gradient-to-br from-charity-blue to-blue-600",
    delay: 400
  },
  {
    year: "2018",
    title: "Healthcare Initiatives",
    description: "SIC initiated healthcare programs for elderly grandparents who are caring for orphaned children, providing medical assistance and support. The healthcare program included regular check-ups, medication, and home-based care for the elderly caregivers who were the primary support for many orphaned children.",
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2070&auto=format&fit=crop",
    icon: <Calendar className="w-8 h-8 text-white z-20" />,
    color: "bg-gradient-to-br from-charity-green to-green-600",
    isLeft: true,
    delay: 600
  },
  {
    year: "2020",
    title: "Partnerships and Collaborations",
    description: "SIC established partnerships with local and international organizations to enhance its reach and impact in the communities it serves. These collaborations enabled SIC to scale its programs, reaching more beneficiaries and introducing innovative approaches to community support.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4ca6d8?q=80&w=2070&auto=format&fit=crop",
    icon: <Award className="w-8 h-8 text-white z-20" />,
    color: "bg-gradient-to-br from-charity-gold to-amber-600",
    delay: 800
  },
  {
    year: "2023",
    title: "Sustainable Development Goals",
    description: "SIC aligned its programs with the United Nations Sustainable Development Goals, focusing on long-term, sustainable solutions for poverty alleviation. This strategic alignment has guided SIC's program development, ensuring that initiatives contribute to global sustainable development objectives while addressing local needs.",
    image: "https://images.unsplash.com/photo-1598649967744-e46a1248c694?q=80&w=2070&auto=format&fit=crop",
    icon: <Lightbulb className="w-8 h-8 text-white z-20" />,
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    isLeft: true,
    delay: 1000
  }
];

const HowWeStarted = () => {
  const [scrolled, setScrolled] = useState(false);
  const timelineData = getTimelineData();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-charity-blue/10 py-20">
          <div 
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <SectionTitle 
                  title="How We Started" 
                  subtitle="The journey of Sharing is Caring"
                  highlightText
                  animate
                />
                <p className="text-lg mb-8 animate-fade-in delay-200">
                  Founded with compassion and dedication, Sharing is Caring (SIC) began as a small 
                  initiative by John Mukasa who wanted to make a difference in the lives 
                  of vulnerable communities in Uganda after witnessing firsthand the struggles 
                  faced by orphaned children.
                </p>
                <CTAButton 
                  className="animate-fade-in delay-400"
                  onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Our Journey
                </CTAButton>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?q=80&w=2070&auto=format&fit=crop" 
                    alt="SIC beginnings" 
                    className="rounded-lg shadow-lg w-full object-cover animate-fade-in"
                  />
                  <div className={cn(
                    "absolute -bottom-5 -left-5 p-4 rounded-lg shadow-lg transition-all duration-500",
                    scrolled ? "bg-white rotate-0" : "bg-charity-blue text-white rotate-[-5deg]"
                  )}>
                    <p className={cn(
                      "font-bold text-xl transition-colors duration-500",
                      scrolled ? "text-charity-blue" : "text-white"
                    )}>Est. 2010</p>
                    <p className="text-muted-foreground">Uganda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section id="timeline" className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50 z-0"
          ></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle 
              title="Our Journey Through Time" 
              subtitle="The story of growth and impact"
              highlightText
              centered
              animate
              className="mb-16"
            />
            
            <div className="relative mt-24">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
              
              {/* Final 'Today' marker */}
              <div className="flex justify-center items-center mt-16">
                <div className="bg-gradient-to-r from-charity-blue via-charity-green to-charity-gold text-white px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold">Today & Beyond</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-charity-blue to-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be part of our journey as we continue to grow and expand our impact. 
              Together, we can create a better future for vulnerable communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton 
                asChild
                variant="accent" 
                className="bg-white text-charity-blue hover:bg-gray-100"
              >
                <a href="/donate">Support Our Mission</a>
              </CTAButton>
              <CTAButton 
                asChild
                variant="secondary"
                className="bg-charity-gold hover:bg-amber-500"
              >
                <a href="/contact">Get Involved</a>
              </CTAButton>
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
