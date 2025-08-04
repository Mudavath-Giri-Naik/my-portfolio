"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../Home.module.css";
import MobileMenu from "./MobileMenu";

export default function ContentNavigation() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'About Me' },
    { href: '/projects', label: 'Projects' },
    { href: '/dsa', label: 'DSA' },
    { href: '/contributions', label: 'Contributions' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/blogs', label: 'Blogs' },
  ];

  return (
    <>
      {/* Mobile Menu - Only visible on mobile */}
      <div className={styles.mobileMenuWrapper}>
        <MobileMenu />
      </div>
      
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className={styles.contentNav}>
        {navItems.map(item => (
          <Link 
            key={item.href}
            href={item.href} 
            className={`${styles.navLink} ${pathname === item.href ? styles.activeLink : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
