
import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { EventCalendar } from "@/components/events/event-calendar";
import { EventList } from "@/components/events/event-list";
import { CTAButton } from "@/components/ui/cta-button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { EventTeamContactForm } from "@/components/events/event-team-contact-form";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Upcoming Events" 
              subtitle="Join us at our events and help make a difference in the community"
              centered={true}
            />
            
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-gray-600">
                At SIC, we organize various events throughout the year to engage with our community, 
                raise awareness about important causes, and gather resources to support our initiatives. 
                Check out our calendar and join us at our upcoming events!
              </p>
            </div>
          </div>
        </div>
        
        {/* Calendar Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Event Calendar" 
              subtitle="Browse our events by date"
              highlightText={true}
            />
            
            <EventCalendar />
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Looking for a specific event? Check our calendar or browse the event list below.
              </p>
            </div>
          </div>
        </section>
        
        {/* Event Listings */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Event Listings" 
              subtitle="Explore our upcoming and past events"
              highlightText={true}
            />
            
            <EventList />
          </div>
        </section>
        
        {/* Host an Event CTA */}
        <section className="py-16 bg-charity-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              If you're interested in hosting a fundraising event or partnering with us for 
              community outreach, we'd love to hear from you!
            </p>
            
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="accent" size="lg" className="mx-auto">
                  Contact Our Events Team
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-lg">
                  <DrawerHeader className="text-center">
                    <DrawerTitle>Contact Our Events Team</DrawerTitle>
                    <DrawerDescription>
                      Have an idea for an event or want to partner with us? Let's discuss how we can work together.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <EventTeamContactForm />
                  </div>
                  <DrawerFooter className="pt-2">
                    <p className="text-sm text-muted-foreground text-center">
                      Our events team will review your message and get back to you within 2 business days.
                    </p>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Events;
