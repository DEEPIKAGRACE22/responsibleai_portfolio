import React from "react";
import SectionReveal from "../components/ui/SectionReveal";

const inequalityTypes = [
  {
    icon: "🌐",
    title: "Access Inequality",
    detail:
      "Unequal access to reliable internet, computing devices, and digital literacy means many people cannot use AI-powered services, even when they exist.",
  },
  {
    icon: "🗄️",
    title: "Data Inequality",
    detail:
      "Training datasets over-represent certain groups, geographies, and languages. Systems trained on such data perform better for some populations than others.",
  },
  {
    icon: "🗣️",
    title: "Language Inequality",
    detail:
      "The majority of AI training data is in English. Models perform significantly less accurately for speakers of minority, regional, and low-resource languages.",
  },
  {
    icon: "💰",
    title: "Economic Inequality",
    detail:
      "The enormous capital required to develop and operate AI systems is concentrated in a small number of corporations and high-income nations.",
  },
  {
    icon: "⚙️",
    title: "Decision-Making Inequality",
    detail:
      "Communities most affected by AI systems often have the least influence over how those systems are designed, governed, or evaluated.",
  },
  {
    icon: "🗺️",
    title: "Geographical Inequality",
    detail:
      "AI infrastructure, research institutions, and regulatory frameworks are concentrated in specific regions, creating uneven global access and influence.",
  },
  {
    icon: "🏛️",
    title: "Cultural Inequality",
    detail:
      "AI systems embed cultural assumptions, values, and norms from their development context, which may not align with or respect other cultural frameworks.",
  },
];

const pipelineSteps = [
  { label: "Access", icon: "🌐", color: "bg-teal text-white" },
  { label: "Representation", icon: "📊", color: "bg-soft-blue text-white" },
  { label: "Power", icon: "⚡", color: "bg-muted-orange text-white" },
  { label: "Decisions", icon: "⚖️", color: "bg-navy text-white" },
  { label: "Accountability", icon: "📋", color: "bg-teal text-white" },
];

const TheIssue: React.FC = () => {
  return (
    <section
      id="the-issue"
      className="py-24 bg-warm-white-dark"
      aria-labelledby="issue-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
              Section 02
            </p>
            <h2
              id="issue-heading"
              className="section-heading mb-4"
            >
              The Issue
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Understanding global AI governance, the nature of AI inequalities, and
              the structural divide between Global North and Global South.
            </p>
          </div>
        </SectionReveal>

        {/* 1. Understanding Global AI Governance */}
        <SectionReveal>
          <div className="card-base mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="section-subheading mb-4">
                  Understanding Global AI Governance
                </h3>
                <p className="text-charcoal leading-relaxed mb-4">
                  Global AI governance refers to the collection of principles, policies,
                  institutions, standards, and accountability mechanisms used to guide the
                  development, deployment, and use of AI systems across different countries
                  and contexts. It encompasses both formal regulatory frameworks — such as
                  the EU AI Act and the OECD AI Principles — and informal norms, industry
                  standards, and civil society advocacy that shape how AI is built and used.
                </p>
                <p className="text-charcoal leading-relaxed mb-4">
                  Effective AI governance is not only about preventing harms. It is about
                  actively shaping AI development to serve the public interest: ensuring
                  that AI systems are safe, transparent, accountable, and equitable across
                  the full diversity of people they affect.
                </p>
                <p className="text-charcoal leading-relaxed">
                  The challenge is that AI governance is currently fragmented across national
                  jurisdictions, industry self-regulation, and international bodies with
                  limited enforcement powers. This fragmentation creates gaps that allow harms
                  to occur, particularly in communities with less political voice or regulatory
                  capacity.
                </p>
              </div>
              <div className="lg:col-span-1 bg-navy/5 rounded-xl p-6 flex flex-col justify-center">
                <h4 className="font-display text-lg font-bold text-navy mb-4">
                  Key Governance Elements
                </h4>
                <ul className="space-y-3" role="list">
                  {[
                    "International principles and standards",
                    "National legal and regulatory frameworks",
                    "Corporate governance and ethics policies",
                    "Technical standards and audit mechanisms",
                    "Civil society oversight and advocacy",
                    "Community participation and accountability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.28 5.28L7.5 10.06 5.22 7.78a.75.75 0 00-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l4.25-4.25a.75.75 0 00-1.06-1.06z"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* 2. What Are AI Inequalities? */}
        <SectionReveal>
          <div className="mb-10">
            <h3 className="section-subheading mb-6">What Are AI Inequalities?</h3>
            <p className="text-charcoal-light leading-relaxed mb-8 max-w-3xl">
              AI inequalities are the systematic differences in who benefits from AI
              systems, who bears the risks, and who has the power to shape how AI
              is built and governed. These inequalities operate across multiple dimensions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {inequalityTypes.map((item, i) => (
                <SectionReveal key={item.title} delay={i * 60}>
                  <div className="card-base h-full">
                    <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                    <h4 className="font-display text-base font-bold text-navy mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* 3. Global North–South Divide */}
        <SectionReveal>
          <div className="card-base mb-10 border-l-4 border-muted-orange">
            <h3 className="section-subheading mb-4">The Global North–South Divide</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-charcoal leading-relaxed mb-4">
                  The development and governance of AI is deeply shaped by existing global
                  inequalities. High-income countries — particularly the United States,
                  China, and European nations — hold disproportionate advantages in the
                  critical resources required to lead in AI:
                </p>
                <ul className="space-y-2 mb-4" role="list">
                  {[
                    "Access to venture capital and corporate investment",
                    "Advanced computing infrastructure and data centres",
                    "Research universities and technical expertise",
                    "Large, high-quality, labelled datasets",
                    "Regulatory influence in international bodies",
                    "Capacity to attract and retain AI researchers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-orange flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-charcoal leading-relaxed mb-4">
                  This concentration of AI power means that the needs, contexts, languages,
                  and values of lower-income countries are underrepresented both in how AI
                  is built and in how it is governed. AI systems designed for high-income
                  contexts may not function equitably — or at all — in environments with
                  different infrastructure, languages, or social needs.
                </p>
                <div className="bg-muted-orange-pale border border-muted-orange/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-muted-orange mb-2">
                    Why this matters for governance
                  </p>
                  <p className="text-sm text-charcoal leading-relaxed">
                    Meaningful AI governance cannot be imposed from high-income countries
                    alone. Effective and equitable governance must include local researchers,
                    civil society organisations, affected communities, and regional
                    perspectives — not merely as consultees, but as genuine participants
                    in shaping the rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Visual pipeline */}
        <SectionReveal>
          <div className="card-base">
            <h3 className="font-display text-xl font-bold text-navy mb-2 text-center">
              The AI Inequality Chain
            </h3>
            <p className="text-sm text-charcoal-light text-center mb-8">
              Inequality compounds at each stage — from who can access AI to who can challenge its decisions.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 flex-wrap"
              role="list"
              aria-label="AI inequality chain: Access, Representation, Power, Decisions, Accountability"
            >
              {pipelineSteps.map((step, i) => (
                <React.Fragment key={step.label}>
                  <div
                    role="listitem"
                    className="flex flex-col items-center gap-2 min-w-[80px]"
                  >
                    <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center text-xl shadow-md`} aria-hidden="true">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold text-charcoal text-center leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <div className="sm:flex-1 flex justify-center items-center py-1 sm:py-0 sm:px-1" aria-hidden="true">
                      <svg className="hidden sm:block w-8 h-4 text-charcoal-light" viewBox="0 0 32 16" fill="currentColor">
                        <path d="M0 8h28M24 2l6 6-6 6"/>
                      </svg>
                      <svg className="sm:hidden w-4 h-8 text-charcoal-light" viewBox="0 0 16 32" fill="currentColor">
                        <path d="M8 0v28M2 24l6 6 6-6"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs text-charcoal-light text-center mt-6 max-w-2xl mx-auto">
              Each arrow represents a compounding layer of inequality. Those who cannot access AI
              are not represented in its data. Those not represented have no power over its design.
              Those without power are subject to decisions they cannot understand or contest.
              And accountability — the ability to seek redress — is least available to those most harmed.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default TheIssue;
