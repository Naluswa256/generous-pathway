
import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AmbassadorsTrustees() {
  const [activeTab, setActiveTab] = useState("ambassadors");

  return (
    <section id="ambassadors-trustees" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Team" 
          subtitle="We're just beginning our journey"
          highlightText
          centered
          animate
          className="mb-12"
        />
        
        <Tabs defaultValue="ambassadors" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 w-[400px]">
              <TabsTrigger value="ambassadors" className="text-lg">Ambassadors</TabsTrigger>
              <TabsTrigger value="trustees" className="text-lg">Trustees</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="ambassadors" className="animate-fade-in">
            <div className="text-center max-w-xl mx-auto">
              <p className="text-muted-foreground">
                As a newly established organization, we are in the process of building our team of ambassadors. 
                We are excited to collaborate with passionate individuals who share our vision and mission. 
                Stay tuned as we grow and expand our network of support.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="trustees" className="animate-fade-in">
            <div className="text-center max-w-xl mx-auto">
              <p className="text-muted-foreground">
                We are a young organization with a focused leadership team. Currently, our founder John Mukasa 
                is leading the charge, and we look forward to growing our board of trustees as we expand our impact.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
