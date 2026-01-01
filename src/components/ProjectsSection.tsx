import { useState, useEffect } from "react";
import { ExternalLink, Github, Globe, AlertCircle, TrendingUp, Code2, Zap, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProjectData {
  image: string;
  title: string;
  problemTitle: string;
  problemDescription: string;
  problemLink?: string;
  solutionTitle: string;
  solutionDescription: string;
  demoLink?: string;
  githubLink?: string;
  impact: string;
  techStack: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
}

const projectsData: ProjectData[] = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    title: "Modern Web Solutions",
    problemTitle: "Outdated Digital Presence",
    problemDescription: "Outdated website turns away clients. High bounce rates and low conversion.",
    problemLink: "https://example.com/problem/outdated-digital",
    solutionTitle: "Modern Web Solutions",
    solutionDescription: "Responsive, modern websites with cutting-edge design and seamless UX.",
    demoLink: "https://example.com/demo/modern-web",
    githubLink: "https://github.com/example/modern-web-solutions",
    impact: "+40% engagement, +35% conversion, 50% lower bounce rate. $500K+ revenue generated.",
    techStack: ["React", "TypeScript", "Tailwind", "Next.js", "Vercel"],
    features: ["Responsive", "SEO", "Fast", "Accessible", "Modern UI"],
    metrics: [
      { label: "Engagement", value: "+40%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Conversion", value: "+35%", icon: <Zap className="w-3.5 h-3.5" /> },
      { label: "Users", value: "50K+", icon: <Users className="w-3.5 h-3.5" /> },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    title: "Full-Stack Development",
    problemTitle: "Lack of Technical Expertise",
    problemDescription: "Legacy systems causing bottlenecks. Costly in-house teams. Scalability issues.",
    problemLink: "https://example.com/problem/technical-expertise",
    solutionTitle: "Full-Stack Development",
    solutionDescription: "Scalable apps with React, Node.js, cloud tech, and microservices architecture.",
    demoLink: "https://example.com/demo/fullstack-app",
    githubLink: "https://github.com/example/fullstack-development",
    impact: "-60% infrastructure costs, 3x performance boost, 10x user capacity without issues.",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "K8s"],
    features: ["Microservices", "Real-time", "Cloud", "APIs", "DB Optimized"],
    metrics: [
      { label: "Cost", value: "-60%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Performance", value: "3x", icon: <Zap className="w-3.5 h-3.5" /> },
      { label: "Scale", value: "10x", icon: <Users className="w-3.5 h-3.5" /> },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    title: "Automation & Optimization",
    problemTitle: "Inefficient Processes",
    problemDescription: "Manual work consumes 70% of time. High error rates. Outdated tools slow teams.",
    problemLink: "https://example.com/problem/inefficient-processes",
    solutionTitle: "Automation & Optimization",
    solutionDescription: "Intelligent automation with workflow optimization and AI-powered decisions.",
    demoLink: "https://example.com/demo/automation",
    githubLink: "https://github.com/example/automation-optimization",
    impact: "-60% manual work, -80% errors, 20h/week saved per member. 3x productivity increase.",
    techStack: ["Python", "Automation", "AI/ML", "APIs", "Workflows"],
    features: ["Automation", "Workflows", "Error -80%", "AI", "Monitoring"],
    metrics: [
      { label: "Time Saved", value: "60%", icon: <Zap className="w-3.5 h-3.5" /> },
      { label: "Errors", value: "-80%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      { label: "Productivity", value: "3x", icon: <Users className="w-3.5 h-3.5" /> },
    ],
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projectsData[currentIndex];

  return (
    <section id="projects" className="py-8 md:py-12 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Projects</h2>
        </div>

        {/* Compact Dashboard */}
        <Card className="relative overflow-hidden border-border shadow-lg">
          {/* Image & Title Header - Compact */}
          <div className="relative h-48 md:h-56 overflow-hidden bg-muted/30">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{currentProject.title}</h3>
            </div>
          </div>

          {/* Compact Content Grid */}
          <CardContent className="p-4 md:p-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Left Column: Problem & Solution */}
              <div className="space-y-4">
                {/* Problem - Compact */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <h4 className="text-sm font-semibold text-foreground">{currentProject.problemTitle}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                    {currentProject.problemDescription}
                  </p>
                  {currentProject.problemLink && (
                    <a
                      href={currentProject.problemLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline inline-flex items-center gap-1 pl-6"
                    >
                      Details <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Solution - Compact */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <h4 className="text-sm font-semibold text-foreground">{currentProject.solutionTitle}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                    {currentProject.solutionDescription}
                  </p>
                </div>

                {/* Impact - Compact */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground mb-1.5">Impact</h4>
                      <p className="text-xs text-foreground leading-relaxed">{currentProject.impact}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Metrics, Links, Tech & Features */}
              <div className="space-y-4">
                {/* Metrics - Compact Horizontal */}
                <div className="grid grid-cols-3 gap-2">
                  {currentProject.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-3 bg-muted/50 rounded-lg border border-border"
                    >
                      <div className="text-primary mb-1">{metric.icon}</div>
                      <div className="text-base font-bold text-foreground">{metric.value}</div>
                      <div className="text-[10px] text-muted-foreground text-center leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Links - Compact */}
                <div className="flex flex-col sm:flex-row gap-2">
                  {currentProject.demoLink && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 text-xs h-8"
                      asChild
                    >
                      <a
                        href={currentProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Demo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                  {currentProject.githubLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs h-8"
                      asChild
                    >
                      <a
                        href={currentProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Tech Stack - Compact */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-[10px] py-0.5 px-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features - Compact Grid */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground">Features</h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {currentProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 p-1.5 bg-muted/30 rounded border border-border/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-[10px] text-foreground leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          {/* Navigation Dots - Compact */}
          <div className="absolute top-4 right-4 flex gap-1.5 z-10">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
