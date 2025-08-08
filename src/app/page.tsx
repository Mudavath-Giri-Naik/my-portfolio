"use client";

import styles from "./Home.module.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

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

  // Mobile-only: ensure only one details is expanded at a time
  useEffect(() => {
    if (!isMobile) return;
    const container = document.querySelector('.mobile-content');
    if (!container) return;
    const detailsEls = Array.from(container.querySelectorAll('details')) as HTMLDetailsElement[];
    const onToggle = (event: Event) => {
      const current = event.currentTarget as HTMLDetailsElement;
      if (current.open) {
        detailsEls.forEach((el) => {
          if (el !== current) el.open = false;
        });
      }
    };
    detailsEls.forEach((el) => el.addEventListener('toggle', onToggle));
    return () => {
      detailsEls.forEach((el) => el.removeEventListener('toggle', onToggle));
    };
  }, [isMobile]);

  return (
    <div>
      {/* Desktop: keep Projects page */}
      {!isMobile && <Projects />}

      {/* Mobile: collapsible cards per section */}
      {isMobile && (
        <div className="mobile-shell">
          <main className="mobile-content">
            <section id="projects" className="mobile-card">
              <details open>
                <summary>
                  <span className="summary-title">Projects</span>
                  <FiChevronDown className="summary-icon" />
                </summary>
                <div className="mobile-card-inner projects-inner">
                  <Projects />
                </div>
              </details>
            </section>

            <section id="contributions" className="mobile-card">
              <details>
                <summary>
                  <span className="summary-title">Contributions</span>
                  <FiChevronDown className="summary-icon" />
                </summary>
                <div className="mobile-card-inner">
                  <Contributions />
                </div>
              </details>
            </section>

            <section id="achievements" className="mobile-card">
              <details>
                <summary>
                  <span className="summary-title">Achievements</span>
                  <FiChevronDown className="summary-icon" />
                </summary>
                <div className="mobile-card-inner">
                  <Achievements />
                </div>
              </details>
            </section>

            <section id="blogs" className="mobile-card">
              <details>
                <summary>
                  <span className="summary-title">Blogs</span>
                  <FiChevronDown className="summary-icon" />
                </summary>
                <div className="mobile-card-inner">
                  <Blogs />
                </div>
              </details>
            </section>

            <section id="certifications" className="mobile-card">
              <details>
                <summary>
                  <span className="summary-title">Certifications</span>
                  <FiChevronDown className="summary-icon" />
                </summary>
                <div className="mobile-card-inner">
                  <Certifications />
                </div>
              </details>
            </section>
          </main>
        </div>
      )}

      {/* Mobile styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .mobile-shell {
            padding-bottom: 0;
            background: #ffffff;
          }
          .mobile-content {
            padding: 0.6rem;
          }
          .mobile-card {
            margin: 0.6rem 0 0.8rem 0;
          }
          /* Ensure equal left/right spacing and original width for project cards on mobile */
          .mobile-card .project-card {
            max-width: 350px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            width: 100%;
          }
          .mobile-card details {
            border: 1px solid var(--border);
            border-radius: 14px;
            background: var(--surface);
            box-shadow: var(--shadow);
            overflow: hidden;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .mobile-card summary {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.8rem 0.9rem;
            cursor: pointer;
            font-weight: 600;
            color: var(--text);
            background: #f8fafc;
          }
          .mobile-card summary::-webkit-details-marker { display: none; }
          .summary-icon {
            transition: transform 0.2s ease;
            color: var(--text);
            width: 18px; height: 18px;
            flex-shrink: 0;
          }
          .mobile-card details[open] .summary-icon {
            transform: rotate(180deg);
          }
          .mobile-card details[open] {
            border-color: rgba(37,99,235,0.35);
            box-shadow: 0 6px 16px rgba(37, 99, 235, 0.12), var(--shadow);
          }
          .mobile-card-inner {
            padding: 0.6rem 0.6rem 0.9rem 0.6rem;
          }
          .mobile-card details[open] .mobile-card-inner {
            animation: fadeSlide 0.18s ease;
          }
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .projects-inner > article {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
