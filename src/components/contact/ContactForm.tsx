import React, { useState } from "react";
import { Send, CheckCircle2, Shield } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "Adult Beginner Camp (13+)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="rounded-3xl bg-dojo-card border border-dojo-border p-6 sm:p-10 shadow-xl">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 rounded-full bg-dojo-gold/10 border border-dojo-gold/30 text-dojo-gold mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-white">
            Free Trial Request Received!
          </h3>
          <p className="text-sm text-dojo-muted max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{formData.name}</strong>. Our head instructor will contact you via WhatsApp/phone at <strong className="text-white">{formData.phone}</strong> within 24 hours to confirm your scheduled trial slot.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", phone: "", email: "", program: "Adult Beginner Camp (13+)", message: "" });
            }}
            className="mt-4 px-6 py-2.5 bg-dojo-surface hover:bg-dojo-border text-white text-xs font-bold rounded-full transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-dojo-red">
              CLAIM YOUR FIRST CLASS
            </span>
            <h3 className="text-2xl font-heading font-black text-white mt-1">
              Send a Message
            </h3>
            <p className="text-xs text-dojo-muted mt-1">
              Have questions about schedules, fees, or your trial? We will respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-dojo-lightText mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-dojo-surface border border-dojo-border rounded-xl text-sm text-white placeholder:text-dojo-muted/50 focus:outline-none focus:border-dojo-gold transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-dojo-lightText mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-dojo-surface border border-dojo-border rounded-xl text-sm text-white placeholder:text-dojo-muted/50 focus:outline-none focus:border-dojo-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-dojo-lightText mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ramesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dojo-surface border border-dojo-border rounded-xl text-sm text-white placeholder:text-dojo-muted/50 focus:outline-none focus:border-dojo-gold transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-dojo-lightText mb-1.5">
                Preferred Program
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-3 bg-dojo-surface border border-dojo-border rounded-xl text-sm text-white focus:outline-none focus:border-dojo-gold transition-colors"
              >
                <option>Little Ninjas Camp (Age 4-6)</option>
                <option>Youth Karate Camp (Age 7-12)</option>
                <option>Adult Beginner Camp (Age 13+)</option>
                <option>Advanced Kyokushin / Kumite Camp</option>
                <option>Women\x27s Self-Defense Workshop</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-dojo-lightText mb-1.5">
                Message or Goals
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about previous martial arts experience (if any), fitness goals, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-dojo-surface border border-dojo-border rounded-xl text-sm text-white placeholder:text-dojo-muted/50 focus:outline-none focus:border-dojo-gold transition-colors resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-press w-full py-4 bg-dojo-red hover:bg-dojo-red-hover disabled:opacity-50 text-white font-heading font-bold text-base rounded-xl shadow-lg shadow-dojo-red/30 flex items-center justify-center gap-2 transition-all"
          >
            {loading ? "Registering..." : "Submit Registration (100% Free)"}
            <Send className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-center text-dojo-muted flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-dojo-gold" />
            Your contact details are strictly private. No spam ever.
          </p>
        </form>
      )}
    </div>
  );
};
