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
  locationLink: "https://maps.app.goo.gl/UXwe2vHuUVVExzBb6?g_st=aw",
  about:
    "CS Undergrad Specializing in AI/ML, Algorithmic Problem-Solving, and MERN Full Stack Developer. Exploring edge AI, federated learning, and blockchain-integrated AI solutions.",
  summary:
    "Full Stack Developer & AI/ML enthusiast, bridging intelligent systems with scalable web solutions. Proficient in React, Node.js, and algorithm optimization, with a strong focus on Web3, blockchain, and real-world AI applications.\n\n" +
    "🚀 Full-Stack Developer | AI & Web3 Enthusiast | Active Open-Source Contributor\n\n" +
    "🔹 Building Scalable Solutions with MERN & Next.js\n" +
    "🔹 Strong Problem-Solving & DSA Skills (LeetCode, Codeforces)\n" +
    "🔹 Microsoft Learn Student Ambassador (MLSA) | Community Mentor",
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
    "C/C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "Data Structures and Algorithms",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux",
    "Tailwind CSS",
    "REST API Development",
    "Authentication & Authorization (JWT, OAuth)",
    "Docker",
    "Cloud Computing (AWS, GCP)",
    "Git & GitHub",
    "Postman,"
  ],
  
  projects: [
    {
      title: "Resourcian",
      techStack: [
        "Side Project",
        "MERN",
        "TypeScript",
        "Next.js",
        "Node.js",
        "MongoDB",
        "AI/ML",
        "Web Scraping",
      ],
      description: "A one-stop platform providing structured roadmaps, AI-powered resume analysis, and real-time opportunities for students.",
      
      link: {
        label: "Resourcian",
        href: "https://resourcian.netlify.app/",
      }
    },
    {
      title: "BeyondTheCampus",
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
  COMMUNITY_DATA : [
    {
      organization: "Google Developer Groups (GDG) Vizag",
      link: "https://gdg.community.dev/gdg-vizag/",
      badges: ["Active Member", "Speaker", "Volunteer"],
      role: "Community Member",
      logo: "GDGLogo",
      start: "August 2023",
      end: "Present",
      description:
        "Actively participated in GDG Vizag events, networking with industry professionals, and contributing to tech discussions.",
    },
    {
      organization: "Microsoft Learn Student Ambassadors",
      link: "https://studentambassadors.microsoft.com/",
      badges: ["Student Ambassador"],
      role: "Student Ambassador",
      logo: "MicrosoftLogo",
      start: "November 2024",
      end: "Present",
      description:
        "Engaged in technical workshops, mentoring students, and promoting learning resources from Microsoft.",
    },
    {
      organization: "Hackathons & Ideathons",
      link: "",
      badges: ["Participant", "Finalist", "Winner"],
      role: "Hackathon Enthusiast",
      logo: "HackathonLogo",
      start: "2023",
      end: "Present",
      description:
        "Actively participated in multiple hackathons, ideathons, and technical competitions, collaborating with peers to develop innovative solutions.",
    },
  ],

} as const;
