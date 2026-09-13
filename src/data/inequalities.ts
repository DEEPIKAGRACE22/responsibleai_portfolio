export interface InequalityItem {
  id: string;
  number: string;
  title: string;
  icon: string;
  summary: string;
  detail: string;
  examples: string[];
  accent: "teal" | "orange" | "blue" | "navy";
}

export const inequalities: InequalityItem[] = [
  {
    id: "infrastructure",
    number: "01",
    title: "Infrastructure Inequality",
    icon: "🏗️",
    summary:
      "The physical and digital infrastructure required to develop and access AI is concentrated in wealthy countries and urban areas.",
    detail:
      "Building and deploying AI systems requires high-speed internet, powerful computing hardware, reliable electricity, and data storage facilities. These resources are not evenly distributed globally. Many communities in the Global South and rural areas lack access to the foundational infrastructure needed to participate in, benefit from, or even access AI-driven services. This creates a feedback loop: those with better infrastructure benefit more, which concentrates wealth and influence further.",
    examples: [
      "Data centres are concentrated in North America, Europe, and East Asia",
      "High-speed internet penetration varies dramatically between countries",
      "Power outages disrupt AI services in regions with unstable electricity grids",
      "Mobile-only internet access limits what AI applications are usable",
    ],
    accent: "orange",
  },
  {
    id: "language",
    number: "02",
    title: "Language Inequality",
    icon: "🗣️",
    summary:
      "AI systems perform significantly better in languages with large training datasets, primarily English, creating unequal experiences for speakers of other languages.",
    detail:
      "Natural language processing models are trained on text corpora that are overwhelmingly composed of English and a handful of other major languages. This means that AI assistants, translation tools, content moderation systems, and voice recognition applications perform with measurably lower accuracy for speakers of minority languages, regional dialects, and low-resource languages. Language inequality is not merely a technical limitation — it reflects decisions about which communities are worth investing in.",
    examples: [
      "Voice recognition systems with higher error rates for non-English accents",
      "Translation tools that work poorly for low-resource languages",
      "AI customer service that cannot serve speakers of regional languages",
      "Content moderation that misses harmful content in underrepresented languages",
    ],
    accent: "teal",
  },
  {
    id: "dataset",
    number: "03",
    title: "Dataset Inequality",
    icon: "🗄️",
    summary:
      "AI models are trained on data that does not proportionally represent all populations, leading to systematically worse performance for underrepresented groups.",
    detail:
      "The quality of an AI system depends directly on the quality and representativeness of its training data. When datasets are collected primarily from certain countries, demographics, or contexts, the resulting models encode those biases. Medical imaging datasets underrepresenting darker skin tones produce diagnostic tools that perform less accurately for those populations. Face recognition datasets with limited gender and ethnic diversity produce systems with higher error rates for women and people of colour.",
    examples: [
      "Medical AI trained on homogeneous patient data",
      "Facial recognition with significantly higher error rates for darker skin tones",
      "Recruitment AI trained on historically biased hiring records",
      "Credit scoring models that disadvantage communities with limited banking history",
    ],
    accent: "navy",
  },
  {
    id: "economic",
    number: "04",
    title: "Economic Inequality",
    icon: "💰",
    summary:
      "The enormous capital requirements for AI development mean that the technology is controlled by a small number of corporations and wealthy nations.",
    detail:
      "Training large AI models requires billions of dollars in computing resources, specialised engineering talent, and proprietary datasets. This capital concentration means that AI development is dominated by a handful of technology corporations headquartered primarily in the United States and China. Smaller organisations, universities in lower-income countries, and civil society groups have extremely limited capacity to develop competing systems, audit existing ones, or shape how AI evolves. Economic inequality in AI is therefore both a cause and a consequence of broader global inequality.",
    examples: [
      "The largest AI models are exclusively developed by a handful of corporations",
      "High-income countries spend orders of magnitude more on AI research",
      "Licensing costs for AI tools are prohibitive for organisations in lower-income countries",
      "Brain drain draws AI researchers from the Global South to high-income countries",
    ],
    accent: "orange",
  },
  {
    id: "governance",
    number: "05",
    title: "Governance Inequality",
    icon: "🏛️",
    summary:
      "Global AI governance standards are disproportionately shaped by institutions and governments in high-income countries, marginalising other perspectives.",
    detail:
      "International AI governance discussions take place primarily in bodies dominated by wealthy countries and large technology corporations. Frameworks such as the OECD AI Principles, the G7 AI Code of Conduct, and multilateral technical standards are developed with limited representation from the Global South, civil society, and communities most affected by AI systems. The result is that global AI governance tends to reflect the priorities of those with the greatest resources, rather than the most urgent needs.",
    examples: [
      "OECD AI Principles developed with limited Global South participation",
      "Technical standards set by bodies with narrow membership",
      "AI governance debates focused on innovation rather than harm reduction",
      "Limited legal capacity in many countries to regulate powerful technology companies",
    ],
    accent: "blue",
  },
  {
    id: "accountability",
    number: "06",
    title: "Accountability Inequality",
    icon: "⚖️",
    summary:
      "When AI causes harm, those with fewer resources, weaker legal protections, or less political power are less able to seek redress.",
    detail:
      "Accountability for AI-caused harm depends on legal frameworks, institutional capacity, and access to legal representation. In many countries, there are no specific laws governing AI liability, no regulators with expertise to investigate AI harms, and no accessible remedies for individuals affected by automated decisions. Even where laws exist, pursuing legal action against powerful technology companies requires resources that most individuals and many governments do not have. This means that AI harms fall most heavily on those least able to challenge them.",
    examples: [
      "Limited AI-specific legal frameworks in many jurisdictions",
      "Regulatory agencies without sufficient technical expertise or resources",
      "No legal aid for individuals challenging algorithmic decisions",
      "Jurisdictional gaps when AI harms cross national borders",
    ],
    accent: "teal",
  },
];
