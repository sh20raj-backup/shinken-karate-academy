import React from "react";
import { Award, Clock } from "lucide-react";
import { SENSEIS } from "../../data/academyData";

export const SenseiGrid: React.FC = () => {
  return (
    <section className="py-24 bg-dojo-bg border-t border-dojo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-dojo-red bg-dojo-red/10 px-3 py-1 rounded-full border border-dojo-red/20 inline-block mb-3">
            LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Meet the Senseis
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dojo-muted">
            Certified masters dedicating their lives to training warriors of integrity, technical mastery, and humility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SENSEIS.map((sensei) => (
            <div
              key={sensei.id}
              className="rounded-3xl bg-dojo-card border border-dojo-border overflow-hidden hover:border-dojo-gold/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 overflow-hidden bg-dojo-surface">
                  <img
                    src={sensei.image}
                    alt={sensei.name}
                    className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dojo-card via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs bg-dojo-red text-white px-2.5 py-1 rounded-full font-bold shadow">
                      {sensei.rank}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white mt-1.5">
                      {sensei.name}
                    </h3>
                    <p className="text-xs text-dojo-gold font-semibold">
                      {sensei.role}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-dojo-muted pt-1 border-b border-dojo-border/60 pb-3">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-dojo-gold" />
                      {sensei.specialty}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-dojo-red" />
                      {sensei.experience}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-dojo-muted leading-relaxed">
                    {sensei.bio}
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
