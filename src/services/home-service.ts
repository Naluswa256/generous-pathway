import { useFetchData } from "@/hooks/use-fetch-data";
import { useState, useEffect } from 'react';

// Define TypeScript interfaces for all home page content sections
export interface HeroSection {
  title: string;
  subtitle: string;
  imageUrl: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
  organizationBanner: {
    text: string;
  };
}

export interface QuickLink {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export interface MissionItem {
  title: string;
  description: string;
  icon: string;
}

export interface MissionSection {
  title: string;
  subtitle: string;
  items: MissionItem[];
}

export interface ImpactStat {
  value: string;
  label: string;
  icon?: string;
}

export interface ImpactSection {
  title: string;
  subtitle: string;
  stats: ImpactStat[];
  content: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption?: string;
  altText?: string;
  thumbnail?: string;
  youtubeId?: string;
}

export interface GallerySection {
  title: string;
  subtitle: string;
  items: GalleryItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export interface NewsSection {
  title: string;
  subtitle: string;
  items: NewsItem[];
  buttonText: string;
  buttonLink: string;
}

export interface Trustee {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

export interface TrusteesSection {
  title: string;
  subtitle: string;
  trustees: Trustee[];
}

export interface DonateSection {
  title: string;
  subtitle: string;
  content: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position?: string;
  imageUrl?: string;
}

export interface TestimonialSection {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface CallToAction {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
}

export interface HomePageData {
  hero: HeroSection;
  quickLinks: QuickLink[];
  about: AboutSection;
  mission: MissionSection;
  impact: ImpactSection;
  gallery: GallerySection;
  news: NewsSection;
  trustees: TrusteesSection;
  donate: DonateSection;
  testimonials: TestimonialSection;
  callToAction: CallToAction;
}

// Simulate CMS endpoint - will be replaced with actual endpoint later
const MOCK_API_ENDPOINT = '/api/home';

// Mock data to simulate API response
const mockHomeData: HomePageData = {
  hero: {
    title: "Empowering the Forgotten, One Life at a Time",
    subtitle: "We're dedicated to supporting orphans, disabled individuals, and elderly grandparents in Uganda through community-driven initiatives and compassionate care.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    primaryButton: {
      text: "Make a Difference Today",
      link: "/donate"
    },
    secondaryButton: {
      text: "Learn More",
      link: "/what-we-do"
    },
    organizationBanner: {
      text: "SIC - Sharing is Caring"
    }
  },
  quickLinks: [
    {
      title: "Our Mission",
      description: "Learn about our core values and goals",
      icon: "heart",
      link: "/about#mission"
    },
    {
      title: "Get Involved",
      description: "Discover how you can contribute",
      icon: "users",
      link: "/contact"
    },
    {
      title: "Upcoming Events",
      description: "Join our community activities",
      icon: "calendar",
      link: "/events"
    },
    {
      title: "Success Stories",
      description: "See the impact of our work",
      icon: "star",
      link: "/blog"
    }
  ],
  about: {
    title: "About SIC",
    subtitle: "Sharing is Caring",
    content: "SIC is a community-driven organization founded on the principle that sharing resources and compassion can transform lives. We work directly with communities in Uganda to provide essential support to orphans, disabled individuals, and elderly grandparents who lack adequate care and resources.",
    image: "/images/about-sic.jpg",
    buttonText: "Learn More About Us",
    buttonLink: "/about"
  },
  mission: {
    title: "Our Mission",
    subtitle: "What drives us every day",
    items: [
      {
        title: "Support Orphans",
        description: "Providing education, healthcare, and emotional support to orphaned children.",
        icon: "book"
      },
      {
        title: "Assist Disabled",
        description: "Creating accessible opportunities and resources for disabled individuals.",
        icon: "accessibility"
      },
      {
        title: "Care for Elderly",
        description: "Ensuring elderly grandparents receive proper care and companionship.",
        icon: "home"
      }
    ]
  },
  impact: {
    title: "Our Impact",
    subtitle: "Making a difference together",
    stats: [
      {
        value: "500+",
        label: "Children Supported",
        icon: "child"
      },
      {
        value: "100+",
        label: "Elderly Assisted",
        icon: "user"
      },
      {
        value: "50+",
        label: "Community Projects",
        icon: "briefcase"
      },
      {
        value: "25+",
        label: "Local Partners",
        icon: "handshake"
      }
    ],
    content: "Through our dedicated efforts and the generous support of our donors, we've been able to create lasting change in communities across Uganda.",
    imageUrl: "/images/impact.jpg"
  },
  gallery: {
    title: "See Our Work",
    subtitle: "Images and videos showcasing our impact",
    items: [
      {
        id: "gal1",
        type: "image",
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
        caption: "School renovation project in Kampala",
        altText: "Volunteers renovating a local school"
      },
      {
        id: "gal2",
        type: "image",
        url: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop",
        caption: "Medical outreach program in rural Uganda",
        altText: "Medical professionals providing healthcare to community members"
      },
      {
        id: "gal3",
        type: "video",
        url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
        youtubeId: "jfKfPfyJRdk",
        thumbnail: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
        caption: "Interview with community leaders",
        altText: "Community leaders discussing the impact of our programs"
      },
      {
        id: "gal4",
        type: "image",
        url: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?q=80&w=2070&auto=format&fit=crop",
        caption: "Children's education initiative",
        altText: "Children learning in a classroom"
      },
      {
        id: "gal5",
        type: "video",
        url: "https://www.youtube.com/watch?v=gXsf-nloGVM",
        youtubeId: "gXsf-nloGVM",
        thumbnail: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop",
        caption: "Empowering disabled youth program",
        altText: "Workshop for disabled youth"
      },
      {
        id: "gal6",
        type: "image",
        url: "https://images.unsplash.com/photo-1524069290683-90db27f83ea3?q=80&w=800&auto=format&fit=crop",
        caption: "Elderly support program",
        altText: "Volunteers helping elderly community members"
      }
    ]
  },
  news: {
    title: "Latest News",
    subtitle: "Stay updated on our activities",
    items: [
      {
        id: "1",
        title: "New School Building Complete",
        excerpt: "After 6 months of construction, our new school building is ready to welcome students.",
        date: "2023-04-15",
        imageUrl: "/images/news/school-building.jpg",
        slug: "new-school-building-complete"
      },
      {
        id: "2",
        title: "Annual Fundraising Gala",
        excerpt: "Join us for our annual fundraising gala to support our ongoing projects.",
        date: "2023-05-20",
        imageUrl: "/images/news/fundraising-gala.jpg",
        slug: "annual-fundraising-gala"
      },
      {
        id: "3",
        title: "Medical Outreach Success",
        excerpt: "Our recent medical outreach program provided healthcare to over 500 community members.",
        date: "2023-06-10",
        imageUrl: "/images/news/medical-outreach.jpg",
        slug: "medical-outreach-success"
      }
    ],
    buttonText: "View All News",
    buttonLink: "/news"
  },
  trustees: {
    title: "Our Leadership",
    subtitle: "Meet the dedicated team behind SIC",
    trustees: [
      {
        name: "Sarah Johnson",
        position: "Executive Director",
        bio: "Sarah has over 15 years of experience in nonprofit management and community development.",
        imageUrl: "/images/trustees/sarah.jpg"
      },
      {
        name: "Robert Mukasa",
        position: "Uganda Operations Director",
        bio: "Robert oversees all our operations in Uganda and has been with us since our founding.",
        imageUrl: "/images/trustees/robert.jpg"
      },
      {
        name: "Emily Chen",
        position: "Fundraising Director",
        bio: "Emily specializes in nonprofit fundraising and has helped increase our donations by 200%.",
        imageUrl: "/images/trustees/emily.jpg"
      }
    ]
  },
  donate: {
    title: "Support Our Cause",
    subtitle: "Your donation makes a difference",
    content: "Every contribution, no matter the size, helps us continue our mission of supporting those in need.",
    buttonText: "Donate Now",
    buttonLink: "/donate",
    backgroundImage: "/images/donate-bg.jpg"
  },
  testimonials: {
    title: "What People Say",
    subtitle: "Testimonials from our community",
    testimonials: [
      {
        quote: "SIC has transformed our village with their support and resources.",
        author: "Namono Grace",
        position: "Community Leader",
        imageUrl: "/images/testimonials/grace.jpg"
      },
      {
        quote: "The educational support provided by SIC has given my children hope for a better future.",
        author: "Joseph Okello",
        position: "Parent",
        imageUrl: "/images/testimonials/joseph.jpg"
      },
      {
        quote: "I've volunteered with SIC for three years, and the impact they make is truly remarkable.",
        author: "Lisa Thompson",
        position: "Volunteer",
        imageUrl: "/images/testimonials/lisa.jpg"
      }
    ]
  },
  callToAction: {
    title: "Make a Difference Today",
    subtitle: "Your support can transform lives in Uganda. Join us in our mission to empower the forgotten and create a better world for everyone.",
    primaryButton: {
      text: "Donate Now",
      link: "/donate"
    },
    secondaryButton: {
      text: "Become a Volunteer",
      link: "/contact"
    }
  }
};

// This function simulates fetching from API but returns mock data
// It will be replaced with actual API call when endpoint is available
export function useHomePageData(): { 
  data: HomePageData | null; 
  isLoading: boolean; 
  error: Error | null;
  refetch: () => Promise<void>;
} {
  // For now, using a timeout to simulate network request
  const [data, setData] = useState<HomePageData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setData(mockHomeData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return { 
    data, 
    isLoading, 
    error,
    refetch: fetchData
  };
  
  // When the actual API is ready, uncomment this:
  // return useFetchData<HomePageData>(MOCK_API_ENDPOINT);
}
