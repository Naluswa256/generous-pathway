
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30597562656!2d-74.25987368715491!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1683805737783!5m2!1sen!2s"
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
