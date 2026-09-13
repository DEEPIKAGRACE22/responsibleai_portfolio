export interface PortfolioCard {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  ethicalIssues: string[];
  globalConnection: string;
  keyInsight: string;
  hasPresentation?: boolean;
}

export const portfolioCards: PortfolioCard[] = [
  {
    id: "fraud-detection",
    title: "AI-Based Fraud Detection and Transaction Monitoring System",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    category: "Finance, Fairness, Privacy & Accountability",
    description:
      "An AI banking system that detects suspicious transactions, generates risk scores, and supports human fraud analysts in making high-stakes decisions about financial accounts.",
    ethicalIssues: [
      "False positives incorrectly blocking legitimate customers",
      "False negatives allowing fraudulent transactions through",
      "Algorithmic bias against certain demographic groups",
      "Financial data privacy and third-party data sharing",
      "Lack of transparency in risk scoring logic",
      "Insufficient mechanisms for human review and appeal",
    ],
    globalConnection:
      "Communities with limited banking history or non-traditional financial profiles are more likely to be flagged incorrectly. Automated decisions can replicate systemic exclusion experienced by marginalised groups.",
    keyInsight:
      "An AI system that protects financial institutions can still create inequality if legitimate customers are incorrectly blocked or cannot challenge automated decisions.",
  },
  {
    id: "google-maps-audit",
    title: "AI-Integrated Responsible Data Audit of Google Maps",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=85",
    category: "Privacy, Consent, Surveillance & Digital Inequality",
    description:
      "A comprehensive audit of location data, device data, search history, cookies, behavioural data, consent mechanisms, privacy controls, and patterns of unequal digital access across geographies.",
    ethicalIssues: [
      "Persistent location tracking and behavioural profiling",
      "Overly complex privacy policies reducing meaningful consent",
      "Rural and under-served areas with significant mapping gaps",
      "Limited internet access reducing utility for lower-income users",
      "Accessibility barriers for users with disabilities",
      "Data collection continuing beyond stated user expectations",
    ],
    globalConnection:
      "Digital mapping services can reinforce geographical inequality by providing richer data in wealthy urban areas while neglecting rural and lower-income communities. Global South users often face greater data extraction with fewer protections.",
    keyInsight:
      "Providing privacy settings does not automatically create meaningful consent if users cannot understand the implications of data collection.",
  },
  {
    id: "cancer-detection",
    title: "Critical Ethical Analysis of AI Cancer Detection Systems",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    category: "Healthcare, Bias, Safety & Human Oversight",
    description:
      "An ethical analysis of AI-assisted cancer detection and diagnosis systems, examining how model performance varies across demographic groups and the implications for patient safety and clinical trust.",
    ethicalIssues: [
      "Demographic bias producing unequal diagnostic accuracy",
      "Risk of misdiagnosis in underrepresented populations",
      "Patient data privacy and secondary use of health records",
      "Explainability challenges undermining clinical trust",
      "Accountability gaps when AI contributes to incorrect diagnosis",
      "Risk of overreliance reducing clinical skills over time",
    ],
    globalConnection:
      "AI healthcare tools trained primarily on data from wealthy countries may underperform for patients in the Global South, those with darker skin tones, or groups historically excluded from medical research.",
    keyInsight:
      "A model can be technically successful overall while still producing harmful outcomes for underrepresented populations.",
    hasPresentation: true,
  },
  {
    id: "trace-recruitment",
    title: "TRACE Framework Analysis of AI in Recruitment",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    category: "Employment, Discrimination, Transparency & Contestability",
    description:
      "An analysis of AI applicant tracking systems and recruitment ranking tools using the TRACE framework, examining how automated screening reproduces historical patterns of discrimination.",
    ethicalIssues: [
      "Historical bias encoded in training data from past hiring decisions",
      "Discrimination against non-traditional career backgrounds",
      "Opaque automated rejection with no explanation provided",
      "Exclusion of candidates with career gaps or non-linear paths",
      "No accessible appeal or contestation mechanism",
      "Excessive automation removing human judgement from consequential decisions",
    ],
    globalConnection:
      "AI recruitment tools deployed globally may penalise candidates from educational institutions or career structures that differ from the dominant pattern in the training data, disadvantaging candidates from the Global South or minority backgrounds.",
    keyInsight:
      "Efficiency does not justify automated decisions when affected people cannot understand or challenge the outcome.",
  },
  {
    id: "study-habit-analyzer",
    title: "AI Study Habit Analyzer",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
    category: "Education, Student Data, Personalisation & Inclusion",
    description:
      "A proposed AI system that analyses student study patterns and generates personalised recommendations, raising fundamental questions about monitoring, consent, and fairness in educational settings.",
    ethicalIssues: [
      "Continuous monitoring of student behaviour and routines",
      "Excessive data collection without proportionate educational benefit",
      "Privacy of minors and vulnerable learners",
      "Informed consent from students and guardians",
      "Recommendations that ignore socioeconomic context",
      "Lack of transparency about how recommendations are generated",
    ],
    globalConnection:
      "AI personalisation tools assume equal access to devices, reliable internet, and consistent study environments. Students in lower-income households or under-resourced schools are less likely to benefit and more likely to be disadvantaged by such systems.",
    keyInsight:
      "Personalisation becomes unfair when the system ignores the different conditions in which people live and learn.",
  },
  {
    id: "facial-recognition-poster",
    title: "Facial Recognition and Responsible AI Awareness Poster",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    category: "Surveillance, Privacy, Identity & Discrimination",
    description:
      "An awareness poster examining the ethical implications of facial recognition technology, including privacy violations, wrongful identification, discriminatory error rates, and the accountability gap in surveillance systems.",
    ethicalIssues: [
      "Higher error rates for darker skin tones and women",
      "Mass surveillance infrastructure with weak legal oversight",
      "Wrongful identification causing real harm to individuals",
      "Use in contexts without explicit consent",
      "Lack of legal remedy for those harmed by misidentification",
      "Commercial deployment outpacing regulatory frameworks",
    ],
    globalConnection:
      "Facial recognition systems with higher error rates for certain groups create unequal levels of surveillance, risk, and freedom depending on a person's appearance, location, and legal protections.",
    keyInsight:
      "Technologies that identify people can also create unequal levels of surveillance and freedom.",
  },
];
