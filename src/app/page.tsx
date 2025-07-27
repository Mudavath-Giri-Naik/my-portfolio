"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Home.module.css";

// This component can be expanded with more content
const AboutMeContent = () => (
  <article>
    <h1>Hello World!</h1>
    <p>
      I'm <strong>Giri</strong>, a <strong>20-year-old Computer Science student</strong> who finds joy in <strong>decoding complexity</strong>.
    </p>
    <p>
      I believe <strong>true mastery</strong> begins when <strong>thinking becomes instinct</strong>.<br/>
      I want to reach a point where <strong>writing Java or Python code</strong>, <strong>solving complex DSA problems</strong>, or <strong>designing optimal solutions</strong> doesn’t require conscious effort — it just <strong>flows</strong>.
    </p>
    <p>
      Like <strong>touch typing</strong> or <strong>riding a bike</strong>, instinct comes from <strong>relentless practice</strong> — exploring every angle, failing, fixing, and refining — until the <strong>right solution becomes second nature</strong>.
    </p>
    <p>
      That’s the level I chase:<br/>
      Not just <strong>knowing the logic</strong>, but <strong>living it</strong>.
    </p>

    {/* The updated responsive table */}
    <div className="skills-table-container">
      <table className="skills-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Skills / Tools / Frameworks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Programming Languages</td>
            <td>C, C++, Java, Python, SQL</td>
          </tr>
          <tr>
            <td>Backend Development</td>
            <td>
              <strong>Concepts:</strong> Authentication, APIs, CRUD, Routing, Middlewares, Caching, Load Balancing, Async Processing, Session Management, Error Handling, Rate Limiting, API Testing, API Documentation<br/>
              <strong>Frameworks/Libraries:</strong> Spring Boot, Spring Security, JPA/Hibernate, Express.js, Node.js, JWT, Redis, Postman, Swagger (OpenAPI), REST Assured, Mongoose, Sequelize, Kafka, RabbitMQ, Docker
            </td>
          </tr>
          <tr>
            <td>AI & Machine Learning</td>
            <td>
              <strong>Core Libraries:</strong> NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn<br/>
              <strong>Deep Learning:</strong> TensorFlow, PyTorch, Keras<br/>
              <strong>Others:</strong> OpenCV, NLTK, SpaCy, FastAI, Hugging Face Transformers
            </td>
          </tr>
          <tr>
            <td>Tools</td>
            <td>Git, GitHub, VS Code, IntelliJ IDEA, Jupyter Notebook, Postman, Swagger UI, Docker, Maven, Gradle, Google Colab, Conda, Virtualenv, pip, Kubernetes (basics)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Scoped CSS for the component, including the responsive media query */}
    <style jsx>{`
      .skills-table-container {
        margin-top: 2em;
        overflow-x: auto;
      }

      .skills-table {
        width: 100%;
        border-collapse: collapse;
        background: #fff;
        font-size: 1em;
        box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        border: 1px solid #e0e0e0;
        word-break: break-word;
      }

      .skills-table th, .skills-table td {
        padding: 0.8em 1.2em;
        text-align: left;
      }

      .skills-table thead tr {
        background: #f8f9fa;
      }

      .skills-table th {
        font-weight: 700;
        border-bottom: 2px solid #e0e0e0;
      }
      
      .skills-table th:first-child {
        width: 220px;
      }

      .skills-table tbody tr:nth-child(even) {
        background: #f8f9fa;
      }
      
      .skills-table td {
          border-bottom: 1px solid #e0e0e0;
      }

      .skills-table tbody tr:last-child td {
          border-bottom: none;
      }

      /* --- Responsive Mobile View --- */
      @media (max-width: 768px) {
        .skills-table thead {
          /* Hide the default table header on mobile */
          display: none;
        }

        .skills-table, .skills-table tbody, .skills-table tr, .skills-table td {
          /* Deconstruct the table into block-level elements */
          display: block;
          width: 100%;
        }

        .skills-table tr {
          /* Each row becomes a card */
          margin-bottom: 1.5rem;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          overflow: hidden; /* Important for border-radius */
        }
        
        .skills-table td {
          border: none;
          padding: 1rem 1.2rem;
        }

        .skills-table td:first-child {
          /* This is our new card header */
          background-color: #e7f5ff; /* Light blue background */
          font-weight: 700;
          font-size: 1.1em;
          color: #1c5d99; /* A darker blue for text */
          border-bottom: 1px solid #cce7ff;
        }
        
        .skills-table td:last-child {
            /* This is the card body */
            background-color: #fff;
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