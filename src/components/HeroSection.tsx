import developerImage from "@/assets/developer-person.png";
import SocialIcon from "./SocialIcon";
import CommentBox from "./CommentBox";
import { ChevronDown } from "lucide-react";

const commentsData = [
  {
    quote: "Giri transformed our outdated system into a modern, efficient platform.",
    author: "Rahul Sharma, CTO",
  },
  {
    quote: "His attention to detail and code quality is exceptional.",
    author: "Priya Patel, PM",
  },
  {
    quote: "Delivered ahead of schedule with outstanding results.",
    author: "Amit Kumar, Founder",
  },
  {
    quote: "A true professional who understands both tech and business needs.",
    author: "Sneha Reddy, CEO",
  },
];

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

      {/* Developer Image with Comment Boxes */}
      <div className="relative z-10 flex items-center justify-center w-full">
        {/* Left Comment Boxes - Hidden on mobile, shown on md+ */}
        <div className="hidden md:flex flex-col gap-4 absolute left-4 lg:left-12 xl:left-24 top-1/2 -translate-y-1/2">
          <div className="transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <CommentBox quote={commentsData[0].quote} author={commentsData[0].author} />
          </div>
          <div className="transform rotate-2 hover:rotate-0 transition-transform duration-300 ml-6">
            <CommentBox quote={commentsData[1].quote} author={commentsData[1].author} />
          </div>
        </div>

        {/* Developer Image */}
        <img
          src={developerImage}
          alt="Student Developer working on laptop"
          className="h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] object-contain"
        />

        {/* Right Comment Boxes - Hidden on mobile, shown on md+ */}
        <div className="hidden md:flex flex-col gap-4 absolute right-4 lg:right-12 xl:right-24 top-1/2 -translate-y-1/2">
          <div className="transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <CommentBox quote={commentsData[2].quote} author={commentsData[2].author} />
          </div>
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 mr-6">
            <CommentBox quote={commentsData[3].quote} author={commentsData[3].author} />
          </div>
        </div>
      </div>

      {/* Mobile Comment Boxes - Shown only on mobile */}
      <div className="md:hidden grid grid-cols-2 gap-3 mt-6 px-2">
        {commentsData.map((comment, index) => (
          <div key={index} className="transform scale-90">
            <CommentBox quote={comment.quote} author={comment.author} />
          </div>
        ))}
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
