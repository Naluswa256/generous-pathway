
import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoCard } from "@/components/contact/contact-info-card";
import { LocationMap } from "@/components/contact/location-map";
import { SocialConnect } from "@/components/contact/social-connect";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Separator } from "@/components/ui/separator";
import { CTAButton } from "@/components/ui/cta-button";
import { MessageSquare, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Connect With Us" 
              subtitle="We're here to answer your questions and hear your ideas"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-charity-blue bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare size={28} className="text-charity-blue" />
                </div>
                <h3 className="font-semibold mb-2">Send a Message</h3>
                <p className="text-muted-foreground text-sm">
                  Have a question? Fill out our contact form and we'll respond promptly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-charity-blue bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone size={28} className="text-charity-blue" />
                </div>
                <h3 className="font-semibold mb-2">Give Us a Call</h3>
                <p className="text-muted-foreground text-sm">
                  Need immediate assistance? Our team is just a phone call away.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-charity-blue bg-opacity-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock size={28} className="text-charity-blue" />
                </div>
                <h3 className="font-semibold mb-2">Visit Our Office</h3>
                <p className="text-muted-foreground text-sm">
                  Schedule a visit to our office to meet our team in person.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form & Info Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
              <div>
                <ContactInfoCard />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Our Location" 
              subtitle="Find us at our headquarters"
              centered={true}
            />
            <div className="max-w-5xl mx-auto">
              <LocationMap />
              <p className="text-center text-muted-foreground mt-4">
                The SIC headquarters is located in the heart of New York City, easily accessible by public transportation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Social Media Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <SocialConnect />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-charity-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Your support helps us continue our mission. Consider making a donation today.
            </p>
            <CTAButton variant="accent" className="mx-auto">
              Donate Now
            </CTAButton>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
