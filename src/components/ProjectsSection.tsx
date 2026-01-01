import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    problemTitle: "Outdated Digital Presence",
    problemDescription: "Outdated website or app turns away potential clients.",
    solutionTitle: "Modern Web Solutions",
    solutionDescription: "Built responsive, modern websites that increased client engagement by 40%.",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    problemTitle: "Lack of Technical Expertise",
    problemDescription: "Struggling with evolving tech and costly in-house teams.",
    solutionTitle: "Full-Stack Development",
    solutionDescription: "Delivered scalable applications using React, Node.js, and cloud technologies.",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    problemTitle: "Inefficient Processes",
    problemDescription: "Manual work and outdated tools slow teams down.",
    solutionTitle: "Automation & Optimization",
    solutionDescription: "Implemented automation solutions reducing manual work by 60%.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 md:mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
