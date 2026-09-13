import React from "react";

type BadgeType = "existing" | "new" | "scenario" | "analysis";

interface ArtifactBadgeProps {
  type: BadgeType;
  className?: string;
}

const labels: Record<BadgeType, string> = {
  existing: "Existing Assignment",
  new: "New Artifact",
  scenario: "Illustrative Scenario",
  analysis: "Ethical Analysis",
};

const ArtifactBadge: React.FC<ArtifactBadgeProps> = ({
  type,
  className = "",
}) => {
  const cls: Record<BadgeType, string> = {
    existing: "badge-existing",
    new: "badge-new",
    scenario: "badge-scenario",
    analysis: "badge-analysis",
  };

  return (
    <span className={`section-label ${cls[type]} ${className}`} aria-label={labels[type]}>
      {type === "existing" && (
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm.75 2a.75.75 0 00-1.5 0v2.25l1.28 1.28a.75.75 0 001.06-1.06L6.75 5.56V4.5z"/>
        </svg>
      )}
      {type === "new" && (
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z"/>
        </svg>
      )}
      {type === "scenario" && (
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm0 7.5a.75.75 0 110-1.5.75.75 0 010 1.5zM6.5 6H5.5V3h1v3z"/>
        </svg>
      )}
      {type === "analysis" && (
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="M2 2h8v1.5H2V2zm0 3h6v1.5H2V5zm0 3h4v1.5H2V8z"/>
        </svg>
      )}
      {labels[type]}
    </span>
  );
};

export default ArtifactBadge;
