import React from "react";
import { Link } from "react-router-dom";
import { Award, Users, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export const FeaturesBento: React.FC = () => {
  return (
    <section className="py-24 bg-dojo-surface/40 border-t border-dojo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-dojo-red bg-dojo-red/10 px-3 py-1 rounded-full border border-dojo-red/20 inline-block mb-3">
            WHY TRAIN WITH US
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Built different. Training different.
          </h2>
          <p className="mt-4 text-base text-dojo-muted">
            Every detail of how we teach, who we hire, and how we structure your personal growth is intentional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Expert Senseis */}
          <div className="rounded-3xl bg-dojo-card border border-dojo-border p-8 space-y-4 hover:border-dojo-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-dojo-red/10 border border-dojo-red/20 flex items-center justify-center text-dojo-red">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              World-Certified Master Senseis
            </h3>
            <p className="text-sm text-dojo-muted leading-relaxed">
              Our instructors hold 2nd–6th Dan black belts certified directly by the World Karate Federation (WKF) and Japan Karate Association (JKA).
            </p>
            <ul className="space-y-2 pt-2 text-xs text-white/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dojo-gold" />
                <span>Tokyo & Okinawa trained lineage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dojo-gold" />
                <span>Over 20+ years coaching pedigree</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Safe & Disciplined Culture */}
          <div className="rounded-3xl bg-dojo-card border border-dojo-border p-8 space-y-4 hover:border-dojo-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-dojo-gold/10 border border-dojo-gold/20 flex items-center justify-center text-dojo-gold">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              Zero-Ego, Safety-First Dojo
            </h3>
            <p className="text-sm text-dojo-muted leading-relaxed">
              Martial arts is about humility and control. We maintain top-tier shock-absorbing mats, mandatory safety gear, and strict supervision in all sparring.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-white/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dojo-gold" />
                <span>Gradual contact introduction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dojo-gold" />
                <span>Clean, sanitized hardwood facilities</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Inclusive for Ages 5 to 55 */}
          <div className="rounded-3xl bg-dojo-card border border-dojo-border p-8 space-y-4 hover:border-dojo-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-dojo-red/10 border border-dojo-red/20 flex items-center justify-center text-dojo-red">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              Every Age, Every Rank
            </h3>
            <p className="text-sm text-dojo-muted leading-relaxed">
              Whether you are a 5-year-old child building anti-bully confidence or an adult reclaiming peak physical conditioning, our curriculum flexes to you.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-white/90">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dojo-gold" />
                <span>Transparent belt grading syllabus</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-dojo-gold" />
                <span>Dedicated adult beginner cohorts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/our-story"
            className="inline-flex items-center gap-2 text-sm font-semibold text-dojo-gold hover:text-white transition-colors"
          >
            Read the 15-year history of Shinken Academy
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
