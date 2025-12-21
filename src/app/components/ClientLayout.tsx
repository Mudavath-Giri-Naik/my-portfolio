'use client';

import { usePathname } from "next/navigation";
import ContentNavigation from "./ContentNavigation";
import ResumeHeader from "./ResumeHeader";
import ThemeToggle from "./ThemeToggle";
import "../globals.css";
import styles from "../Home.module.css";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className={styles.homeStandalone}>
        <ThemeToggle />
        <ResumeHeader />
        {children}
      </div>
    );
  }

  return (
    <>
      <ThemeToggle />
      <ResumeHeader />
      <div className={styles.mainLayout}>
        <main className={styles.contentArea}>
          <ContentNavigation />
          <div className={styles.contentWrapper}>
            {children}
          </div>
        </main>
      </div>
    </>
  );
} 
