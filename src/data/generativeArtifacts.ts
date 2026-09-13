export interface GenerativeArtifact {
  id: string;
  title: string;
  type: string;
  badge: "new-artifact" | "illustrative-scenario";
  content: GenerativeArtifactContent;
}

export type GenerativeArtifactContent =
  | PosterContent
  | ScenarioContent;

export interface PosterContent {
  kind: "poster";
  tagline: string;
  questions: string[];
  closing: string;
}

export interface ScenarioContent {
  kind: "scenario";
  setup: string;
  situation: string;
  analysis: string;
  implication: string;
}

export const generativeArtifacts: GenerativeArtifact[] = [
  {
    id: "ai-for-all-poster",
    title: "AI for All? Who Gets Left Behind?",
    type: "AI-Generated Awareness Poster",
    badge: "new-artifact",
    content: {
      kind: "poster",
      tagline:
        "AI can improve lives — but only when everyone has a fair opportunity to benefit.",
      questions: [
        "Is the data representative of all communities?",
        "Is the technology accessible without a high-end device?",
        "Are local and regional languages supported?",
        "Can people understand the decisions AI makes about them?",
        "Can affected individuals challenge mistakes?",
        "Who is responsible when AI causes harm?",
      ],
      closing:
        "Responsible AI is not only about smarter systems. It is about fairer societies.",
    },
  },
  {
    id: "language-scenario",
    title: "When AI Understands One Language Better Than Another",
    type: "Illustrative Scenario",
    badge: "illustrative-scenario",
    content: {
      kind: "scenario",
      setup:
        "Imagine a university student preparing an assignment on public health policy. She decides to test an AI writing assistant by asking the same question in two languages: English and her regional language.",
      situation:
        "In English, the AI provides a detailed, well-structured response with multiple relevant examples, historical context, and clear reasoning. When she asks the same question in her regional language — spoken by tens of millions of people — the response is shorter, less specific, contains grammatical errors, and does not reference locally relevant sources or context.",
      analysis:
        "This difference arises not because the question is less valid, but because the AI model was trained on a corpus heavily weighted towards English-language text. Fewer resources, lower training data volumes, and less investment in language-specific fine-tuning mean that the model has a systematically weaker understanding of non-English languages, dialects, and culturally specific knowledge.",
      implication:
        "If AI tools are deployed in education, healthcare, or public services in multilingual contexts without addressing language inequality, speakers of minority languages will consistently receive a lower quality of service — not because of any difference in their needs or intelligence, but because of structural underinvestment in their linguistic community.",
    },
  },
  {
    id: "digital-exclusion-scenario",
    title: "A Digital Service That Assumes Everyone Is Connected",
    type: "Illustrative Scenario",
    badge: "illustrative-scenario",
    content: {
      kind: "scenario",
      setup:
        "A government agency launches an AI-powered chatbot to handle inquiries about a benefits programme. The chatbot is available 24/7 on a website and is promoted as making access to public services 'faster and easier than ever'.",
      situation:
        "For a citizen with a reliable smartphone, stable broadband, and strong digital literacy in the language used by the chatbot, the service is genuinely more convenient. For a retired person without a smartphone, a rural family with intermittent internet access, a recent migrant whose primary language is not supported, or a person with a visual impairment, the chatbot may be entirely inaccessible — or may provide incorrect guidance with no human correction mechanism.",
      analysis:
        "The digital divide — the gap between those with and without access to reliable digital technology — means that AI-first public service delivery can inadvertently exclude the most vulnerable members of society. Designing for the average connected user, rather than for the full range of citizens, creates a service that benefits some while actively disadvantaging others.",
      implication:
        "AI in public services must always be accompanied by accessible alternatives: phone lines staffed by human agents, in-person services, and paper-based options. These are not legacy systems to be phased out — they are essential safeguards ensuring that the pursuit of efficiency does not undermine the universality that defines public service.",
    },
  },
  {
    id: "hiring-bias-scenario",
    title: "When an AI Hiring Tool Rejects a Non-Traditional Candidate",
    type: "Illustrative Scenario",
    badge: "illustrative-scenario",
    content: {
      kind: "scenario",
      setup:
        "A large organisation uses an AI applicant tracking system to screen thousands of applications for a graduate position. The system scores CVs against criteria derived from the profiles of successful past hires.",
      situation:
        "A candidate who took two years away from employment to care for a family member, attended a regional university rather than a prestigious institution, and formatted their CV according to local conventions receives a low score and is automatically filtered out — never reviewed by a human recruiter. A candidate with an unbroken career history from a well-known institution, and a CV formatted in the style the AI was implicitly trained to prefer, advances automatically.",
      analysis:
        "AI recruitment systems trained on historical hiring data learn the patterns associated with previously successful hires. If those hires were drawn from a narrow pool — particular institutions, career paths, or demographic backgrounds — the AI encodes those patterns as proxies for suitability. Career gaps, non-traditional institutions, and unconventional CV formats may be penalised not because they indicate unsuitability, but because they differ from the historical norm.",
      implication:
        "Automated rejection without explanation or appeal mechanism means that qualified candidates may be permanently excluded from opportunities without ever knowing why. This is not a neutral technical process — it is a form of consequential decision-making that must meet the same standards of transparency, fairness, and contestability as any other employment decision.",
    },
  },
];
