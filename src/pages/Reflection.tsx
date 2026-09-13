import React from "react";
import SectionReveal from "../components/ui/SectionReveal";
import ArtifactBadge from "../components/ui/ArtifactBadge";

interface EthicsSection {
  id: string;
  heading: string;
  content: string[];
}

const ethicsSections: EthicsSection[] = [
  {
    id: "intro",
    heading: "Introduction",
    content: [
      "Artificial intelligence presents one of the most significant governance challenges of the twenty-first century — not because it is inherently dangerous, but because its benefits and risks are not distributed equally. Across healthcare, finance, education, employment, and public services, AI systems are making or influencing consequential decisions about people's lives. Yet the communities most affected by these decisions are often the least involved in shaping them.",
      "This ethical analysis examines global AI governance and inequalities through multiple ethical lenses — utilitarian, deontological, rights-based, and care ethics — to argue that AI must be evaluated not only by whether it is innovative or efficient, but by who benefits, who is excluded, who is responsible, and who has the power to challenge the system.",
      "The analysis draws on insights developed across six semester assignments examining AI in banking, mapping, healthcare, recruitment, education, and facial recognition. Each assignment revealed recurring patterns of bias, opacity, accountability gaps, and unequal access — patterns that are not individual failures but systemic features of how AI is currently developed and governed.",
    ],
  },
  {
    id: "inequalities",
    heading: "Global Inequalities in AI",
    content: [
      "AI inequalities operate across multiple dimensions. Infrastructure inequality concentrates the physical and digital resources needed for AI development in wealthy countries. Dataset inequality means that training data disproportionately represents certain populations, leading to systematically worse performance for underrepresented groups. Language inequality creates measurably different experiences for speakers of non-dominant languages. Economic inequality concentrates AI development power in a handful of corporations. Governance inequality shapes international AI policy primarily through the priorities of high-income countries. Accountability inequality leaves those most harmed by AI with the fewest tools to seek redress.",
      "These dimensions compound each other. Communities that cannot access AI are not represented in its training data. Communities that are not represented have less power over how AI is designed. Communities without power are subject to AI decisions they cannot contest. And communities with limited legal resources or regulatory frameworks are least able to hold AI systems accountable.",
      "The Global North–South divide in AI is real and consequential. It is not merely a matter of technological lag — it reflects structural inequalities in capital, infrastructure, research capacity, regulatory influence, and political power that predate AI but are now being encoded into its systems and governance frameworks.",
    ],
  },
  {
    id: "utilitarian",
    heading: "Utilitarian Perspective",
    content: [
      "A utilitarian analysis evaluates AI systems by their consequences for overall wellbeing. This raises two distinct questions: how large are the aggregate benefits of AI, and how equitably are those benefits and harms distributed?",
      "On aggregate benefits, the case for AI is strong. Improvements in healthcare diagnostics, fraud detection, educational support, and public services have the potential to produce substantial improvements in human welfare. A naive utilitarian analysis might conclude that, if aggregate benefits outweigh aggregate harms, AI systems are justified even if some groups bear disproportionate costs.",
      "However, this conclusion is inadequate. Utilitarian ethics — particularly in its preference utilitarian forms — does not require only that aggregate benefits exceed aggregate harms. It requires that the preferences and welfare of all affected people count equally. When AI systems perform significantly worse for communities of colour, women, speakers of minority languages, or people with disabilities, those harms count in the utilitarian calculus and must be weighed against the benefits received by better-served groups.",
      "Moreover, utilitarian ethics includes a concern for preference satisfaction and autonomy. People who cannot understand AI decisions made about them, or who cannot challenge those decisions, have their autonomy frustrated in ways that reduce overall welfare. A truly utilitarian account of AI must include the disutility of opacity, inaccessibility, and the absence of meaningful contestation.",
    ],
  },
  {
    id: "deontological",
    heading: "Deontological Perspective",
    content: [
      "A deontological analysis evaluates AI systems not by their outcomes, but by whether they respect the inherent dignity of persons and comply with universal moral duties. From this perspective, the question is not whether AI produces net benefits, but whether it treats people as ends in themselves — as autonomous agents whose dignity must be respected — rather than as means to other ends.",
      "Several features of current AI governance fail this deontological test. Automated decision-making without meaningful explanation or contestation denies affected individuals the ability to understand and respond to decisions made about them — a violation of their status as rational agents. Training AI systems on data collected without genuine informed consent treats data subjects as resources rather than persons.",
      "Deontological ethics also generates specific duties for AI developers and deployers. The duty to inform — to disclose that AI is being used and to explain consequential decisions. The duty not to deceive — to avoid creating AI systems that mislead or manipulate. The duty to respect autonomy — to ensure that people can exercise genuine control over AI decisions affecting them. And the duty of non-discrimination — to refuse to design or deploy systems that systematically disadvantage groups of people on arbitrary grounds.",
      "From this perspective, AI systems that are technically effective but fail to respect these duties are not ethically justified, regardless of their aggregate benefits.",
    ],
  },
  {
    id: "rights",
    heading: "Rights-Based Perspective",
    content: [
      "A rights-based analysis examines whether AI systems respect, protect, and fulfil the fundamental rights of those they affect. Key rights at stake include the right to equality and non-discrimination, the right to privacy, the right to an explanation for automated decisions, the right to contest automated decisions, the right to access information and services, and the right to human dignity.",
      "International human rights frameworks — including the UN Declaration of Human Rights and regional instruments — increasingly recognise that these rights apply in digital contexts. The UN Recommendations on AI Ethics (2021) explicitly grounds AI governance in human rights principles, recognising that AI can threaten human rights through discrimination, surveillance, opacity, and the erosion of democratic accountability.",
      "The rights-based framework is particularly important for addressing AI inequalities. If access to AI-powered public services is a human right, then ensuring accessibility across languages, devices, and digital literacy levels is not merely good practice but a legal and ethical obligation. If protection from algorithmic discrimination is a human right, then regular bias auditing and accessible appeal mechanisms are not optional features but essential requirements.",
      "Rights-based analysis also highlights the accountability gap. Human rights obligations require not only that rights be respected, but that effective remedies be available when they are violated. The current absence of clear AI accountability frameworks — who is legally responsible when an AI system causes harm, and how can affected individuals seek redress — is a fundamental human rights concern.",
    ],
  },
  {
    id: "care-ethics",
    heading: "Care Ethics Perspective",
    content: [
      "Care ethics offers a distinctive contribution to AI governance by foregrounding relationships, context, and the particular needs of vulnerable people — elements often invisible in more abstract ethical frameworks. Rather than asking what universal principles AI must follow, care ethics asks: who is affected, what are their specific needs, and what responsibilities do developers, deployers, and policymakers have to those who are most vulnerable?",
      "From a care ethics perspective, the dominant approach to AI development — focused on optimising aggregate performance metrics rather than attending to the needs of the most vulnerable — reflects a systematic failure of care. A healthcare AI system that achieves high overall diagnostic accuracy while performing significantly worse for certain demographic groups is not a success from a care ethics perspective. The harm to the most vulnerable is not offset by benefits to the better-served.",
      "Care ethics also highlights the relational dimensions of AI accountability. When an AI system makes a decision about a person — denying them a loan, flagging their job application for rejection, generating a medical diagnosis — there is a relationship of power and dependence. Care ethics demands that this relationship be structured to support the dignity and wellbeing of the less powerful party, not merely to optimise the interests of the more powerful.",
      "For AI governance, care ethics suggests prioritising the needs of marginalised groups in system design, resisting one-size-fits-all solutions that ignore contextual variation, and requiring genuine accountability not as a legal compliance exercise but as an expression of genuine concern for those affected.",
    ],
  },
  {
    id: "recommendations",
    heading: "Governance Recommendations",
    content: [
      "Drawing together the ethical analysis across all four frameworks, this portfolio proposes the following governance recommendations for more equitable and accountable AI:",
      "First, governance must be genuinely inclusive. AI policy development must actively include voices from the Global South, minority communities, disability rights advocates, and others currently underrepresented in AI governance discussions. Consultation alone is insufficient; meaningful participation requires structural changes to who is at the table and on what terms.",
      "Second, transparency and explainability must be operationalised, not just stated. Regulatory frameworks must define minimum standards for what constitutes meaningful explanation of AI decisions in different contexts, and must provide accessible mechanisms for individuals to understand decisions made about them.",
      "Third, contestation must be genuine and accessible. Appeals processes for AI decisions must be easily discoverable, timely, genuine (not performative), and independent. Legal aid and regulatory support should be available for individuals challenging consequential automated decisions.",
      "Fourth, accountability must be clearly assigned. Developers, deployers, and operators of AI systems must face clear legal liability for harm caused by those systems, with liability frameworks that do not allow responsibility to be diffused across supply chains to the point of meaninglessness.",
      "Fifth, AI governance must be adaptive. Regular mandatory review cycles, independent auditing requirements, and continuous bias monitoring are essential to ensure that governance frameworks keep pace with rapidly developing technology.",
    ],
  },
  {
    id: "conclusion",
    heading: "Conclusion",
    content: [
      "The ethical analysis presented in this portfolio leads to a clear conclusion: AI systems cannot be evaluated only by asking whether they are innovative, efficient, or technically successful. They must also be evaluated by asking who benefits, who is excluded, who is responsible, and who has the power to challenge the system.",
      "The six semester assignments examined in this portfolio — covering banking, mapping, healthcare, recruitment, education, and facial recognition — reveal that these questions are not abstract philosophical concerns. They are urgent practical issues that affect real people, in consequential ways, every day.",
      "Responsible AI governance requires a fundamental shift in perspective: from optimising AI systems for aggregate performance to ensuring that they serve the full diversity of people they affect, with particular attention to those who are most vulnerable and least powerful. This is not a constraint on AI innovation. It is the precondition for AI that genuinely deserves to be called beneficial.",
    ],
  },
];

const Reflection: React.FC = () => {
  return (
    <section
      id="reflection"
      className="py-24 bg-warm-white-dark"
      aria-labelledby="reflection-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
              Section 07
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2 id="reflection-heading" className="section-heading">
                Reflection
              </h2>
              <ArtifactBadge type="analysis" />
            </div>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Ethical analysis and personal learning reflection connecting six semester
              assignments to the broader theme of global AI governance and inequalities.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Ethical Analysis — main article */}
          <div className="lg:col-span-2">
            <SectionReveal>
              <div className="card-base mb-8">
                <ArtifactBadge type="analysis" className="mb-4" />
                <h3 className="font-display text-3xl font-bold text-navy mb-2 leading-tight">
                  Ethical Analysis: Global AI Governance and Inequalities
                </h3>
                <p className="text-charcoal-light text-sm italic mb-6 border-b border-border-light pb-4">
                  Digital Ethics Portfolio · CIA 3 Component 2
                </p>

                {ethicsSections.map((s, i) => (
                  <SectionReveal key={s.id} delay={i * 60}>
                    <div className="mb-8">
                      <h4 className="font-display text-xl font-bold text-navy mb-4 border-l-4 border-teal pl-4">
                        {s.heading}
                      </h4>
                      {s.content.map((para, j) => (
                        <p
                          key={j}
                          className={`text-charcoal leading-relaxed ${j < s.content.length - 1 ? "mb-4" : ""}`}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Sidebar: Personal Reflection */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <SectionReveal>
                <div className="card-base">
                  <h3 className="font-display text-xl font-bold text-navy mb-4">
                    My Learning Reflection
                  </h3>
                  <div className="space-y-4 text-sm text-charcoal leading-relaxed">
                    <p>
                      When I began these six assignments, I was primarily focused on
                      the technical and ethical dimensions of individual AI systems.
                      As the semester progressed, I began to see that the same ethical
                      challenges appeared again and again — across different domains,
                      different systems, different contexts.
                    </p>
                    <p>
                      In banking fraud detection, I encountered the problem of bias and
                      false positives affecting certain customers more than others. In
                      the Google Maps audit, I found that providing privacy settings
                      does not automatically create meaningful consent. In the cancer
                      detection analysis, I saw how a technically impressive model
                      could still produce unequal outcomes for underrepresented patients.
                    </p>
                    <p>
                      In the TRACE recruitment analysis, I confronted the reality that
                      AI efficiency can come at the cost of transparency and contestability.
                      In the Study Habit Analyzer, I realised that personalisation
                      is not neutral — it reflects assumptions about whose learning
                      conditions are normal. And in the facial recognition poster,
                      I brought together all these themes: surveillance, error rates,
                      discrimination, and accountability.
                    </p>
                    <p>
                      This portfolio connects those six assignments to a larger argument:
                      that AI inequalities are not accidents or edge cases. They are
                      structural features of how AI is built, deployed, and governed —
                      and they will persist unless we actively design governance systems
                      to address them.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Assignment connections */}
              <SectionReveal delay={100}>
                <div className="card-base">
                  <h4 className="font-display text-base font-bold text-navy mb-4">
                    Assignment Connections
                  </h4>
                  <ul className="space-y-2" role="list">
                    {[
                      { label: "Banking", theme: "Bias & Accountability" },
                      { label: "Google Maps", theme: "Privacy & Consent" },
                      { label: "Cancer Detection", theme: "Safety & Equity" },
                      { label: "Recruitment", theme: "Transparency & Fairness" },
                      { label: "Study Analyzer", theme: "Inclusion & Privacy" },
                      { label: "Facial Recognition", theme: "Surveillance & Rights" },
                    ].map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center justify-between text-xs p-2 bg-warm-white-dark rounded-lg"
                      >
                        <span className="font-semibold text-navy">{item.label}</span>
                        <span className="text-teal">{item.theme}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>

              {/* Final statement */}
              <SectionReveal delay={150}>
                <div className="bg-navy text-white rounded-xl p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3">
                    Core Argument
                  </p>
                  <p className="font-display text-base font-semibold text-white leading-relaxed mb-3">
                    "AI should not be evaluated only by asking whether it is innovative
                    or efficient."
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    It should also be evaluated by asking:
                  </p>
                  <ul className="mt-3 space-y-2" role="list">
                    {[
                      "Who benefits?",
                      "Who is excluded?",
                      "Who is responsible?",
                      "Who has the power to challenge the system?",
                    ].map((q) => (
                      <li
                        key={q}
                        className="flex items-start gap-2 text-sm text-white/90"
                      >
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflection;
