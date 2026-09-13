import React, { useState } from "react";
import SectionReveal from "../components/ui/SectionReveal";
import { inequalities } from "../data/inequalities";

const accentStyles = {
  teal: {
    border: "border-teal",
    num: "text-teal",
    badge: "bg-teal-pale text-teal border-teal/20",
    detailBg: "bg-teal-pale",
    detailBorder: "border-teal/20",
  },
  orange: {
    border: "border-muted-orange",
    num: "text-muted-orange",
    badge: "bg-muted-orange-pale text-muted-orange border-muted-orange/20",
    detailBg: "bg-muted-orange-pale",
    detailBorder: "border-muted-orange/20",
  },
  blue: {
    border: "border-soft-blue",
    num: "text-soft-blue",
    badge: "bg-soft-blue-pale text-soft-blue border-soft-blue/20",
    detailBg: "bg-soft-blue-pale",
    detailBorder: "border-soft-blue/20",
  },
  navy: {
    border: "border-navy",
    num: "text-navy",
    badge: "bg-navy/10 text-navy border-navy/20",
    detailBg: "bg-navy/5",
    detailBorder: "border-navy/10",
  },
};

const GlobalInequalities: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="inequalities"
      className="py-24 bg-warm-white-dark"
      aria-labelledby="inequalities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
              Section 04
            </p>
            <h2
              id="inequalities-heading"
              className="section-heading mb-4"
            >
              Global Inequalities
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed">
              AI inequalities are not accidents. They are structural features of a
              technology developed within — and shaped by — existing global power
              structures. Understanding these dimensions is the first step toward
              addressing them.
            </p>
          </div>
        </SectionReveal>

        {/* Six-part inequality framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {inequalities.map((item, i) => {
            const styles = accentStyles[item.accent];
            const isExpanded = expanded === item.id;

            return (
              <SectionReveal key={item.id} delay={i * 80}>
                <article
                  className={`card-base border-l-4 ${styles.border} flex flex-col h-full`}
                  aria-labelledby={`ineq-title-${item.id}`}
                >
                  {/* Number + icon */}
                  <div className="flex items-start justify-between mb-4">
                    <span className={`font-display text-4xl font-bold ${styles.num} opacity-30 leading-none`} aria-hidden="true">
                      {item.number}
                    </span>
                    <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  </div>

                  <h3
                    id={`ineq-title-${item.id}`}
                    className="font-display text-xl font-bold text-navy mb-3"
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-charcoal-light leading-relaxed mb-4 flex-1">
                    {item.summary}
                  </p>

                  {/* Examples */}
                  <div className={`rounded-lg border ${styles.detailBorder} ${styles.detailBg} p-3 mb-4`}>
                    <p className="text-xs font-bold uppercase tracking-wide text-charcoal mb-2">
                      Examples
                    </p>
                    <ul className="space-y-1.5" role="list">
                      {item.examples.slice(0, isExpanded ? undefined : 2).map((ex, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-charcoal">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${styles.num.replace("text-", "bg-")}`} aria-hidden="true" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() => setExpanded(isExpanded ? null : item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`ineq-detail-${item.id}`}
                    className={`text-xs font-semibold ${styles.num} hover:opacity-70 transition-opacity text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded`}
                  >
                    {isExpanded ? "Show less ↑" : "Read full analysis →"}
                  </button>

                  {/* Expanded detail */}
                  {isExpanded && (
                    <div
                      id={`ineq-detail-${item.id}`}
                      className="mt-4 pt-4 border-t border-border-light"
                    >
                      <p className="text-sm text-charcoal leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  )}
                </article>
              </SectionReveal>
            );
          })}
        </div>

        {/* A Fairer Global AI Order */}
        <SectionReveal>
          <div className="card-base bg-navy text-white border-navy">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  A Fairer Global AI Order
                </h3>
                <p className="text-white/75 leading-relaxed mb-4">
                  Global principles for AI — such as the OECD AI Principles or the UN
                  Recommendations on AI Ethics — provide important starting points. But
                  universal principles are not sufficient on their own. They must be
                  translated into governance frameworks that are adapted to local laws,
                  cultures, languages, economic realities, accessibility needs, and
                  community priorities.
                </p>
                <p className="text-white/75 leading-relaxed">
                  A fairer global AI order requires not only better rules, but a
                  fundamentally different approach to who participates in making them.
                  AI governance must be genuinely multilateral — including voices from
                  the Global South, minority communities, people with disabilities,
                  and others currently underrepresented in AI policy discussions.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  {
                    icon: "🌍",
                    text: "Governance adapted to local laws, cultures and languages",
                  },
                  {
                    icon: "🤝",
                    text: "Genuine participation of affected communities",
                  },
                  {
                    icon: "🏛️",
                    text: "Regulatory capacity building in lower-income countries",
                  },
                  {
                    icon: "📐",
                    text: "Flexible frameworks that respect contextual variation",
                  },
                  {
                    icon: "⚖️",
                    text: "Accessible accountability mechanisms across jurisdictions",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 p-3 bg-white/10 rounded-xl"
                  >
                    <span className="text-lg flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <p className="text-sm text-white/85">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default GlobalInequalities;
