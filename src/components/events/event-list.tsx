
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

// Empty events data as we're just starting
const EVENT_DATA: Event[] = [];

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
