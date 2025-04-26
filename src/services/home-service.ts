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
  id: string;
  type: 'text' | 'video';
  quote?: string;
  author: string;
  position?: string;
  imageUrl?: string;
  videoUrl?: string;
  youtubeId?: string;
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
    subtitle: "We're beginning our journey to support orphans in Uganda through community-driven initiatives and compassionate care.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    primaryButton: {
      text: "Support Our Mission",
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
    }
  ],
  about: {
    title: "About SIC",
    subtitle: "Sharing is Caring",
    content: "SIC is a newly established community-driven organization founded on the principle that sharing resources and compassion can transform lives. We are starting our journey in Uganda to provide essential support to orphaned children who lack adequate care and resources.",
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
      }
    ]
  },
  impact: {
    title: "Our Initial Impact",
    subtitle: "Taking our first steps together",
    stats: [
      {
        value: "20",
        label: "Children Supported",
        icon: "child"
      },
      {
        value: "1",
        label: "Community Project",
        icon: "briefcase"
      }
    ],
    content: "We are at the beginning of our journey, starting with supporting 20 orphaned children in our community.",
    imageUrl: "/images/impact.jpg"
  },
  gallery: {
    title: "Our Beginning",
    subtitle: "First steps in our journey",
    items: [
      {
        id: "gal1",
        type: "image",
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
        caption: "Our first community meeting",
        altText: "Community members gathering to discuss our mission"
      }
    ]
  },
  news: {
    title: "Latest News",
    subtitle: "Stay updated on our activities",
    items: [],
    buttonText: "Check Back Soon",
    buttonLink: "/news"
  },
  trustees: {
    title: "Our Leadership",
    subtitle: "Meet the founder of SIC",
    trustees: [
      {
        name: "John Mukasa",
        position: "Founder & Director",
        bio: "John founded SIC in 2024 with a vision to support orphaned children in his community. Having witnessed the struggles of vulnerable children firsthand, he is dedicated to creating positive change in their lives.",
        imageUrl: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=2021&auto=format&fit=crop"
      }
    ]
  },
  donate: {
    title: "Support Our Cause",
    subtitle: "Help us make a difference",
    content: "Your contribution will help us expand our support to more orphaned children in need.",
    buttonText: "Donate Now",
    buttonLink: "/donate",
    backgroundImage: "/images/donate-bg.jpg"
  },
  testimonials: {
    title: "What People Say",
    subtitle: "Stories from our community coming soon",
    testimonials: []
  },
  callToAction: {
    title: "Join Us in Making a Difference",
    subtitle: "Be part of our journey from the beginning. Together, we can create a better future for orphaned children in Uganda.",
    primaryButton: {
      text: "Support Our Mission",
      link: "/donate"
    },
    secondaryButton: {
      text: "Get Involved",
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
