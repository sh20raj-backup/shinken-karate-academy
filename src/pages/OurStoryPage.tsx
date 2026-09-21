import React from "react";
import { MilestonesTimeline } from "../components/story/MilestonesTimeline";
import { SenseiGrid } from "../components/story/SenseiGrid";
import { FAQAccordion } from "../components/common/FAQAccordion";
import { CTABanner } from "../components/common/CTABanner";

export const OurStoryPage: React.FC = () => {
  return (
    <main className="pt-12">
      {/* Page Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-wider text-dojo-gold bg-dojo-gold/10 px-3 py-1 rounded-full border border-dojo-gold/20 inline-block mb-3">
          15 YEARS OF MASTERY
        </span>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight">
          A Legacy Built <br />
          <span className="bg-gradient-to-r from-white via-dojo-gold to-dojo-red bg-clip-text text-transparent">
            on Dedication.
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-dojo-muted max-w-2xl mx-auto leading-relaxed">
          From a single dojo to a movement — 15 years of shaping warriors, building character, and preserving authentic Japanese martial arts in Bengaluru.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="py-16 bg-dojo-surface/60 border-y border-dojo-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm sm:text-base text-dojo-lightText/90 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
            From Chennai to Tokyo. Back to Bengaluru.
          </h2>
          <p>
            Shinken Karate Academy was founded in 2010 by Sensei Arjun Krishnan following over eight years of rigorous, intensive full-contact training in Tokyo and Okinawa under legendary Japanese Grandmasters.
          </p>
          <p>
            Upon returning to India, Sensei Arjun envisioned a dojo that refused to compromise on tradition, technical purity, and the foundational Bushido values of respect, perseverance, and quiet humility. What began as a modest room with twelve dedicated students has blossomed into South India\x27s premier martial arts institution.
          </p>
          <p>
            Today, Shinken Karate represents multiple generations of champions, junior black belts, and dedicated working professionals who find sanctuary, physical power, and mental stillness within our dojo walls.
          </p>
        </div>
      </section>

      <MilestonesTimeline />
      <SenseiGrid />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
};
