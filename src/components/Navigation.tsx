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
    <div className="w-full flex justify-center bg-black pt-2 pb-0">
      <nav className="flex flex-row items-center justify-between w-full max-w-3xl bg-[#232326] rounded-full px-2 py-1 shadow-md border border-gray-800" style={{ minHeight: '54px' }}>
        {/* Nav Links */}
        <div className="flex flex-row gap-4 items-center mx-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium tracking-wide px-1 pb-0.5 transition-colors duration-200 border-b-2 ${
                isActive(item.path)
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-white hover:text-gray-400 hover:border-gray-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Contact Me Button */}
        <a
          href="mailto:yourgirinaik@gmail.com"
          className="ml-2 bg-white text-black font-medium rounded-full px-4 py-1 shadow-sm transition hover:bg-blue-100 flex items-center gap-1 text-sm"
          style={{ minWidth: 'fit-content' }}
        >
          Contact Me
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </nav>
    </div>
  );
};

export default Navigation; 