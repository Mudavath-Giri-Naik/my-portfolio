import developerImage from "@/assets/developer-person.png";
import SocialIcon from "./SocialIcon";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none tracking-tight text-hero-primary">
          Student
        </h1>
        <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none tracking-tight text-hero-secondary -mt-8 md:-mt-12 lg:-mt-16">
          Developer
        </h1>
      </div>

      {/* Developer Image */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src={developerImage}
          alt="Student Developer working on laptop"
          className="h-[60vh] md:h-[70vh] lg:h-[80vh] object-contain animate-float"
        />
      </div>

      {/* Social Icons */}
      <div className="relative z-20 flex items-center gap-4 mt-8">
        <SocialIcon type="instagram" />
        <SocialIcon type="linkedin" />
        <SocialIcon type="github" />
        <SocialIcon type="upwork" />
        <SocialIcon type="medium" />
        <SocialIcon type="whatsapp" />
        <SocialIcon type="phone" />
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-20 flex flex-col items-center gap-2 mt-8 animate-pulse-soft">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
