"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../Home.module.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'About Me' },
    { href: '/projects', label: 'Projects' },
    { href: '/dsa', label: 'DSA' },
    { href: '/contributions', label: 'Contributions' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/blogs', label: 'Blogs' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMenu();
    // If navigating to home page, scroll to top
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.mobileMenuContainer}>
      {/* Simple Menu Icon */}
      <button 
        className={`${styles.menuButton} ${isOpen ? styles.hidden : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        type="button"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.open : ''}`} onClick={closeMenu}>
        <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.mobileMenuHeader}>
            <h3>Menu</h3>
            <button 
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close mobile menu"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <nav className={styles.mobileNav}>
            {navItems.map(item => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`${styles.mobileNavLink} ${pathname === item.href ? styles.mobileActiveLink : ''}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
} 