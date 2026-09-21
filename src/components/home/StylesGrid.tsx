import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { KARATE_STYLES } from "../../data/academyData";

export const StylesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-dojo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-dojo-red bg-dojo-red/10 px-3 py-1 rounded-full border border-dojo-red/20 inline-block mb-3">
              TRAINING PROGRAMS
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              Find Your Path.
            </h2>
          </div>
          <Link
            to="/programs"
            className="text-sm font-semibold text-dojo-gold hover:text-white inline-flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            Explore all curricula <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KARATE_STYLES.map((style) => (
            <div
              key={style.id}
              className="group rounded-3xl bg-dojo-card border border-dojo-border overflow-hidden hover:border-dojo-gold/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dojo-card via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-dojo-gold border border-white/10">
                    {style.number}
                  </div>
                  <div className="absolute top-4 right-4 bg-dojo-red/90 px-2.5 py-1 rounded-full text-xs font-bold text-white">
                    {style.age}
                  </div>
                  <div className="absolute bottom-4 right-4 text-4xl font-heading font-black text-white/20 select-none">
                    {style.kanji}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-dojo-gold transition-colors">
                    {style.name}
                  </h3>
                  <p className="mt-2 text-sm text-dojo-muted leading-relaxed">
                    {style.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {style.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-dojo-surface text-dojo-lightText/80 px-2.5 py-1 rounded-md border border-dojo-border font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/programs"
                  className="btn-press w-full py-3 bg-dojo-surface hover:bg-dojo-red text-white text-sm font-bold rounded-xl border border-dojo-border hover:border-dojo-red flex items-center justify-center gap-2 transition-colors"
                >
                  Join Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
