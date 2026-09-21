import React, { useState } from 'react';
import {
  Code2,
  Bug,
  CheckCircle2,
  Download,
  Mail,
  ChevronRight,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  X
} from 'lucide-react';
import './App.css';

// Central link configuration
const LINKS = {
  github: "https://github.com/Sathish1004",
  linkedin: "https://www.linkedin.com/in/sathishsharmaj/",
  resume: "/resume/Sathish Sharma J_[2026].pdf"
};

// Tech Brand SVG Icons for 3D Holographic Orbit
function TechBrandIcon({ name, className = "w-6 h-6" }) {
  switch (name) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );
    case 'node':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#68A063]`}>
          <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm-1 15.5l-4-2.3V10l4 2.3v5.2zm2 0v-5.2l4-2.3v5.2l-4 2.3zM12 9.7L8 7.4l4-2.3 4 2.3-4 2.3z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.8" className={className}>
          <ellipse cx="12" cy="5" rx="8" ry="2.8" />
          <path d="M20 12c0 1.5-3.6 2.8-8 2.8s-8-1.3-8-2.8" />
          <path d="M4 5v14c0 1.5 3.6 2.8 8 2.8s8-1.3 8-2.8V5" />
        </svg>
      );
    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-purple-400`}>
          <path d="M12 1c0 6.075-4.925 11-11 11 6.075 0 11 4.925 11 11 0-6.075 4.925-11 11-11-6.075 0-11-4.925-11-11z"/>
        </svg>
      );
    case 'claude':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-amber-500`}>
          <path d="M12 2l2.4 6.8L21 10.5l-5.6 4.3 1.8 7.2-5.2-4.2-5.2 4.2 1.8-7.2L3 10.5l6.6-1.7L12 2z"/>
        </svg>
      );
    case 'postman':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#FF6C37]`}>
          <circle cx="12" cy="12" r="10" fill="#FF6C37" opacity="0.2"/>
          <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm-1 4.5l5 3.5-5 3.5V8.5z" fill="#FF6C37"/>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.8" className={className}>
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
          <path d="M8 15l4 3 4-3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'selenium':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.8" className={className}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#38BDF8]`}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2-1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M8 2h4v5H8a2.5 2.5 0 010-5z" fill="#F24E1E"/>
          <path d="M12 2h4a2.5 2.5 0 010 5h-4V2z" fill="#FF7262"/>
          <path d="M12 7h4a2.5 2.5 0 010 5h-4V7z" fill="#1ABCFE"/>
          <path d="M8 7h4v5H8a2.5 2.5 0 010-5z" fill="#A259FF"/>
          <path d="M8 12h4v4.5a2.5 2.5 0 11-4-2.1V12z" fill="#0ACF83"/>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#E76F51" strokeWidth="1.8" className={className}>
          <path d="M18 8h1a4 4 0 010 8h-1"/>
          <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4" strokeLinecap="round"/>
          <line x1="10" y1="1" x2="10" y2="4" strokeLinecap="round"/>
          <line x1="14" y1="1" x2="14" y2="4" strokeLinecap="round"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="1.8" className={className}>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="6" cy="6" r="3"/>
          <circle cx="18" cy="12" r="3"/>
          <path d="M6 9v6"/>
          <path d="M6 9a9 9 0 019 3"/>
        </svg>
      );
    default:
      return <Code2 className={`${className} text-red-500`} />;
  }
}

// Tech Universe Cube Data (Mapped directly to Sathish's resume & enterprise projects)
const UNIVERSE_TECH = [
  {
    id: 'react',
    name: 'React.js',
    role: 'Frontend Core',
    category: 'frontend',
    tagline: 'Modern Component Systems & Hooks',
    color: '#61DAFB',
    glowClass: 'hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(97,218,251,0.35)]',
    resumeContext: 'Engineered responsive enterprise user interfaces, custom state hooks, and client workspaces for PROLYNC and KnowledgeFeed AI.',
    projectRef: 'PROLYNC & KnowledgeFeed AI',
    metrics: 'Component State & Single-Page Apps',
    icon: 'react'
  },
  {
    id: 'node',
    name: 'Node & Express',
    role: 'Backend API Engine',
    category: 'backend',
    tagline: 'High-Throughput RESTful Endpoints',
    color: '#68A063',
    glowClass: 'hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(104,160,99,0.35)]',
    resumeContext: 'Engineered scalable backend micro-routes, JWT authentication middlewares, and structured JSON responses for live production clients.',
    projectRef: 'Construction Management API',
    metrics: 'JWT Auth & Middleware Pipelines',
    icon: 'node'
  },
  {
    id: 'mysql',
    name: 'MySQL DB',
    role: 'Relational Schemas',
    category: 'backend',
    tagline: 'Data Modeling & Normalized ACID',
    color: '#38BDF8',
    glowClass: 'hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]',
    resumeContext: 'Architected relational schemas, ACID transactions, complex multi-table JOIN queries, and query optimization for PG Rental & Construction apps.',
    projectRef: 'HackerRank Certified SQL',
    metrics: 'Normalized Relational Data',
    icon: 'mysql'
  },
  {
    id: 'gemini',
    name: 'Gemini AI (RAG)',
    role: 'Intelligent Assistants',
    category: 'ai',
    tagline: 'Document Search & RAG Pipelines',
    color: '#C084FC',
    glowClass: 'hover:border-purple-400 hover:shadow-[0_0_25px_rgba(192,132,252,0.35)]',
    resumeContext: 'Created KnowledgeFeed AI connecting Google Gemini API with LangChain to provide enterprise-grade contextual document search and retrieval.',
    projectRef: 'KnowledgeFeed AI Production',
    metrics: 'Contextual Vector Retrieval',
    icon: 'gemini'
  },
  {
    id: 'postman',
    name: 'Postman',
    role: 'API Testing Suites',
    category: 'testing',
    tagline: 'HTTP Assertions & Regression Suites',
    color: '#FF6C37',
    glowClass: 'hover:border-orange-400 hover:shadow-[0_0_25px_rgba(255,108,55,0.35)]',
    resumeContext: 'Authored exhaustive HTTP assertion suites, status validation scripts, automated regression test runs, and endpoint performance baselines.',
    projectRef: 'PROLYNC Client Delivery',
    metrics: 'Automated Postman Collections',
    icon: 'postman'
  },
  {
    id: 'selenium',
    name: 'Selenium & QA',
    role: 'Quality Assurance',
    category: 'testing',
    tagline: 'SDLC / STLC & Test Automation',
    color: '#EF4444',
    glowClass: 'hover:border-red-400 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]',
    resumeContext: 'End-to-end SDLC/STLC test execution: authored test cases, performed functional, sanity, regression bug bashes and verified defect resolutions.',
    projectRef: 'Verified Zero-Defect Delivery',
    metrics: '100% Test Case Execution',
    icon: 'selenium'
  },
  {
    id: 'aws',
    name: 'AWS EC2',
    role: 'Cloud Deployment',
    category: 'cloud',
    tagline: 'Linux Server Hosting & PuTTY',
    color: '#FF9900',
    glowClass: 'hover:border-amber-400 hover:shadow-[0_0_25px_rgba(255,153,0,0.35)]',
    resumeContext: 'Configured and maintained live production backend instances on AWS EC2 via PuTTY, SSH keys, process monitoring, and environment configuration.',
    projectRef: 'Live Client Deployment',
    metrics: 'AWS EC2 + PuTTY SSH',
    icon: 'aws'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    role: 'Design Tokens',
    category: 'frontend',
    tagline: 'Responsive Brutalist & Modern UI',
    color: '#38BDF8',
    glowClass: 'hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]',
    resumeContext: 'Constructed responsive, modern design systems, custom color tokens, glassmorphic layouts, and high-performance micro-interactions.',
    projectRef: 'Persona Portfolio & Apps',
    metrics: 'Pixel-Perfect Responsive UI',
    icon: 'tailwind'
  },
  {
    id: 'figma',
    name: 'Figma UI/UX',
    role: 'Interactive Design',
    category: 'frontend',
    tagline: 'Wireframes & User Flow Architecture',
    color: '#F24E1E',
    glowClass: 'hover:border-pink-400 hover:shadow-[0_0_25px_rgba(242,78,30,0.35)]',
    resumeContext: 'Designed intuitive user flows, clickable prototypes, and UI component specifications prior to full-stack code implementation.',
    projectRef: 'Mobile App Wireframes',
    metrics: 'Interactive Prototyping',
    icon: 'figma'
  },
  {
    id: 'java',
    name: 'Java & OOP',
    role: 'Core Architecture',
    category: 'backend',
    tagline: 'Object-Oriented Logic & Data Structures',
    color: '#E76F51',
    glowClass: 'hover:border-rose-400 hover:shadow-[0_0_25px_rgba(231,111,81,0.35)]',
    resumeContext: 'HackerRank Certified Java programmer with deep foundation in OOP concepts, collection frameworks, and algorithmic problem-solving.',
    projectRef: 'HackerRank Certified',
    metrics: 'OOP Design Patterns',
    icon: 'java'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    role: 'Version Control',
    category: 'cloud',
    tagline: 'Branching Strategy & Agile Teamwork',
    color: '#F05032',
    glowClass: 'hover:border-red-400 hover:shadow-[0_0_25px_rgba(240,80,50,0.35)]',
    resumeContext: 'Managed sprint branching workflows, PR peer reviews, and automated release tags in team environments at PROLYNC.',
    projectRef: 'Enterprise Sprint Workflows',
    metrics: 'Git Branching & Releases',
    icon: 'git'
  },
  {
    id: 'claude',
    name: 'Claude & LLMs',
    role: 'AI Acceleration',
    category: 'ai',
    tagline: 'Intelligent Pair Programming & Prompting',
    color: '#F59E0B',
    glowClass: 'hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]',
    resumeContext: 'Leverages advanced LLMs for rapid code refactoring, test scenario expansion, and deep troubleshooting of edge cases.',
    projectRef: 'Accelerated Engineering',
    metrics: 'AI-Enhanced Developer Velocity',
    icon: 'claude'
  }
];

// Resume CV High-Impact Credential Metrics for Recruiter Attraction
const RESUME_METRICS = [
  {
    number: '8',
    unit: '/ 10 CGPA',
    label: 'B.E. Electronics & Communication',
    sub: 'Karpagam College of Engineering (2021–2025) • ECE Graduate',
    badge: 'Verified Degree',
    accentClass: 'text-amber-700 bg-amber-50 border-amber-300'
  },
  {
    number: 'Grade A',
    unit: 'Honors',
    label: 'MERN Full Stack Certified',
    sub: 'SLA Institute (6-Month Intensive Enterprise Program) Nov 2025',
    badge: 'Full Stack Certified',
    accentClass: 'text-emerald-700 bg-emerald-50 border-emerald-300'
  },
  {
    number: 'PROLYNC',
    unit: 'Internship',
    label: 'Enterprise Production Delivery',
    sub: 'Full Stack Developer Intern • Delivered Construction Client App on AWS EC2',
    badge: 'Production Experience',
    accentClass: 'text-red-700 bg-red-50 border-red-300'
  },
  {
    number: '100%',
    unit: 'Pass Rate',
    label: 'Quality Assurance & Testing',
    sub: 'Manual & Automation STLC, Postman Collections, Selenium & Defect Traceability',
    badge: 'QA & Testing Specialist',
    accentClass: 'text-sky-700 bg-sky-50 border-sky-300'
  }
];


// Interactive Animated Greetings for Sathish's Corporate Portrait Walk
const GREETINGS = [
  {
    title: "Hi there! I'm Sathish Sharma J",
    msg: "Welcome to my developer portfolio! Glad you're here — explore my client projects and full-stack work below.",
    badge: "SAYING HELLO"
  },
  {
    title: "Enterprise Client Delivery",
    msg: "Delivered production Construction Management client app on AWS EC2 during my PROLYNC internship.",
    badge: "PROLYNC INTERN"
  },
  {
    title: "Grade A Certified Full Stack",
    msg: "Certified in MERN stack with 8 CGPA in B.E. ECE & 100% test case pass rate in QA automation.",
    badge: "MERN + QA TESTER"
  }
];

// Authentic Jagged Ripped / Torn Paper Top SVG Component
function TornEdgeTop() {
  return (
    <div className="w-full overflow-hidden leading-none relative z-30 -mb-[2px] pointer-events-none select-none">
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 block"
        preserveAspectRatio="none"
      >
        {/* Shadow layer */}
        <path
          d="M0,0 L0,24 L18,22 L36,32 L54,18 L75,25 L98,16 L120,30 L145,21 L168,28 L192,15 L218,27 L242,18 L268,34 L290,20 L314,29 L338,16 L364,32 L388,21 L412,28 L438,15 L462,31 L488,20 L514,28 L540,16 L566,33 L590,21 L616,29 L642,16 L668,34 L692,21 L718,29 L744,16 L770,33 L794,21 L820,29 L846,16 L872,34 L896,21 L922,29 L948,16 L974,33 L998,21 L1024,29 L1050,16 L1076,34 L1100,21 L1126,29 L1152,16 L1178,33 L1202,21 L1228,29 L1254,16 L1280,34 L1304,21 L1330,29 L1356,16 L1382,33 L1406,21 L1440,28 L1440,0 Z"
          fill="rgba(0,0,0,0.25)"
        />
        {/* White fibrous torn border */}
        <path
          d="M0,0 L0,22 L18,20 L36,30 L54,16 L75,23 L98,14 L120,28 L145,19 L168,26 L192,13 L218,25 L242,16 L268,32 L290,18 L314,27 L338,14 L364,30 L388,19 L412,26 L438,13 L462,29 L488,18 L514,26 L540,14 L566,31 L590,19 L616,27 L642,14 L668,32 L692,19 L718,27 L744,14 L770,31 L794,19 L820,27 L846,14 L872,32 L896,19 L922,27 L948,14 L974,31 L998,19 L1024,27 L1050,14 L1076,32 L1100,19 L1126,27 L1152,14 L1178,31 L1202,19 L1228,27 L1254,14 L1280,32 L1304,19 L1330,27 L1356,14 L1382,31 L1406,19 L1440,26 L1440,0 Z"
          fill="#ffffff"
        />
        {/* Grid paper surface layer */}
        <path
          d="M0,0 L0,18 L18,17 L36,26 L54,13 L75,20 L98,11 L120,24 L145,16 L168,22 L192,10 L218,21 L242,13 L268,28 L290,15 L314,23 L338,11 L364,26 L388,16 L412,22 L438,10 L462,25 L488,15 L514,22 L540,11 L566,27 L590,16 L616,23 L642,11 L668,28 L692,16 L718,23 L744,11 L770,27 L794,16 L820,23 L846,11 L872,28 L896,16 L922,23 L948,11 L974,27 L998,16 L1024,23 L1050,11 L1076,28 L1100,16 L1126,23 L1152,11 L1178,27 L1202,16 L1228,23 L1254,11 L1280,28 L1304,16 L1330,23 L1356,11 L1382,27 L1406,16 L1440,22 L1440,0 Z"
          fill="#f4f3ee"
        />
      </svg>
    </div>
  );
}

// Authentic Jagged Ripped / Torn Paper Bottom SVG Component
function TornEdgeBottom() {
  return (
    <div className="w-full overflow-hidden leading-none relative z-30 -mt-[2px] pointer-events-none select-none">
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 block"
        preserveAspectRatio="none"
      >
        {/* Shadow */}
        <path
          d="M0,48 L0,24 L22,34 L48,18 L72,28 L98,16 L124,31 L148,20 L174,28 L198,15 L224,33 L248,20 L274,30 L298,16 L324,32 L348,20 L374,30 L398,16 L424,33 L448,20 L474,30 L498,16 L524,32 L548,20 L574,30 L598,16 L624,33 L648,20 L674,30 L698,16 L724,32 L748,20 L774,30 L798,16 L824,33 L848,20 L874,30 L898,16 L924,32 L948,20 L974,30 L998,16 L1024,33 L1048,20 L1074,30 L1098,16 L1124,32 L1148,20 L1174,30 L1198,16 L1224,33 L1248,20 L1274,30 L1298,16 L1324,32 L1348,20 L1374,30 L1400,16 L1440,26 L1440,48 Z"
          fill="rgba(0,0,0,0.25)"
        />
        {/* White fibrous torn border */}
        <path
          d="M0,48 L0,26 L22,36 L48,20 L72,30 L98,18 L124,33 L148,22 L174,30 L198,17 L224,35 L248,22 L274,32 L298,18 L324,34 L348,22 L374,32 L398,18 L424,35 L448,22 L474,32 L498,18 L524,34 L548,22 L574,32 L598,18 L624,35 L648,22 L674,32 L698,18 L724,34 L748,22 L774,32 L798,18 L824,35 L848,22 L874,32 L898,18 L924,34 L948,22 L974,32 L998,18 L1024,35 L1048,22 L1074,32 L1098,18 L1124,34 L1148,22 L1174,32 L1198,18 L1224,35 L1248,22 L1274,32 L1298,18 L1324,34 L1348,22 L1374,32 L1400,18 L1440,28 L1440,48 Z"
          fill="#ffffff"
        />
        {/* Grid paper surface layer */}
        <path
          d="M0,48 L0,30 L22,40 L48,24 L72,34 L98,22 L124,37 L148,26 L174,34 L198,21 L224,39 L248,26 L274,36 L298,22 L324,38 L348,26 L374,36 L398,22 L424,39 L448,26 L474,36 L498,22 L524,38 L548,26 L574,36 L598,22 L624,39 L648,26 L674,36 L698,22 L724,38 L748,26 L774,36 L798,22 L824,39 L848,26 L874,36 L898,22 L924,38 L948,26 L974,36 L998,22 L1024,39 L1048,26 L1074,36 L1098,22 L1124,38 L1148,26 L1174,36 L1198,22 L1224,39 L1248,26 L1274,36 L1298,22 L1324,38 L1348,26 L1374,36 L1400,22 L1440,32 L1440,48 Z"
          fill="#f4f3ee"
        />
      </svg>
    </div>
  );
}

// Stylized Character Avatar of Sathish (Matching Image 1 Illustration)
function SathishVectorAvatar() {
  return (
    <div className="relative w-20 h-24 sm:w-28 sm:h-32 md:w-36 md:h-40 flex items-center justify-center transition-transform duration-300 hover:scale-105">
      <svg
        viewBox="0 0 160 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Voluminous Textured Hair (Sathish's styled wavy hair) */}
        <path
          d="M32 60 C24 35 48 8 82 8 C116 8 138 32 130 60 C140 75 138 95 132 105 C124 105 120 95 120 95 C116 112 95 118 80 118 C65 118 44 112 40 95 C40 95 36 105 28 105 C22 95 24 75 32 60 Z"
          fill="#0a0a0f"
        />
        {/* Hair Texture curls & highlights */}
        <path
          d="M48 30 C58 20 75 18 88 22 M95 24 C110 26 122 38 124 50 M40 50 C44 42 52 38 60 40"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Ears */}
        <path d="M35 78 C28 78 28 92 37 94" fill="#f8fafc" stroke="#0a0a0f" strokeWidth="3" />
        <path d="M125 78 C132 78 132 92 123 94" fill="#f8fafc" stroke="#0a0a0f" strokeWidth="3" />

        {/* Face Contour */}
        <path
          d="M38 68 C38 108 52 136 80 138 C108 136 122 108 122 68 C122 46 112 40 80 40 C48 40 38 46 38 68 Z"
          fill="#ffffff"
          stroke="#0a0a0f"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Sharp Eyebrows */}
        <path
          d="M48 68 Q62 62 72 67"
          stroke="#0a0a0f"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M88 67 Q98 62 112 68"
          stroke="#0a0a0f"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Expressive Eyes */}
        <ellipse cx="60" cy="78" rx="6.5" ry="5.5" fill="#0a0a0f" />
        <circle cx="62" cy="76" r="2" fill="#ffffff" />
        <ellipse cx="100" cy="78" rx="6.5" ry="5.5" fill="#0a0a0f" />
        <circle cx="102" cy="76" r="2" fill="#ffffff" />

        {/* Eyelids */}
        <path d="M52 73 Q60 70 68 73" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" />
        <path d="M92 73 Q100 70 108 73" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" />

        {/* Nose */}
        <path
          d="M80 73 L78 92 Q80 95 85 93"
          stroke="#0a0a0f"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Mustache & Clean Smirk */}
        <path
          d="M70 104 Q80 102 90 104"
          stroke="#0a0a0f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M68 111 Q80 116 92 111"
          stroke="#0a0a0f"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Stylish Chin Beard & Jaw Contour */}
        <path
          d="M74 122 Q80 126 86 122"
          stroke="#0a0a0f"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M56 126 C68 136 92 136 104 126"
          stroke="#0a0a0f"
          strokeWidth="2.5"
          strokeDasharray="2 3"
        />

        {/* Collar / Neck snippet */}
        <path d="M68 138 L68 152 M92 138 L92 152" stroke="#0a0a0f" strokeWidth="3" />
        <path d="M60 152 L80 170 L100 152" stroke="#0a0a0f" strokeWidth="2.5" fill="#ffffff" />
      </svg>
    </div>
  );
}

export default function App() {
  const [activeTimelineYear, setActiveTimelineYear] = useState('2026');
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeResumeTab, setActiveResumeTab] = useState('summary');
  const [activeUniverseCategory, setActiveUniverseCategory] = useState('all');
  const [selectedUniverseTech, setSelectedUniverseTech] = useState(null);
  const [avatarMode, setAvatarMode] = useState('vector'); // 'vector' or 'real'
  const [heroBackdropMode, setHeroBackdropMode] = useState('feathered'); // 'feathered', 'shadow', 'cutout', 'glow', 'hidden'
  const [heroBackdropOpacity, setHeroBackdropOpacity] = useState(0.42); // balanced opacity for backdrop silhouette
  const [showBackdropControls, setShowBackdropControls] = useState(false);
  const [greetingIdx, setGreetingIdx] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Timeline Data
  const timelineData = [
    {
      year: '2021',
      title: 'Engineering Enrollment & Foundation',
      sub: 'Karpagam College of Engineering',
      desc: 'Commenced Bachelor of Engineering in Electronics and Communication Engineering (ECE). Completed Higher Secondary Certificate (HSC) with 81% from Vijay Vidyalaya Matriculation Hr. Sec. School.',
      tags: ['B.E. ECE', 'HSC 81%', 'Academic Foundations']
    },
    {
      year: '2022',
      title: 'Core Computing & Systems Logic',
      sub: 'Algorithmic Architectures',
      desc: 'Mastered programming fundamentals, digital logic, data structures, and computer architecture. Built strong analytical troubleshooting and hardware-software abstraction foundations.',
      tags: ['Data Structures', 'C/C++', 'Logic Design']
    },
    {
      year: '2023',
      title: 'Full Stack Web & Database Engineering',
      sub: 'Modern Stacks Exploration',
      desc: 'Transitioned into full-stack web architectures, mastering JavaScript (ES6+), responsive HTML5/CSS3, SQL relational schemas, database normalization, and RESTful API principles.',
      tags: ['JavaScript', 'HTML5/CSS3', 'SQL Databases', 'REST APIs']
    },
    {
      year: '2024',
      title: 'MERN Stack & Quality Assurance',
      sub: 'Building & Rigorous Testing',
      desc: 'Engineered web applications using React.js, Node.js, Express, and MySQL. Began formal SDLC/STLC manual testing workflows, test case authoring, and defect management.',
      tags: ['React.js', 'Node.js', 'SDLC/STLC', 'Postman']
    },
    {
      year: '2025',
      title: 'B.E. Graduation & SLA Institute Certification',
      sub: 'Grade A Honors & CGPA 8',
      desc: 'Graduated with B.E. in ECE from Karpagam College of Engineering with CGPA 8 / 10. Completed rigorous 6-month intensive MERN Full Stack program at SLA Institute with Grade A honors (Nov 2025).',
      tags: ['B.E. ECE (8 CGPA)', 'SLA Institute (Grade A)', 'MERN Certified']
    },
    {
      year: '2026',
      title: 'PROLYNC Full Stack Internship & Immediate Joiner',
      sub: 'Enterprise Production & Client Deliveries',
      desc: 'Full Stack Developer Intern at PROLYNC (Chennai). Delivered internal workspace modules and the client-facing Construction Management mobile application on AWS EC2. Immediate joiner ready for full-time engineering.',
      tags: ['PROLYNC Intern', 'AWS EC2', 'Full Stack + QA', 'Immediate Joiner']
    }
  ];

  // Projects Data
  const projects = [
    {
      id: '01',
      title: 'Construction Management System',
      subtitle: 'Client Project (Production Delivery)',
      date: 'JAN 2026',
      tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MySQL', 'AWS EC2', 'PuTTY'],
      image: '/images/construction-management.jpg',
      description: 'An enterprise-grade cross-platform client solution engineered for construction site oversight, crew dispatch, and real-time operational audit trails.',
      features: [
        'Multi-tier role-based access control (Admin, Site Engineer, Supervisor)',
        'Live task assignments, real-time status logging, and worker workflow pipelines',
        'Photo proof submission pipeline with encrypted media uploads',
        'End-to-end REST API integration connecting mobile clients to AWS EC2 backend',
        'Rigorous functional validation, test case execution, defect identification, and verified bug fixes before client delivery'
      ]
    },
    {
      id: '02',
      title: 'KnowledgeFeed AI',
      subtitle: 'Intelligent Knowledge Transfer Platform',
      date: 'JUNE 2026',
      tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'Google Gemini API (RAG)', 'LangChain'],
      image: '/images/knowledgefeed-ai.jpg',
      description: 'Next-generation AI document analysis and institutional memory accelerator utilizing Retrieval-Augmented Generation (RAG) to provide contextual answers from enterprise documents.',
      features: [
        'Context-aware AI query assistant powered by Google Gemini API and LangChain',
        'Secure JWT-authenticated user sessions and team knowledge vaults',
        'Document parsing, indexing, and vector search over internal technical documentation',
        'Comprehensive Alpha & Beta testing cycles to validate response precision and edge-case handling',
        'Stable, production-ready full-stack deployment with monitored error logging'
      ]
    },
    {
      id: '03',
      title: 'PG Rental Accommodation System',
      subtitle: 'MERN Booking & Room Management Platform',
      date: 'OCT 2025',
      tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'VS Code'],
      image: '/images/pg-rental.jpg',
      description: 'Comprehensive property listing and accommodation booking platform designed to streamline room discovery, tenant inquiries, and owner administration.',
      features: [
        'Dual-role authentication framework (Guest Tenant vs Facility Owner/Admin)',
        'Property catalog with dynamic filtering by location, rent, amenities, and room availability',
        'Interactive tenant dashboard for instant booking requests and reservation history',
        'Owner control center for room inventory updates, pricing, and occupancy metrics',
        'Extensive functional and boundary testing ensuring 100% stable transactional workflows'
      ]
    }
  ];

  // Certifications
  const certifications = [
    {
      provider: 'SLA Institute',
      title: 'MERN Full Stack Certification',
      details: 'Comprehensive 6-Month Intensive Program in Real-World Enterprise Projects',
      grade: 'Grade A',
      date: 'Nov 2025',
      highlight: true
    },
    {
      provider: 'IBM',
      title: 'JavaScript Fundamentals & Advanced Patterns',
      details: 'Modern ES6+ syntax, asynchronous programming, and DOM manipulation',
      grade: 'Verified',
      date: '2024'
    },
    {
      provider: 'HackerRank',
      title: 'Java Programming & React Skill Certifications',
      details: 'Object-oriented software design, component lifecycle, and state architecture',
      grade: 'Certified',
      date: '2024'
    },
    {
      provider: 'HackerRank',
      title: 'SQL (Basics) Skills Certification',
      details: 'Relational data modeling, complex JOIN queries, aggregations, and subqueries',
      grade: 'Certified',
      date: '2024'
    },
    {
      provider: 'Udemy',
      title: 'Full Stack Web Development (HTML5, CSS3, JS)',
      details: 'Responsive layout architecture, modern CSS specifications, and client logic',
      grade: 'Completed',
      date: '2024'
    },
    {
      provider: 'NPTEL',
      title: 'IoT — Internet of Things',
      details: 'Connected devices, sensor networking protocols, and embedded telemetry',
      grade: 'Elite Pass',
      date: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f3ee] text-[#111827] font-sans relative selection:bg-red-500 selection:text-white">

      {/* ========================================================================= */}
      {/* SECTION 1: HERO - PORTF [AVATAR] LIO (EXACT IMAGE 1 REPLICA)               */}
      {/* ========================================================================= */}
      <section id="hero" className="grid-paper min-h-[92vh] flex flex-col justify-between pt-8 pb-4 px-6 sm:px-12 relative overflow-hidden">
        
        {/* Top Header Bar: Role on Left, Available status on Right */}
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-black/10 pb-4 relative z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0a0a0f] font-mono">
              SOFTWARE ENGINEER / QA TESTER
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded border border-emerald-300 font-mono">
              &bull; AVAILABLE TO JOIN
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO BACKGROUND: SATHISH PROFESSIONAL SUIT PORTRAIT BACKDROP               */}
        {/* ========================================================================= */}
        {heroBackdropMode !== 'hidden' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            
            {/* Ambient Radial Spotlight Glow behind Sathish */}
            <div 
              className="absolute w-[460px] sm:w-[560px] md:w-[620px] h-[640px] sm:h-[720px] md:h-[780px] rounded-full pointer-events-none transition-all duration-700 animate-pulse-slow"
              style={{
                background: heroBackdropMode === 'shadow'
                  ? 'radial-gradient(ellipse, rgba(0, 0, 0, 0.04) 0%, transparent 65%)'
                  : 'radial-gradient(ellipse, rgba(255, 255, 255, 0.95) 0%, rgba(244, 243, 238, 0.7) 45%, transparent 72%)',
                transform: 'translateY(-2%)'
              }}
            />

            {/* Standing Executive Portrait Image (Scaled to screen height & width gracefully) */}
            <div 
              className="relative transition-all duration-500 flex items-center justify-center h-[72vh] sm:h-[78vh] max-h-[560px] sm:max-h-[640px] md:max-h-[680px] w-auto"
              style={{
                opacity: heroBackdropOpacity,
                mixBlendMode: heroBackdropMode === 'shadow' ? 'multiply' : 'normal',
                transform: 'translateY(-1%)'
              }}
            >
              <img
                src={
                  heroBackdropMode === 'shadow'
                    ? '/images/sathish_hero_suit_shadow.png'
                    : heroBackdropMode === 'cutout'
                    ? '/images/sathish_hero_suit_cutout.png'
                    : heroBackdropMode === 'glow'
                    ? '/images/sathish_hero_suit_glow.png'
                    : '/images/sathish_hero_suit_feathered.png'
                }
                alt="Sathish Sharma J - Executive Portrait"
                className={`h-full w-auto max-w-[90vw] object-contain select-none pointer-events-none transition-all duration-500 ${
                  heroBackdropMode === 'shadow'
                    ? 'filter blur-[1px]'
                    : 'drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]'
                }`}
              />
            </div>
          </div>
        )}

        {/* Center: Massive Brutalist "PORTF [AVATAR] LIO" */}
        <div className="max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-center justify-center select-none relative z-10">
          
          <div className="flex items-center justify-center flex-wrap gap-x-1 sm:gap-x-3 gap-y-2">
            
            {/* "PORTF" */}
            <h1 className="text-[15vw] sm:text-[14vw] md:text-[13vw] font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist leading-none">
              PORTF
            </h1>

            {/* Sathish Stylized Avatar / Cutout */}
            <div
              className="relative cursor-pointer group px-1 sm:px-2 flex flex-col items-center"
              onClick={() => setAvatarMode(avatarMode === 'vector' ? 'real' : 'vector')}
              title="Click to toggle avatar style"
            >
              {avatarMode === 'vector' ? (
                <SathishVectorAvatar />
              ) : (
                <div className="w-20 h-24 sm:w-28 sm:h-32 md:w-36 md:h-40 rounded-2xl overflow-hidden border-2 border-red-500 shadow-lg bg-white p-1">
                  <img
                    src="/images/sathish_sticker.png"
                    alt="Sathish Sharma J"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* "LIO" */}
            <h1 className="text-[15vw] sm:text-[14vw] md:text-[13vw] font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist leading-none">
              LIO
            </h1>
          </div>

          {/* Subtitle / Identity Pill */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-gray-700 font-bold bg-white/80 px-3 py-1 rounded-full border border-black/10 shadow-sm backdrop-blur-xs">
              SATHISH SHARMA J &bull; CHENNAI, INDIA
            </span>
            <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-red-600 font-bold bg-red-50/90 px-3 py-1 rounded-full border border-red-200 backdrop-blur-xs">
              MERN FULL STACK / QA TESTING
            </span>
          </div>
        </div>

        {/* SECTION 2 TRANSITION: Hand-drawn Curved Arrow pointing down (Image 2) */}
        <div className="flex flex-col items-center pb-2 cursor-pointer relative z-20" onClick={() => scrollToSection('hello')}>
          <div className="relative flex flex-col items-center animate-bounce-slow">
            <svg width="40" height="70" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Hand-drawn sketched curved line */}
              <path
                d="M20,2 C28,24 8,42 20,58"
                stroke="#0a0a0f"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Arrow Head */}
              <path
                d="M13,50 L20,60 L27,50"
                stroke="#0a0a0f"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Red triangular pointer accent */}
              <polygon points="17,64 23,64 20,69" fill="#ef4444" />
            </svg>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-gray-500 mt-1">
              EXPLORE DETAILS
            </span>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: HELLO WITH CASUALLY STYLISH PERSONAL VIDEO ON THE LEFT SIDE     */}
      {/* ========================================================================= */}
      <section id="hello" className="grid-paper py-16 px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Freestanding Standing Subject without any container - Exactly matching Picture 2 */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              
              {/* "HELLO" Title and Subtitle */}
              <div className="mb-4 w-full text-center lg:text-left">
                <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist leading-none">
                  HELLO
                </h2>
                <div className="h-1.5 w-16 bg-red-500 mt-2 mb-3 mx-auto lg:mx-0" />
                <p className="text-xs font-mono uppercase tracking-widest text-gray-600 font-bold">
                  I'M SATHISH SHARMA J
                </p>
              </div>

              {/* Animated Speech Bubble with Pointer Arrow to Sathish */}
              <div 
                onClick={() => setGreetingIdx((prev) => (prev + 1) % GREETINGS.length)}
                className="animate-speech-float mb-3 cursor-pointer select-none group/bubble max-w-[360px] w-full"
                title="Click to hear another greeting from Sathish!"
              >
                <div className="relative bg-white border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#ef4444] transition-all duration-300">
                  
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-200 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      <span>{GREETINGS[greetingIdx].badge}</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 group-hover/bubble:text-red-600 transition-colors font-bold">
                      Click to cycle msg ↻
                    </span>
                  </div>

                  {/* Speech Text */}
                  <h3 className="text-sm sm:text-base font-black text-gray-900 font-brutalist flex items-center gap-1.5">
                    <span>{GREETINGS[greetingIdx].title}</span>
                  </h3>
                  <p className="text-xs text-gray-600 font-mono mt-1.5 leading-relaxed">
                    {GREETINGS[greetingIdx].msg}
                  </p>

                  {/* Speech Bubble Arrow Tail (pointing directly down towards Sathish) */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-6 w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[13px] border-t-black">
                    <div className="absolute -top-[15px] -left-[9px] w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[11px] border-t-white" />
                  </div>

                </div>
              </div>

              {/* Freestanding Walking Subject on Grid Paper with Animated Stride & Ground Contact Shadow */}
              <div className="relative w-full max-w-[300px] sm:max-w-[340px] flex flex-col items-center group select-none">
                
                {/* Sathish Corporate Cutout with Animated Walking Stride */}
                <div className="relative z-10 w-full animate-corporate-stride transition-transform duration-500 group-hover:scale-[1.03]">
                  <img
                    src="/images/sathish_corporate_cutout.png"
                    alt="Sathish Sharma J - Corporate Walking Portrait"
                    className="w-full h-auto object-contain max-h-[560px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
                  />
                </div>

                {/* Ground Contact Shadow (Soft oval shadow under his shoes that pulses with the stride) */}
                <div className="relative -mt-6 sm:-mt-8 z-0 w-56 sm:w-64 h-6 flex justify-center items-center pointer-events-none select-none">
                  <img
                    src="/images/corporate_stand_shadow.png"
                    alt="Ground Shadow"
                    className="w-full h-full object-contain animate-shadow-pulse"
                  />
                </div>

                {/* Floating Professional Status Badge */}
                <div className="mt-2.5 bg-white/95 backdrop-blur-sm border border-black/15 shadow-sm px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-gray-900 uppercase tracking-wider">
                    Sathish Sharma J &bull; Active Professional
                  </span>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: Bio, Skills Pills, and Academic Information */}
            <div className="lg:col-span-7 space-y-6">
              
              <p className="text-lg sm:text-2xl text-gray-900 leading-relaxed font-semibold font-sans">
                I am a <span className="font-black text-[#0a0a0f] underline decoration-red-500 decoration-3">2025 B.E. Electronics and Communication Engineering graduate</span> with hands-on experience in <span className="text-red-600 font-black">Full Stack Development, SQL, REST APIs, and Manual/Automation Testing</span> through enterprise internship and client projects.
              </p>

              {/* Skills Tags Pill Strip */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest font-black text-[#0a0a0f]">
                    CORE SKILLS ARSENAL:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'REACT.JS',
                    'JAVASCRIPT',
                    'NODE.JS',
                    'EXPRESS.JS',
                    'MYSQL',
                    'REST APIS',
                    'QA MANUAL TESTING',
                    'SELENIUM WEBDRIVER',
                    'POSTMAN',
                    'AWS EC2',
                    'GIT & GITHUB',
                    'TEST CASES'
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-black/15 text-xs font-mono font-bold text-gray-900 rounded-md shadow-sm hover:border-red-500 hover:text-red-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic & Professional Accreditation Capsule */}
              <div className="p-5 bg-white rounded-2xl border border-black/15 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block">
                      EDUCATION
                    </span>
                    <span className="text-sm sm:text-base font-black text-gray-900">
                      Karpagam College of Engineering &bull; B.E. ECE (2021–2025)
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-300 text-xs font-mono font-bold rounded">
                    CGPA 8 / 10
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider block">
                      PRODUCTION EXPERIENCE
                    </span>
                    <span className="text-sm font-black text-gray-900">
                      PROLYNC &bull; Full Stack Developer Intern (Onsite Chennai)
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-mono font-bold rounded">
                    Immediate Joiner
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 rounded-xl bg-black text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Explore Client Projects</span>
                  <ChevronRight className="w-4 h-4 text-red-400" />
                </button>

                <a
                  href={LINKS.resume}
                  download="Sathish Sharma J_[2026].pdf"
                  className="px-6 py-3 rounded-xl bg-white text-gray-900 border border-black/20 font-mono font-bold text-xs uppercase tracking-wider hover:border-black transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4 text-red-500" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: TORN PAPER CINEMATIC STRIP & RED STICKER OUTLINE (IMAGE 3)      */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#060609]">
        
        {/* Authentic Top Torn Paper Edge */}
        <TornEdgeTop />

        {/* Black Canvas with Infinite Scrolling Marquee and Centerpiece Red-Sticker Cutout */}
        <div className="relative py-12 sm:py-20 min-h-[460px] flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
          
          {/* Background Marquee Text running continuously (Recreating Image 3) */}
          <div className="absolute inset-y-0 flex items-center overflow-hidden w-full opacity-35 pointer-events-none select-none">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-white font-brutalist mx-4">
                SATHISH SHARMA J &bull; FULL STACK DEVELOPER &bull; QA ENGINEER &bull; PROLYNC CHENNAI &bull; CLIENT DELIVERY &bull;&nbsp;
              </span>
              <span className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tight text-white font-brutalist mx-4">
                SATHISH SHARMA J &bull; FULL STACK DEVELOPER &bull; QA ENGINEER &bull; PROLYNC CHENNAI &bull; CLIENT DELIVERY &bull;&nbsp;
              </span>
            </div>
          </div>

          {/* Sathish Cutout with Vibrant Red Sticker Outline (Graduation Photo Centerpiece) */}
          <div className="relative z-20 flex flex-col items-center">
            
            <div className="relative w-72 sm:w-96 md:w-[440px] aspect-[4/5] max-h-[520px] flex justify-center items-end group">
              <img
                src="/images/sathish_grad_sticker.png"
                alt="Sathish Sharma J"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(239,68,68,0.45)] group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 bg-[#12121a]/95 text-white border border-red-500/60 px-4 py-1.5 rounded-full shadow-xl flex items-center gap-2 backdrop-blur-md whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">
                  Sathish Sharma J
                </span>
                <span className="text-[10px] font-mono text-red-400">
                  &bull; Graduate: 2025
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Authentic Bottom Torn Paper Edge */}
        <TornEdgeBottom />

      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: "THE CREATIVE UNIVERSE" (SATHISH SHARMA J TECH & RESUME REALM) */}
      {/* ========================================================================= */}
      <section id="workspace" className="grid-paper py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-black/10">

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-mono uppercase tracking-widest font-black mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>02 &bull; THE DEVELOPER ECOSYSTEM</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#0a0a0f] font-serif-cinematic">
              THE CREATIVE UNIVERSE
            </h2>

            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-gray-700 font-bold mt-4 flex items-center justify-center flex-wrap gap-2">
              <span>TOOLS</span>
              <span className="text-red-500">&bull;</span>
              <span>GEAR</span>
              <span className="text-red-500">&bull;</span>
              <span>CODE</span>
              <span className="text-red-500">&bull;</span>
              <span>IMPACT</span>
              <span className="text-red-500">&bull;</span>
              <span className="text-red-700 bg-red-100/80 px-2.5 py-0.5 rounded border border-red-300 font-mono font-bold">SATHISH SHARMA J</span>
            </p>

            <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mt-2 max-w-2xl mx-auto">
              FULL-STACK MERN ARCHITECTURES &bull; ENTERPRISE MANUAL & AUTOMATION QA &bull; PROLYNC CHENNAI CLIENT DELIVERIES
            </p>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
              {[
                { id: 'all', label: 'ALL ECOSYSTEM' },
                { id: 'frontend', label: 'CORE FRONTEND & UI' },
                { id: 'backend', label: 'BACKEND & SQL DATA' },
                { id: 'testing', label: 'QA & TEST AUTOMATION' },
                { id: 'ai', label: 'AI & CLOUD' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveUniverseCategory(cat.id);
                    setSelectedUniverseTech(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    activeUniverseCategory === cat.id
                      ? 'bg-black text-white shadow-md border border-black'
                      : 'bg-white text-gray-700 hover:text-black hover:border-black border border-black/15 shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* ===================================================================== */}
          {/* THE COSMIC UNIVERSE VIEWPORT: PORTAL & FLOATING 3D TECH CUBES          */}
          {/* ===================================================================== */}
          <div className="relative rounded-3xl border-2 border-black/80 bg-[#09090f] text-white shadow-[0_20px_50px_rgba(0,0,0,0.22),_4px_4px_0px_#000000] overflow-hidden min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-4 sm:p-8">
            
            {/* Background 3D Cinematic Portal Backdrop (Generated High-Res Artwork) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
              <img
                src="/images/developer_universe_bg.jpg"
                alt="The Creative Universe Portal - Sathish Sharma J"
                className="w-full h-full object-cover object-center opacity-70 filter contrast-110 saturate-110"
              />
              {/* Radial gradient mask to seamlessly blend edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-transparent to-[#09090f]/70" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09090f] via-transparent to-[#09090f]" />
            </div>

            {/* Glowing Neon Laser Energy Wave Ribbon (Flowing through 3D space) */}
            <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
              <svg
                viewBox="0 0 1440 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover animate-neon-wave opacity-80"
                preserveAspectRatio="none"
              >
                <path
                  d="M-50,420 C220,490 380,240 720,380 C1040,510 1200,210 1500,290"
                  stroke="#ff4500"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="filter drop-shadow-[0_0_12px_#ff4500]"
                />
                <path
                  d="M-50,424 C220,494 380,244 720,384 C1040,514 1200,214 1500,294"
                  stroke="#ffa500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="filter drop-shadow-[0_0_20px_#ffa500]"
                />
                <path
                  d="M-50,410 C200,220 500,480 720,280 C950,90 1250,380 1500,210"
                  stroke="rgba(255, 69, 0, 0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="8 12"
                />
              </svg>
            </div>

            {/* Top Atmospheric Corner HUD Overlays (From Image 2) */}
            <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-none select-none">
              
              <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                    STATUS: READY FOR HIRE
                  </span>
                  <span className="text-xs font-mono text-gray-200 font-bold">
                    IMMEDIATE JOINER &bull; CHENNAI / REMOTE
                  </span>
                </div>
              </div>

            </div>

            {/* Interactive Floating 3D Tech Orbit Grid (Overlaid around central portal) */}
            <div className="relative z-20 my-auto py-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {UNIVERSE_TECH.filter(
                  (t) => activeUniverseCategory === 'all' || t.category === activeUniverseCategory
                ).map((tech, idx) => {
                  const isSelected = selectedUniverseTech?.id === tech.id;
                  const floatAnim = idx % 3 === 0 ? 'animate-float-1' : idx % 3 === 1 ? 'animate-float-2' : 'animate-float-3';

                  return (
                    <div
                      key={tech.id}
                      onClick={() => setSelectedUniverseTech(isSelected ? null : tech)}
                      className={`tech-cube p-3.5 sm:p-4 cursor-pointer group select-none ${floatAnim} ${tech.glowClass} ${
                        isSelected ? 'tech-cube-active scale-105' : ''
                      }`}
                      style={{
                        animationDelay: `${idx * 0.25}s`,
                        animationDuration: `${5.5 + (idx % 3) * 1.2}s`
                      }}
                    >
                      {/* Top Bar inside Cube */}
                      <div className="flex items-center justify-between gap-1 mb-3">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-transform">
                          <TechBrandIcon name={tech.icon} className="w-6 h-6" />
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 px-1.5 py-0.5 rounded bg-black/40 border border-white/5">
                          {tech.role}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="space-y-0.5">
                        <h4 className="text-sm font-black text-white font-brutalist group-hover:text-red-400 transition-colors flex items-center justify-between">
                          <span>{tech.name}</span>
                          <span className="text-red-500 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                        </h4>
                        <p className="text-[10px] font-mono text-gray-400 line-clamp-1">
                          {tech.tagline}
                        </p>
                      </div>

                      {/* Resume Metrics Badge */}
                      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-gray-400">
                        <span className="text-red-400 truncate font-semibold">
                          {tech.metrics}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Central Floating Cybernetic Tech Inspector HUD Modal */}
            {selectedUniverseTech && (
              <div 
                className="absolute inset-0 z-30 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200"
                onClick={() => setSelectedUniverseTech(null)}
              >
                <div 
                  className="bg-[#0f0f18]/95 border border-red-500/70 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-[0_0_60px_rgba(239,68,68,0.4)] relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedUniverseTech(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    title="Close Inspector"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-start gap-4 sm:gap-6 mb-6">
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 border border-white/20 shadow-inner shrink-0">
                      <TechBrandIcon name={selectedUniverseTech.icon} className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h4 className="text-2xl sm:text-3xl font-black text-white font-brutalist">
                          {selectedUniverseTech.name}
                        </h4>
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-red-500/20 text-red-300 border border-red-500/40">
                          {selectedUniverseTech.role}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-amber-400 mt-1 flex items-center gap-2">
                        <span>&bull; Project Reference:</span>
                        <strong className="underline decoration-amber-400/50">{selectedUniverseTech.projectRef}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block mb-1.5">
                      RESUME & CV REAL-WORLD IMPLEMENTATION:
                    </span>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {selectedUniverseTech.resumeContext}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-gray-500">Key Metric:</span>
                      <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        {selectedUniverseTech.metrics}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedUniverseTech(null);
                          scrollToSection('projects');
                        }}
                        className="px-4 py-2 rounded-xl bg-white text-gray-900 font-bold text-xs uppercase hover:bg-gray-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <span>Explore Projects</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Bottom Ambient HUD Footer */}
            <div className="relative z-20 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gray-400 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span className="text-gray-300 font-bold">
                  CLICK ANY TECH CUBE TO INSPECT RESUME USAGE & CLIENT APPLICATION
                </span>
              </div>
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-gray-400">
                <span>MERN STACK</span>
                <span className="text-gray-600">&bull;</span>
                <span>REST APIS</span>
                <span className="text-gray-600">&bull;</span>
                <span>STLC / SDLC</span>
                <span className="text-gray-600">&bull;</span>
                <span>AWS EC2</span>
              </div>
            </div>

          </div>

          {/* ===================================================================== */}
          {/* RECRUITER ATTRACTION: RESUME & CV HIGH-IMPACT CREDENTIALS STRIP       */}
          {/* ===================================================================== */}
          <div className="mt-14 sm:mt-16">
            
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-black">
                CORE CURRICULUM VITAE PILLARS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist mt-1">
                ENGINEERED FOR IMMEDIATE IMPACT
              </h3>
              <p className="text-xs font-mono text-gray-500 mt-1">
                KEY RESUME METRICS VALIDATED THROUGH ACADEMIA, CERTIFICATION & PRODUCTION INTERNSHIP
              </p>
            </div>

            {/* 4 Recruiter Highlights Cards on White Grid Paper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {RESUME_METRICS.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-6 rounded-2xl bg-white border border-black/15 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${metric.accentClass}`}>
                      {metric.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400 font-bold">
                      0{mIdx + 1}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-black font-brutalist text-[#0a0a0f]">
                      {metric.number}
                    </span>
                    <span className="text-sm font-mono font-bold text-gray-600">
                      {metric.unit}
                    </span>
                  </div>

                  <h4 className="text-sm font-black text-[#0a0a0f] font-brutalist mb-2">
                    {metric.label}
                  </h4>

                  <p className="text-xs text-gray-600 font-mono leading-relaxed">
                    {metric.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct High-Conversion Call To Actions */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-black/15 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-red-600 uppercase tracking-widest font-black block">
                  READY FOR ACTION &bull; IMMEDIATE JOINER
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#0a0a0f] font-brutalist mt-1">
                  Want the full breakdown of Sathish's credentials?
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-mono mt-1">
                  Review production project delivery, test cases, and academic transcript.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3.5 rounded-xl bg-black hover:bg-gray-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Mail className="w-4 h-4 text-red-400" />
                  <span>Contact Sathish</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: JOURNEY TIMELINE (2021–2026)                                   */}
      {/* ========================================================================= */}
      <section id="journey" className="grid-paper py-20 px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-black">
              02 &bull; CAREER TRAJECTORY
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist mt-1">
              THE JOURNEY
            </h2>
            <p className="text-xs font-mono text-gray-600 uppercase mt-1">
              2021 ACADEMIC ENROLLMENT TO 2026 PRODUCTION DELIVERY
            </p>
          </div>

          {/* Interactive Timeline Tabs */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2">
            {timelineData.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveTimelineYear(item.year)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                  activeTimelineYear === item.year
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white border border-black/15 text-gray-700 hover:border-black'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          {(() => {
            const current = timelineData.find((t) => t.year === activeTimelineYear) || timelineData[0];
            return (
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-black/15 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-7xl sm:text-9xl font-black text-gray-100 font-brutalist pointer-events-none select-none">
                  {current.year}
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-4 mb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">
                        MILESTONE YEAR &bull; {current.year}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-brutalist">
                        {current.title}
                      </h3>
                      <p className="text-sm font-mono text-gray-500 mt-0.5">
                        {current.sub}
                      </p>
                    </div>

                    <span className="px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded text-xs font-mono font-bold self-start sm:self-auto">
                      Verified
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-5xl">
                    {current.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-xs font-mono font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: PROLYNC EXPERIENCE & REAL-WORLD DELIVERY                       */}
      {/* ========================================================================= */}
      <section id="experience" className="grid-paper py-20 px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-black">
              03 &bull; WORK HISTORY
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist mt-1">
              EXPERIENCE
            </h2>
            <p className="text-xs font-mono text-gray-600 uppercase mt-1">
              FULL STACK & QA INTERNSHIP
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-black/15 shadow-md overflow-hidden">
            <div className="p-6 sm:p-8 bg-[#0d0d14] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-black font-brutalist tracking-wider">
                    PROLYNC
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Active Internship
                  </span>
                </div>
                <p className="text-sm font-mono text-amber-400 font-bold mt-1">
                  Full Stack Developer Intern &bull; Web Developer
                </p>
                <p className="text-xs font-mono text-gray-400 mt-1">
                  Onsite — Chennai, Tamil Nadu &bull; Oct 2025 – Mar 2026
                </p>
              </div>

              <div>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-mono text-gray-200 border border-white/20">
                  Agile Sprint Environment
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest font-black text-gray-500">
                RESPONSIBILITIES & PRODUCTION CONTRIBUTIONS:
              </h4>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Internal Product Workspaces:</strong> Contributed to real-time development of internal product modules and workspace features in an agile team environment using React.js and REST APIs.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Client Project Delivery:</strong> Delivered the <strong className="text-red-600">Construction Management client project</strong> by building responsive user interfaces, integrating backend REST APIs, and implementing end-to-end modules.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Quality Validation:</strong> Performed functional validation, executed test cases, identified defects, and verified bug fixes before client delivery.
                  </span>
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Git', 'VS Code', 'AWS EC2', 'PuTTY'].map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 border border-gray-300 text-xs font-mono text-gray-800 rounded font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: FEATURED PROJECTS SHOWCASE                                     */}
      {/* ========================================================================= */}
      <section id="projects" className="grid-paper py-20 px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-black">
              04 &bull; PRODUCTION WORK
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist mt-1">
              PROJECTS
            </h2>
            <p className="text-xs font-mono text-gray-600 uppercase mt-1">
              CLIENT APPLICATION & AI ARCHITECTURES
            </p>
          </div>

          {/* Project Tabs */}
          <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveProjectIdx(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeProjectIdx === idx
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white border border-black/15 text-gray-700 hover:border-black'
                }`}
              >
                <span>PROJ {proj.id}:</span>
                <span>{proj.title}</span>
              </button>
            ))}
          </div>

          {/* Active Project View */}
          {(() => {
            const project = projects[activeProjectIdx];
            return (
              <div className="bg-white rounded-3xl border border-black/15 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                
                {/* Visual Image Half */}
                <div className="lg:col-span-6 bg-gray-900 min-h-[340px] sm:min-h-[420px] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
                    PROJ {project.id} &bull; {project.date}
                  </div>
                </div>

                {/* Project Details Half */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase text-red-600 font-bold tracking-wider">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-brutalist mt-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-3">
                      {project.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      <span className="text-xs font-mono font-bold uppercase text-gray-900 block">
                        KEY FEATURES & TESTING:
                      </span>
                      <ul className="space-y-1.5">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-gray-700 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-gray-100 text-gray-800 rounded text-[11px] font-mono font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={LINKS.resume}
                      download="Sathish Sharma J_[2026].pdf"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-mono font-bold uppercase rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Resume for Full Case Study</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: QA & TESTING MASTERY ("QUALITY MATTERS")                       */}
      {/* ========================================================================= */}
      <section id="qa" className="grid-paper py-20 px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-black">
              05 &bull; QUALITY ASSURANCE
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist mt-1">
              QUALITY MATTERS
            </h2>
            <p className="text-xs font-mono text-gray-600 uppercase mt-1">
              MANUAL & AUTOMATION QUALITY ASSURANCE ENGINEERING
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-black/15 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 font-brutalist mb-2">
                SDLC & STLC Suites
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Complete understanding of Software Development & Testing Lifecycles, requirement traceability, test case execution, and defect reporting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/15 shadow-sm">
              <Bug className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 font-brutalist mb-2">
                Manual Testing
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Functional testing, regression testing, smoke testing, sanity checks, alpha/beta testing cycles, and boundary value edge testing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/15 shadow-sm">
              <Zap className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 font-brutalist mb-2">
                API & Automation
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                REST API validation using Postman collections, HTTP status assertions, Selenium WebDriver test automation scripts, and Maven builds.
              </p>
            </div>
          </div>

          {/* Animated Testing Lifecycle */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-black/15 shadow-sm text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-black block mb-4">
              CYCLICAL DEFECT RESOLUTION WORKFLOW
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-bold">
              {['TEST CASE', 'EXECUTE', 'DEFECT', 'FIX', 'RETEST', 'VERIFY'].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-3.5 py-2 bg-gray-100 rounded-lg border border-gray-300 text-gray-900">
                    <span className="text-red-500 mr-1.5">0{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                  {idx < 5 && <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: VERIFIED CERTIFICATIONS                                        */}
      {/* ========================================================================= */}
      <section id="certifications" className="grid-paper py-20 px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-black">
              06 &bull; ACCREDITATIONS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist mt-1">
              CERTIFICATIONS
            </h2>
            <p className="text-xs font-mono text-gray-600 uppercase mt-1">
              ACADEMIC & PROFESSIONAL CREDENTIALS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-2xl border flex flex-col justify-between shadow-sm relative ${
                  cert.highlight ? 'border-red-500 shadow-md' : 'border-black/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-red-600 uppercase">
                      {cert.provider}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{cert.date}</span>
                  </div>
                  <h3 className="text-base font-black text-gray-900 font-brutalist mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {cert.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">Grade / Result:</span>
                  <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    {cert.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: RESUME SHOWCASE & DIRECT DOWNLOAD                             */}
      {/* ========================================================================= */}
      <section id="resume" className="grid-paper py-20 px-6 sm:px-12 border-t border-black/10">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-black/15 shadow-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-200 pb-8 mb-8">
            <div>
              <span className="text-xs font-mono uppercase text-red-600 font-bold tracking-widest block mb-1">
                OFFICIAL CURRICULUM VITAE
              </span>
              <h3 className="text-3xl font-black text-gray-900 font-brutalist">
                SATHISH SHARMA J
              </h3>
              <p className="text-xs font-mono text-gray-500 mt-1">
                +91-9360484391 &bull; sathishj0423@gmail.com &bull; Chennai, India
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
            {[
              { id: 'summary', label: 'Summary' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills Arsenal' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveResumeTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                  activeResumeTab === tab.id
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-black bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-sm text-gray-800 min-h-[140px]">
            {activeResumeTab === 'summary' && (
              <div className="space-y-3">
                <p className="text-base text-gray-900">
                  <strong>Career Objective:</strong> Hands-on experience in MERN Stack Development, SQL, REST APIs, and Manual Testing through internship projects. Passionate about Product Support with strong troubleshooting, debugging, problem-solving, and communication skills.
                </p>
                <p className="text-xs font-mono text-gray-500">
                  Target Roles: Full Stack Developer, Frontend Developer, QA Engineer, Product Support Engineer.
                </p>
              </div>
            )}

            {activeResumeTab === 'experience' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-base">PROLYNC &bull; Full Stack Developer Intern (Onsite Chennai)</span>
                  <span className="text-xs font-mono text-red-600 font-bold">Dec 2025 – Mar 2026</span>
                </div>
                <p className="text-xs font-mono text-gray-500">Roles: Web Developer</p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
                  <li>Contributed to real-time development of internal product modules and Workspace in an agile team environment.</li>
                  <li>Delivered the Construction Management client project by building responsive UI, integrating REST APIs, and implementing end-to-end modules.</li>
                  <li>Executed functional validation, test cases, and bug verification.</li>
                </ul>
              </div>
            )}

            {activeResumeTab === 'education' && (
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">B.E. Electronics and Communication Engineering</span>
                    <span className="text-xs font-mono text-red-600 font-bold">2021 – 2025</span>
                  </div>
                  <p className="text-xs text-gray-600">Karpagam College of Engineering &bull; CGPA: 8 / 10</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs">
                    <strong>HSC (2021):</strong> 81% &bull; Vijay Vidyalaya Matriculation Hr. Sec. School
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs">
                    <strong>SSLC (2019):</strong> 68% &bull; Don Bosco Matriculation Hr. Sec. School
                  </div>
                </div>
              </div>
            )}

            {activeResumeTab === 'skills' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-red-600 block mb-1">DEVELOPMENT</strong>
                  React.js, Node.js, Express.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Java
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-red-600 block mb-1">QA & TESTING</strong>
                  SDLC, STLC, Functional, Regression, Smoke, Sanity, Postman, Selenium, Maven
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-red-600 block mb-1">DATABASE & CLOUD</strong>
                  MySQL, SQL Queries, AWS EC2, Git, GitHub, VS Code, Eclipse, PuTTY
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: LET'S CONNECT & FOOTER (EXACT IMAGE 5 REPLICA)                 */}
      {/* ========================================================================= */}
      <section id="contact" className="grid-paper pt-20 pb-0 relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          
          {/* Main Headline: LET'S CONNECT */}
          <div className="mb-4">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-[#0a0a0f] font-brutalist">
              LET'S CONNECT
            </h2>
          </div>

          {/* Horizontal Red Dividing Line across the full section (Image 5) */}
          <div className="w-full h-1 bg-red-500 mb-8" />

          {/* Subtext (Image 5) */}
          <div className="mb-12">
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#0a0a0f] font-mono">
              SATHISH IS AVAILABLE TO TALK.
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-mono mt-1">
              Have an opportunity, an idea, a project, or simply want to say hello?
            </p>
          </div>

          {/* Signature & Social Links Row (Image 5) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-16">
            
            {/* Handwritten Signature with red accent (Image 5) */}
            <div>
              <div className="w-8 h-1 bg-red-500 mb-1" />
              <div className="font-handwriting text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide">
                Sathish Sharma J
              </div>
            </div>

            {/* Oval Pill Link Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono font-bold uppercase tracking-wider">
              <a
                href="mailto:sathishj0423@gmail.com"
                className="px-3.5 py-1.5 rounded-full bg-white border border-black/25 text-gray-900 hover:bg-black hover:text-white hover:border-black shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                EMAIL
              </a>
              <a
                href="tel:+919360484391"
                className="px-3.5 py-1.5 rounded-full bg-white border border-black/25 text-gray-900 hover:bg-black hover:text-white hover:border-black shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                PHONE
              </a>
              <a
                href={LINKS.resume}
                download="Sathish Sharma J_[2026].pdf"
                className="px-3.5 py-1.5 rounded-full bg-white border border-black/25 text-gray-900 hover:bg-black hover:text-white hover:border-black shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                RESUME
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white border border-black/25 text-gray-900 hover:bg-black hover:text-white hover:border-black shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                LINKEDIN
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white border border-black/25 text-gray-900 hover:bg-black hover:text-white hover:border-black shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                GITHUB
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Torn Paper Edge Transition to Black Footer (Image 5) */}
        <TornEdgeTop />

        {/* Black Footer Area (Image 5) */}
        <footer className="bg-[#0a0a0f] text-gray-400 py-10 px-6 sm:px-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div>
              <span className="text-white font-bold">&copy; 2026 SATHISH SHARMA J</span>
              <span className="mx-2 text-gray-600">|</span>
              <span>FULL STACK DEVELOPER &bull; QA TESTER</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-red-400 font-bold uppercase cursor-pointer"
              >
                BACK TO TOP &uarr;
              </button>
            </div>
          </div>
        </footer>

      </section>

    </div>
  );
}
