
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DonateSection } from "@/components/donate-section";

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <DonateSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
