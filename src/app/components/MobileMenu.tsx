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
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.mobileMenuContainer}>
      {/* Simple Unicode Menu Icon (☰) */}
      <button 
        className={`${styles.menuButton} ${isOpen ? styles.hidden : ''}`}
        onClick={toggleMenu}
        aria-label="Open mobile menu"
        type="button"
      >
        <span style={{ fontSize: '1.8rem', fontWeight: '500' }}>☰</span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.open : ''}`} onClick={closeMenu}>
        <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.mobileMenuHeader}>
            <h3>Menu</h3>
            {/* Simple Close Icon (×) */}
            <button 
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close mobile menu"
              type="button"
            >
              <span style={{ fontSize: '1.8rem', fontWeight: '500' }}>×</span>
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
