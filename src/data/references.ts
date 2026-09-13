export interface Reference {
  id: string;
  authors?: string;
  year?: string;
  title: string;
  source?: string;
  url?: string;
  note?: string;
  isPlaceholder?: boolean;
}

export const assignmentReferences: Reference[] = [
  {
    id: "ref-fraud",
    title: "AI-Based Fraud Detection and Transaction Monitoring System",
    note: "Original assignment submission — references cited within the report",
    isPlaceholder: false,
  },
  {
    id: "ref-google-maps",
    title: "AI-Integrated Responsible Data Audit of Google Maps",
    note: "Original assignment submission — references cited within the report",
    isPlaceholder: false,
  },
  {
    id: "ref-cancer",
    title: "Critical Ethical Analysis of AI Cancer Detection Systems",
    note:
      "Original assignment submission including written report and presentation — references cited within the report",
    isPlaceholder: false,
  },
  {
    id: "ref-trace",
    title: "TRACE Framework Analysis of AI in Recruitment",
    note: "Original assignment submission — references cited within the report",
    isPlaceholder: false,
  },
  {
    id: "ref-study",
    title: "AI Study Habit Analyzer",
    note: "Original assignment submission — references cited within the report",
    isPlaceholder: false,
  },
  {
    id: "ref-poster",
    title: "Facial Recognition and Responsible AI Awareness Poster",
    note: "Original assignment submission — references cited within the report",
    isPlaceholder: false,
  },
];

export const researchReferences: Reference[] = [
  {
    id: "ref-oecd",
    authors: "OECD",
    year: "2019",
    title:
      "Recommendation of the Council on Artificial Intelligence (OECD AI Principles)",
    source: "Organisation for Economic Co-operation and Development",
    url: "https://oecd.ai/en/ai-principles",
    isPlaceholder: false,
  },
  {
    id: "ref-eu-ai-act",
    authors: "European Parliament and Council of the European Union",
    year: "2024",
    title: "Regulation (EU) 2024/1689 — Artificial Intelligence Act",
    source: "Official Journal of the European Union",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
    isPlaceholder: false,
  },
  {
    id: "ref-gebru",
    authors: "Gebru, T., et al.",
    year: "2018",
    title:
      "Datasheets for Datasets",
    source: "arXiv:1803.09010",
    url: "https://arxiv.org/abs/1803.09010",
    isPlaceholder: false,
  },
  {
    id: "ref-noble",
    authors: "Noble, S. U.",
    year: "2018",
    title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
    source: "New York University Press",
    isPlaceholder: false,
  },
  {
    id: "ref-buolamwini",
    authors: "Buolamwini, J. & Gebru, T.",
    year: "2018",
    title:
      "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification",
    source: "Proceedings of Machine Learning Research, 81, 77–91",
    isPlaceholder: false,
  },
  {
    id: "ref-floridi",
    authors: "Floridi, L., et al.",
    year: "2018",
    title:
      "AI4People — An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations",
    source: "Minds and Machines, 28(4), 689–707",
    isPlaceholder: false,
  },
  {
    id: "ref-rawls",
    authors: "Rawls, J.",
    year: "1971",
    title: "A Theory of Justice",
    source: "Harvard University Press",
    isPlaceholder: false,
  },
];

export const aiDisclosureText = `Generative AI tools were used during the development of this portfolio for brainstorming, drafting, design exploration, summarisation, and creation of illustrative awareness materials. AI-generated content was reviewed and edited by the student. Existing assignment findings were retained as the basis for the portfolio, and claims were not treated as reliable without checking the original assignment sources. The illustrative scenarios in the Generative AI Lab section are creative educational examples and are not claims about specific AI products unless supported by a cited source.`;
