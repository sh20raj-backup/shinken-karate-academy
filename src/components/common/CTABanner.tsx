import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export const CTABanner: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-dojo-bg via-dojo-surface to-dojo-bg border-t border-dojo-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-dojo-red-dark via-dojo-red to-dojo-red-dark p-8 sm:p-14 shadow-2xl shadow-dojo-red/30 border border-white/20 text-center overflow-hidden">
          {/* Background decorative japanese kanji watermark */}
          <div className="absolute right-[-20px] top-[-30px] text-white/10 font-heading text-9xl font-black select-none pointer-events-none">
            道場
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-dojo-gold bg-black/40 px-3.5 py-1.5 rounded-full mb-4 border border-dojo-gold/30">
            <Sparkles className="w-3.5 h-3.5" /> Start Today
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            Ready to start training?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
            No experience needed. Your first class is 100% free. Just show up in comfortable clothes — our certified senseis will handle everything else.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-press w-full sm:w-auto px-8 py-3.5 bg-white text-dojo-red-dark hover:bg-dojo-gold hover:text-black font-heading font-bold text-base rounded-full shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              Register for Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto px-7 py-3.5 bg-black/30 hover:bg-black/50 text-white font-medium text-sm rounded-full border border-white/20 transition-colors"
            >
              Explore Programs & Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
