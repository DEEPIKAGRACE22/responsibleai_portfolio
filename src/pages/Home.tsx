import React from "react";
import SectionReveal from "../components/ui/SectionReveal";

// Editorial SVG illustration – globe, data streams, balance, diverse figures
const HeroIllustration: React.FC = () => (
  <svg
    viewBox="0 0 520 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-lg mx-auto"
    role="img"
    aria-label="Editorial illustration showing a connected digital globe with data flows, diverse community figures around it, and a balance scale representing fairness in AI"
  >
    {/* Background circles */}
    <circle cx="260" cy="200" r="180" fill="#e8f5f5" opacity="0.5" />
    <circle cx="260" cy="200" r="140" fill="#e8f5f5" opacity="0.4" />

    {/* Globe */}
    <circle cx="260" cy="200" r="90" fill="#1a2744" opacity="0.95" />
    <circle cx="260" cy="200" r="90" fill="none" stroke="#2d7d7d" strokeWidth="1.5" />

    {/* Globe grid lines */}
    <ellipse cx="260" cy="200" rx="90" ry="40" fill="none" stroke="#2d7d7d" strokeWidth="0.8" opacity="0.6" />
    <ellipse cx="260" cy="200" rx="90" ry="70" fill="none" stroke="#2d7d7d" strokeWidth="0.8" opacity="0.4" />
    <line x1="260" y1="110" x2="260" y2="290" stroke="#2d7d7d" strokeWidth="0.8" opacity="0.6" />
    <line x1="175" y1="170" x2="345" y2="170" stroke="#2d7d7d" strokeWidth="0.8" opacity="0.4" />
    <line x1="175" y1="230" x2="345" y2="230" stroke="#2d7d7d" strokeWidth="0.8" opacity="0.4" />
    <line x1="200" y1="120" x2="320" y2="280" stroke="#2d7d7d" strokeWidth="0.8" opacity="0.3" />
    <line x1="320" y1="120" x2="200" y2="280" stroke="#2d7d7d" strokeWidth="0.8" opacity="0.3" />

    {/* Continent shapes simplified */}
    <path d="M220 165 Q240 155 255 165 Q265 175 260 185 Q250 195 235 188 Q215 180 220 165Z" fill="#2d7d7d" opacity="0.7" />
    <path d="M270 175 Q285 168 295 175 Q300 185 290 192 Q278 195 270 185Z" fill="#2d7d7d" opacity="0.5" />
    <path d="M230 205 Q248 198 262 205 Q270 215 258 222 Q242 226 232 218Z" fill="#2d7d7d" opacity="0.6" />
    <path d="M245 228 Q255 222 265 228 Q270 237 260 242 Q248 244 242 237Z" fill="#4a90c4" opacity="0.5" />

    {/* Data streams flowing outward */}
    <g opacity="0.7">
      <path d="M350 200 Q380 185 420 175" stroke="#2d7d7d" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M350 200 Q375 215 415 225" stroke="#4a90c4" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M170 200 Q140 185 100 175" stroke="#2d7d7d" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M170 200 Q145 215 105 225" stroke="#4a90c4" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M260 110 Q260 80 260 55" stroke="#c4622d" strokeWidth="2" strokeDasharray="4 3" />
      <path d="M260 290 Q260 320 260 345" stroke="#c4622d" strokeWidth="2" strokeDasharray="4 3" />
    </g>

    {/* Data nodes */}
    <circle cx="420" cy="175" r="6" fill="#2d7d7d" />
    <circle cx="415" cy="225" r="6" fill="#4a90c4" />
    <circle cx="100" cy="175" r="6" fill="#2d7d7d" />
    <circle cx="105" cy="225" r="6" fill="#4a90c4" />
    <circle cx="260" cy="55" r="6" fill="#c4622d" />
    <circle cx="260" cy="345" r="6" fill="#c4622d" />

    {/* Community figures – simplified silhouettes */}
    {/* Figure 1 - left */}
    <g transform="translate(60, 155)">
      <circle cx="0" cy="-10" r="8" fill="#1a2744" />
      <rect x="-7" y="0" width="14" height="18" rx="4" fill="#1a2744" />
      <rect x="-10" y="3" width="6" height="14" rx="3" fill="#1a2744" />
      <rect x="4" y="3" width="6" height="14" rx="3" fill="#1a2744" />
    </g>

    {/* Figure 2 - right */}
    <g transform="translate(460, 155)">
      <circle cx="0" cy="-10" r="8" fill="#2d7d7d" />
      <rect x="-7" y="0" width="14" height="18" rx="4" fill="#2d7d7d" />
      <rect x="-10" y="3" width="6" height="14" rx="3" fill="#2d7d7d" />
      <rect x="4" y="3" width="6" height="14" rx="3" fill="#2d7d7d" />
    </g>

    {/* Figure 3 - top */}
    <g transform="translate(260, 25)">
      <circle cx="0" cy="-10" r="8" fill="#4a90c4" />
      <rect x="-7" y="0" width="14" height="18" rx="4" fill="#4a90c4" />
    </g>

    {/* Figure 4 - bottom */}
    <g transform="translate(260, 370)">
      <circle cx="0" cy="-10" r="8" fill="#c4622d" />
      <rect x="-7" y="0" width="14" height="18" rx="4" fill="#c4622d" />
    </g>

    {/* Balance scale */}
    <g transform="translate(375, 100)">
      {/* Pole */}
      <rect x="24" y="0" width="2" height="60" rx="1" fill="#1a2744" />
      {/* Bar */}
      <rect x="0" y="15" width="50" height="2" rx="1" fill="#1a2744" />
      {/* Left pan string */}
      <line x1="4" y1="17" x2="4" y2="38" stroke="#1a2744" strokeWidth="1.2" />
      {/* Right pan string */}
      <line x1="46" y1="17" x2="46" y2="38" stroke="#1a2744" strokeWidth="1.2" />
      {/* Pans */}
      <path d="-4 38 Q4 44 12 38" stroke="#1a2744" strokeWidth="1.5" fill="none" transform="translate(-2, 0)" />
      <ellipse cx="4" cy="38" rx="8" ry="2.5" fill="#2d7d7d" opacity="0.8" />
      <ellipse cx="46" cy="38" rx="8" ry="2.5" fill="#c4622d" opacity="0.8" />
      {/* Base */}
      <rect x="18" y="60" width="14" height="3" rx="1" fill="#1a2744" />
    </g>

    {/* Decorative dots */}
    <circle cx="130" cy="100" r="3" fill="#2d7d7d" opacity="0.4" />
    <circle cx="390" cy="300" r="3" fill="#4a90c4" opacity="0.4" />
    <circle cx="80" cy="280" r="3" fill="#c4622d" opacity="0.4" />
    <circle cx="440" cy="90" r="3" fill="#2d7d7d" opacity="0.4" />

    {/* Small network dots on data streams */}
    <circle cx="385" cy="178" r="3" fill="#2d7d7d" opacity="0.6" />
    <circle cx="390" cy="216" r="3" fill="#4a90c4" opacity="0.6" />
    <circle cx="135" cy="178" r="3" fill="#2d7d7d" opacity="0.6" />
    <circle cx="130" cy="216" r="3" fill="#4a90c4" opacity="0.6" />
  </svg>
);

const overviewCards = [
  {
    title: "Access",
    question: "Who can access AI?",
    icon: "🌐",
    color: "teal" as const,
    description:
      "AI benefits depend on digital infrastructure, device availability, internet connectivity, and digital literacy — resources not equally distributed globally.",
  },
  {
    title: "Representation",
    question: "Who is represented in AI data?",
    icon: "📊",
    color: "blue" as const,
    description:
      "Training datasets reflect the communities and languages whose data was collected. Underrepresented groups often receive worse outcomes from AI systems.",
  },
  {
    title: "Power",
    question: "Who controls AI?",
    icon: "⚡",
    color: "orange" as const,
    description:
      "AI development is concentrated in a small number of corporations and high-income countries. This shapes what is built, for whom, and on whose terms.",
  },
  {
    title: "Accountability",
    question: "Who is responsible when AI causes harm?",
    icon: "⚖️",
    color: "navy" as const,
    description:
      "Legal frameworks, regulatory capacity, and access to redress mechanisms are unevenly distributed, meaning those most affected by AI harms are often least able to seek remedy.",
  },
];

const colorStyles = {
  teal: { border: "border-teal", bg: "bg-teal-pale", text: "text-teal", icon: "bg-teal text-white" },
  blue: { border: "border-soft-blue", bg: "bg-soft-blue-pale", text: "text-soft-blue", icon: "bg-soft-blue text-white" },
  orange: { border: "border-muted-orange", bg: "bg-muted-orange-pale", text: "text-muted-orange", icon: "bg-muted-orange text-white" },
  navy: { border: "border-navy", bg: "bg-navy/5", text: "text-navy", icon: "bg-navy text-white" },
};

const Home: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen" aria-label="Home">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy-dark pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=85)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <SectionReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/20 border border-teal/30 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                    CIA 3 · Responsible AI Ethics Portfolio
                  </span>
                </div>
              </SectionReveal>

              <SectionReveal delay={100}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-4">
                  AI for All?
                </h1>
                <p className="font-display text-xl sm:text-2xl text-teal-light font-semibold mb-6 leading-snug">
                  Global AI Governance and Inequalities
                </p>
              </SectionReveal>

              <SectionReveal delay={200}>
                <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                  Artificial Intelligence is transforming healthcare, education, banking,
                  recruitment, transportation, and public services. However, the benefits of AI
                  are not distributed equally. Communities with limited infrastructure, weak
                  digital access, underrepresented languages, and inadequate legal protection
                  may experience greater risks while receiving fewer benefits.
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl">
                  This portfolio examines how AI systems can reproduce existing inequalities
                  and how responsible governance can make AI more inclusive, transparent,
                  accountable, and human-centred.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollTo("portfolio")}
                    className="btn-primary bg-teal hover:bg-teal-light border-0 focus-visible:ring-offset-navy"
                  >
                    Explore the Portfolio
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollTo("reflection")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/30 text-white/90 font-medium text-sm
                      hover:bg-white/10 hover:border-white/50 transition-colors duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  >
                    Read the Ethical Analysis
                  </button>
                </div>
              </SectionReveal>

              {/* Student info */}
              <SectionReveal delay={300}>
                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold font-display text-sm flex-shrink-0" aria-hidden="true">
                    DG
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Deepika Grace T T</p>
                    <p className="text-white/50 text-xs">
                      Digital Ethics Portfolio · Generative AI Ethics Assessment
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Illustration */}
            <SectionReveal delay={150} className="hidden lg:block">
              <HeroIllustration />
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* Overview section */}
      <div className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading mb-4">Who gets to benefit from AI?</h2>
              <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                AI systems are designed, trained, deployed, and governed within social and
                economic structures. If these structures are unequal, AI may reproduce those
                inequalities through biased datasets, inaccessible interfaces, unequal
                infrastructure, opaque decision-making, and limited opportunities to challenge
                automated outcomes.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {overviewCards.map((card, i) => {
              const colors = colorStyles[card.color];
              return (
                <SectionReveal key={card.title} delay={i * 80}>
                  <div
                    className={`card-base border-t-4 ${colors.border} h-full`}
                    role="article"
                  >
                    <div className={`w-10 h-10 rounded-full ${colors.icon} flex items-center justify-center text-lg mb-4`} aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy mb-1">
                      {card.title}
                    </h3>
                    <p className={`text-xs font-semibold ${colors.text} mb-3`}>
                      {card.question}
                    </p>
                    <p className="text-sm text-charcoal-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
