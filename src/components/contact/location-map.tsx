
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function LocationMap() {
  return (
    <Card className="overflow-hidden shadow-md border-blue-100">
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15959.25503920664!2d32.5033263!3d0.0866302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sug!4v1745680504829!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SIC Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded-lg shadow-md flex items-center gap-2">
            <MapPin className="text-charity-blue" size={18} />
            <span className="font-medium">SIC Headquarters</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
