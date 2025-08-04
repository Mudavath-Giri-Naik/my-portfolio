'use client';
import Head from 'next/head';
import Link from 'next/link';

type Certification = {
  title: string;
  platform: string;
  issuedBy: string;
  issuedDate: string;
  skills: string[];
  link: string;
};

// Updated list of certifications with exact titles, dates, and verification links (EdX/EdX)
const certifications: Certification[] = [
     
  {
    title: 'The Complete 2023 Web Development Bootcamp',
    platform: 'Udemy',
    issuedBy: 'Udemy',
    issuedDate: 'Dec 14, 2023',
    skills: ["Full-Stack Web Development", "JavaScript (ES6+), HTML5, CSS3", "React.js & Node.js", "REST APIs & SQL", "Web3 & Blockchain Development"],
    link: 'https://www.udemy.com/certificate/UC-51f96d35-8ced-4fd2-97d2-50f938726cbf/',
  },
  {
    title: 'A-Level Further Mathematics',
    platform: 'EdX',
    issuedBy: 'ImperialX',
    issuedDate: 'April 21, 2024',
    skills: ['Differential Equations', 'Complex Numbers', 'Matrices', 'Vector Algebra', 'Proof', 'Algorithms'],
    link: 'https://courses.edx.org/certificates/deddd4aacf094ca2951bf36c4e1205e0?_gl=1*19fmmt3*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw', // Placeholder link for EdX/ImperialX
  },
  {
    title: 'Introduction to Cloud Computing',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'April 22, 2024',
    skills: ['Cloud Concepts', 'IaaS', 'PaaS', 'SaaS', 'Cloud Migration', 'Hybrid Cloud'],
    link: 'https://courses.edx.org/certificates/87fb4f680a5f4b9697d3934f711166c7?_gl=1*15siruw*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },
  {
    title: 'Full Stack Application Development Project',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'July 12, 2024',
    skills: ['Full Stack Architecture', 'System Design', 'Frontend', 'Backend', 'Database Integration', 'Deployment'],
    link: 'https://courses.edx.org/certificates/ec71da81973d4b87b4e39ba266ae2159?_gl=1*1ar2i8t*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },
  {
    title: 'Back-end Application Development with Node.js and Express',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'July 12, 2024',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Middleware', 'Asynchronous JavaScript', 'NPM'],
    link: 'https://courses.edx.org/certificates/824b7886d36c4711ba07ec92f1a41ccb?_gl=1*1a0suhq*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },
  {
    title: 'Introduction to Cloud Native, DevOps, Agile, and NoSQL',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'July 12, 2024',
    skills: ['DevOps', 'Agile', 'NoSQL', 'Cloud Native', 'CI/CD', 'Continuous Deployment'],
    link: 'https://courses.edx.org/certificates/c903fa4895b04d23b38ccddfad7f21a8?_gl=1*1ue25dl*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },
  {
    title: 'Introduction to Containers, Kubernetes and OpenShift',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'July 12, 2024',
    skills: ['Docker', 'Kubernetes', 'OpenShift', 'Container Orchestration', 'Pods', 'YAML Configuration'],
    link: 'https://courses.edx.org/certificates/e5466b367f3f4685906fa45bbf4e04ad?_gl=1*1ar2i8t*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },
  {
    title: 'Microservices and Serverless',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'July 12, 2024',
    skills: ['Microservices', 'Serverless', 'AWS Lambda', 'API Gateway', 'Cloud Functions', 'Event-Driven Architecture'],
    link: 'https://courses.edx.org/certificates/e580724347ec4bbaa743cc61a50c8042?_gl=1*1ar2i8t*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },
  {
    title: 'Python for AI & Development Project',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'July 12, 2024',
    skills: ['Python', 'AI Applications', 'Machine Learning Basics', 'Data Analysis', 'Project Work'],
    link: 'https://courses.edx.org/certificates/296a9c557696405782401291266140c0?_gl=1*1a0suhq*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },
  {
    title: 'Python Basics for Data Science',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'July 4, 2024',
    skills: ['Python', 'Data Structures', 'Data Types', 'Loops', 'Functions', 'Pandas', 'NumPy'],
    link: 'https://courses.edx.org/certificates/623080cc7db24ba1b3a1f710bef17bf3?_gl=1*18gmekr*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },
  {
    title: 'Django Application Development with SQL and Databases',
    platform: 'EdX',
    issuedBy: 'IBM',
    issuedDate: 'July 12, 2024',
    skills: ['Django', 'SQL', 'ORM', 'Database Migrations', 'PostgreSQL', 'Django REST Framework'],
    link: 'https://courses.edx.org/certificates/ef2e4976a2264f8491bb7a1a99794228?_gl=1*1ue25dl*_gcl_au*NTIyMDYzMzc2LjE3NTQxMDAxNTc.*_ga*MTE4MzU0MDUzLjE3NTQxMDAxNTc.*_ga_D3KS4KMDT0*czE3NTQxMDI1NTgkbzIkZzEkdDE3NTQxMDI2MzEkajYwJGwwJGgw',
  },

];

export default function Certifications() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="certifications-section">
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="certification-card"
            >
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">
                    {cert.title}
                  </h3>
                  <div className="card-issuer">
                    <div style={{ fontWeight: 'bold' }}>{cert.issuedBy}</div>
                    <div>{cert.issuedDate}</div>
                  </div>
                </div>

                <p className="card-platform">
                  {cert.platform}
                </p>

                <div className="card-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div style={{ flexGrow: 1 }}></div>

                <div className="card-button-container">
                  <Link
                    href={cert.link}
                    className="card-button"
                  >
                    View Certificate
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      </section>
      <style jsx global>{`
        .certifications-section {
          padding: 4em 1em;
          background-color: #f0f2f5;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .certification-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .certification-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .card-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .card-title {
          font-size: clamp(1.2rem, 3vw, 1.4rem);
          font-weight: 600;
          color: #2d3748;
          font-family: 'Georgia', serif;
          line-height: 1.3;
          padding-right: 1rem;
        }

        .card-issuer {
          text-align: right;
          font-size: 0.8rem;
          color: #4a5568;
          min-width: 90px;
          font-weight: 500;
        }

        .card-platform {
          font-size: 0.95rem;
          font-style: italic;
          color: #718096;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .card-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .skill-tag {
          font-size: 0.75rem;
          background: #edf2f7;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          border: 1px solid #e2e8f0;
          color: #4a5568;
          font-weight: 500;
        }

        .card-button-container {
          text-align: center;
          margin-top: auto;
          padding-top: 1rem;
        }

        .card-button {
          display: inline-block;
          background-color: #2b6cb0;
          color: #ffffff;
          padding: 0.7rem 1.8rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.2s ease;
          border-bottom: 3px solid #1a365d;
        }

        .card-button:hover {
          background-color: #2c5282;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
} 