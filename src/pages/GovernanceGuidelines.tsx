import React, { useState } from "react";
import SectionReveal from "../components/ui/SectionReveal";
import PrincipleCard from "../components/ui/PrincipleCard";
import { principles } from "../data/principles";

const checklistItems = [
  "Who benefits from this AI system?",
  "Who could be excluded or disadvantaged?",
  "Are the training and evaluation datasets representative of all affected groups?",
  "Has the system been tested across relevant demographic groups?",
  "Are local languages and accessibility needs supported?",
  "Is meaningful consent possible for users?",
  "Can users understand how important decisions are made?",
  "Can users appeal or challenge decisions that affect them?",
  "Who is accountable when the system causes harm?",
  "Is there a mechanism for continuous monitoring and review?",
  "Have the environmental impacts of development and operation been considered?",
];

const GovernanceGuidelines: React.FC = () => {
  const [checked, setChecked] = useState<boolean[]>(checklistItems.map(() => false));

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const checkedCount = checked.filter(Boolean).length;

  return (
    <section
      id="governance"
      className="py-24 bg-warm-white"
      aria-labelledby="governance-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
              Section 06
            </p>
            <h2
              id="governance-heading"
              className="section-heading mb-4"
            >
              Governance & Guidelines
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Eight principles for responsible AI governance, grounded in the ethical
              themes that emerged across all six portfolio assignments — with a practical
              pre-deployment checklist for AI practitioners.
            </p>
          </div>
        </SectionReveal>

        {/* Eight principle cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {principles.map((principle, i) => (
            <SectionReveal key={principle.id} delay={i * 60}>
              <PrincipleCard principle={principle} index={i} />
            </SectionReveal>
          ))}
        </div>

        <hr className="divider" />

        {/* Pre-deployment checklist */}
        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <h3 className="section-subheading mb-2">
              Pre-Deployment Responsible AI Checklist
            </h3>
            <p className="text-charcoal-light text-base leading-relaxed mb-8">
              Before deploying an AI system, practitioners and organisations should be
              able to answer each of the following questions. This checklist is adapted
              from the ethical principles developed in this portfolio.
            </p>

            <div
              className="card-base"
              role="group"
              aria-labelledby="checklist-heading"
            >
              <div className="flex items-center justify-between mb-6">
                <h4
                  id="checklist-heading"
                  className="font-display text-lg font-bold text-navy"
                >
                  Responsible AI Checklist
                </h4>
                <div className="text-right">
                  <p className="text-2xl font-bold font-display text-teal">
                    {checkedCount}/{checklistItems.length}
                  </p>
                  <p className="text-xs text-charcoal-light">completed</p>
                </div>
              </div>

              {/* Progress bar */}
              <div
                className="w-full h-2 bg-border-light rounded-full mb-6 overflow-hidden"
                role="progressbar"
                aria-valuenow={checkedCount}
                aria-valuemin={0}
                aria-valuemax={checklistItems.length}
                aria-label={`${checkedCount} of ${checklistItems.length} checklist items completed`}
              >
                <div
                  className="h-full bg-teal rounded-full transition-all duration-500"
                  style={{ width: `${(checkedCount / checklistItems.length) * 100}%` }}
                />
              </div>

              <ul className="space-y-2" role="list">
                {checklistItems.map((item, i) => (
                  <li key={i}>
                    <label
                      className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors duration-150
                        hover:bg-warm-white-dark
                        ${checked[i] ? "bg-teal-pale" : ""}`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={checked[i]}
                          onChange={() => toggle(i)}
                          className="sr-only"
                          aria-label={item}
                        />
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-150
                            ${checked[i] ? "bg-teal border-teal" : "border-charcoal-light bg-white"}`}
                          aria-hidden="true"
                        >
                          {checked[i] && (
                            <svg
                              className="w-3 h-3 text-white"
                              viewBox="0 0 12 12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 6l3 3 5-5" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          checked[i] ? "text-teal line-through" : "text-charcoal"
                        }`}
                      >
                        {item}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>

              {checkedCount === checklistItems.length && (
                <div
                  className="mt-6 p-4 bg-teal-pale border border-teal/20 rounded-xl text-center"
                  role="status"
                  aria-live="polite"
                >
                  <p className="text-teal font-semibold text-sm">
                    ✓ All checklist items completed — a strong foundation for responsible AI deployment.
                  </p>
                </div>
              )}

              <p className="mt-4 text-xs text-charcoal-light italic">
                Note: Completing this checklist does not guarantee that a system is fully
                responsible or safe. It is a starting point for structured reflection,
                not a substitute for comprehensive ethical review and independent audit.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default GovernanceGuidelines;
