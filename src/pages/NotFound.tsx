
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CTAButton } from "@/components/ui/cta-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-charity-blue mb-4">404</h1>
          <p className="text-2xl font-medium mb-4">Page Not Found</p>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you're looking for. It might have been removed, 
            renamed, or didn't exist in the first place.
          </p>
          <CTAButton asChild>
            <Link to="/">Return to Home</Link>
          </CTAButton>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
