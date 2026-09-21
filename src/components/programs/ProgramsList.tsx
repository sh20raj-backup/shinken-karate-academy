import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { PROGRAMS } from "../../data/academyData";

export const ProgramsList: React.FC = () => {
  return (
    <section className="py-20 bg-dojo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {PROGRAMS.map((prog, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={prog.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 rounded-3xl bg-dojo-card border border-dojo-border p-6 sm:p-10 hover:border-dojo-gold/30 transition-all ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden aspect-[4/3] bg-dojo-surface">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-dojo-red text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {prog.age}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-dojo-gold">
                      CURRICULUM LEVEL
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-heading font-black text-white">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-dojo-muted leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Key Skills & Disciplines Developed:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {prog.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-dojo-lightText">
                          <CheckCircle className="w-4 h-4 text-dojo-gold shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to="/contact"
                      className="btn-press px-6 py-3 bg-dojo-red hover:bg-dojo-red-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-dojo-red/30 flex items-center gap-2 transition-all"
                    >
                      Enroll in {prog.title.split(" ")[0]}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
