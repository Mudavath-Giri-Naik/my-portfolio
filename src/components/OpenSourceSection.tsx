import ContributionCard from "./ContributionCard";

const contributionsData = [
  {
    year: "2025",
    contributions: [
      {
        projectName: "React",
        description: "Fixed memory leak in useEffect cleanup for concurrent mode rendering.",
        contributionType: "Bug Fix",
        techStack: ["React", "TypeScript", "Jest"],
        prNumber: "PR #28432",
        issueNumber: "28401",
        status: "Merged" as const,
        impact: "Reduced memory usage by 15% in large-scale applications",
        githubLink: "https://github.com/facebook/react",
      },
      {
        projectName: "Tailwind CSS",
        description: "Added new animation utilities for improved micro-interactions.",
        contributionType: "Feature",
        techStack: ["CSS", "JavaScript", "PostCSS"],
        prNumber: "PR #12847",
        status: "Merged" as const,
        impact: "Feature adopted by 10k+ projects within first month",
        githubLink: "https://github.com/tailwindlabs/tailwindcss",
      },
    ],
  },
  {
    year: "2024",
    contributions: [
      {
        projectName: "Supabase",
        description: "Improved database connection pooling documentation and examples.",
        contributionType: "Documentation",
        techStack: ["PostgreSQL", "TypeScript", "Markdown"],
        prNumber: "PR #8234",
        status: "Accepted" as const,
        impact: "Helped 500+ developers implement connection pooling correctly",
        githubLink: "https://github.com/supabase/supabase",
      },
      {
        projectName: "Vite",
        description: "Optimized HMR performance for large monorepo setups.",
        contributionType: "Performance",
        techStack: ["Node.js", "esbuild", "TypeScript"],
        prNumber: "PR #15672",
        issueNumber: "15640",
        status: "Merged" as const,
        impact: "30% faster hot reload in projects with 100+ modules",
        githubLink: "https://github.com/vitejs/vite",
      },
    ],
  },
];

const OpenSourceSection = () => {
  return (
    <section id="open-source" className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 md:mb-16">
          Open Source
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          {contributionsData.map((yearGroup, yearIndex) => (
            <div key={yearGroup.year} className="mb-12 last:mb-0">
              {/* Year Marker */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl md:text-3xl font-bold text-primary md:w-[60px] md:text-right">
                  {yearGroup.year}
                </span>
                {/* Year dot - Hidden on mobile */}
                <div className="hidden md:block relative">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                </div>
              </div>

              {/* Contributions */}
              <div className="space-y-4 md:pl-[88px] relative">
                {/* Mobile left border */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full" />

                {yearGroup.contributions.map((contribution, contribIndex) => (
                  <div key={contribIndex} className="relative pl-4 md:pl-0">
                    {/* Timeline dot for each contribution */}
                    <div className="hidden md:block absolute -left-[32px] top-6 group">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(var(--primary),0.6)]" />
                    </div>
                    {/* Mobile dot */}
                    <div className="md:hidden absolute -left-[3px] top-6 w-1.5 h-1.5 rounded-full bg-primary/60" />
                    
                    <ContributionCard {...contribution} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
