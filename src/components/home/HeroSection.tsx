import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Award, Star, Flame } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient background light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-dojo-red/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-dojo-surface border border-dojo-border/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-dojo-gold shadow-sm">
              <Flame className="w-3.5 h-3.5 text-dojo-red fill-dojo-red" />
              <span>AUTHENTIC JAPANESE MARTIAL ARTS</span>
              <span className="text-dojo-muted">•</span>
              <span className="text-white/80">SINCE 2010</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black tracking-tight text-white leading-[1.08]">
              Martial Arts <br />
              <span className="bg-gradient-to-r from-white via-dojo-gold to-dojo-red bg-clip-text text-transparent">
                Worth the Journey.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-dojo-muted leading-relaxed max-w-xl">
              Forged in Tradition. Built for Today. Master authentic Okinawan Goju-Ryu, Shotokan, and Kyokushin karate under certified 2nd–6th Dan senseis in Bengaluru.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="btn-press px-8 py-4 bg-dojo-red hover:bg-dojo-red-hover text-white font-heading font-bold text-base rounded-full shadow-xl shadow-dojo-red/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                Book a Free Trial Class
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programs"
                className="px-7 py-4 bg-dojo-card hover:bg-dojo-surface text-white font-medium text-sm rounded-full border border-dojo-border flex items-center justify-center transition-colors"
              >
                View Class Schedules
              </Link>
            </div>

            {/* Credential pills */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-dojo-muted border-t border-dojo-border/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-dojo-gold" />
                <span>WKF & JKA Certified Dojo</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-dojo-red" />
                <span>15+ Years in Bengaluru</span>
              </div>
              <div className="flex items-center gap-1 text-dojo-gold font-semibold">
                <Star className="w-3.5 h-3.5 fill-dojo-gold" />
                <Star className="w-3.5 h-3.5 fill-dojo-gold" />
                <Star className="w-3.5 h-3.5 fill-dojo-gold" />
                <Star className="w-3.5 h-3.5 fill-dojo-gold" />
                <Star className="w-3.5 h-3.5 fill-dojo-gold" />
                <span className="text-white ml-1">4.9 / 5.0 (400+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-dojo-border shadow-2xl shadow-black/80 bg-dojo-card">
              <img
                src="/images/BYF3npOdc0o4ncxw9sJAcIjzzkE.jpeg"
                alt="Karateka in Action"
                className="w-full h-[460px] object-cover object-top filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dojo-bg via-transparent to-transparent opacity-80" />

              {/* Floating Sensei Quote Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-dojo-surface/90 backdrop-blur-md border border-dojo-border">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/DYQhs61tNGS6jMT9LzSMeJOD5XU.jpg"
                    alt="Sensei Arjun"
                    className="w-11 h-11 rounded-full object-cover border border-dojo-gold"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Sensei Arjun Krishnan
                    </h4>
                    <p className="text-[11px] text-dojo-gold font-medium">
                      6th Dan • Founder & Chief Instructor
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-dojo-muted italic leading-relaxed">
                  \x22Karate begins and ends with respect. Our dojo builds warriors of character, discipline, and peaceful strength.\x22
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
