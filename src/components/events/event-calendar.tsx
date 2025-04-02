
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample event data - in a real app, this would come from an API/database
const EVENTS_DATA = [
  { id: 1, date: new Date(2023, 10, 15), title: "Annual Fundraising Gala", time: "6:30 PM" },
  { id: 2, date: new Date(2023, 10, 22), title: "Community Outreach Day", time: "9:00 AM" },
  { id: 3, date: new Date(2023, 11, 5), title: "Holiday Charity Drive", time: "10:00 AM" },
  { id: 4, date: new Date(2023, 11, 18), title: "Volunteer Appreciation Event", time: "7:00 PM" },
  { id: 5, date: new Date(2024, 0, 10), title: "New Year Planning Session", time: "1:00 PM" },
  { id: 6, date: new Date(2024, 1, 14), title: "Valentine's Fundraiser", time: "5:00 PM" },
  { id: 7, date: new Date(2024, 2, 22), title: "Spring Community Clean-up", time: "8:30 AM" },
  { id: 8, date: new Date(2024, 3, 15), title: "Earth Day Celebration", time: "11:00 AM" },
  { id: 9, date: new Date(2024, 4, 20), title: "Summer Kick-off Event", time: "3:00 PM" },
  { id: 10, date: new Date(2024, 5, 18), title: "Annual Board Meeting", time: "2:00 PM" },
];

export function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<typeof EVENTS_DATA>([]);
  
  // Function to check if a date has any events
  const hasEventOnDate = (date: Date) => {
    return EVENTS_DATA.some(
      event => 
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Function to get events for a selected date
  const getEventsForDate = (date: Date) => {
    return EVENTS_DATA.filter(
      event => 
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setSelectedEvents(getEventsForDate(date));
    } else {
      setSelectedEvents([]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="md:col-span-2 shadow-md">
        <CardContent className="p-6">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="rounded-md border p-3 pointer-events-auto"
            modifiers={{
              hasEvent: (date) => hasEventOnDate(date),
            }}
            modifiersStyles={{
              hasEvent: { 
                fontWeight: "bold",
                color: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.5)",
                borderRadius: "100%"
              }
            }}
            components={{
              DayContent: ({ date }: { date: Date }) => (
                <div className="relative flex items-center justify-center w-full h-full">
                  <div>{date.getDate()}</div>
                  {hasEventOnDate(date) && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-charity-blue rounded-full"></div>
                  )}
                </div>
              ),
            }}
          />
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            {selectedDate ? (
              <>Events on {selectedDate.toLocaleDateString()}</>
            ) : (
              <>Select a date to see events</>
            )}
          </h3>
          
          {selectedEvents.length > 0 ? (
            <ul className="space-y-4">
              {selectedEvents.map(event => (
                <li key={event.id} className="bg-blue-50 p-3 rounded-md border border-blue-100">
                  <div className="font-medium text-charity-blue">{event.title}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                  <div className="mt-2">
                    <a 
                      href={`/events/${event.id}`}
                      className="inline-block text-sm text-charity-blue hover:underline"
                    >
                      View details
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : selectedDate ? (
            <p className="text-muted-foreground">No events scheduled for this date.</p>
          ) : (
            <p className="text-muted-foreground">Please select a date to view events.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
