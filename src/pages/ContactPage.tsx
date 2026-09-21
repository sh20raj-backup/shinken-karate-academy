import React from "react";
import { ContactForm } from "../components/contact/ContactForm";
import { TrainingHoursTable } from "../components/contact/TrainingHoursTable";
import { StatsRow } from "../components/home/StatsRow";
import { FAQAccordion } from "../components/common/FAQAccordion";

export const ContactPage: React.FC = () => {
  return (
    <main className="pt-12">
      {/* Page Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-wider text-dojo-red bg-dojo-red/10 px-3 py-1 rounded-full border border-dojo-red/20 inline-block mb-3">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight">
          Let’s Start <br />
          <span className="bg-gradient-to-r from-white via-dojo-gold to-dojo-red bg-clip-text text-transparent">
            Your Journey.
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-dojo-muted max-w-xl mx-auto leading-relaxed">
          Claim your free trial class, view our flexible training hours, or send our chief instructors a message today.
        </p>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <TrainingHoursTable />
            </div>
          </div>
        </div>
      </section>

      <StatsRow />
      <FAQAccordion />
    </main>
  );
};
