'use client';
import ProfileCard from '@/components/ProfileCard';
import { Pacifico } from 'next/font/google';
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiBootstrap, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiAmazon, SiDocker, SiKubernetes, SiGit, SiGithub, SiJest, SiRedux, SiVercel, SiTensorflow, SiPytorch, SiOpencv, SiC, SiDjango, SiFlask, SiSass, SiWebpack, SiGraphql, SiPrisma, SiJupyter, SiGo, SiRust, SiPhp, SiLaravel, SiRedis, SiRabbitmq, SiGnubash, SiHeroku, SiNetlify, SiVite, SiSvelte, SiAngular, SiSpring, SiDotnet, SiUnity, SiUnrealengine, SiBlender, SiAdobephotoshop, SiAdobexd, SiAndroidstudio, SiXcode, SiIntellijidea, SiSlack, SiTrello, SiNotion, SiPostman, SiSwagger, SiTestinglibrary, SiStorybook, SiCircleci, SiTravisci, SiGithubactions, SiBitbucket, SiGitlab, SiCodesandbox, SiCodepen, SiReplit, SiStackoverflow, SiLeetcode, SiCodeforces, SiCodechef
} from 'react-icons/si';
import { motion } from 'framer-motion';

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });

const iconRows = [
  [SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC, SiGo, SiRust, SiPhp, SiHtml5, SiCss3, SiSass, SiBootstrap, SiTailwindcss, SiReact, SiNextdotjs, SiAngular, SiSvelte, SiRedux],
  [SiNodedotjs, SiExpress, SiDjango, SiFlask, SiSpring, SiDotnet, SiLaravel, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiAmazon, SiDocker, SiKubernetes, SiRedis, SiRabbitmq, SiGraphql, SiPrisma, SiJest, SiTestinglibrary],
  [SiJupyter, SiTensorflow, SiPytorch, SiOpencv, SiUnity, SiUnrealengine, SiBlender, SiAdobephotoshop, SiAdobexd, SiAndroidstudio, SiXcode, SiIntellijidea, SiSlack, SiTrello, SiNotion, SiPostman, SiSwagger, SiCircleci, SiTravisci, SiGithubactions, SiStorybook, SiWebpack, SiGnubash, SiStackoverflow, SiLeetcode, SiCodeforces, SiCodechef]
];

const iconColors = [
  // Row 1
  [
    '#f7df1e', // JS
    '#3178c6', // TS
    '#3776ab', // Python
    '#00599c', // C++
    '#a8b9cc', // C
    '#00add8', // Go
    '#dea584', // Rust
    '#777bb4', // PHP
    '#e34f26', // HTML5
    '#1572b6', // CSS3
    '#cc6699', // Sass
    '#7952b3', // Bootstrap
    '#38bdf8', // Tailwind
    '#61dafb', // React
    '#000000', // Next.js
    '#dd0031', // Angular
    '#ff3e00', // Svelte
    '#764abc', // Redux
  ],
  // Row 2
  [
    '#339933', // Node.js
    '#000000', // Express
    '#092e20', // Django
    '#000000', // Flask
    '#6db33f', // Spring
    '#512bd4', // .NET
    '#ff2d20', // Laravel
    '#47a248', // MongoDB
    '#336791', // PostgreSQL
    '#00758f', // MySQL
    '#ffca28', // Firebase
    '#ff9900', // Amazon
    '#2496ed', // Docker
    '#326ce5', // Kubernetes
    '#d82c20', // Redis
    '#ff6600', // RabbitMQ
    '#e10098', // GraphQL
    '#2d3748', // Prisma
    '#c21325', // Jest
    '#e33332', // Testing Library
  ],
  // Row 3
  [
    '#f37626', // Jupyter
    '#ff6f00', // TensorFlow
    '#ee4c2c', // PyTorch
    '#5c3ee8', // OpenCV
    '#222c37', // Unity
    '#313131', // Unreal
    '#f5792a', // Blender
    '#31a8ff', // Photoshop
    '#ff61f6', // Adobe XD
    '#007acc', // Android Studio
    '#1575f9', // Xcode
    '#f89820', // IntelliJ
    '#4a154b', // Slack
    '#0079bf', // Trello
    '#000000', // Notion
    '#ff6c37', // Postman
    '#85ea2d', // Swagger
    '#444444', // CircleCI
    '#3eaaaf', // TravisCI
    '#2088ff', // GitHub Actions
    '#ff4785', // Storybook
    '#8dd6f9', // Webpack
    '#89e051', // Bash
    '#f48024', // Stack Overflow
    '#f89f1b', // LeetCode
    '#1f8acb', // Codeforces
    '#5b4638', // Codechef
  ],
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh]">
      <ProfileCard />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="w-full flex items-center justify-center bg-transparent mt-0"
        style={{ minHeight: '18vh' }}
      >
        <h1
          className="w-full text-center font-extrabold uppercase"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: 1.1, margin: 0, paddingTop: '50px', color: '#ffffff' }}
        >
          B.TECH  STUDENT 
        </h1>
      </motion.div>
    </div>
  );
}
