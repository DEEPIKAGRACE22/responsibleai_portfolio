import React, { useState, useEffect, useRef } from "react";
import type { Sector, DecisionOption } from "../../data/ethicalDecisions";
import { ethicalDecisions } from "../../data/ethicalDecisions";

const EthicalDecisionTool: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<Sector>("healthcare");
  const [selectedOption, setSelectedOption] = useState<DecisionOption | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const scenario = ethicalDecisions.find((s) => s.sector === selectedSector)!;
  const explanation = selectedOption ? scenario.explanations[selectedOption] : null;

  useEffect(() => {
    setSelectedOption(null);
  }, [selectedSector]);

  useEffect(() => {
    if (selectedOption && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedOption]);

  const optionColors: Record<DecisionOption, string> = {
    automated: "border-muted-orange bg-muted-orange-pale hover:border-muted-orange-light",
    "ai-assisted": "border-teal bg-teal-pale hover:border-teal-light",
    "human-only": "border-soft-blue bg-soft-blue-pale hover:border-soft-blue",
  };

  const selectedColors: Record<DecisionOption, string> = {
    automated: "border-muted-orange bg-muted-orange-pale ring-2 ring-muted-orange",
    "ai-assisted": "border-teal bg-teal-pale ring-2 ring-teal",
    "human-only": "border-soft-blue bg-soft-blue-pale ring-2 ring-soft-blue",
  };

  return (
    <div className="space-y-8">
      {/* Sector selector */}
      <div>
        <p className="text-sm font-semibold text-charcoal mb-3" id="sector-label">
          Select a domain:
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-labelledby="sector-label"
        >
          {ethicalDecisions.map((s) => (
            <button
              key={s.sector}
              onClick={() => setSelectedSector(s.sector)}
              aria-pressed={selectedSector === s.sector}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2
                ${
                  selectedSector === s.sector
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-charcoal border-border-light hover:border-navy hover:text-navy"
                }`}
            >
              <span aria-hidden="true">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Context */}
      <div className="bg-white rounded-xl border border-border-light p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">{scenario.icon}</span>
          <div>
            <p className="text-xs font-bold text-navy uppercase tracking-wide mb-1">
              Scenario Context — {scenario.label}
            </p>
            <p className="text-sm text-charcoal leading-relaxed">{scenario.context}</p>
          </div>
        </div>
      </div>

      {/* Options */}
      <div>
        <p className="text-sm font-semibold text-charcoal mb-3" id="options-label">
          Choose an approach:
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          role="radiogroup"
          aria-labelledby="options-label"
        >
          {scenario.options.map((option) => (
            <button
              key={option.type}
              onClick={() => setSelectedOption(option.type)}
              role="radio"
              aria-checked={selectedOption === option.type}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2
                ${
                  selectedOption === option.type
                    ? selectedColors[option.type]
                    : `bg-white border-border-light ${optionColors[option.type]}`
                }`}
            >
              <p className="text-sm font-semibold text-navy mb-1 font-display">
                {option.label}
              </p>
              <p className="text-xs text-charcoal-light leading-relaxed">
                {option.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {explanation && (
        <div
          ref={resultRef}
          className={`rounded-xl border-2 p-6 transition-all duration-300 ${
            explanation.recommended
              ? "border-teal bg-teal-pale"
              : "border-border-light bg-warm-white-dark"
          }`}
          role="region"
          aria-live="polite"
          aria-label="Ethical analysis result"
        >
          <div className="flex items-start gap-3 mb-4">
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                explanation.recommended ? "bg-teal" : "bg-charcoal-light"
              }`}
              aria-hidden="true"
            >
              {explanation.recommended ? "✓" : "!"}
            </div>
            <div>
              <p
                className={`text-sm font-bold uppercase tracking-wide ${
                  explanation.recommended ? "text-teal" : "text-charcoal"
                }`}
              >
                {explanation.recommended ? "Recommended Approach" : "Ethical Concerns Identified"}
              </p>
              <p className="text-xs text-charcoal-light">
                {scenario.label} — {scenario.options.find((o) => o.type === selectedOption)?.label}
              </p>
            </div>
          </div>

          <p className="text-sm text-charcoal leading-relaxed mb-4">
            {explanation.analysis}
          </p>

          {explanation.ethicalRisks.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-bold text-charcoal uppercase tracking-wide mb-2">
                Ethical Risks to Consider
              </p>
              <ul className="space-y-1.5" role="list">
                {explanation.ethicalRisks.map((risk, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-charcoal"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-orange flex-shrink-0"
                      aria-hidden="true"
                    />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            className={`mt-4 p-3 rounded-lg ${
              explanation.recommended ? "bg-teal/10 border border-teal/20" : "bg-charcoal/5 border border-charcoal/10"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-charcoal mb-1">
              Assessment
            </p>
            <p className="text-xs text-charcoal leading-relaxed">
              {explanation.recommendation}
            </p>
          </div>
        </div>
      )}

      {!selectedOption && (
        <p className="text-sm text-charcoal-light italic text-center py-4">
          Select an approach above to see the ethical analysis.
        </p>
      )}
    </div>
  );
};

export default EthicalDecisionTool;
