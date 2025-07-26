import Link from 'next/link';

export default function Projects() {
  return (
    <article>
      {/* Removed Back to Home link for consistent navigation */}
      
      <div style={{ 
        padding: '2em', 
        background: '#f8f9fa', 
        border: '1px solid #a2a9b1', 
        borderRadius: '4px',
        textAlign: 'center',
        marginTop: '2em'
      }}>
        <h2 style={{ color: '#54595d', marginBottom: '1em' }}>Details Added Soon</h2>
        <p style={{ color: '#54595d', fontSize: '1.1em' }}>
          Project details and descriptions will be added here soon.
        </p>
      </div>
    </article>
  );
} 