"use client";

import styles from "./Home.module.css";

// This component can be expanded with more content
const AboutMeContent = () => (
  <article className="about-container">
    <h1>Hello World!</h1>
    <p>
      I'm <strong>Giri</strong>, a <strong>20-year-old Computer Science student</strong> who finds joy in <strong>decoding complexity</strong>.
    </p>
    <p>
      I believe <strong>true mastery</strong> begins when <strong>thinking becomes instinct</strong>.<br />
      I want to reach a point where <strong>writing Java or Python code</strong>, <strong>solving complex DSA problems</strong>, or <strong>designing optimal solutions</strong> doesn’t require conscious effort — it just <strong>flows</strong>.
    </p>
    <p>
      Like <strong>touch typing</strong> or <strong>riding a bike</strong>, instinct comes from <strong>relentless practice</strong> — exploring every angle, failing, fixing, and refining — until the <strong>right solution becomes second nature</strong>.
    </p>
    <p>
      That’s the level I chase:<br />
      Not just <strong>knowing the logic</strong>, but <strong>living it</strong>.
    </p>

    {/* Scoped responsive styling */}
    <style jsx>{`
      .about-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 1.5rem;
        font-size: 1.1rem;
        line-height: 1.8;
        color: #212529;
      }

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #111;
      }

      p {
        margin-bottom: 1.2rem;
      }

      strong {
        font-weight: 600;
        color: #0d6efd;
      }

      @media (max-width: 768px) {
        .about-container {
          padding: 1rem;
          font-size: 1rem;
        }

        h1 {
          font-size: 2rem;
        }
      }
    `}</style>
  </article>
);

export default function Home() {
  return (
    <div>
      <AboutMeContent />
    </div>
  );
}
