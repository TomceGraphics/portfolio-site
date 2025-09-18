export const profile = {
  name: 'Thomas Graphics',
  role: 'UI/UX Designer & Engineer',
  tagline: 'From nothing → first frontend prototype',
  location: 'Remote / EU',
  bio: 'I help founders and teams go from zero to a polished, testable frontend prototype fast. My process blends product thinking, UX research, and systems-level front-end engineering.',
  avatar: '/assets/img/profilePic.png',
  links: [
    { label: 'GitHub', icon: 'mdi:github', href: 'https://github.com/TomceGraphics' },
    { label: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/tomcegraphics/' },
    { label: 'Email', icon: 'mdi:email', href: 'tomce.graphics@gmail.com' }
  ],
  capabilities: [
    'Product discovery', 'Rapid prototyping', 'Design systems', 'Frontend architecture', 'Accessibility', 'Figma → Code'
  ]
};

export const clientProjects = [
  {
    title: 'Digital Parking Solution for Ohrid',
    description: 'A digital parking solution to improve user experience and increase city revenue',
    tags: ['Design System', 'Frontend Development', 'UI/UX Design', 'Product Management'],
    type: 'client',
    openSource: false,
    live: false,
    caseStudyPath: '/parking-app/',
    repoUrl: null,
    liveUrl: null,  
    cover: './parking-app/images/3-screens/showcase-3-screens.png'
  },
  {
    title: 'K&I',
    description: 'full branding for a fashion brand',
    tags: ['Branding', 'Design', 'logo design'],
    type: 'client',
    openSource: false,
    live: false,
    caseStudyPath: '/k&i/',
    repoUrl: null,
    liveUrl: null,
    cover: ''
  }
];

export const personalProjects = [
  {
    title: 'Workout App',
    description: 'a workout app for tracking your workouts and progress',
    tags: ['Open Source', 'Design Tokens', 'Tailwind'],
    type: 'personal',
    openSource: false,
    live: true,
    repoUrl: '#',
    liveUrl: 'https://gym-core.netlify.app/',
    cover: ''
  },
  {
    title: 'Prompt Library',
    description: 'a prompt library for ai',
    tags: ['Open Source', 'tailwind', 'figma' , 'ai', 'ui/ux design'],
    type: 'personal',
    openSource: true,
    live: true,
    repoUrl: 'https://github.com/TomceGraphics/Prompt-Library',
    liveUrl: 'https://prompt-core.netlify.app/',
    cover: 'https://github.com/TomceGraphics/Prompt-Library/blob/main/screen-shoots/mockup_grid_view.png?raw=true'
  },
  {
    title: 'Graph Visualizer',
    description: 'A lightweight, browser-based graph visualizer designed to help students and developers visualize graphs and practice graph algorithms.',
    tags: ['Open Source', 'tailwind', 'figma', 'ui/ux design','graph visualization'],
    type: 'personal',
    openSource: true,
    live: false,
    repoUrl: 'https://github.com/TomceGraphics/graph-visualizer',
    liveUrl: 'null',
    cover: 'https://raw.githubusercontent.com/TomceGraphics/graph-visualizer/main/screenshots/site3.png'
  }
];

export const services = [
  {
    icon: 'ph:rocket-duotone',
    title: 'Rapid Prototyping',
    description: 'Clickable, high-fidelity prototypes that validate product direction fast.'
  },
  {
    icon: 'ph:stack-duotone',
    title: 'Design Systems',
    description: 'Token-driven systems with Tailwind that scale across products.'
  },
  {
    icon: 'ph:wheelchair-motion-duotone',
    title: 'Accessible Frontends',
    description: 'A11y-first UIs with robust interactions and performance.'
  }
];

export const processSteps = [
  { step: 1, title: 'Discover', description: 'Goals, constraints, and user needs.' },
  { step: 2, title: 'Design', description: 'Flows, wireframes, and UI system.' },
  { step: 3, title: 'Prototype', description: 'Interactive UI with realistic data.' },
  { step: 4, title: 'Validate', description: 'User testing and iteration.' }
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


