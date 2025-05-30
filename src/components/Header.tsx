'use client';

import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const title = pageTitles[pathname] || 'Portfolio';

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 md:hidden">
      <div className="px-4 py-3 text-center">
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      </div>
    </div>
  );
} 