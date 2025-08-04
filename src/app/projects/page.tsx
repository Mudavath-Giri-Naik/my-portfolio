'use client';

import Link from 'next/link';

export default function Projects() {
  return (
    <article
      style={{
        marginTop: '1.5rem',
        paddingTop: '1rem',
      }}
    >
      {/* Spacer to avoid overlap with mobile menu (only visible on mobile) */}
      <div className="mobile-menu-spacer" />

      <div style={{
        display: 'grid',
        gap: '0.8em',
        marginTop: '0.8em'
      }}>

        {/* AI Assistant Project */}
        <div style={{
          border: '1px solid #a2a9b1',
          borderRadius: '4px',
          overflow: 'hidden',
          background: '#fff',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          maxWidth: '350px',
          padding: '0.7em',
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
            color: '#202122',
            fontSize: '1.1em',
            paddingRight: '3em'
          }}>
            🤖 Advanced AI Assistant with Human-in-the-Loop
          </h2>

          <p style={{
            color: '#54595d',
            marginBottom: '0.5em',
            lineHeight: '1.4',
            fontSize: '0.8em'
          }}>
            A smart conversational assistant built with LangGraph, Google Gemini, and Flask, featuring real-time web search, human-in-the-loop intervention, persistent memory, and production-ready deployment.
          </p>

          {/* Tech Stack */}
          <div style={{ marginBottom: '0.7em' }}>
            <h3 style={{
              fontSize: '0.85em',
              margin: '0 0 0.2em 0',
              color: '#202122'
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
                  background: '#e8f4fd',
                  color: '#0645ad',
                  padding: '0.15em 0.4em',
                  borderRadius: '3px',
                  fontSize: '0.7em',
                  border: '1px solid #a7d7f9'
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
              color: '#202122'
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
                  background: '#f0f9ff',
                  color: '#0369a1',
                  padding: '0.15em 0.4em',
                  borderRadius: '3px',
                  fontSize: '0.7em',
                  border: '1px solid #bae6fd'
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
                background: '#0645ad',
                color: '#fff',
                padding: '0.4em 0.8em',
                textDecoration: 'none',
                borderRadius: '3px',
                fontWeight: '500',
                transition: 'background-color 0.2s',
                fontSize: '0.8em'
              }}
              className="project-button"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Placeholder for future projects */}
        <div style={{
          padding: '0.8em',
          background: '#f8f9fa',
          border: '1px solid #a2a9b1',
          borderRadius: '4px',
          textAlign: 'center',
          marginTop: '0.2em',
          maxWidth: '350px'
        }}>
          <h2 style={{ color: '#54595d', marginBottom: '0.4em', fontSize: '1em' }}>More Projects Coming Soon</h2>
          <p style={{ color: '#54595d', fontSize: '0.8em' }}>
            Additional projects will be added here as they are completed.
          </p>
        </div>

      </div>

      <style jsx>{`
        .project-button:hover {
          background-color: #0b0080 !important;
        }

        .live-dot {
          width: 6px;
          height: 6px;
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
