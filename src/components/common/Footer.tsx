import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ACADEMY_INFO } from "../../data/academyData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dojo-surface border-t border-dojo-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Academy Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-dojo-red p-0.5 flex items-center justify-center">
                <img
                  src="/images/8zXpf9qctVPX4fv4KqZozrHcAc.png"
                  alt="Shinken Karate"
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black text-xl tracking-tight text-white">
                    SHINKEN
                  </span>
                  <span className="text-[10px] bg-dojo-card text-dojo-gold px-1.5 py-0.5 rounded font-bold border border-dojo-border">
                    真剣
                  </span>
                </div>
                <span className="text-[11px] text-dojo-muted tracking-widest font-semibold block uppercase">
                  Karate Academy
                </span>
              </div>
            </Link>
            <p className="text-sm text-dojo-muted leading-relaxed max-w-sm">
              {ACADEMY_INFO.tagline} Rooted in authentic Okinawan tradition, strict discipline, and high-performance tournament coaching for practitioners of all ages.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs bg-dojo-card text-dojo-gold px-3 py-1 rounded-full border border-dojo-border font-medium">
                WKF Certified
              </span>
              <span className="text-xs bg-dojo-card text-dojo-gold px-3 py-1 rounded-full border border-dojo-border font-medium">
                JKA Affiliated
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-dojo-gold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-dojo-muted hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-dojo-muted hover:text-white transition-colors">
                  Programs & Pricing
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-dojo-muted hover:text-white transition-colors">
                  Our Story & Senseis
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-dojo-muted hover:text-white transition-colors">
                  Dojo Journal & Tips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dojo-muted hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-dojo-gold mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-dojo-muted">
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  Little Ninjas (Age 4-6)
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  Youth Karate (Age 7-12)
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  Goju-Ryu & Self-Defense
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  Kyokushin Full-Contact
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">
                  Kobudo Traditional Weapons
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-dojo-gold mb-4">
              Visit the Dojo
            </h4>
            <ul className="space-y-3 text-sm text-dojo-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-dojo-red mt-0.5 shrink-0" />
                <span>{ACADEMY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-dojo-red shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  {ACADEMY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-dojo-red shrink-0" />
                <a href="mailto:info@shinkenkarate.com" className="hover:text-white transition-colors">
                  {ACADEMY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-xs">
                <Clock className="w-4 h-4 text-dojo-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Training Hours:</p>
                  <p>Mon - Fri: 6:00 AM - 9:00 PM</p>
                  <p>Sat: 8:00 AM - 5:00 PM | Sun: Morning</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-dojo-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dojo-muted">
          <p>© 2026 Shinken Karate Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Preserving Japanese Martial Arts in India</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms & Safety
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
