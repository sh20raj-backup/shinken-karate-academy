import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { StatsRow } from "../components/home/StatsRow";
import { StylesGrid } from "../components/home/StylesGrid";
import { FeaturesBento } from "../components/home/FeaturesBento";
import { WeeklySchedule } from "../components/home/WeeklySchedule";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { FAQAccordion } from "../components/common/FAQAccordion";
import { CTABanner } from "../components/common/CTABanner";

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <StatsRow />
      <StylesGrid />
      <FeaturesBento />
      <WeeklySchedule />
      <TestimonialsSection />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
};
