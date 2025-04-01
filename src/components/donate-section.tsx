
import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Banknote, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  amount: z.string().min(1, "Amount is required"),
  honorOf: z.string().min(1, "This field is required"),
  comment: z.string().min(1, "Comment is required"),
});

export function DonateSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      amount: "",
      honorOf: "",
      comment: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // In a real app, you would send this data to your backend
    alert("Thank you for your donation!");
    form.reset();
  };

  const PaymentOption = ({ 
    name, 
    icon: Icon, 
    className 
  }: { 
    name: string; 
    icon: React.ComponentType<any>; 
    className?: string;
  }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Icon className={cn("w-10 h-10 mb-2", className)} />
      <span className="font-medium">{name}</span>
    </div>
  );

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          title="Donate Here"
          subtitle="Your support makes a difference in the lives of those we serve"
          centered={true}
          animate={true}
        />
        
        <div className="mb-12 animate-fade-in">
          <h3 className="text-xl md:text-2xl font-medium text-center mb-6">Payment Options</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            <PaymentOption name="PayPal" icon={(props) => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-600" {...props}>
                <path d="M18.5 6c-1 0-1.8.6-2 1.5l-1.2 7.6c-.1.6-.7 1-1.3.9H7.1L6 15l-.3-1c0-.3-.2-.5-.5-.5H3.7c-.3 0-.7.3-.7.6 0 .1 0 .2.1.3L4 18c.1.6.7 1 1.3 1h7c1.5 0 2.7-1 3-2.4l2-9c.1-.5-.3-1-.8-1.1-.1 0-.3 0-.4 0z" stroke="#009cde" fill="#009cde" />
                <path d="M19 2H7C5.3 2 4 3.3 4 5v3h2V5c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-3H4v3c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3z" stroke="#003087" fill="#003087" />
              </svg>
            )} />
            
            <PaymentOption name="MasterCard" icon={(props) => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-10 h-10" {...props}>
                <circle cx="7" cy="12" r="6" fill="#eb001b" />
                <circle cx="17" cy="12" r="6" fill="#f79e1b" />
                <path d="M12 17.25a6 6 0 010-10.499 6 6 0 000 10.499z" fill="#ff5f00" />
              </svg>
            )} />
            
            <PaymentOption name="Cash App" icon={Banknote} className="text-green-500" />
            
            <PaymentOption name="Visa" icon={(props) => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" {...props}>
                <path d="M22.5 4v16c0 1.4-1.1 2.5-2.5 2.5H4c-1.4 0-2.5-1.1-2.5-2.5V4c0-1.4 1.1-2.5 2.5-2.5h16c1.4 0 2.5 1.1 2.5 2.5z" fill="#f2f2f2" />
                <path d="M14 7l-2.9 7h-1.9l-1.4-5.5c-.1-.3-.2-.5-.5-.6-.5-.2-1.2-.4-1.9-.6l.1-.3h3.2c.4 0 .8.3.9.8l.8 4.3 2-5.1h1.6z" fill="#00579f" />
                <path d="M18.9 11.2l.8-2.2.5 2.2h-1.3zm2.1 2.8h1.7l-1.5-5h-1.5c-.3 0-.7.2-.8.5l-2.9 4.5h1.9l.4-1.1h2.4l.3 1.1z" fill="#00579f" />
                <path d="M16.4 10.1c0 1.8-1.6 3.5-4 3.5l-.5-2.3c.3.1.6.2.9.2.8 0 1.3-.3 1.7-1.1l-1.3-3.4h1.9l.7 2.6.7-2.6h1.7l-1.8 3.1z" fill="#00579f" />
              </svg>
            )} />
          </div>
          
          {/* Adding a prominent donate button */}
          <div className="flex justify-center mt-8 mb-8 animate-bounce-slow">
            <Button 
              onClick={() => window.open("#", "_blank")} 
              className="bg-charity-gold hover:bg-amber-600 text-white font-bold text-lg py-6 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-3"
              aria-label="Start donation process"
            >
              <DollarSign className="w-6 h-6" />
              Donate Now
            </Button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-6 text-charity-blue">We Want to Thank You!</h3>
          <p className="text-center mb-8 text-gray-600">Please complete this form after you donate</p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount Donated*</FormLabel>
                    <FormControl>
                      <Input placeholder="$50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="honorOf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>I Dedicate My Donation In Honor Of*</FormLabel>
                    <FormControl>
                      <Input placeholder="Name of person or cause" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment*</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share why you decided to donate..." 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-charity-gold hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Heart className="mr-2 h-4 w-4" />
                Submit Thank You
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
