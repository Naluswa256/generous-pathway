
import { SectionTitle } from "@/components/ui/section-title";

export function LatestNewsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto">
        <SectionTitle 
          title="Latest News" 
          subtitle="Stay tuned for updates as we begin our journey"
          centered
          animate
        />
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            As we've just started our mission, we'll be sharing our progress and stories here soon. 
            Check back for updates about our initiatives and the impact we're making in the community.
          </p>
        </div>
      </div>
    </section>
  );
}
