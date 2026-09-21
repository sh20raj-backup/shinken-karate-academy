import React from "react";
import { ACADEMY_INFO } from "../../data/academyData";

export const StatsRow: React.FC = () => {
  return (
    <section className="py-12 bg-dojo-surface border-y border-dojo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {ACADEMY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-dojo-gold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
