import React from "react";
import { ProgramsList } from "../components/programs/ProgramsList";
import { PricingTiers } from "../components/programs/PricingTiers";
import { FAQAccordion } from "../components/common/FAQAccordion";
import { CTABanner } from "../components/common/CTABanner";

export const ProgramsPage: React.FC = () => {
  return (
    <main className="pt-12">
      {/* Page Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-wider text-dojo-red bg-dojo-red/10 px-3 py-1 rounded-full border border-dojo-red/20 inline-block mb-3">
          OUR PROGRAMS
        </span>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight">
          Every Path. <br />
          <span className="bg-gradient-to-r from-white via-dojo-gold to-dojo-red bg-clip-text text-transparent">
            One Discipline.
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-dojo-muted max-w-2xl mx-auto leading-relaxed">
          Authentic karate programs for every age, skill level, and goal — taught by world-class certified instructors in Bengaluru.
        </p>
      </section>

      <ProgramsList />
      <PricingTiers />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
};
