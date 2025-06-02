'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';
import { motion } from 'framer-motion';

const PROFILE_IMAGE = '/profile.jpg'; // Make sure this path is correct in your `public` folder

const SOCIALS = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={24} color="#0077B5" />,
    href: '', // Add your LinkedIn URL here
    default: 'https://www.linkedin.com/',
    brand: 'bg-white hover:bg-[#e8f4fd] border-[#0077B5]',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={24} color="#E4405F" />,
    href: '', // Add your Instagram URL here
    default: 'https://www.instagram.com/',
    brand: 'bg-white hover:bg-[#fce1ec] border-[#E4405F]',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={24} color="#181717" />,
    href: '', // Add your GitHub URL here
    default: 'https://github.com/',
    brand: 'bg-white hover:bg-[#eaeaea] border-[#181717]',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode size={24} color="#FFA116" />,
    href: '', // Add your LeetCode URL here
    default: 'https://leetcode.com/',
    brand: 'bg-white hover:bg-[#fff7e6] border-[#FFA116]',
  },
  {
    name: 'Codeforces',
    icon: <SiCodeforces size={24} color="#1F8ACB" />,
    href: '', // Add your Codeforces URL here
    default: 'https://codeforces.com/',
    brand: 'bg-white hover:bg-[#e6f4ff] border-[#1F8ACB]',
  },
  {
    name: 'Codechef',
    icon: <SiCodechef size={24} color="#5B4638" />,
    href: '', // Add your Codechef URL here
    default: 'https://www.codechef.com/',
    brand: 'bg-white hover:bg-[#f3ede7] border-[#5B4638]',
  },
  {
    name: 'Email',
    icon: <FaEnvelope size={24} color="#EA4335" />,
    href: '', // Add your mailto: link here
    default: 'mailto:example@example.com',
    brand: 'bg-white hover:bg-[#fbe9e7] border-[#EA4335]',
  },
  {
    name: 'Phone',
    icon: <FaPhone size={24} color="#34B7F1" />,
    href: '', // Add your tel: link here
    default: 'tel:0000000000',
    brand: 'bg-white hover:bg-[#e6f7ff] border-[#34B7F1]',
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "circOut" } 
  },
};

const imageVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 },
  },
};

const textContentVariants = (delay = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + delay, duration: 0.5, ease: "circOut" },
  },
});

const socialIconVariants = (index) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + index * 0.07, duration: 0.4, ease: "circOut" },
  },
});


export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-md md:max-w-6xl p-6 sm:p-8 md:p-16 bg-black text-white rounded-3xl overflow-hidden"
      style={{ 
        position: 'relative', 
        boxShadow: '0px -10px 40px 0px rgba(150, 100, 255, 0.8), 10px 0px 40px 0px rgba(150, 100, 255, 0.8), -10px 0px 40px 0px rgba(150, 100, 255, 0.8)' 
      }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated "Open to Work" Badge */}
      <motion.div
        className="absolute top-3 right-3 md:top-4 md:right-4 bg-green-500 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-lg z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        Open to work
      </motion.div>

      {/* Profile Image Container */}
      <motion.div
        className="relative flex-shrink-0 w-36 h-36 sm:w-40 sm:h-40 md:w-80 md:h-80 rounded-full md:rounded-3xl overflow-hidden 
                   border-2 md:border-white/40 
                   md:shadow-lg 
                   animate-purple-border-pulse" // Custom animation class
        variants={imageVariants}
      >
        {/* Inner div for hover effect, separate from border animation div */}
         <motion.div
            className="w-full h-full rounded-full md:rounded-3xl overflow-hidden" // Ensure inner image also clips correctly
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {!imgError ? (
                <Image
                  src={PROFILE_IMAGE}
                  alt="Giri Naik profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  onError={() => setImgError(true)}
                  priority
                />
            ) : (
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-2/3 md:h-2/3">
                  <circle cx="60" cy="60" r="60" fill="#4A5568" />
                  <ellipse cx="60" cy="70" rx="35" ry="30" fill="#A0AEC0" />
                  <circle cx="60" cy="54" r="24" fill="#E2E8F0" />
                  <ellipse cx="60" cy="54" rx="12" ry="10" fill="#718096" />
                  <ellipse cx="60" cy="90" rx="22" ry="12" fill="#CBD5E0" />
                </svg>
              </div>
            )}
        </motion.div>
      </motion.div>
      
      {/* Profile Info */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 md:mb-2 tracking-tight leading-tight"
          variants={textContentVariants(0)}
        >
          GIRI NAIK
        </motion.h2>
        
        {/* Mobile-only Tagline */}
        <motion.p 
          className="text-purple-300 text-sm sm:text-base font-medium mb-3 md:hidden"
          variants={textContentVariants(0.1)}
        >
          CS Student | AI/ML Enthusiast | Full-Stack Dev
        </motion.p>

        <motion.p 
          className="text-xs sm:text-sm md:text-lg text-gray-300 font-medium mb-3 md:mb-2 max-w-xl leading-relaxed md:leading-normal"
          variants={textContentVariants(0.2)}
        >
          <span className="font-bold text-white">Third-year CS student</span> with <span className="font-bold text-white">hands-on experience</span> in <span className="font-bold text-white">Python, AI/ML, and GCP</span>. I <span className="font-bold text-white">plan, build, and deploy</span> <span className="font-bold text-white">efficient end-to-end AI models</span> based on business needs. Strong focus on <span className="font-bold text-white">backend development</span>—<span className="font-bold text-white">APIs, databases, and performance optimization</span>. Also skilled in building <span className="font-bold text-white">full-stack web and mobile apps</span> using <span className="font-bold text-white">AI tools like ChatGPT and Cursor</span>. <span className="font-bold text-white">Cloud-ready</span>, <span className="font-bold text-white">product-focused</span>, and always <span className="font-bold text-white">building to solve real problems</span>.
        </motion.p>
        
        <motion.p 
          className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 md:mb-6 max-w-md"
          variants={textContentVariants(0.3)}
        >
          Looking for opportunities to work on impactful projects.
        </motion.p>
        
        <div className="flex flex-row flex-wrap gap-3 md:gap-4 mb-4 md:mb-6 justify-center md:justify-start">
          {SOCIALS.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href || social.default}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2 md:p-2.5 shadow-md transition-all duration-300 border ${social.brand}`}
              title={social.name}
              whileHover={{
                scale: 1.15,
                boxShadow: '0 0 15px rgba(150, 100, 255, 0.8)', // Purple glow on hover
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              variants={socialIconVariants(index)}
            >
              {/* Manually adjust icon size for mobile if needed, or keep consistent */}
              {/* Example: React.cloneElement(social.icon, { size: window.innerWidth < 768 ? 20 : 24 }) but this needs client-side check for window */}
              {/* For simplicity, keeping original size, p-2 padding should make it look okay */}
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}