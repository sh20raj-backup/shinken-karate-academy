import React from "react";
import { MILESTONES } from "../../data/academyData";

export const MilestonesTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-dojo-surface/40 border-t border-dojo-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-dojo-gold bg-dojo-gold/10 px-3 py-1 rounded-full border border-dojo-gold/20 inline-block mb-3">
            OUR HERITAGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Milestones That Shaped Us.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dojo-muted">
            From a tiny room with 12 mats in 2010 to Bengaluru\x27s premier Japanese martial arts academy.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative border-l-2 border-dojo-border ml-4 sm:ml-32 space-y-12">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Year marker dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-dojo-card border-2 border-dojo-gold group-hover:bg-dojo-red group-hover:border-white transition-colors" />

              {/* Year label */}
              <div className="sm:absolute sm:-left-28 top-0 text-lg font-heading font-black text-dojo-gold group-hover:text-white transition-colors">
                {m.year}
              </div>

              <div className="p-6 rounded-2xl bg-dojo-card border border-dojo-border group-hover:border-dojo-gold/40 transition-colors">
                <h3 className="text-xl font-heading font-bold text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-dojo-muted leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
