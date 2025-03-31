
import { Book, GalleryHorizontal, Calendar, Video } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Link } from "react-router-dom";

export function QuickLinksSection() {
  const links = [
    { 
      title: "What We Do", 
      description: "Learn about our programs and how we're making an impact in the community.",
      icon: <HandHeart className="w-8 h-8 text-charity-gold" />,
      url: "/what-we-do" 
    },
    { 
      title: "Latest News", 
      description: "Stay updated with our recent activities and announcements.",
      icon: <Book className="w-8 h-8 text-charity-green" />,
      url: "/news" 
    },
    { 
      title: "How We Started", 
      description: "Discover the story behind SIC and our journey so far.",
      icon: <Calendar className="w-8 h-8 text-charity-blue" />,
      url: "/how-we-started" 
    }
  ];

  return (
    <section className="section bg-muted py-16">
      <div className="container mx-auto">
        <SectionTitle 
          title="Explore Our Work" 
          subtitle="Learn more about what we do and how you can help"
          centered={true}
          animate={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {links.map((link, index) => (
            <Link to={link.url} key={index} className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="mb-4">{link.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-charity-blue transition-colors">
                  {link.title}
                </h3>
                <p className="text-muted-foreground mb-4">{link.description}</p>
                <span className="inline-flex items-center text-charity-blue font-medium">
                  Read More
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { HandHeart } from "lucide-react";
