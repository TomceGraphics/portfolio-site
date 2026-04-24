export const profile = {
  name: 'Thomas Graphics',
  role: 'UI/UX Designer & Engineer',
  tagline: 'Bridging the gap between human intent and functional code.',
  location: 'Remote / EU',
  bio: 'I help founders and teams go from zero to a polished, testable frontend prototype fast. My process blends product thinking, UX research, and systems-level front-end engineering.',
  avatar: '/assets/img/profilePic.png',
  links: [
    { label: 'GitHub', icon: 'mdi:github', href: 'https://github.com/TomceGraphics' },
    { label: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/tomcegraphics/' },
    { label: 'Email', icon: 'mdi:email', href: 'tomce.graphics@gmail.com' }
  ],
  capabilities: [
    'Product discovery',
    'HCI Research & Design',
    'Functional MVP Prototyping',
    'Rapid prototyping',
    'Design systems',
    'Frontend architecture',
    'Accessibility',
    'Figma → Code'
  ]
};

export const selectedProjects = [
  {
    title: 'Digital Parking Solution for Ohrid',
    description: 'A digital parking solution to improve user experience and increase city revenue',
    tags: ['Design System', 'Frontend Development', 'UI/UX Design', 'Product Management'],
    type: 'featured',
    openSource: false,
    live: false,
    caseStudyPath: 'work/parking-app/',
    repoUrl: null,
    liveUrl: null,
    cover: 'work/parking-app/images/3-screens/showcase-3-screens.png'
  },
  {
    title: "DocMatch: AI Triage Engine",
    description: "An AI-driven healthcare platform that translates natural language symptoms into precise medical routing, eliminating the cognitive burden of self-diagnosis.",
    tags: ["UX Engineering", "Frontend Development", "HCI Design", "UI/UX Design", "AI / LLM Integration"],
    type: 'featured',
    openSource: false,
    live: false,
    caseStudyPath: 'work/docMatch/',
    repoUrl: null,
    liveUrl: null,
    cover: 'assets/covers/docmatch-cover.png'
  }
];

export const otherProjects = [
  {
    id: "qr-restaurant",
    title: "QR-Based Ordering Ecosystem",
    description: "Designed a sales-ready MVP for restaurant automation. Focused on service design architecture to enable pre-order validation and rapid sales cycles.",
    tags: ["Service Design", "Architecture", "Figma Systems", "Sales-Ready MVP"],
    type: 'other',
    live: false,
    openSource: false,
    repoUrl: null,
    liveUrl: null,
    caseStudyPath: "/work/qr-restaurant/",
    cover: "assets/covers/qr-cover.png"
  },
  {
    title: "Reliability-First Weather IoT",
    description: "Engineered a custom hardware weather station and React dashboard to solve local data inaccuracy, ensuring 100% reliable UX for weather-sensitive activities.",
    tags: ["Full-Stack", "IoT", "Data Engineering", "UX Research"],
    type: 'other',
    live: false,
    openSource: true,
    repo: "null",
    liveUrl: "null",
    caseStudyPath: "work/weather-station/index.html",
    cover: "assets/covers/weather-app-cover.png"
  },
  {
    title: 'Workout App',
    description: 'a workout app for tracking your workouts and progress',
    tags: ['Open Source', 'Design Tokens', 'Tailwind'],
    type: 'other',
    openSource: false,
    live: true,
    repoUrl: '#',
    liveUrl: 'https://gym-core.netlify.app/',
    cover: 'assets/covers/gym-core-cover01.webp'
  },
  {
    title: 'Prompt Library',
    description: 'a prompt library for ai',
    tags: ['Open Source', 'tailwind', 'figma', 'ai', 'ui/ux design'],
    type: 'other',
    openSource: true,
    live: true,
    repoUrl: 'https://github.com/TomceGraphics/Prompt-Library',
    liveUrl: 'https://prompt-core.netlify.app/',
    cover: 'assets/covers/prompt-library-cover.webp'
  },
  {
    title: 'Graph Visualizer',
    description: 'A lightweight, browser-based graph visualizer designed to help students and developers visualize graphs and practice graph algorithms.',
    tags: ['Open Source', 'tailwind', 'figma', 'ui/ux design', 'graph visualization'],
    type: 'other',
    openSource: true,
    live: false,
    repoUrl: 'https://github.com/TomceGraphics/graph-visualizer',
    liveUrl: 'null',
    cover: 'assets/covers/graph-visualizer-cover.webp'
  }
];

export const labsProjects = [
  {
    title: 'K&I',
    description: 'full branding for a fashion brand',
    tags: ['Branding', 'Design', 'logo design'],
    type: 'other',
    openSource: false,
    live: false,
    caseStudyPath: 'work/K&I/CaseStudy.pdf',
    repoUrl: null,
    liveUrl: null,
    cover: 'work/K&I/k&i-cover.webp',
    identifier: 'k-and-i',
    version: 'v1.0.0',
    status: 'Completed',
    date: '2023-05-12',
    markdownFile: '/labs/k-and-i.md'
  },
  {
    title: 'Engine.py',
    description: 'A robust Python automation engine designed to procedurally generate, composite, and render both static visuals and motion graphics at scale.',
    tags: ['Python', 'Automation', 'Generative Media'],
    type: 'other',
    openSource: false,
    live: false,
    caseStudyPath: null,
    repoUrl: null,
    liveUrl: null,
    cover: null,
    identifier: 'engine-py',
    version: 'v0.8.0',
    status: 'Beta',
    date: '2024-01-20',
    markdownFile: '/labs/engine-py.md'
  },
  {
    title: 'Song Engine (Concept)',
    description: 'An experimental framework exploring AI-powered music discovery and recommendation.',
    tags: ['Concept', 'AI', 'Algorithms', 'Music', 'Vector Search'],
    type: 'other',
    openSource: false,
    live: false,
    caseStudyPath: null,
    repoUrl: null,
    liveUrl: null,
    cover: null,
    identifier: 'song-engine',
    version: 'v0.1.2',
    status: 'Alpha',
    date: '2024-03-15',
    markdownFile: '/labs/song-engine.md'
  },
  {
    title: 'Modern Pokédex App',
    description: 'A highly polished, responsive front-end application leveraging REST APIs to deliver a sleek visual explorer with fluid micro-interactions and optimized performance.',
    tags: ['Frontend', 'UI/UX', 'API Integration'],
    type: 'other',
    openSource: false,
    live: false,
    caseStudyPath: null,
    repoUrl: null,
    liveUrl: null,
    cover: null,
    identifier: 'modern-pokedex',
    version: 'v1.2.0',
    status: 'Live',
    date: '2024-05-10',
    markdownFile: '/labs/modern-pokedex.md'
  },
  {
    title: 'Native Music Downloader',
    description: 'An ultra-reliable, high-performance native desktop utility engineered for seamless offline audio library management, wrapped in a premium modern interface.',
    tags: ['Native App', 'Desktop', 'Architecture'],
    type: 'other',
    openSource: false,
    live: false,
    caseStudyPath: null,
    repoUrl: null,
    liveUrl: null,
    cover: null,
    identifier: 'music-downloader',
    version: 'v2.0.1',
    status: 'Stable',
    date: '2024-04-02',
    markdownFile: '/labs/music-downloader.md'
  }
];

export const services = [
  {
    icon: 'ph:lightning-duotone',
    title: 'MVP Prototyping',
    description: 'I build clickable, high-fidelity prototypes in Figma or React to help founders validate ideas, pitch to investors, and reduce development waste.'
  },
  {
    icon: 'ph:stack-duotone',
    title: 'Design-to-Code Systems',
    description: 'Creating scalable, token-driven systems that bridge the gap between design and production, ensuring 1:1 consistency with Tailwind CSS or CSS-in-JS.'
  },
  {
    icon: 'ph:code-duotone', // Swapped icon for engineering focus
    title: 'UX Engineering',
    description: 'Full-stack frontend development with a focus on performance, semantic HTML, and building components that are as accessible as they are beautiful.'
  }
];

export const processSteps = [
  { step: 1, title: 'Synthesize', description: 'Deep-diving into user psychology and product requirements.' },
  { step: 2, title: 'Interaction', description: 'Architecting flows and interaction models that solve for cognitive load.' },
  { step: 3, title: 'Prototype', description: 'Building the functional "proof of concept" using the most efficient tech stack.' },
  { step: 4, title: 'Validate', description: 'Iterating based on real-world interaction and data before production handoff.' }
];

export const testimonials = [
  {
    quote: 'Thomas bridged design and engineering seamlessly and got us to a prototype our team could test within weeks.',
    author: 'A. Petrov',
    role: 'Founder, SaaS Startup'
  },
  {
    quote: 'Clear process, strong visuals, and code we could build on. Exactly what we needed.',
    author: 'M. Stojanov',
    role: 'Product Lead'
  }
];

export const articles = [
  { title: 'From Frustration to Flow: How I Designed a Digital Parking Solution', href: 'https://medium.com/design-bootcamp/from-frustration-to-flow-how-i-designed-a-digital-parking-solution-75b9019a3f32', source: 'Medium' },
  { title: 'Prototyping for Validation', href: '#', source: 'Medium (coming soon)' }
];


