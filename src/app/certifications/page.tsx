'use client';
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
    <section style={{ padding: '4em 1em', backgroundColor: '#f0f2f5' }}>


      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {certifications.map((cert) => (
          <div
            key={cert.title}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
            }}
          >
            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    fontWeight: '600',
                    color: '#2d3748',
                    fontFamily: 'Georgia, serif',
                    lineHeight: '1.3',
                    paddingRight: '1rem',
                  }}
                >
                  {cert.title}
                </h3>
                <div
                  style={{
                    textAlign: 'right',
                    fontSize: '0.8rem',
                    color: '#4a5568',
                    minWidth: '90px',
                    fontWeight: 500,
                  }}
                >
                  <div style={{ fontWeight: 'bold' }}>{cert.issuedBy}</div>
                  <div>{cert.issuedDate}</div>
                </div>
              </div>

              {/* Platform */}
              <p
                style={{
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: '#718096',
                  marginBottom: '1.5rem',
                  textAlign: 'left',
                }}
              >
                {cert.platform}
              </p>

              {/* Skills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem',
                }}
              >
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.75rem',
                      background: '#edf2f7',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '15px',
                      border: '1px solid #e2e8f0',
                      color: '#4a5568',
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Spacer to push button to the bottom */}
              <div style={{ flexGrow: 1 }}></div>

              {/* Button */}
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '1rem' }}>
                <Link
                  href={cert.link}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#2b6cb0',
                    color: '#ffffff',
                    padding: '0.7rem 1.8rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                    borderBottom: '3px solid #1a365d',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2c5282';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#2b6cb0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  View Certificate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}