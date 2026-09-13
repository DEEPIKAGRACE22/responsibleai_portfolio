import React from "react";
import SectionReveal from "../components/ui/SectionReveal";
import PortfolioCard from "../components/ui/PortfolioCard";
import { portfolioCards } from "../data/portfolioCards";

const MyPortfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-24 bg-warm-white"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionReveal>
          <div className="max-w-3xl mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
              Section 03
            </p>
            <h2
              id="portfolio-heading"
              className="section-heading mb-4"
            >
              My Portfolio
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Six semester assignments, each connecting to a specific dimension of
              AI ethics — fairness, privacy, safety, transparency, accountability,
              and human oversight — and to the broader theme of global AI governance
              and inequalities.
            </p>
          </div>
        </SectionReveal>

        {/* Context note */}
        <SectionReveal delay={80}>
          <div className="mb-12 p-4 bg-soft-blue-pale border border-soft-blue/20 rounded-xl flex items-start gap-3">
            <svg className="w-5 h-5 text-soft-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"/>
            </svg>
            <p className="text-sm text-charcoal leading-relaxed">
              All six assignments were completed as original semester work. The ethical analysis,
              global connections, and portfolio presentation are new reflective additions created
              for this CIA 3 Component 2 submission.
            </p>
          </div>
        </SectionReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolioCards.map((card, i) => (
            <SectionReveal key={card.id} delay={i * 80}>
              <PortfolioCard card={card} index={i} />
            </SectionReveal>
          ))}
        </div>

        {/* Thematic connections */}
        <SectionReveal>
          <div className="mt-16 card-base bg-navy text-white border-navy">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Recurring Ethical Themes
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Across all six assignments, the same fundamental ethical challenges appear
              in different domains — confirming that these are not isolated technical
              problems but systemic features of how AI is currently developed and deployed.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { theme: "Bias", icon: "⚖️" },
                { theme: "Privacy", icon: "🔒" },
                { theme: "Transparency", icon: "🔍" },
                { theme: "Accountability", icon: "📋" },
                { theme: "Safety", icon: "🛡️" },
                { theme: "Human Oversight", icon: "👁️" },
              ].map((t) => (
                <div
                  key={t.theme}
                  className="flex flex-col items-center gap-2 p-3 bg-white/10 rounded-xl text-center"
                >
                  <span className="text-xl" aria-hidden="true">{t.icon}</span>
                  <span className="text-xs font-semibold text-white">{t.theme}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default MyPortfolio;
