import developerImage from "@/assets/developer-person.png";
import SocialIcon from "./SocialIcon";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-16 md:pt-20 px-4">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none px-2">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none tracking-tight text-hero-primary text-center">
          Student
        </h1>
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none tracking-tight text-hero-secondary -mt-4 sm:-mt-6 md:-mt-10 lg:-mt-14 text-center">
          Developer
        </h1>
      </div>

      {/* Developer Image */}
      <div className="relative z-10 flex items-center justify-center w-full">
        <img
          src={developerImage}
          alt="Student Developer working on laptop"
          className="h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] object-contain"
        />
      </div>

      {/* Social Icons */}
      <div className="relative z-20 flex items-center justify-center flex-wrap gap-3 md:gap-4 mt-6 md:mt-8 px-4">
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
