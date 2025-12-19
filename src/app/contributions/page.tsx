import Link from 'next/link';

export default function Contributions() {
  return (
    <article>
      <div style={{ 
        padding: '2em', 
        textAlign: 'center',
        marginTop: '2em'
      }}>
        <h2 style={{ color: 'var(--text)', marginBottom: '1em' }}>Contributions</h2>
        <p style={{ color: 'var(--text)', fontSize: '1.1em' }}>
          Open source contributions and community work will be added here.
        </p>
      </div>
    </article>
  );
} 