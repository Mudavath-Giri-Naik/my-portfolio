"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Home.module.css";

// This component can be expanded with more content
const AboutMeContent = () => (
  <article>
    <h2>About Me</h2>
    <p>
      Pre-final year Computer Science student with hands-on experience in Python, AI/ML, and Google Cloud Platform (GCP).
    </p>
    <p>
      My focus lies in backend development, including building robust APIs, managing databases, and optimizing for performance. I am also proficient in developing full-stack web and mobile applications, often leveraging AI-powered tools. I am passionate about creating cloud-ready, product-focused solutions that solve real-world problems.
    </p>
  </article>
);


export default function Home() {
  return (
    <div>
      <AboutMeContent />
    </div>
  );
}