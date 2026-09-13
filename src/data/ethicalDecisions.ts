export type Sector = "healthcare" | "recruitment" | "education" | "banking" | "public-services";
export type DecisionOption = "automated" | "ai-assisted" | "human-only";

export interface DecisionScenario {
  sector: Sector;
  label: string;
  icon: string;
  context: string;
  options: {
    type: DecisionOption;
    label: string;
    description: string;
  }[];
  explanations: Record<
    DecisionOption,
    {
      analysis: string;
      ethicalRisks: string[];
      recommendation: string;
      recommended: boolean;
    }
  >;
}

export const ethicalDecisions: DecisionScenario[] = [
  {
    sector: "healthcare",
    label: "Healthcare",
    icon: "🏥",
    context:
      "An AI system analyses medical images to flag potential cancer indicators and generates a diagnosis recommendation for a patient.",
    options: [
      {
        type: "automated",
        label: "Fully Automated Decision",
        description:
          "The AI generates a diagnosis and treatment recommendation without any clinical review.",
      },
      {
        type: "ai-assisted",
        label: "AI-Assisted with Human Oversight",
        description:
          "The AI flags and prioritises cases; a qualified clinician makes the final diagnosis and treatment decision.",
      },
      {
        type: "human-only",
        label: "Human Decision Without AI",
        description:
          "A clinician reviews all images without AI assistance, relying solely on clinical expertise.",
      },
    ],
    explanations: {
      automated: {
        analysis:
          "Fully automated medical diagnosis is high-risk. AI models trained on datasets that underrepresent certain demographic groups may produce systematically less accurate results for those populations. Without human review, errors may not be caught before harm occurs. There is also no clear accountability when a fully automated system causes harm.",
        ethicalRisks: [
          "Demographic bias producing unequal diagnostic accuracy",
          "No clinical judgment to catch edge cases",
          "Unclear accountability when automated diagnosis is wrong",
          "Patient autonomy is undermined without explanation",
        ],
        recommendation:
          "Not recommended for consequential medical decisions. Fully automated diagnosis without human oversight is inconsistent with safe clinical practice and most medical ethics standards.",
        recommended: false,
      },
      "ai-assisted": {
        analysis:
          "AI-assisted decision-making with qualified human oversight combines the speed and pattern-recognition capabilities of AI with the contextual judgment, ethical responsibility, and accountability of a trained clinician. The AI can help prioritise cases and surface potential findings, but the clinician makes the final decision and remains responsible for it.",
        ethicalRisks: [
          "Risk of automation bias — over-trusting AI recommendations",
          "Clinicians must be trained to critically evaluate AI outputs",
          "AI performance must be monitored across patient demographics",
        ],
        recommendation:
          "Recommended approach. AI-assisted diagnosis with mandatory human oversight maximises the benefits of AI while preserving clinical accountability, patient rights, and the ability to catch and correct errors.",
        recommended: true,
      },
      "human-only": {
        analysis:
          "Human-only diagnosis preserves full clinical accountability and judgment. However, in contexts where AI has demonstrated genuine diagnostic benefits — such as improving early detection rates — withholding AI assistance may result in missed diagnoses. Equity considerations also apply: not all clinicians have equal access to specialist expertise.",
        ethicalRisks: [
          "Missed diagnoses where AI assistance would improve detection",
          "Inconsistency across different clinicians and settings",
          "Higher burden on clinicians without AI support",
        ],
        recommendation:
          "Acceptable where AI is not available or not validated for a specific context. Where AI assistance is available and validated, combined human-AI approaches are generally preferable.",
        recommended: false,
      },
    },
  },
  {
    sector: "recruitment",
    label: "Recruitment",
    icon: "💼",
    context:
      "An organisation uses an AI system to screen and rank job applications. The system scores candidates based on CV content, historical hiring data, and language patterns.",
    options: [
      {
        type: "automated",
        label: "Fully Automated Screening",
        description:
          "The AI ranks candidates and automatically advances or rejects them without human review.",
      },
      {
        type: "ai-assisted",
        label: "AI-Assisted Administration with Human-Led Final Decisions",
        description:
          "The AI assists with administrative tasks and initial screening, but all significant decisions are made by human reviewers.",
      },
      {
        type: "human-only",
        label: "Human Screening Without AI",
        description:
          "Human reviewers screen all applications without AI assistance.",
      },
    ],
    explanations: {
      automated: {
        analysis:
          "Fully automated recruitment decisions encode historical biases present in training data. If past hiring favoured certain demographics, institutions, or career paths, the AI will perpetuate those patterns at scale. Candidates have no way to understand why they were rejected or to challenge the outcome. This approach is inconsistent with anti-discrimination law in many jurisdictions.",
        ethicalRisks: [
          "Perpetuates historical discrimination at scale",
          "No transparency or explanation for rejected candidates",
          "Candidates cannot appeal automated rejections",
          "Non-traditional career paths are systematically disadvantaged",
        ],
        recommendation:
          "Not recommended. Fully automated hiring decisions without human oversight and accessible contestation mechanisms are ethically indefensible and legally risky.",
        recommended: false,
      },
      "ai-assisted": {
        analysis:
          "AI can legitimately assist with administrative tasks in recruitment — scheduling, formatting checks, deduplication — without making consequential decisions. When AI tools are used to assist human reviewers, with auditable criteria and accessible appeals, the combination can be both efficient and fair, provided the AI is regularly audited for bias.",
        ethicalRisks: [
          "Reviewers may anchor on AI-generated scores",
          "Bias in AI shortlisting may persist even with human review",
          "Appeals processes must be genuine, not performative",
        ],
        recommendation:
          "Recommended approach. AI-assisted administration with human-led final decisions, transparent criteria, regular bias audits, and accessible contestation mechanisms balances efficiency with fairness.",
        recommended: true,
      },
      "human-only": {
        analysis:
          "Human screening without AI avoids algorithmic bias but introduces its own forms of bias — affinity bias, name discrimination, and inconsistent criteria across reviewers. Structured human review with documented criteria can be fair, but it requires significant investment in training and process.",
        ethicalRisks: [
          "Human reviewers introduce their own biases",
          "Inconsistent application of criteria across reviewers",
          "Scalability challenges for large volumes of applications",
        ],
        recommendation:
          "Acceptable and preferable where AI systems are not validated, audited, or subject to contestation. Structured human processes with documented criteria are a strong baseline.",
        recommended: false,
      },
    },
  },
  {
    sector: "education",
    label: "Education",
    icon: "📚",
    context:
      "An AI system tracks student study patterns, engagement data, and assessment performance to generate personalised learning recommendations.",
    options: [
      {
        type: "automated",
        label: "Automated Personalisation",
        description:
          "The AI automatically adjusts learning content and pathways without student input or teacher review.",
      },
      {
        type: "ai-assisted",
        label: "AI-Assisted Recommendations with Student Control",
        description:
          "The AI generates recommendations that students and teachers can review, accept, modify, or decline.",
      },
      {
        type: "human-only",
        label: "Teacher-Led Personalisation",
        description:
          "Teachers adapt learning pathways based on their own assessment of student needs, without AI assistance.",
      },
    ],
    explanations: {
      automated: {
        analysis:
          "Fully automated personalisation in education involves continuous monitoring of student behaviour and automated adjustment of their learning experience without meaningful input or control. This raises serious concerns about student autonomy, the right to privacy, the risk of recommendations that reflect socioeconomic disadvantage rather than learning needs, and the potential for AI-generated labels to follow students through their educational career.",
        ethicalRisks: [
          "Continuous surveillance of student behaviour",
          "Recommendations that reflect access to devices, not learning ability",
          "AI-generated labels that affect how students are treated",
          "No student agency over their own learning pathway",
        ],
        recommendation:
          "Not recommended. Automated personalisation without student agency, teacher oversight, and accessible alternatives is disproportionate to the educational benefit.",
        recommended: false,
      },
      "ai-assisted": {
        analysis:
          "AI-assisted recommendations that students and teachers can see, discuss, and override respect student autonomy while providing potentially useful insights. This approach requires transparency about how recommendations are generated, clear data minimisation practices, and an accessible opt-out. The teacher remains the pedagogical decision-maker.",
        ethicalRisks: [
          "Students may feel obligated to follow recommendations",
          "Teachers need training to critically evaluate AI suggestions",
          "Data collection must be proportionate and transparent",
        ],
        recommendation:
          "Recommended approach. AI-assisted recommendations with student control, teacher oversight, transparent explanations, and data minimisation principles protect student rights while offering genuine educational support.",
        recommended: true,
      },
      "human-only": {
        analysis:
          "Teacher-led personalisation preserves the relational and contextual dimensions of education that AI systems cannot replicate. Experienced teachers adapt to student needs, including those that data cannot capture. However, teacher capacity varies significantly, and resource constraints may limit what is possible without AI assistance.",
        ethicalRisks: [
          "Teacher capacity varies across schools and contexts",
          "Unconscious bias in teacher assessments",
          "Limited scalability without some AI assistance",
        ],
        recommendation:
          "Strong baseline, particularly where AI systems are not sufficiently transparent or validated. Teacher-led personalisation should always be available as an alternative, even where AI assistance is offered.",
        recommended: false,
      },
    },
  },
  {
    sector: "banking",
    label: "Banking",
    icon: "🏦",
    context:
      "A bank deploys an AI fraud detection system that generates risk scores for transactions and can automatically block accounts flagged as high-risk.",
    options: [
      {
        type: "automated",
        label: "Fully Automated Fraud Response",
        description:
          "The AI automatically blocks accounts and transactions above a risk threshold without human review.",
      },
      {
        type: "ai-assisted",
        label: "AI-Assisted Detection with Human Review for High-Risk Actions",
        description:
          "The AI flags suspicious activity and blocks obviously fraudulent transactions, but significant account-level actions require human review.",
      },
      {
        type: "human-only",
        label: "Human-Led Fraud Investigation",
        description:
          "Human analysts review suspicious activity without AI assistance.",
      },
    ],
    explanations: {
      automated: {
        analysis:
          "Fully automated fraud response can act very quickly on clearly fraudulent activity, but it also risks incorrectly blocking legitimate customers with non-standard financial patterns. Communities with irregular income, unconventional transaction patterns, or limited banking history may be disproportionately affected. Without human review, customers may be blocked from their own money with no timely resolution.",
        ethicalRisks: [
          "False positives disproportionately affecting marginalised customers",
          "No timely resolution pathway for incorrectly blocked accounts",
          "Encoding of socioeconomic bias in risk scoring",
          "Financial exclusion through automated error",
        ],
        recommendation:
          "Not recommended for account-level actions. Fully automated blocking of customer accounts without human review or timely appeal creates significant financial harm risk.",
        recommended: false,
      },
      "ai-assisted": {
        analysis:
          "AI-assisted fraud detection with mandatory human review for significant actions — particularly account blocking or transaction refusal — combines the speed of automated monitoring with the contextual judgment needed to avoid false positive harms. Clear appeal processes and timely review are essential to protect customer rights.",
        ethicalRisks: [
          "Risk of reviewers deferring to AI scores without independent analysis",
          "Bias in risk scoring must be regularly audited",
          "Appeal processes must be accessible and timely",
        ],
        recommendation:
          "Recommended approach. AI-assisted fraud detection with human review for high-risk account actions, regular bias auditing, and accessible customer appeals balances security with fairness.",
        recommended: true,
      },
      "human-only": {
        analysis:
          "Human-led fraud investigation offers contextual judgment but cannot match the speed or scale needed to detect modern fraud patterns in real time. In practice, some degree of automated screening is necessary for fraud detection to be effective. The question is where human review is required.",
        ethicalRisks: [
          "Insufficient scale to detect fraud in real time",
          "Human reviewers may also apply biased judgements",
          "Higher operational costs may reduce fraud detection investment",
        ],
        recommendation:
          "Not practical as a standalone approach at scale. Human-led investigation should be integrated as an essential component of any AI-assisted system, not replaced by it.",
        recommended: false,
      },
    },
  },
  {
    sector: "public-services",
    label: "Public Services",
    icon: "🏛️",
    context:
      "A government deploys an AI chatbot to handle citizen inquiries, benefits applications, and service referrals for a public welfare programme.",
    options: [
      {
        type: "automated",
        label: "Fully Automated Chatbot Service",
        description:
          "All citizen interactions are handled by the AI chatbot, with no alternative access route.",
      },
      {
        type: "ai-assisted",
        label: "AI-Assisted Support with Accessible Human and Offline Alternatives",
        description:
          "The AI chatbot provides initial support, with clear pathways to human agents and offline alternatives for all services.",
      },
      {
        type: "human-only",
        label: "Traditional Human-Staffed Services",
        description:
          "All citizen services are delivered by human staff through phone, in-person, or written channels.",
      },
    ],
    explanations: {
      automated: {
        analysis:
          "A public welfare service that is exclusively AI-mediated will exclude citizens who lack smartphones, stable internet access, digital literacy, or language support for the AI system. Public services exist specifically to serve the most vulnerable members of society — those who are least likely to be well served by AI-only interfaces. Exclusive AI service delivery is therefore fundamentally at odds with the purpose of public welfare provision.",
        ethicalRisks: [
          "Digital exclusion of vulnerable and elderly citizens",
          "No accessible alternative for those without digital access",
          "Language barriers for speakers of minority languages",
          "AI errors with no human recourse pathway",
        ],
        recommendation:
          "Not recommended. Public services must remain accessible to all citizens, including those who cannot or will not use digital services. Exclusively AI-mediated services are not compatible with universal service obligations.",
        recommended: false,
      },
      "ai-assisted": {
        analysis:
          "AI assistance can help citizens navigate complex services more easily, provide 24/7 initial support, and reduce waiting times — but only if it is one channel among several. Accessible alternatives — phone, in-person, paper — must be actively maintained and funded, not allowed to wither. The AI should support human staff, not replace them for complex or sensitive cases.",
        ethicalRisks: [
          "Risk that human alternatives are underfunded as AI is deployed",
          "AI performance must be monitored across languages and accessibility needs",
          "Sensitive cases require human judgment and empathy",
        ],
        recommendation:
          "Recommended approach. AI-assisted public service delivery with well-resourced, accessible human and offline alternatives ensures efficiency while preserving universal access and upholding the right to human review for consequential decisions.",
        recommended: true,
      },
      "human-only": {
        analysis:
          "Human-staffed services ensure that every citizen can access support through a channel that does not require digital access or literacy. For many public services, this remains the only truly universal approach. The costs of human service delivery must be weighed against the social costs of excluding vulnerable citizens from digital-only services.",
        ethicalRisks: [
          "Higher operational costs may reduce overall service provision",
          "Longer waiting times without AI assistance to handle routine queries",
          "Human staff may also apply inconsistent or biased judgments",
        ],
        recommendation:
          "Strong baseline that must remain available. Human-staffed services should be actively maintained alongside any AI assistance, not treated as a legacy channel to be phased out.",
        recommended: false,
      },
    },
  },
];
