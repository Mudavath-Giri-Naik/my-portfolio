import { useState, useEffect } from "react";

const projectsData = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    problemTitle: "Outdated Digital Presence",
    problemDescription: "Outdated website or app turns away potential clients.",
    solutionTitle: "Modern Web Solutions",
    solutionDescription: "Built responsive, modern websites that increased client engagement by 40%.",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    problemTitle: "Lack of Technical Expertise",
    problemDescription: "Struggling with evolving tech and costly in-house teams.",
    solutionTitle: "Full-Stack Development",
    solutionDescription: "Delivered scalable applications using React, Node.js, and cloud technologies.",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    problemTitle: "Inefficient Processes",
    problemDescription: "Manual work and outdated tools slow teams down.",
    solutionTitle: "Automation & Optimization",
    solutionDescription: "Implemented automation solutions reducing manual work by 60%.",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projectsData[currentIndex];

  return (
    <section id="projects" className="py-8 md:py-16 px-4 md:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Carousel Container */}
        <div
          className="relative bg-muted/30 rounded-2xl md:rounded-3xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Project Image */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
            <img
              src={currentProject.image}
              alt={currentProject.problemTitle}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
            {/* Badge */}
            <div className="mb-3">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 ${
                  isHovered
                    ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400"
                    : "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400"
                }`}
              >
                {isHovered ? "Solution" : "Problem"}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 transition-all duration-300">
              {isHovered ? currentProject.solutionTitle : currentProject.problemTitle}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground max-w-xl transition-all duration-300">
              {isHovered ? currentProject.solutionDescription : currentProject.problemDescription}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-5 md:bottom-8 right-5 md:right-8 flex gap-2">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
