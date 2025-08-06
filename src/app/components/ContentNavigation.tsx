"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../Home.module.css";

export default function ContentNavigation() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/projects', label: 'Projects' },
    { href: '/contributions', label: 'Contributions' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/certifications', label: 'Certifications' },
  ];

  const handleNavClick = (href: string) => {
    // No special handling needed since we removed the Profile option
  };

  return (
    <nav className={styles.contentNav}>
      {navItems.map(item => (
        <Link 
          key={item.href}
          href={item.href} 
          className={`${styles.navLink} ${(pathname === item.href || (pathname === '/' && item.href === '/projects')) ? styles.activeLink : ''}`}
          onClick={() => handleNavClick(item.href)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
