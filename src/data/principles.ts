export interface Principle {
  id: string;
  title: string;
  icon: string;
  description: string;
  examples: string[];
  color: "teal" | "blue" | "orange" | "navy";
}

export const principles: Principle[] = [
  {
    id: "inclusion",
    title: "Inclusion",
    icon: "🌍",
    description:
      "AI systems must be designed to work for all people, including those with limited connectivity, low-end devices, diverse languages, and varying levels of digital literacy.",
    examples: [
      "Offline functionality for low-bandwidth contexts",
      "Support for local and regional languages",
      "Simple interfaces for non-expert users",
      "Proactive outreach to underserved communities",
    ],
    color: "teal",
  },
  {
    id: "representation",
    title: "Representation",
    icon: "📊",
    description:
      "Training data, development teams, and advisory boards must reflect the diversity of people who will be affected by AI systems.",
    examples: [
      "Diverse and balanced training datasets",
      "Inclusive development and testing teams",
      "Community participation in system design",
      "Regular audits for representational gaps",
    ],
    color: "blue",
  },
  {
    id: "accessibility",
    title: "Accessibility",
    icon: "♿",
    description:
      "AI interfaces and outputs must be usable by people with disabilities and those using assistive technologies, across varying device capabilities.",
    examples: [
      "Screen reader compatibility",
      "Keyboard navigation support",
      "High-contrast and adjustable text options",
      "Alternative formats for AI-generated content",
    ],
    color: "navy",
  },
  {
    id: "transparency",
    title: "Transparency",
    icon: "🔍",
    description:
      "People affected by AI decisions must be able to understand, in plain terms, how and why decisions were made, without needing technical expertise.",
    examples: [
      "Plain-language explanations of AI decisions",
      "Disclosure when AI is being used",
      "Accessible documentation of system capabilities",
      "Open publication of key performance metrics",
    ],
    color: "teal",
  },
  {
    id: "human-oversight",
    title: "Human Oversight",
    icon: "👁️",
    description:
      "Consequential decisions affecting people's lives, rights, or opportunities must involve meaningful human review and must not be fully delegated to automated systems.",
    examples: [
      "Human review required for high-stakes outcomes",
      "Clear escalation pathways for borderline cases",
      "Ongoing monitoring of automated decisions",
      "Authority to override automated recommendations",
    ],
    color: "orange",
  },
  {
    id: "contestability",
    title: "Contestability",
    icon: "⚖️",
    description:
      "Individuals must have accessible, effective, and timely means to challenge automated decisions that affect them, with a realistic prospect of meaningful reconsideration.",
    examples: [
      "Clear and accessible appeals processes",
      "Timely responses to challenges",
      "Independent review mechanisms",
      "No retaliation for challenging decisions",
    ],
    color: "orange",
  },
  {
    id: "accountability",
    title: "Accountability",
    icon: "📋",
    description:
      "There must be clearly defined responsibility for AI systems across the entire lifecycle, from design through deployment to ongoing operation and decommissioning.",
    examples: [
      "Designated accountability officers",
      "Documented impact assessments",
      "Third-party auditing requirements",
      "Legal liability frameworks for AI harm",
    ],
    color: "navy",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    icon: "🌱",
    description:
      "The environmental costs of AI development and operation must be acknowledged, measured, and minimised, particularly given that these costs fall disproportionately on vulnerable communities.",
    examples: [
      "Carbon impact reporting for large models",
      "Energy-efficient model design",
      "Data centre location and renewable energy use",
      "Lifecycle analysis of AI infrastructure",
    ],
    color: "teal",
  },
];
