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
          borderRadius: '0',
          overflow: 'hidden',
          background: 'var(--surface)',
          boxShadow: 'none',
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
            color: 'var(--text)',
            fontWeight: '500'
          }}>
            <span>LIVE</span>
          </div>

          <h2 style={{
            margin: '0 0 0.2em 0',
            color: 'var(--text)',
            fontSize: '1.0em',
            paddingRight: '3em'
          }}>
            Advanced AI Assistant with Human-in-the-Loop
          </h2>

          <p style={{
            color: 'var(--text)',
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
                  background: 'var(--surface)',
                  color: 'var(--text)',
                  padding: '0.15em 0.35em',
                  borderRadius: '0',
                  fontSize: '0.65em',
                  border: '1px solid var(--border)'
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
                  background: 'var(--surface)',
                  color: 'var(--text)',
                  padding: '0.15em 0.4em',
                  borderRadius: '0',
                  fontSize: '0.65em',
                  border: '1px solid var(--border)'
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
                background: 'var(--surface)',
                color: 'var(--text)',
                padding: '0.35em 0.7em',
                textDecoration: 'none',
                borderRadius: '0',
                fontWeight: '500',
                transition: 'none',
                fontSize: '0.75em',
                border: '1px solid var(--border)'
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
          opacity: 0.7;
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
