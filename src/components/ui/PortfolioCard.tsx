import React, { useState } from "react";
import ArtifactBadge from "./ArtifactBadge";
import type { PortfolioCard as PortfolioCardData } from "../../data/portfolioCards";

interface PortfolioCardProps {
  card: PortfolioCardData;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ card, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="card-base flex flex-col h-full"
      aria-labelledby={`card-title-${card.id}`}
    >
      <div className="-mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl bg-navy/10">
        <img
          src={card.image}
          alt=""
          loading="lazy"
          className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Card number + badge */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white text-xs font-bold font-display flex items-center justify-center"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArtifactBadge type="existing" />
      </div>

      {/* Category chip */}
      <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-2 font-body">
        {card.category}
      </p>

      {/* Title */}
      <h3
        id={`card-title-${card.id}`}
        className="font-display text-lg font-bold text-navy mb-3 leading-snug"
      >
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-charcoal-light leading-relaxed mb-4">
        {card.description}
      </p>

      {/* Ethical Issues — collapsible */}
      <div className="mb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`ethical-issues-${card.id}`}
          className="flex items-center gap-2 text-xs font-semibold text-charcoal hover:text-teal transition-colors mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Ethical Issues ({card.ethicalIssues.length})
        </button>
        {expanded && (
          <ul
            id={`ethical-issues-${card.id}`}
            className="space-y-1 pl-4"
            role="list"
          >
            {card.ethicalIssues.map((issue, i) => (
              <li
                key={i}
                className="text-xs text-charcoal-light flex items-start gap-2"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-orange flex-shrink-0" aria-hidden="true" />
                {issue}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Global Connection */}
      <div className="mt-4 pt-4 border-t border-border-light">
        <p className="text-xs font-semibold text-soft-blue uppercase tracking-wide mb-1">
          Global AI Governance Connection
        </p>
        <p className="text-xs text-charcoal-light leading-relaxed">
          {card.globalConnection}
        </p>
      </div>

      {/* Key Insight */}
      <div className="mt-3 p-3 bg-teal-pale rounded-lg border-l-2 border-teal">
        <p className="text-xs font-semibold text-teal mb-0.5">Key Insight</p>
        <p className="text-xs text-charcoal leading-relaxed italic">
          "{card.keyInsight}"
        </p>
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="btn-teal text-xs px-3 py-1.5" aria-label={`View artifact for ${card.title}`}>
          View Artifact
        </button>
        <button className="btn-outline-teal text-xs px-3 py-1.5" aria-label={`Read extract from ${card.title}`}>
          Read Extract
        </button>
        {card.hasPresentation && (
          <button className="btn-outline-teal text-xs px-3 py-1.5" aria-label={`View presentation for ${card.title}`}>
            View Presentation
          </button>
        )}
      </div>
    </article>
  );
};

export default PortfolioCard;
