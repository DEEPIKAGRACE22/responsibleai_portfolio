import React from "react";
import SectionReveal from "../components/ui/SectionReveal";
import ArtifactBadge from "../components/ui/ArtifactBadge";
import EthicalDecisionTool from "../components/interactive/EthicalDecisionTool";
import { generativeArtifacts } from "../data/generativeArtifacts";
import type { PosterContent, ScenarioContent } from "../data/generativeArtifacts";

const PosterArtifact: React.FC<{ content: PosterContent; title: string }> = ({
  content,
  title,
}) => (
  <div className="card-base bg-navy text-white border-navy h-full">
    <ArtifactBadge type="new" className="mb-4" />
    <h3 className="font-display text-xl font-bold text-white mb-4 leading-tight">
      {title}
    </h3>
    <p className="text-teal-light text-base font-semibold leading-relaxed mb-6 italic">
      "{content.tagline}"
    </p>

    <div className="mb-6">
      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
        Key Questions
      </p>
      <ul className="space-y-2.5" role="list">
        {content.questions.map((q, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/85">
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full bg-teal text-white text-xs flex items-center justify-center font-bold mt-0.5"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            {q}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-auto pt-4 border-t border-white/10">
      <p className="text-white font-display text-sm font-semibold leading-relaxed">
        {content.closing}
      </p>
    </div>
  </div>
);

const ScenarioArtifact: React.FC<{ content: ScenarioContent; title: string }> = ({
  content,
  title,
}) => (
  <article className="card-base h-full flex flex-col">
    <ArtifactBadge type="scenario" className="mb-4" />
    <h3 className="font-display text-xl font-bold text-navy mb-4 leading-tight">
      {title}
    </h3>

    <div className="space-y-4 flex-1">
      <div className="bg-warm-white-dark rounded-lg p-4 border-l-2 border-soft-blue">
        <p className="text-xs font-bold uppercase tracking-wide text-soft-blue mb-2">
          Setup
        </p>
        <p className="text-sm text-charcoal leading-relaxed">{content.setup}</p>
      </div>

      <div className="bg-warm-white-dark rounded-lg p-4 border-l-2 border-muted-orange">
        <p className="text-xs font-bold uppercase tracking-wide text-muted-orange mb-2">
          What Happens
        </p>
        <p className="text-sm text-charcoal leading-relaxed">{content.situation}</p>
      </div>

      <div className="bg-warm-white-dark rounded-lg p-4 border-l-2 border-teal">
        <p className="text-xs font-bold uppercase tracking-wide text-teal mb-2">
          Analysis
        </p>
        <p className="text-sm text-charcoal leading-relaxed">{content.analysis}</p>
      </div>
    </div>

    <div className="mt-4 p-3 bg-navy/5 rounded-lg border border-navy/10">
      <p className="text-xs font-bold text-navy uppercase tracking-wide mb-1">
        Implication for AI Governance
      </p>
      <p className="text-xs text-charcoal leading-relaxed italic">
        {content.implication}
      </p>
    </div>
  </article>
);

const GenerativeAILab: React.FC = () => {
  const posterArtifact = generativeArtifacts[0];
  const scenarioArtifacts = generativeArtifacts.slice(1);

  return (
    <section
      id="genai-lab"
      className="py-24 bg-warm-white"
      aria-labelledby="genai-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-3xl mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
              Section 05
            </p>
            <div className="flex items-center gap-3 mb-4">
              <h2 id="genai-heading" className="section-heading">
                Generative AI Lab
              </h2>
              <ArtifactBadge type="new" />
            </div>
            <p className="text-charcoal-light text-lg leading-relaxed">
              New creative artifacts developed for this portfolio, using generative AI
              tools to explore, illustrate, and communicate ethical issues in AI governance
              and inequalities.
            </p>
          </div>
        </SectionReveal>

        {/* Disclosure */}
        <SectionReveal delay={80}>
          <div className="mb-12 p-4 bg-muted-orange-pale border border-muted-orange/20 rounded-xl flex items-start gap-3">
            <svg
              className="w-5 h-5 text-muted-orange flex-shrink-0 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-muted-orange mb-1">
                Important Disclosure
              </p>
              <p className="text-sm text-charcoal leading-relaxed">
                The scenarios on this page are{" "}
                <strong>creative educational examples</strong> and are{" "}
                <strong>not claims about a specific AI product</strong> unless supported by
                a cited source. They are designed to illustrate structural issues in AI
                governance and inequalities, not to make empirical claims about any
                particular system's performance.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Poster artifact */}
        <SectionReveal>
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PosterArtifact
              content={posterArtifact.content as PosterContent}
              title={posterArtifact.title}
            />
            <div className="card-base flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
                  About This Artifact
                </p>
                <h3 className="font-display text-xl font-bold text-navy mb-4">
                  AI-Generated Awareness Poster
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  This awareness poster was created using generative AI tools as part of
                  a creative exploration of how AI can be used to communicate ethical
                  principles. The content was drafted, reviewed, and edited by the student
                  to ensure accuracy and alignment with the portfolio's themes.
                </p>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  The poster is designed to communicate a core argument of this portfolio
                  in an accessible, visual format: that AI cannot be evaluated only on
                  technical performance — it must also be evaluated on who benefits,
                  who is excluded, and who can challenge its decisions.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border-light">
                <p className="text-xs text-charcoal-light italic">
                  The questions in this poster reflect the responsible AI checklist
                  developed in the Governance & Guidelines section of this portfolio.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Scenario artifacts */}
        <SectionReveal>
          <h3 className="font-display text-2xl font-bold text-navy mb-2">
            Illustrative Scenarios
          </h3>
          <p className="text-charcoal-light text-sm leading-relaxed mb-6 max-w-3xl">
            These three scenarios are original creative writing produced for this portfolio.
            They are labelled as illustrative scenarios and are not empirical evidence.
            Each scenario illustrates a structural pattern in AI inequality documented
            by existing academic and policy research.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {scenarioArtifacts.map((artifact, i) => (
            <SectionReveal key={artifact.id} delay={i * 80}>
              <ScenarioArtifact
                content={artifact.content as ScenarioContent}
                title={artifact.title}
              />
            </SectionReveal>
          ))}
        </div>

        <hr className="divider" />

        {/* Interactive Ethical Decision Tool */}
        <SectionReveal>
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="font-display text-2xl font-bold text-navy">
                Who Should Be Responsible?
              </h3>
              <ArtifactBadge type="new" />
            </div>
            <p className="text-charcoal-light text-base leading-relaxed max-w-3xl">
              An interactive ethical decision tool. Select a domain, then choose an
              approach to see the ethical analysis and a recommended position. This tool
              is designed to encourage reflection, not to provide definitive answers —
              ethical decisions in real contexts depend on local knowledge, legal
              frameworks, and community needs.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="card-base">
            <EthicalDecisionTool />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default GenerativeAILab;
