import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CTAButton } from "@/components/ui/cta-button";
import { Calendar } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  isLeft?: boolean;
}

const TimelineItem = ({ year, title, description, image, isLeft = false }: TimelineItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center relative my-8">
      {/* Line extending from the circle */}
      <div className="absolute block w-1 h-full bg-muted left-1/2 top-0 transform -translate-x-1/2 z-0"></div>

      {/* Circle and Year */}
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-charity-blue flex items-center justify-center text-charity-blue font-bold text-xl z-10">
        {year}
      </div>

      {/* Content Box */}
      <div className={`bg-white rounded-lg shadow-md p-4 md:p-6 w-full md:w-5/6 lg:w-3/4 mt-4 md:mt-0 ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
        <h3 className="text-lg font-semibold text-charity-blue mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {image && (
          <div className="mt-4">
            <img src={image} alt={title} className="rounded-md shadow-sm" />
          </div>
        )}
      </div>
    </div>
  );
};

const timelineData = [
  {
    year: "2010",
    title: "Foundation of SIC",
    description: "Sharing is Caring (SIC) is founded by a group of compassionate individuals with a shared vision of supporting vulnerable communities in Uganda.",
    image: "https://images.unsplash.com/photo-1503220317375-aa07e2709d3a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2012",
    title: "First Community Project",
    description: "SIC launches its first community project, focusing on providing education and healthcare support to orphaned children in rural areas.",
    image: "https://images.unsplash.com/photo-1505673544989-39f0e8514893?q=80&w=2070&auto=format&fit=crop",
    isLeft: true
  },
  {
    year: "2015",
    title: "Expansion of Programs",
    description: "SIC expands its programs to include vocational training and economic empowerment initiatives for people with disabilities.",
    image: "https://images.unsplash.com/photo-1543076659-93816600eb9e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2018",
    title: "Healthcare Initiatives",
    description: "SIC initiates healthcare programs for elderly grandparents who are caring for orphaned children, providing medical assistance and support.",
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=2070&auto=format&fit=crop",
    isLeft: true
  },
  {
    year: "2020",
    title: "Partnerships and Collaborations",
    description: "SIC establishes partnerships with local and international organizations to enhance its reach and impact in the communities it serves.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4ca6d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    year: "2023",
    title: "Sustainable Development Goals",
    description: "SIC aligns its programs with the United Nations Sustainable Development Goals, focusing on long-term, sustainable solutions for poverty alleviation.",
    image: "https://images.unsplash.com/photo-1598649967744-e46a1248c694?q=80&w=2070&auto=format&fit=crop",
    isLeft: true
  }
];

const HowWeStarted = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-charity-blue/10 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <SectionTitle 
                  title="How We Started" 
                  subtitle="The journey of SIC"
                  highlightText
                  animate
                />
                <p className="text-lg mb-8 animate-fade-in delay-200">
                  Founded with compassion and dedication, Sharing is Caring (SIC) began as a small 
                  initiative by passionate individuals who wanted to make a difference in the lives 
                  of vulnerable communities in Uganda.
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
                  <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg animate-fade-in delay-300">
                    <p className="font-bold text-charity-blue text-xl">Est. 2010</p>
                    <p className="text-muted-foreground">Uganda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section id="timeline" className="py-20">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Our Timeline" 
              subtitle="Milestones in our journey"
              highlightText
              centered
              animate
            />
            
            <div className="mt-12 relative">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
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
