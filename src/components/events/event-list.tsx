
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  category: "upcoming" | "past";
  attendees: number;
  image: string;
}

// In a real application, this data would come from an API or database
const EVENT_DATA: Event[] = [
  {
    id: 1,
    title: "Annual Fundraising Gala",
    description: "Join us for an evening of elegance and purpose as we raise funds for our education initiatives in underserved communities.",
    date: new Date(2023, 11, 15, 18, 30),
    location: "Grand Hotel Ballroom, New York",
    category: "upcoming",
    attendees: 250,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3269&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Community Outreach Day",
    description: "A day dedicated to hands-on service in our local community, focusing on environmental cleanup and sustainability education.",
    date: new Date(2023, 10, 22, 9, 0),
    location: "Central Park, New York",
    category: "past",
    attendees: 150,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=3270&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Holiday Charity Drive",
    description: "Help us collect essential items for those in need during the holiday season. Every donation makes a difference!",
    date: new Date(2023, 11, 5, 10, 0),
    location: "Multiple Locations",
    category: "upcoming",
    attendees: 300,
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=3270&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Volunteer Appreciation Event",
    description: "An evening to celebrate and thank our dedicated volunteers who have given their time and skills to support our mission.",
    date: new Date(2023, 9, 18, 19, 0),
    location: "SIC Headquarters, New York",
    category: "past",
    attendees: 75,
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=3270&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Spring Charity Run",
    description: "Join our 5K run to raise awareness and funds for children's education programs in developing countries.",
    date: new Date(2024, 3, 12, 8, 0),
    location: "Riverside Park, New York",
    category: "upcoming",
    attendees: 400,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=3431&auto=format&fit=crop"
  }
];

export function EventList() {
  const [selectedCategory, setSelectedCategory] = useState<"upcoming" | "past">("upcoming");
  
  const filteredEvents = EVENT_DATA.filter(event => event.category === selectedCategory);

  return (
    <div className="space-y-8">
      <Tabs defaultValue="upcoming" onValueChange={(value) => setSelectedCategory(value as "upcoming" | "past")}>
        <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge className={selectedCategory === "upcoming" ? "bg-charity-blue" : "bg-gray-500"}>
                  {selectedCategory === "upcoming" ? "Upcoming" : "Past"}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users size={14} />
                  <span>{event.attendees}</span>
                </div>
              </div>
              <CardTitle className="text-xl mt-2">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">{event.description}</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{event.date.toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>{event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full" asChild>
                <Link to={`/events/${event.id}`}>
                  {selectedCategory === "upcoming" ? "Register Now" : "View Details"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No {selectedCategory} events at the moment.</p>
        </div>
      )}
    </div>
  );
}
