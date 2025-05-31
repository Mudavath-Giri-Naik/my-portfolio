'use client';
import ProfileCard from '@/components/ProfileCard';
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiBootstrap, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiAmazon, SiDocker, SiKubernetes, SiJest, SiRedux, SiTensorflow, SiPytorch, SiOpencv, SiC, SiDjango, SiFlask, SiSass, SiWebpack, SiGraphql, SiPrisma, SiJupyter, SiGo, SiRust, SiPhp, SiLaravel, SiRedis, SiRabbitmq, SiGnubash, SiSlack, SiTrello, SiNotion, SiPostman, SiSwagger, SiTestinglibrary, SiStorybook, SiCircleci, SiTravisci, SiGithubactions, SiStackoverflow, SiLeetcode, SiCodeforces, SiCodechef
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const researchSentences = [
    "Exploring innovative solutions in scalable backend architecture.",
    "Deep diving into the latest advancements in machine learning models.",
    "Building robust and efficient data processing pipelines.",
    "Developing intuitive user interfaces with modern frontend frameworks.",
    "Contributing to open-source projects in cloud computing."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % researchSentences.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [researchSentences.length]);

  return (
    <>
      <style jsx global>{`
        html,
        body {
          background-color: #000 !important;
        }
      `}</style>
      <div className="flex flex-col items-center w-full min-h-[100vh] bg-black  text-white">
        {/* Animated Research/Work Sentences */}
        <div className="w-full text-center mb-10 text-lg  font-medium text-white" style={{ minHeight: '2.5em' }}>
          <motion.p
            key={currentSentenceIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {researchSentences[currentSentenceIndex]}
          </motion.p>
        </div>
        <ProfileCard />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="w-full flex items-center justify-center bg-transparent mt-0"
          style={{ minHeight: '18vh' }}
        >
          
        </motion.div>
      </div>
    </>
  );
}
