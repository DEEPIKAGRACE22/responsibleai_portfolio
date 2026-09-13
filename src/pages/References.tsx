import React from "react";
import SectionReveal from "../components/ui/SectionReveal";
import {
  assignmentReferences,
  researchReferences,
  aiDisclosureText,
} from "../data/references";

const References: React.FC = () => {
  return (
    <section
      id="references"
      className="py-24 bg-warm-white"
      aria-labelledby="references-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
              Section 08
            </p>
            <h2
              id="references-heading"
              className="section-heading mb-4"
            >
              References
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed">
              References cited in this portfolio, organised by section, followed by
              a disclosure of how generative AI tools were used in its development.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Assignment References */}
            <SectionReveal>
              <div className="card-base">
                <h3 className="font-display text-xl font-bold text-navy mb-6 pb-4 border-b border-border-light">
                  Existing Assignment References
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed mb-6">
                  The following six items are the original semester assignments that form
                  the foundation of this portfolio. Each contains its own internal
                  bibliography of verified academic and professional sources.
                </p>
                <ul className="space-y-4" role="list">
                  {assignmentReferences.map((ref) => (
                    <li
                      key={ref.id}
                      className="flex items-start gap-3 p-3 bg-warm-white-dark rounded-lg"
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded bg-soft-blue-pale text-soft-blue text-xs flex items-center justify-center font-bold mt-0.5"
                        aria-hidden="true"
                      >
                        A
                      </span>
                      <div>
                        <p className="text-sm font-medium text-charcoal leading-tight">
                          {ref.title}
                        </p>
                        {ref.note && (
                          <p className="text-xs text-charcoal-light mt-0.5 italic">
                            {ref.note}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            {/* Research References */}
            <SectionReveal>
              <div className="card-base">
                <h3 className="font-display text-xl font-bold text-navy mb-6 pb-4 border-b border-border-light">
                  Additional Research References
                </h3>
                <ul className="space-y-5" role="list">
                  {researchReferences.map((ref) => (
                    <li
                      key={ref.id}
                      className={`flex items-start gap-3 ${
                        ref.isPlaceholder
                          ? "p-3 border-2 border-dashed border-muted-orange/40 rounded-lg bg-muted-orange-pale"
                          : ""
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded text-xs flex items-center justify-center font-bold mt-0.5 ${
                          ref.isPlaceholder
                            ? "bg-muted-orange-pale text-muted-orange border border-muted-orange/30"
                            : "bg-teal-pale text-teal"
                        }`}
                        aria-hidden="true"
                      >
                        {ref.isPlaceholder ? "?" : "R"}
                      </span>
                      <div>
                        {ref.isPlaceholder ? (
                          <>
                            <p className="text-sm font-medium text-muted-orange italic">
                              {ref.title}
                            </p>
                            {ref.note && (
                              <p className="text-xs text-muted-orange/70 mt-0.5">
                                {ref.note}
                              </p>
                            )}
                          </>
                        ) : (
                          <>
                            <p className="text-sm text-charcoal leading-snug">
                              {ref.authors && (
                                <span className="font-semibold">{ref.authors}</span>
                              )}
                              {ref.year && (
                                <span className="text-charcoal-light"> ({ref.year}). </span>
                              )}
                              <span className="italic">{ref.title}.</span>
                              {ref.source && (
                                <span className="text-charcoal-light"> {ref.source}.</span>
                              )}
                            </p>
                            {ref.url && (
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-teal hover:underline mt-0.5 inline-block"
                                aria-label={`Open ${ref.title} in a new tab`}
                              >
                                {ref.url} ↗
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Use Disclosure */}
            <SectionReveal>
              <div className="card-base border-2 border-teal/20">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3a1 1 0 011 1v4a1 1 0 01-2 0V5a1 1 0 011-1zm0 8a1 1 0 110-2 1 1 0 010 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy mb-0.5">
                      AI Use Disclosure
                    </h3>
                    <p className="text-xs text-charcoal-light">
                      Academic integrity statement
                    </p>
                  </div>
                </div>
                <p className="text-sm text-charcoal leading-relaxed">
                  {aiDisclosureText}
                </p>
              </div>
            </SectionReveal>

            {/* Portfolio summary */}
            <SectionReveal delay={120}>
              <div className="card-base bg-navy text-white border-navy">
                <h4 className="font-display text-base font-bold text-white mb-4">
                  Portfolio Summary
                </h4>
                <dl className="space-y-2 text-sm">
                  {[
                    { term: "Student", detail: "Deepika Grace T T" },
                    { term: "Assessment", detail: "CIA 3 Component 2" },
                    { term: "Subject", detail: "Responsible AI Ethics" },
                    { term: "Assignments", detail: "6 semester submissions" },
                    { term: "New Artifacts", detail: "4 creative artifacts" },
                    { term: "Ethical Frameworks", detail: "4 perspectives" },
                  ].map((item) => (
                    <div key={item.term} className="flex justify-between gap-3">
                      <dt className="text-white/60">{item.term}</dt>
                      <dd className="text-white font-medium text-right">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
