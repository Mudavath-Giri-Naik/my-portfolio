import { useState } from "react";

interface ProjectCardProps {
  image: string;
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
}

const ProjectCard = ({
  image,
  problemTitle,
  problemDescription,
  solutionTitle,
  solutionDescription,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-muted/50 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="bg-background rounded-xl h-40 sm:h-48 md:h-56 flex items-center justify-center mb-4 md:mb-6 overflow-hidden">
        <img
          src={image}
          alt={problemTitle}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Badge */}
      <div className="mb-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
            isHovered
              ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {isHovered ? "Solution" : "Problem"}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 transition-all duration-300">
        {isHovered ? solutionTitle : problemTitle}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-muted-foreground transition-all duration-300">
        {isHovered ? solutionDescription : problemDescription}
      </p>
    </div>
  );
};

export default ProjectCard;
