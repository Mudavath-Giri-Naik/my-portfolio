import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Giri Naik",
  initials: "GN",
  location: "Vizag, India, IN",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "CS Undergrad Specializing in AI/ML, Algorithmic Problem-Solving, and MERN Full Stack Developer. Exploring edge AI, federated learning, and blockchain-integrated AI solutions.",
  summary:
    "Full Stack Developer & AI/ML enthusiast, bridging intelligent systems with scalable web solutions. Proficient in React, Node.js, and algorithm optimization, with a strong focus on Web3, blockchain, and real-world AI applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/170388293?s=400&u=7460f359310921be750c63199b5ff997c986d267&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "yourgirinaik@gmail.com",
    tel: "+91 9652560237",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Mudavath-Giri-Naik",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/giri-naik/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/girinaik",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Maharaja Vijayaram Gajapathi Raj Engineering College",
      degree: "Bachelor's Degree in Computer Science Engineering ",
      start: "2023",
      end: "Expected 2027",
    },
    {
      school: "APTWREIS Junior College Of Excellence ",
      degree: "Physics , Chemistry , Mathematics",
      start: "2020",
      end: "2022",
    },
  ],
  work: [
    {
      company: "EduSkills",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Backend Development",
      logo: ParabolLogo,
      start: "April 2024",
      end: "June 2024",
      description:
        "Worked as a Backend Developer, developing and optimizing backend services for an Android application.",
    },

  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Python",
    "Java",
    
  ],
  projects: [
    {
      title: "BeyondMyCampus",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform where students can collaborate with other college students for Growth and Team Work",
      logo: ConsultlyLogo,
      link: {
        label: "BeyondMyCampus",
        href: "https://beyondcampus.netlify.app/",
      },
    },

  ],
} as const;
