import { useState } from "react";
import { ExternalLink, GitPullRequest, GitMerge } from "lucide-react";

interface ContributionCardProps {
  projectName: string;
  description: string;
  contributionType: string;
  techStack: string[];
  prNumber: string;
  issueNumber?: string;
  status: "Merged" | "Accepted";
  impact?: string;
  githubLink?: string;
}

const ContributionCard = ({
  projectName,
  description,
  contributionType,
  techStack,
  prNumber,
  issueNumber,
  status,
  impact,
  githubLink,
}: ContributionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative bg-card border border-border rounded-xl p-5 md:p-6
        transition-all duration-300 ease-out cursor-pointer
        ${isHovered ? "translate-y-[-4px] shadow-lg border-primary/40" : "shadow-sm"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {projectName}
          </h3>
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            {contributionType}
          </span>
        </div>
        <span
          className={`
            px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5
            ${status === "Merged" 
              ? "bg-primary/10 text-primary" 
              : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
            }
          `}
        >
          <GitMerge className="w-3 h-3" />
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* PR/Issue Numbers */}
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
          <GitPullRequest className="w-3 h-3" />
          {prNumber}
        </span>
        {issueNumber && (
          <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            #{issueNumber}
          </span>
        )}
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover Details */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isHovered ? "max-h-24 opacity-100 mt-4 pt-4 border-t border-border" : "max-h-0 opacity-0"}
        `}
      >
        {impact && (
          <p className="text-sm text-muted-foreground mb-3">
            <span className="font-medium text-foreground">Impact:</span> {impact}
          </p>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            View on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ContributionCard;
