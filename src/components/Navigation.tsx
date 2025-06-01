'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from './Header';

const navItems = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'DSA', path: '/dsa', icon: '📊' },
  { name: 'Contributions', path: '/contributions', icon: '🌐' },
  { name: 'Projects', path: '/projects', icon: '🚀' },
  { name: 'Internships', path: '/experience', icon: '📈' },
  { name: 'Certifications', path: '/certifications', icon: '🏆' },
  { name: 'Blogs', path: '/blogs', icon: '👥' },
];

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isActive = (path: string) => pathname === path;

  if (isMobile) {
    return (
      <>
        <Header />
      </>
    );
  }

  return (
    <nav className="flex flex-row justify-center items-center gap-8 w-full bg-black my-0 py-0" style={{ border: 'none', boxShadow: 'none' }}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`text-base md:text-lg font-semibold tracking-wide px-2 pb-1 transition-colors duration-200 border-b-2 ${
            isActive(item.path)
              ? 'border-blue-500 text-blue-500'
              : 'border-transparent text-white hover:text-gray-400 hover:border-gray-400'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation; 