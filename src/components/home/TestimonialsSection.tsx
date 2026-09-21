import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/academyData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-dojo-surface/60 border-t border-dojo-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-dojo-red bg-dojo-red/10 px-3 py-1 rounded-full border border-dojo-red/20 inline-block mb-3">
            STUDENT STORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            What our students say.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dojo-muted">
            Transformations in focus, athletic power, and mental calmness from our Bengaluru dojo family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-dojo-card border border-dojo-border p-8 flex flex-col justify-between space-y-6 hover:border-dojo-gold/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-dojo-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-dojo-gold" />
                  ))}
                </div>
                <p className="text-sm text-dojo-muted leading-relaxed italic">
                  \x22{t.quote}\x22
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-dojo-border/60">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-dojo-border"
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-dojo-gold font-medium">
                    {t.rank}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
