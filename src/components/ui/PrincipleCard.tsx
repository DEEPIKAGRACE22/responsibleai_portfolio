import React from "react";
import type { Principle } from "../../data/principles";

interface PrincipleCardProps {
  principle: Principle;
  index: number;
}

const colorMap = {
  teal: {
    border: "border-teal",
    bg: "bg-teal-pale",
    text: "text-teal",
    icon: "bg-teal text-white",
  },
  blue: {
    border: "border-soft-blue",
    bg: "bg-soft-blue-pale",
    text: "text-soft-blue",
    icon: "bg-soft-blue text-white",
  },
  orange: {
    border: "border-muted-orange",
    bg: "bg-muted-orange-pale",
    text: "text-muted-orange",
    icon: "bg-muted-orange text-white",
  },
  navy: {
    border: "border-navy",
    bg: "bg-navy/5",
    text: "text-navy",
    icon: "bg-navy text-white",
  },
};

const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle, index }) => {
  const colors = colorMap[principle.color];

  return (
    <article
      className={`card-base border-l-4 ${colors.border} flex flex-col h-full`}
      aria-labelledby={`principle-title-${principle.id}`}
    >
      {/* Icon and number */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-full ${colors.icon} flex items-center justify-center text-lg flex-shrink-0`}
          aria-hidden="true"
        >
          {principle.icon}
        </div>
        <div>
          <p className={`text-xs font-bold uppercase tracking-widest ${colors.text} font-body`}>
            Principle {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            id={`principle-title-${principle.id}`}
            className="font-display text-lg font-bold text-navy leading-tight"
          >
            {principle.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-charcoal-light leading-relaxed mb-4 flex-1">
        {principle.description}
      </p>

      {/* Examples */}
      <div className={`mt-auto pt-3 border-t border-border-light`}>
        <p className="text-xs font-semibold text-charcoal uppercase tracking-wide mb-2">
          In Practice
        </p>
        <ul className="space-y-1" role="list">
          {principle.examples.map((example, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-charcoal-light"
            >
              <svg
                className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${colors.text}`}
                viewBox="0 0 14 14"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm2.78 4.28L6.5 8.56 4.22 6.28a.75.75 0 00-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06z"/>
              </svg>
              {example}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PrincipleCard;
