
import React from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { PaymentOptionsList } from "@/components/donate/payment-options-list";
import { DonationForm } from "@/components/donate/donation-form";

export function DonateSection() {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          title="Donate Here"
          subtitle="Your support makes a difference in the lives of those we serve"
          centered={true}
          animate={true}
        />
        
        <PaymentOptionsList />
        <DonationForm />
      </div>
    </section>
  );
}
