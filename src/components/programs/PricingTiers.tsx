import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "../../data/academyData";

export const PricingTiers: React.FC = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 bg-dojo-surface/40 border-t border-dojo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-dojo-gold bg-dojo-gold/10 px-3 py-1 rounded-full border border-dojo-gold/20 inline-block mb-3">
            MEMBERSHIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Flexible Plans
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dojo-muted">
            Train at your pace with a plan that fits your goals. No long-term lock-in. Cancel anytime.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center gap-3 bg-dojo-card p-1.5 rounded-full border border-dojo-border">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                !yearly
                  ? "bg-dojo-red text-white shadow-md shadow-dojo-red/30"
                  : "text-dojo-muted hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
                yearly
                  ? "bg-dojo-red text-white shadow-md shadow-dojo-red/30"
                  : "text-dojo-muted hover:text-white"
              }`}
            >
              <span>Yearly</span>
              <span className="bg-dojo-gold text-black text-[10px] px-2 py-0.5 rounded-full font-black">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? "bg-gradient-to-b from-dojo-card via-dojo-card to-dojo-surface border-2 border-dojo-red shadow-2xl shadow-dojo-red/20 md:-translate-y-3"
                    : "bg-dojo-card border border-dojo-border hover:border-dojo-gold/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-dojo-red text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                {plan.bestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-dojo-gold text-black text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
                    Best Value
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-dojo-gold tracking-widest uppercase">
                      {plan.subtitle}
                    </span>
                    <h3 className="text-xl font-heading font-black text-white mt-1">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight">
                      ₹{price}
                    </span>
                    <span className="text-xs text-dojo-muted">
                      / month {yearly && "(billed annually)"}
                    </span>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-dojo-border/60 text-sm">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-dojo-lightText/90">
                        <Check className="w-4 h-4 text-dojo-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    className={`btn-press w-full block text-center py-3.5 rounded-xl font-heading font-bold text-sm transition-all ${
                      plan.popular
                        ? "bg-dojo-red hover:bg-dojo-red-hover text-white shadow-lg shadow-dojo-red/30"
                        : "bg-dojo-surface hover:bg-white/10 text-white border border-dojo-border"
                    }`}
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
