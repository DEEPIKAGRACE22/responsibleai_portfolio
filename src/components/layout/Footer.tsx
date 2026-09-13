import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Portfolio info */}
          <div>
            <h2 className="font-display text-white text-lg font-bold mb-2">
              AI for All?
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Global AI Governance and Inequalities — A digital ethics portfolio
              examining who benefits from AI, who is excluded, and how responsible
              governance can create a fairer digital future.
            </p>
          </div>

          {/* Academic context */}
          <div>
            <h3 className="font-display text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Academic Context
            </h3>
            <ul className="space-y-1.5 text-sm text-white/60">
              <li>CIA 3 Component 2</li>
              <li>Responsible AI Ethics Portfolio</li>
              <li>Generative AI Ethics Assessment</li>
              <li className="text-white/80 font-medium pt-1">Deepika Grace T T</li>
            </ul>
          </div>

          {/* Quick nav */}
          <div>
            <h3 className="font-display text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Portfolio Sections
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-1.5 text-sm text-white/60">
                {["the-issue", "portfolio", "inequalities", "genai-lab", "governance", "reflection", "references"].map((id) => {
                  const labels: Record<string, string> = {
                    "the-issue": "The Issue",
                    portfolio: "My Portfolio",
                    inequalities: "Global Inequalities",
                    "genai-lab": "Generative AI Lab",
                    governance: "Governance & Guidelines",
                    reflection: "Reflection",
                    references: "References",
                  };
                  return (
                    <li key={id}>
                      <button
                        onClick={() => {
                          const el = document.getElementById(id);
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="hover:text-teal-light transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
                      >
                        {labels[id]}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white/80 text-sm font-medium">
                CIA 3 Component 2 | Responsible AI Ethics Portfolio
              </p>
              <p className="text-white/50 text-xs mt-1">
                Designed and curated by Deepika Grace T T
              </p>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-xs text-white/70
                hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 3l5 5H3L8 3z"/>
                <rect x="7" y="8" width="2" height="5" rx="1"/>
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
