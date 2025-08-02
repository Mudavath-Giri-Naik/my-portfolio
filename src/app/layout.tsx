import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import ContentNavigation from "./components/ContentNavigation";
import "./globals.css";
import styles from "./Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giri Naik | Student Developer",
  description: "Portfolio of Giri Naik, a pre-final year Computer Science student specializing in AI & ML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personFavicon =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='black'%3E%3Ccircle cx='16' cy='12' r='7'/%3E%3Cellipse cx='16' cy='24' rx='12' ry='7'/%3E%3C/svg%3E";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={personFavicon} type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <div className={styles.mainLayout}>
          {/* --- Left Sidebar (Profile Card) --- */}
          <aside className={styles.sidebar}>
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <Image
                  src="/profile.jpg"
                  alt="Giri Naik"
                  width={160}
                  height={160}
                  className={styles.profileImage}
                  priority
                />
              </div>
              <div className={styles.profileHeaderTextBelow}>
                <h1>Giri Naik</h1>
                <p>Student Developer</p>
              </div>

              <ul className={styles.detailsList}>
                <li>
                  <FaBirthdayCake className={styles.detailIcon} />
                  <div className={styles.detailText}>15-06-2005</div>
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.detailIcon} />
                  <div className={styles.detailText}>Bengaluru, India</div>
                </li>
                <li>
                  <FaUniversity className={styles.detailIcon} />
                  <div className={styles.detailText}>2023 - 2027</div>
                </li>
                <li>
                  <FaGraduationCap className={styles.detailIcon} />
                  <div className={styles.detailText}>B.Tech, CSE (AI&ML), 3rd Year</div>
                </li>
                <li>
                  <FaUniversity className={styles.detailIcon} />
                  <div className={styles.detailText}>
                    MVGR College of Engineering, Vizianagaram, 535005
                  </div>
                </li>
              </ul>

              <div className={styles.socialLinks}>
                <a
                  href="https://www.linkedin.com/in/giri-naik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="LinkedIn"
                  style={{ color: "#0A66C2" }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Mudavath-Giri-Naik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="GitHub"
                  style={{ color: "#181717" }}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://leetcode.com/u/Mudavathgirinaik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="LeetCode"
                  style={{ color: "#FFA116" }}
                >
                  <SiLeetcode />
                </a>
                <a
                  href="https://www.codechef.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="CodeChef"
                  style={{ color: "#5B4638" }}
                >
                  <SiCodechef />
                </a>
                <a
                  href="mailto:yourgirinaik@gmail.com"
                  className={styles.socialIcon}
                  title="Email"
                  style={{ color: "#EA4335" }}
                >
                  <FaEnvelope />
                </a>
                <a
                  href="tel:+919652560237"
                  className={styles.socialIcon}
                  title="Phone"
                  style={{ color: "#1A73E8" }}
                >
                  <FaPhone />
                </a>
              </div>
            </div>
          </aside>

          {/* --- Right Side Content Area --- */}
          <main className={styles.contentArea}>
            <ContentNavigation />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
