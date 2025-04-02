
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Story {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
  fullStory: string;
  category: string;
}

const stories: Story[] = [
  {
    id: "story1",
    name: "Namuganza Sarah",
    location: "Kampala",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    quote: "The clean water well has changed everything for our village. My children are healthier now.",
    fullStory: "Before SIC built the well in our community, I spent 4 hours every day walking to collect water that made my children sick. Now, we have clean water just minutes away. My children attend school regularly because they're healthier, and I've started a small vegetable garden with the time I've saved.",
    category: "Water"
  },
  {
    id: "story2",
    name: "Okello Daniel",
    location: "Gulu District",
    image: "https://images.unsplash.com/photo-1577877777751-3f1ec20a0715?q=80&w=800&auto=format&fit=crop",
    quote: "The vocational training program helped me start my own carpentry shop. I can now provide for my family.",
    fullStory: "After losing my leg in an accident, I thought I would never be able to work again. SIC's vocational training program taught me carpentry skills adapted to my disability. With the tools they provided, I started my own business. Today, I employ two others and can pay for my children's education.",
    category: "Education"
  },
  {
    id: "story3",
    name: "Nabulungi Grace",
    location: "Jinja",
    image: "https://images.unsplash.com/photo-1573496800440-e3b90929d523?q=80&w=800&auto=format&fit=crop",
    quote: "When my parents died, I lost hope. The orphan support program gave me a second chance at life.",
    fullStory: "I was 12 when both my parents died of AIDS. My grandmother took me in but couldn't afford my school fees. SIC's orphan support program provided everything I needed for school, including uniforms and books. They also gave us monthly food packages. Now I've completed secondary school and am training to become a nurse to help others in my community.",
    category: "Orphans"
  }
];

export function ImpactStories() {
  const categories = Array.from(new Set(stories.map(story => story.category)));
  
  return (
    <div className="animate-fade-in">
      <Tabs defaultValue={categories[0]} className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map(category => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 gap-8">
              {stories
                .filter(story => story.category === category)
                .map(story => (
                  <StoryCard key={story.id} story={story} />
                ))
              }
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function StoryCard({ story }: { story: Story }) {
  return (
    <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <img 
            src={story.image} 
            alt={story.name}
            className="h-full w-full object-cover object-center"
          />
          <Badge variant="charity" className="absolute top-3 left-3">
            {story.category}
          </Badge>
        </div>
        
        <div className="md:w-2/3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-white">
                  <img src={story.image} alt={story.name} />
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>{story.location}</CardDescription>
                </div>
              </div>
              <Quote className="text-charity-blue/50 h-8 w-8" />
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-lg font-medium italic mb-4">"{story.quote}"</p>
            <p className="text-muted-foreground">{story.fullStory}</p>
          </CardContent>
          
          <CardFooter>
            <button className="text-charity-blue hover:text-charity-blue/80 text-sm font-medium flex items-center transition-colors">
              Read full story
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
