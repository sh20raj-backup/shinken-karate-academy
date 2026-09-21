import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { FAQS, FAQItem } from "../../data/academyData";

interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQProps> = ({
  items = FAQS,
  title = "Common Questions",
  subtitle = "Everything you need to know about starting your martial arts journey at Shinken Karate Academy.",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = items.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-dojo-surface/50 border-t border-dojo-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-dojo-red bg-dojo-red/10 px-3 py-1 rounded-full border border-dojo-red/20 inline-block mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dojo-muted max-w-xl mx-auto">
            {subtitle}
          </p>

          {/* Quick Search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-dojo-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (uniform, age, sparring, belts)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-dojo-card border border-dojo-border rounded-full text-white placeholder:text-dojo-muted/60 focus:outline-none focus:border-dojo-gold transition-colors"
            />
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-dojo-muted text-sm">
              No questions found matching \x22{searchQuery}\x22. Feel free to contact our dojo directly!
            </div>
          ) : (
            filtered.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-dojo-border bg-dojo-card overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-dojo-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-dojo-red" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm sm:text-base text-dojo-muted leading-relaxed border-t border-dojo-border/40 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
