import Link from 'next/link';

export default function Achievements() {
  return (
    <article>
      <div style={{ 
        padding: '2em', 
        textAlign: 'center',
        marginTop: '2em'
      }}>
        <h2 style={{ color: 'var(--text)', marginBottom: '1em' }}>Achievements</h2>
        <p style={{ color: 'var(--text)', fontSize: '1.1em' }}>
          Academic achievements, awards, and recognitions will be added here.
        </p>
      </div>
    </article>
  );
} 