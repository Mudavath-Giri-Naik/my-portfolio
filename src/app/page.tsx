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

    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '2em',
      background: '#fff',
      fontSize: '1em',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      border: '1px solid #e0e0e0',
      wordBreak: 'break-word',
    }}>
      <thead>
        <tr style={{background: '#f8f9fa'}}>
          <th style={{textAlign: 'left', padding: '0.7em 1em', borderBottom: '1px solid #e0e0e0', fontWeight: 700, width: '220px'}}>Category</th>
          <th style={{textAlign: 'left', padding: '0.7em 1em', borderBottom: '1px solid #e0e0e0', fontWeight: 700}}>Skills / Tools / Frameworks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{padding: '0.6em 1em', fontWeight: 600}}>Programming Languages</td>
          <td style={{padding: '0.6em 1em'}}>C, C++, Java, Python, SQL</td>
        </tr>
        <tr style={{background: '#f8f9fa'}}>
          <td style={{padding: '0.6em 1em', fontWeight: 600}}>Backend Development</td>
          <td style={{padding: '0.6em 1em'}}>
            <strong>Concepts:</strong> Authentication, APIs, CRUD, Routing, Middlewares, Caching, Load Balancing, Async Processing, Session Management, Error Handling, Rate Limiting, API Testing, API Documentation<br/>
            <strong>Frameworks/Libraries:</strong> Spring Boot, Spring Security, JPA/Hibernate, Express.js, Node.js, JWT, Redis, Postman, Swagger (OpenAPI), REST Assured, Mongoose, Sequelize, Kafka, RabbitMQ, Docker
          </td>
        </tr>
        <tr>
          <td style={{padding: '0.6em 1em', fontWeight: 600}}>AI & Machine Learning</td>
          <td style={{padding: '0.6em 1em'}}>
            <strong>Core Libraries:</strong> NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn<br/>
            <strong>Deep Learning:</strong> TensorFlow, PyTorch, Keras<br/>
            <strong>Others:</strong> OpenCV, NLTK, SpaCy, FastAI, Hugging Face Transformers
          </td>
        </tr>
        <tr style={{background: '#f8f9fa'}}>
          <td style={{padding: '0.6em 1em', fontWeight: 600}}>Tools</td>
          <td style={{padding: '0.6em 1em'}}>Git, GitHub, VS Code, IntelliJ IDEA, Jupyter Notebook, Postman, Swagger UI, Docker, Maven, Gradle, Google Colab, Conda, Virtualenv, pip, Kubernetes (basics)</td>
        </tr>
      </tbody>
    </table>
  </article>
);


export default function Home() {
  return (
    <div>
      <AboutMeContent />
    </div>
  );
}