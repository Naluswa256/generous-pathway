
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: React.ReactNode;
}

const ContactInfo = ({ icon, title, details }: ContactInfoProps) => (
  <div className="flex gap-4">
    <div className="bg-charity-blue bg-opacity-10 p-3 rounded-full text-charity-blue">
      {icon}
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <div className="text-muted-foreground">{details}</div>
    </div>
  </div>
);

export function ContactInfoCard() {
  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-charity-blue">Get in Touch</h2>
        <p className="text-muted-foreground">
          Have questions or want to get involved? Reach out to us through any of the channels below.
        </p>
        
        <div className="space-y-6 pt-4">
          <ContactInfo
            icon={<MapPin size={24} />}
            title="Our Location"
            details={
              <address className="not-italic">
                123 Charity Lane<br />
                New York, NY 10001<br />
                United States
              </address>
            }
          />
          
          <ContactInfo
            icon={<Phone size={24} />}
            title="Phone Number"
            details={
              <div>
                <a href="tel:+1-123-456-7890" className="hover:text-charity-blue">
                  +1 (123) 456-7890
                </a>
                <p className="text-sm">Toll-free: 1-800-SIC-HELP</p>
              </div>
            }
          />
          
          <ContactInfo
            icon={<Mail size={24} />}
            title="Email Address"
            details={
              <a href="mailto:info@siccharity.org" className="hover:text-charity-blue">
                info@siccharity.org
              </a>
            }
          />
          
          <ContactInfo
            icon={<Clock size={24} />}
            title="Office Hours"
            details={
              <div>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
