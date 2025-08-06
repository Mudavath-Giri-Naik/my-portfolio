"use client";

import styles from "./Home.module.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import each section to avoid SSR issues
const Projects = dynamic(() => import('./projects/page'), { ssr: false });
const Contributions = dynamic(() => import('./contributions/page'), { ssr: false });
const Achievements = dynamic(() => import('./achievements/page'), { ssr: false });
const Certifications = dynamic(() => import('./certifications/page'), { ssr: false });
const Blogs = dynamic(() => import('./blogs/page'), { ssr: false });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div>
      {/* Desktop View - Redirect to Projects by default */}
      {!isMobile && (
        <Projects />
      )}

      {/* Mobile View - All sections displayed one after another, using their real UI */}
      {isMobile && (
        <div className="mobile-content">
          <h2 className="mobile-section-heading">Projects</h2>
          <Projects />
          <h2 className="mobile-section-heading">Contributions</h2>
          <Contributions />
          <h2 className="mobile-section-heading">Achievements</h2>
          <Achievements />
          <h2 className="mobile-section-heading">Blogs</h2>
          <Blogs />
          <h2 className="mobile-section-heading">Certifications</h2>
          <Certifications />
        </div>
      )}
      {/* Compact mobile styles for headings and content */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .mobile-section-heading {
            font-size: 1.1rem !important;
            margin: 1.2em 0 0.5em 0 !important;
            padding: 0.2em 0.5em !important;
            color: #1a202c !important;
            font-weight: 700 !important;
            letter-spacing: 0.01em;
            background: #f5f5f5;
            border-radius: 6px;
            text-align: left;
          }
          /* Make all articles and cards more compact */
          article, .certification-card, .card-content, .mobile-project-card, .mobile-certification-card {
            padding: 0.8em !important;
          }
          .certifications-section {
            padding: 1.5em 0.5em !important;
          }
          .certifications-grid {
            gap: 1.2em !important;
          }
          .card-title, .card-header h3, .mobile-project-card h3, .mobile-section-header h2 {
            font-size: 1rem !important;
            margin-bottom: 0.3em !important;
          }
          .card-platform, .cert-platform {
            font-size: 0.8rem !important;
            margin-bottom: 0.5em !important;
          }
          .card-skills, .cert-skills, .tech-tags, .feature-tags {
            gap: 0.2em !important;
            margin-bottom: 0.5em !important;
          }
          .skill-tag, .cert-skill-tag, .tech-tag, .feature-tag {
            font-size: 0.65rem !important;
            padding: 0.15em 0.4em !important;
          }
          .card-button, .cert-button, .project-button {
            font-size: 0.75rem !important;
            padding: 0.4em 1em !important;
            border-radius: 4px !important;
          }
          .card-issuer, .cert-issuer {
            font-size: 0.7rem !important;
            min-width: 60px !important;
          }
          .mobile-content > * {
            margin-bottom: 0.8em !important;
          }
          .mobile-content {
            padding: 0 !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
