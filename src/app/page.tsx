"use client";

import styles from "./Home.module.css";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { FiChevronDown, FiCode, FiGitBranch, FiAward, FiBookOpen, FiFlag } from "react-icons/fi";

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
      <section className={styles.accordionStack}>
        {sections.map((section, index) => (
          <details
            key={section.id}
            id={section.id}
            className={styles.accordionCard}
            open={index === 0}
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
