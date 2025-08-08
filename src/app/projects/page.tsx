'use client';

import Link from 'next/link';

export default function Projects() {
  return (
    <article
      style={{
        marginTop: '0.25rem',
        paddingTop: 0,
      }}
    >
      <div style={{
        display: 'grid',
        gap: '0.8em',
        marginTop: '0.25em'
      }}>

        {/* AI Assistant Project */}
        <div className="project-card" style={{
          border: '1px solid var(--border)',
          borderRadius: '14px',
          overflow: 'hidden',
          background: 'var(--surface)',
          boxShadow: 'var(--shadow)',
          maxWidth: '300px',
          padding: '0.6em',
          position: 'relative'
        }}>
          {/* Live Icon */}
          <div style={{
            position: 'absolute',
            top: '0.5em',
            right: '0.5em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3em',
            fontSize: '0.7em',
            color: '#22c55e',
            fontWeight: '500'
          }}>
            <div className="live-dot"></div>
            <span>LIVE</span>
          </div>

          <h2 style={{
            margin: '0 0 0.2em 0',
            color: 'var(--text)',
            fontSize: '1.0em',
            paddingRight: '3em'
          }}>
            🤖 Advanced AI Assistant with Human-in-the-Loop
          </h2>

          <p style={{
            color: 'var(--muted)',
            marginBottom: '0.5em',
            lineHeight: '1.4',
            fontSize: '0.75em'
          }}>
            A smart conversational assistant built with LangGraph, Google Gemini, and Flask, featuring real-time web search, human-in-the-loop intervention, persistent memory, and production-ready deployment.
          </p>

          {/* Tech Stack */}
          <div style={{ marginBottom: '0.7em' }}>
              <h3 style={{
              fontSize: '0.85em',
              margin: '0 0 0.2em 0',
                color: 'var(--text)'
            }}>
              Tech Stack:
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.3em'
            }}>
              {['Python', 'LangGraph', 'Gemini', 'Flask', 'Tavily', 'Docker'].map((tech) => (
                <span key={tech} style={{
                  background: 'rgba(37,99,235,0.08)',
                  color: 'var(--primary-700)',
                  padding: '0.15em 0.35em',
                  borderRadius: '3px',
                  fontSize: '0.65em',
                  border: '1px solid rgba(37,99,235,0.18)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div style={{ marginBottom: '0.7em' }}>
              <h3 style={{
              fontSize: '0.85em',
              margin: '0 0 0.2em 0',
                color: 'var(--text)'
            }}>
              Features:
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.3em'
            }}>
              {['HITL', 'session memory', 'real-time search', 'secure & scalable'].map((feature) => (
                <span key={feature} style={{
                  background: 'rgba(2,132,199,0.08)',
                  color: '#0369a1',
                  padding: '0.15em 0.4em',
                  borderRadius: '3px',
                  fontSize: '0.65em',
                  border: '1px solid rgba(2,132,199,0.18)'
                }}>
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* View Project Button */}
          <div style={{ textAlign: 'center' }}>
            <a
              href="https://basic-chatbot-cpf6.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--primary-600)',
                color: '#fff',
                padding: '0.35em 0.7em',
                textDecoration: 'none',
                borderRadius: '3px',
                fontWeight: '500',
                transition: 'background-color 0.2s',
                fontSize: '0.75em'
              }}
              className="project-button"
            >
              View Project
            </a>
          </div>
        </div>



      </div>

      <style jsx>{`
        .project-button:hover {
          background-color: #0b0080 !important;
        }

        .live-dot {
          width: 5px;
          height: 5px;
          background-color: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .mobile-menu-spacer {
          display: none;
          height: 3.5rem;
        }

        @media (max-width: 768px) {
          .mobile-menu-spacer {
            display: block;
          }
        }
      `}</style>
    </article>
  );
}
