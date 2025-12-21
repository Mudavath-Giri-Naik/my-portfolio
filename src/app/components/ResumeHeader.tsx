'use client';

import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import styles from "../Home.module.css";

export default function ResumeHeader() {
  return (
    <header className={styles.resumeHeader}>
      <div className={styles.resumeHeaderContent}>
        <div className={styles.resumeHeaderImage}>
          <Image
            src="/profile.jpg"
            alt="Giri Naik"
            width={160}
            height={160}
            className={styles.resumeProfilePic}
            priority
          />
        </div>
        <div className={styles.resumeHeaderInfo}>
          <h1 className={styles.resumeHeaderName}>
            Giri Naik <span className={styles.resumeHeaderTitle}>(Student Developer)</span>
          </h1>
          <p className={styles.resumeHeaderDescription}>
            Exploring how things work under the hood — from DSA and CS fundamentals to system internals.<br />
            Tracking my learning daily and improving incrementally.<br />
            This site is a living record of my progress, effort, and curiosity.
          </p>
          <p className={styles.resumeHeaderEducation}>
            B.Tech | CSE | 2023 - 2027 | MVGR College of Engineering (Vizianagaram) | 535005
          </p>
        </div>
        <div className={styles.resumeHeaderSocials}>
          <a
            href="https://www.linkedin.com/in/giri-naik/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeSocialIcon}
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mudavath-Giri-Naik"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeSocialIcon}
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/Mudavathgirinaik/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeSocialIcon}
            title="LeetCode"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.codechef.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeSocialIcon}
            title="CodeChef"
            aria-label="CodeChef"
          >
            <SiCodechef />
          </a>
          <a
            href="mailto:yourgirinaik@gmail.com"
            className={styles.resumeSocialIcon}
            title="Email"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919652560237"
            className={styles.resumeSocialIcon}
            title="Phone"
            aria-label="Phone"
          >
            <FaPhone />
          </a>
        </div>
      </div>
    </header>
  );
}
