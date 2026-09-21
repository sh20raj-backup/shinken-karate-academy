import React from "react";
import { Clock, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { ACADEMY_INFO } from "../../data/academyData";

export const TrainingHoursTable: React.FC = () => {
  return (
    <div className="rounded-3xl bg-dojo-card border border-dojo-border p-6 sm:p-10 space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-dojo-gold">
          LOCATION & ACCESS
        </span>
        <h3 className="text-2xl font-heading font-black text-white mt-1">
          Dojo Training Hours
        </h3>
        <p className="text-xs sm:text-sm text-dojo-muted mt-1">
          Drop by anytime during open dojo hours to tour the mats and speak with our senseis.
        </p>
      </div>

      <div className="space-y-4">
        {ACADEMY_INFO.hours.map((h, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-dojo-surface border border-dojo-border flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-dojo-red" />
              <span className="font-heading font-bold text-sm text-white">{h.day}</span>
            </div>
            <span className="text-xs font-semibold text-dojo-gold">{h.time}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-dojo-border/60 space-y-4">
        <div className="flex items-start gap-3 text-sm text-dojo-muted">
          <MapPin className="w-5 h-5 text-dojo-red shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block font-medium">Academy Address:</strong>
            <span>{ACADEMY_INFO.address}</span>
            <a
              href="https://maps.google.com/?q=Jayanagar+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 text-xs text-dojo-gold hover:text-white flex items-center gap-1 transition-colors"
            >
              Open in Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-dojo-muted">
          <Phone className="w-5 h-5 text-dojo-red shrink-0" />
          <div>
            <strong className="text-white block font-medium">Front Desk:</strong>
            <a href="tel:+919876543210" className="hover:text-white transition-colors">
              {ACADEMY_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-dojo-muted">
          <Mail className="w-5 h-5 text-dojo-red shrink-0" />
          <div>
            <strong className="text-white block font-medium">Direct Email:</strong>
            <a href="mailto:info@shinkenkarate.com" className="hover:text-white transition-colors">
              {ACADEMY_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
