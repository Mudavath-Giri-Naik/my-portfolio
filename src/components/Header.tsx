'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define navItems locally for the header
const navItems = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'DSA', path: '/dsa', icon: '📊' },
  { name: 'Contributions', path: '/contributions', icon: '🌐' },
  { name: 'Projects', path: '/projects', icon: '🚀' },
  { name: 'Internships', path: '/internships', icon: '📈' },
  { name: 'Certifications', path: '/certifications', icon: '🏆' },
  { name: 'Blogs', path: '/blogs', icon: '👥' },
];

const pageTitles: { [key: string]: string } = {
  '/': 'Home',
  '/dsa': 'Data Structures & Algorithms',
  '/development': 'Development',
  '/open-source': 'Open Source',
  '/projects': 'Projects',
  '/experience': 'Experience',
  '/certifications': 'Certifications',
  '/community': 'Community & Leadership',
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const title = pageTitles[pathname] || 'Portfolio';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 bg-black border-b border-gray-700 z-40 md:hidden">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Hamburger Menu Toggle */}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
        {/* Page Title */}
        <h1 className="text-lg font-semibold text-white flex-grow text-center">{title}</h1>
        {/* Mail Button */}
        <a href="mailto:yourgirinaik@gmail.com" className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v4a2 2 0 002 2h14a2 2 0 002-2v-4m-18 0l9 5 9-5"></path></svg>
        </a>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="bg-black border-t border-gray-700 py-2">
          <ul className="flex flex-col items-center">
            {navItems.map((item) => (
              <li key={item.path} className="w-full text-center">
                <Link
                  href={item.path}
                  className={`block py-2 text-lg font-semibold ${
                    isActive(item.path) ? 'text-blue-500' : 'text-white hover:text-gray-400'
                  }`}
                  onClick={toggleMenu} // Close menu on link click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
} 