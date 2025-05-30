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

const PROFILE_IMAGE = '/profile.jpg';

const SOCIALS = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={24} color="#0077B5" />,
    href: '',
    default: 'https://www.linkedin.com/',
    brand: 'bg-white hover:bg-[#e8f4fd] border-[#0077B5]',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={24} color="#E4405F" />,
    href: '',
    default: 'https://www.instagram.com/',
    brand: 'bg-white hover:bg-[#fce1ec] border-[#E4405F]',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={24} color="#181717" />,
    href: '',
    default: 'https://github.com/',
    brand: 'bg-white hover:bg-[#eaeaea] border-[#181717]',
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode size={24} color="#FFA116" />,
    href: '',
    default: 'https://leetcode.com/',
    brand: 'bg-white hover:bg-[#fff7e6] border-[#FFA116]',
  },
  {
    name: 'Codeforces',
    icon: <SiCodeforces size={24} color="#1F8ACB" />,
    href: '',
    default: 'https://codeforces.com/',
    brand: 'bg-white hover:bg-[#e6f4ff] border-[#1F8ACB]',
  },
  {
    name: 'Codechef',
    icon: <SiCodechef size={24} color="#5B4638" />,
    href: '',
    default: 'https://www.codechef.com/',
    brand: 'bg-white hover:bg-[#f3ede7] border-[#5B4638]',
  },
  {
    name: 'Email',
    icon: <FaEnvelope size={24} color="#EA4335" />,
    href: '',
    default: 'mailto:example@example.com',
    brand: 'bg-white hover:bg-[#fbe9e7] border-[#EA4335]',
  },
  {
    name: 'Phone',
    icon: <FaPhone size={24} color="#34B7F1" />,
    href: '',
    default: 'tel:0000000000',
    brand: 'bg-white hover:bg-[#e6f7ff] border-[#34B7F1]',
  },
];

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);

  // Find the email link for the Hire Me button
  const emailSocial = SOCIALS.find((s) => s.name === 'Email');
  const emailHref = emailSocial?.href || emailSocial?.default || 'mailto:example@example.com';

  return (
    <div className="glass-premium-card flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl p-8 md:p-14" style={{ position: 'relative' }}>
      {/* Profile Image or Avatar */}
      <div className="flex-shrink-0">
        {!imgError ? (
          <Image
            src={PROFILE_IMAGE}
            alt="Giri Naik profile"
            width={400}
            height={400}
            className="rounded-3xl object-cover w-80 h-80 md:w-80 md:h-80 shadow-lg border-2 border-white/40"
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gray-200 flex items-center justify-center shadow-lg border-2 border-white/40">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="60" fill="#E5E7EB" />
              <ellipse cx="60" cy="70" rx="35" ry="30" fill="#fff" />
              <circle cx="60" cy="54" r="24" fill="#fff" />
              <ellipse cx="60" cy="54" rx="12" ry="10" fill="#D1D5DB" />
              <ellipse cx="60" cy="90" rx="22" ry="12" fill="#D1D5DB" />
            </svg>
          </div>
        )}
      </div>
      {/* Profile Info */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight leading-tight">
          GIRI NAIK
        </h2>
        <p className="text-base md:text-lg text-gray-700 font-medium mb-2 max-w-xl">
          Third-year Computer Science student passionate about building scalable, resource-efficient backend systems. Curious mind exploring the frontiers of AI and tech—currently diving into agentic AI. Problem-solver at heart, driven to build with impact.
        </p>
        <p className="text-gray-600 mb-6 max-w-md">
          Looking for opportunities to work on impactful projects.
        </p>
        <div className="flex flex-row flex-wrap gap-4 mb-6 justify-center md:justify-start">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href || social.default}
              target="_blank"
              rel="noopener noreferrer"
              className={`border ${social.brand} text-gray-800 rounded-full p-2 shadow transition`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 