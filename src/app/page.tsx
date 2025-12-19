"use client";

import Image from "next/image";
import styles from "./Home.module.css";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { FiChevronDown, FiCode, FiGitBranch, FiAward, FiBookOpen, FiFlag } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const Projects = dynamic(() => import("./projects/page"), { ssr: false });
const Contributions = dynamic(() => import("./contributions/page"), { ssr: false });
const Achievements = dynamic(() => import("./achievements/page"), { ssr: false });
const Certifications = dynamic(() => import("./certifications/page"), { ssr: false });
const Blogs = dynamic(() => import("./blogs/page"), { ssr: false });

type SectionBlock = {
  id: string;
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

const sections: SectionBlock[] = [
  { id: "projects", title: "Projects", icon: <FiCode />, content: <Projects /> },
  { id: "contributions", title: "Contributions", icon: <FiGitBranch />, content: <Contributions /> },
  { id: "achievements", title: "Achievements", icon: <FiAward />, content: <Achievements /> },
  { id: "blogs", title: "Blogs", icon: <FiBookOpen />, content: <Blogs /> },
  { id: "certifications", title: "Certifications", icon: <FiFlag />, content: <Certifications /> },
];

export default function Home() {
  return (
    <div className={styles.heroPage}>
      <section className={styles.heroPanel}>
        <div className={styles.logoContainer}>
          <Image
            src="/profile.jpg"
            alt="Giri Naik"
            width={120}
            height={120}
            className={styles.profileLogo}
            priority
          />
        </div>
        <h1 className={styles.heroName}>GIRI NAIK</h1>
        <p className={styles.heroTagline}>Student Developer</p>
        <div className={styles.heroSocials}>
          <a href="https://github.com/Mudavath-Giri-Naik" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/giri-naik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://leetcode.com/u/Mudavathgirinaik/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode />
          </a>
          <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer" aria-label="CodeChef">
            <SiCodechef />
          </a>
          <a href="mailto:yourgirinaik@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </section>

      <section className={styles.accordionStack}>
        <div className={styles.accordionIntro}>
          <h2>About Me</h2>
          <p>
            I'm a passionate developer crafting beautiful digital experiences. With expertise in modern web technologies, 
            AI & Machine Learning, I transform ideas into elegant, functional solutions. I believe in clean code, 
            minimalist design, and making the web a better place one project at a time.
          </p>
        </div>

        {sections.map((section, index) => (
          <details
            key={section.id}
            id={section.id}
            className={styles.accordionCard}
            defaultOpen={index === 0}
          >
            <summary>
              <div className={styles.summaryLeft}>
                <span className={styles.summaryIcon}>{section.icon}</span>
                <span>{section.title}</span>
              </div>
              <FiChevronDown className={styles.chevronIcon} aria-hidden="true" />
            </summary>
            <div className={styles.accordionBody}>{section.content}</div>
          </details>
        ))}
      </section>
    </div>
  );
}
