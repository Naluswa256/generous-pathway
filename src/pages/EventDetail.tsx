
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Calendar, Clock, MapPin, Users, ChevronLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { EventTeamContactForm } from "@/components/events/event-team-contact-form";

// This would typically come from an API or database
const EVENT_DETAILS = [
  {
    id: 1,
    title: "Annual Fundraising Gala",
    description: "Join us for an evening of elegance and purpose as we raise funds for our education initiatives in underserved communities. The evening will include a silent auction, live entertainment, and a three-course dinner. All proceeds will go directly to supporting our education programs that provide resources, scholarships, and mentorship to students in need.",
    longDescription: "Our Annual Fundraising Gala is the highlight of our fundraising calendar. This elegant evening brings together supporters, partners, and community leaders for a night of meaningful connection and generous giving. The event will feature inspiring speakers who have benefited from our programs, a silent auction with incredible items donated by our sponsors, live music from local artists, and a delicious three-course meal prepared by award-winning chefs. Your participation helps us continue our mission of providing educational opportunities to those who need it most.",
    date: new Date(2023, 11, 15, 18, 30),
    endDate: new Date(2023, 11, 15, 22, 30),
    location: "Grand Hotel Ballroom, 123 Main Street, New York, NY 10001",
    category: "upcoming",
    attendees: 250,
    maxAttendees: 300,
    price: "$150 per person",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3269&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=3024&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=3270&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=3270&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=3270&auto=format&fit=crop"
    ],
    organizer: "SIC Fundraising Committee",
    contact: "events@siccharity.org",
    sponsors: ["ABC Corporation", "XYZ Foundation", "Global Initiatives"],
    highlights: [
      "Silent auction featuring luxury items and experiences",
      "Live musical performances",
      "Inspirational speeches from program beneficiaries",
      "Networking with community leaders and philanthropists",
      "Three-course gourmet dinner"
    ]
  },
  {
    id: 2,
    title: "Community Outreach Day",
    description: "A day dedicated to hands-on service in our local community, focusing on environmental cleanup and sustainability education.",
    longDescription: "Our Community Outreach Day brought together over 150 volunteers for a transformative day of service. Focusing on both environmental cleanup and sustainability education, participants helped remove over 500 pounds of trash from local parks and waterways, planted 75 native trees and shrubs, and led educational workshops for community members on sustainable living practices. The day concluded with a community picnic where volunteers shared their experiences and formed lasting connections with like-minded individuals committed to environmental stewardship.",
    date: new Date(2023, 10, 22, 9, 0),
    endDate: new Date(2023, 10, 22, 16, 0),
    location: "Central Park, New York",
    category: "past",
    attendees: 150,
    maxAttendees: 200,
    price: "Free",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=3270&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=3271&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=3269&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=3270&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561364895-5e926f5c8ded?q=80&w=3264&auto=format&fit=crop"
    ],
    organizer: "SIC Environmental Team",
    contact: "environment@siccharity.org",
    sponsors: ["Green Planet Initiative", "City Parks Department", "EcoFriendly Co."],
    highlights: [
      "Removed over 500 pounds of trash from local parks",
      "Planted 75 native trees and shrubs",
      "Conducted educational workshops on sustainable living",
      "Community picnic with locally sourced food",
      "Recognition ceremony for outstanding volunteers"
    ],
    impact: [
      "Environmental cleanup of 3 major park areas",
      "Engaged 150+ volunteers in community service",
      "Educated 200+ community members on sustainability",
      "Distributed 100 eco-friendly household kits"
    ]
  },
  // Add other events as needed...
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = parseInt(id || "0");
  const event = EVENT_DETAILS.find((e) => e.id === eventId);
  
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the event you're looking for.</p>
          <Button asChild>
            <Link to="/events">Return to Events</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const isPastEvent = event.category === "past";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-4">
              <Button variant="outline" className="bg-white mb-6" asChild>
                <Link to="/events">
                  <ChevronLeft className="mr-1" size={16} /> Back to Events
                </Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{event.title}</h1>
              <Badge className={isPastEvent ? "bg-gray-500" : "bg-charity-blue"}>
                {isPastEvent ? "Past Event" : "Upcoming Event"}
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Event Details */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-charity-blue flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Date & Time</h3>
                        <p>{event.date.toLocaleDateString()}</p>
                        <p>{event.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - 
                          {event.endDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="text-charity-blue flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p>{event.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="text-charity-blue flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Attendees</h3>
                        <p>{event.attendees} / {event.maxAttendees}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="text-charity-blue flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Price</h3>
                        <p>{event.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Tabs defaultValue="description" className="mb-8">
                  <TabsList>
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="highlights">Highlights</TabsTrigger>
                    {isPastEvent && <TabsTrigger value="impact">Impact</TabsTrigger>}
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-6">
                    <p className="text-gray-700 whitespace-pre-line">
                      {isPastEvent ? event.longDescription : event.description}
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="highlights" className="mt-6">
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-charity-blue mt-2"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  {isPastEvent && (
                    <TabsContent value="impact" className="mt-6">
                      <ul className="space-y-2">
                        {event.impact && event.impact.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-charity-blue mt-2"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  )}
                </Tabs>
                
                {isPastEvent && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Event Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {event.gallery.map((image, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-md">
                          <img 
                            src={image} 
                            alt={`${event.title} - Image ${index+1}`} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                {/* Action Card */}
                <Card className="p-6 mb-8 sticky top-6">
                  <h2 className="text-xl font-bold mb-4">
                    {isPastEvent ? "This Event Has Ended" : "Register for This Event"}
                  </h2>
                  
                  {isPastEvent ? (
                    <div className="space-y-4">
                      <p>Thank you to everyone who participated in this event!</p>
                      <p>Want to join our next event? Check out our upcoming events.</p>
                      <Button asChild className="w-full">
                        <Link to="/events">View Upcoming Events</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p>Spots are filling quickly! Register now to secure your place.</p>
                      <p><strong>Available spots:</strong> {event.maxAttendees - event.attendees} remaining</p>
                      <Button className="w-full">Register Now</Button>
                      <Button variant="outline" className="w-full">Add to Calendar</Button>
                    </div>
                  )}
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="font-medium mb-2">Share this event</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Share2 size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
                
                {/* Organizer Info */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Organizer</h2>
                  <p className="mb-1">{event.organizer}</p>
                  <a href={`mailto:${event.contact}`} className="text-charity-blue hover:underline">
                    {event.contact}
                  </a>
                  
                  <Separator className="my-4" />
                  
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline" className="w-full">Contact Event Team</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                          <DrawerTitle>Contact Event Team</DrawerTitle>
                          <DrawerDescription>
                            Have questions about this event? Our team is here to help.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <EventTeamContactForm eventTitle={event.title} />
                        </div>
                        <DrawerFooter>
                          <p className="text-sm text-muted-foreground">
                            We'll get back to you as soon as possible.
                          </p>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EventDetail;
