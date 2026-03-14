export const profile = {
  name: 'Vivek Raj Singh',
  initials: 'VR',
  title: 'Full-Stack Developer & Digital Problem Solver',
  tagline: 'I don\'t just write code — I solve the problems that keep businesses stuck',
  bio: `Results-driven full-stack developer with 6+ years of experience solving complex technical challenges for startups and enterprises across fintech, SaaS, e-commerce, and healthcare. Specializing in React, Node.js, Python, and cloud architecture with a proven track record of rescuing failing projects and turning them into revenue-generating platforms. 40+ projects shipped, $12M+ in cumulative client revenue generated, and a 100% client retention rate. I approach every project as a business problem first, a technical problem second — because great code that doesn't drive results is just expensive text.`,
  email: 'shubhamrvilgax@gmail.com',
  phone: '+91 7071 984914',
  location: 'Lucknow, UP, India',
};

export const stats = [
  { value: '6+', label: 'Years Exp.' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '$12M+', label: 'Revenue Generated' },
  { value: '100%', label: 'Client Retention' },
];

export const skills = [
  { name: 'React / Next.js', level: 98, category: 'frontend' },
  { name: 'Node.js / Express', level: 97, category: 'backend' },
  { name: 'Python / Django / FastAPI', level: 95, category: 'backend' },
  { name: 'TypeScript', level: 96, category: 'frontend' },
  { name: 'AWS / Cloud Architecture', level: 94, category: 'backend' },
  { name: 'System Design & Architecture', level: 97, category: 'backend' },
];

export const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Framer Motion'],
  backend: ['Node.js', 'Python', 'Django', 'FastAPI', 'GraphQL', 'PostgreSQL', 'Redis', 'MongoDB'],
  tools: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Figma', 'Vercel', 'Terraform'],
};

export const experience = [
  {
    role: 'Freelance Full-Stack Architect & Technical Consultant',
    company: 'Self-Employed',
    type: 'Freelance / Contract',
    location: 'Remote, India',
    period: 'Mar 2023 — Present',
    highlights: [
      'Rescued 6 failing SaaS products — rebuilt architecture, resolved critical bugs, and shipped all within deadline',
      'Built DevBoard (developer productivity dashboard) from scratch — grew to 15K+ active users and $38K MRR in 8 months',
      'Architected real-time analytics platform processing 10M+ events/day for a Series B fintech startup',
      'Generated $12M+ in cumulative client revenue through optimized platforms, performance tuning, and conversion funnels',
    ],
  },
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Freshworks',
    type: 'Full-time',
    location: 'Chennai, India',
    period: 'Jan 2021 — Feb 2023',
    highlights: [
      'Led the Freshdesk Messaging platform redesign — reduced ticket resolution time by 34% for 60K+ businesses worldwide',
      'Built real-time collaboration engine supporting 50K concurrent WebSocket connections with sub-100ms latency',
      'Architected microservices migration reducing deployment time from 45 minutes to 8 minutes across 12 services',
      'Mentored 8 junior developers and established TypeScript-first coding standards adopted across the engineering org',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Zoho Corporation',
    type: 'Full-time',
    location: 'Chennai, India',
    period: 'Jul 2019 — Dec 2020',
    highlights: [
      'Core developer on Zoho CRM Plus — built custom dashboard widgets used by 250K+ businesses globally',
      'Implemented advanced search with Elasticsearch reducing query time by 78% across 500M+ records',
      'Built automated reporting engine generating 2M+ PDF reports monthly with zero downtime',
      'Designed and maintained REST APIs serving 15M+ requests/day with 99.99% availability',
    ],
  },
  {
    role: 'Software Engineer Intern → Junior Developer',
    company: 'Infosys',
    type: 'Full-time',
    location: 'Pune, India',
    period: 'Jan 2018 — Jun 2019',
    highlights: [
      'Selected from 5,000+ applicants for the Digital Innovation accelerator program — top 2% of cohort',
      'Built internal project management tool adopted by 3 business units serving 800+ daily active users',
      'Developed automated testing framework that reduced QA cycle time from 3 days to 4 hours',
      'Won "Best Innovation Award" for building an AI-powered code review assistant prototype',
    ],
  },
];

export const projects = [
  {
    title: 'Clear Edge Hauling',
    subtitle: 'Junk Removal & Hauling Services Platform',
    client: 'Clear Edge Hauling, Santa Clara, CA',
    role: 'Full-Stack Developer & Designer',
    tech: ['WordPress', 'PHP', 'JavaScript', 'SEO', 'Google Maps API', 'Responsive Design'],
    description: 'Complete business website for a professional junk removal and hauling company serving Santa Clara County. Built a high-converting landing page with online booking system, service area maps, and SEO-optimized content targeting local search terms. Implemented structured data markup for local business schema, integrated Google Maps for service area visualization, and built a responsive design that drives 60% of traffic from mobile. The site ranks #1 for multiple "junk removal near me" keywords in Santa Clara.',
    metric: '#1 Local SEO',
    color: '#10b981',
    span: 'col-span-2 row-span-2',
    url: 'https://clearedgehauling.com/',
  },
  {
    title: 'Curioh Pets',
    subtitle: 'E-Commerce Pet Products Store',
    client: 'Curioh, United Kingdom',
    role: 'Shopify Developer & E-Commerce Specialist',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Shopify API', 'Conversion Optimization'],
    description: 'Premium Shopify e-commerce store for an innovative pet hair removal product brand based in the UK. Custom theme development with conversion-optimized product pages, persuasive copy, customer review integration, and seamless checkout flow. Built mobile-first responsive design with animated product showcases, trust badges, and social proof elements. Implemented abandoned cart recovery, email marketing integration, and analytics tracking that boosted conversion rates by 34%.',
    metric: '34% CVR Lift',
    color: '#f59e0b',
    span: 'col-span-2 row-span-1',
    url: 'https://curiohpets.com/',
  },
  {
    title: 'Tandoore',
    subtitle: 'Restaurant & Bar Website with Online Ordering',
    client: 'Tandoore Restaurant, Germany',
    role: 'Web Developer & UI Designer',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'GSAP', 'Multi-language'],
    description: 'Elegant restaurant website for Tandoore — a premium Indian restaurant and bar in Germany. Built a cinematic, immersive design with full-screen imagery, smooth scroll animations, and a reservation system. Implemented multi-language support (English/German), online food ordering via WooCommerce, digital menu with categories and dietary filters, and Google Business integration. The sophisticated dark theme with warm lighting photography creates a luxurious brand experience that increased table reservations by 45%.',
    metric: '45% More Bookings',
    color: '#0ea5e9',
    span: 'col-span-2 row-span-1',
    url: 'https://tandoore.de/',
  },
  {
    title: 'SquadBurn',
    subtitle: 'Fitness & Activewear Brand Launch',
    client: 'SquadBurn, International',
    role: 'Brand Designer & Full-Stack Developer',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shopify', 'Figma'],
    description: 'High-impact launch website for SquadBurn — an activewear and fitness brand with a bold, cinematic identity. Designed and built a pre-launch landing page with early access registration, animated hero sections with video backgrounds, email capture with 28% opt-in rate, and a countdown timer. The dark, high-energy design with dynamic typography conveys premium athletic branding. Built the complete brand identity including logo concepts, color palette, and marketing collateral. Early member waitlist reached 2,500+ signups before launch.',
    metric: '2.5K+ Waitlist',
    color: '#8b5cf6',
    span: 'col-span-2 row-span-1',
    url: 'https://squadburn.com/',
  },
];

export const education = [
  {
    degree: 'B.Tech Information Technology',
    school: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
    year: '2019',
    details: 'ACM ICPC Regionalist | Research Paper Published in IEEE | CGPA: 8.8/10',
  },
  {
    degree: 'Senior Secondary (XII) — Science',
    school: 'New Public School, Lucknow',
    year: '2015',
    details: 'CBSE Board | Physics, Chemistry, Mathematics & Computer Science | 89.4%',
  },
  {
    degree: 'Secondary (X)',
    school: 'New Public School, Lucknow',
    year: '2013',
    details: 'CBSE Board | School topper in Computer Applications | 92.6%',
  },
];

export const awards = [
  { title: '100% Client Retention Rate', detail: 'Every single client has returned or referred — zero churn across 40+ projects' },
  { title: 'Freshworks Engineering Excellence', detail: 'For architecting the real-time collaboration engine serving 50K concurrent users' },
  { title: '#1 Local SEO Rankings', detail: 'Clear Edge Hauling ranks #1 for multiple "junk removal" keywords in Santa Clara County' },
  { title: 'E-Commerce Revenue Growth', detail: '34% average conversion rate lift across client stores including Curioh Pets UK' },
];

export const certifications = [
  'AWS Solutions Architect — Professional, 2023',
  'Google Cloud Professional Cloud Architect, 2022',
  'Kubernetes Certified Administrator (CKA), 2022',
  'Meta Full-Stack Developer Specialization — Coursera, 2021',
];

export const testimonials = [
  {
    quote: "Vivek didn't just build what we asked — he identified problems we didn't know we had and fixed them. Our platform revenue jumped 340% after his rebuild.",
    author: 'Rahul Mehta',
    role: 'CEO, CreditMate · Fintech',
  },
  {
    quote: "We had 3 agencies fail on this project before Vivek. He shipped the entire platform in 6 weeks — on budget, with features we didn't even think were possible.",
    author: 'Sarah Chen',
    role: 'VP Product, TalentBridge · HR Tech',
  },
  {
    quote: "The analytics platform Vivek built generates more actionable insights than tools costing 10x more. Our clients love it.",
    author: 'Amit Sharma',
    role: 'Founder, DataPulse · Analytics',
  },
  {
    quote: "I've worked with dozens of developers. Vivek is the only one who thinks like a business owner. Every technical decision he makes is tied to ROI.",
    author: 'Priya Kapoor',
    role: 'CTO, StyleKart · E-Commerce',
  },
];


export const youtube = {
  channel: 'Vivek Raj Dev',
  handle: '@VivekRajDev',
  subscribers: '12K',
  videos: '85+',
  url: 'https://www.youtube.com/@VivekRajDev',
};

export const processSteps = [
  { step: 1, title: 'Deep Dive', description: 'Understand the real problem — not just symptoms', icon: 'Search' },
  { step: 2, title: 'Architect', description: 'Design systems that scale and generate revenue', icon: 'Palette' },
  { step: 3, title: 'Build & Ship', description: 'Clean, tested code with CI/CD from day one', icon: 'Code2' },
  { step: 4, title: 'Validate', description: 'Real user testing, performance benchmarks, security audit', icon: 'TestTube2' },
  { step: 5, title: 'Launch & Grow', description: 'Deploy, monitor, iterate — your success is my KPI', icon: 'Rocket' },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'per project',
    description: 'Perfect for MVPs, landing pages, and proof-of-concept builds',
    features: [
      'Full-stack web application',
      'Up to 8 pages / screens',
      'Responsive design (mobile + desktop)',
      'Database setup & REST API',
      'Deployment to AWS / Vercel',
      'CI/CD pipeline configuration',
      '30 days post-launch support',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$8,000',
    period: 'per project',
    description: 'Full-featured platforms for businesses ready to scale',
    features: [
      'Complex full-stack application',
      'Unlimited pages & features',
      'Custom UI/UX design in Figma',
      'Advanced API & third-party integrations',
      'Real-time features (WebSocket / SSE)',
      'Payment gateway integration',
      'Admin dashboard & analytics',
      'Performance optimization & caching',
      '90 days post-launch support',
    ],
    highlighted: true,
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: '$20,000+',
    period: 'custom scope',
    description: 'Enterprise-grade systems for mission-critical, complex needs',
    features: [
      'Microservices / event-driven architecture',
      'Multi-region cloud deployment',
      'Advanced security & compliance (SOC2, HIPAA)',
      'AI/ML feature integration',
      'Real-time analytics pipeline',
      'Custom DevOps & Infrastructure-as-Code',
      'Load testing & performance SLA',
      'Dedicated technical lead',
      '6 months support & SLA guarantee',
    ],
    highlighted: false,
    cta: 'Contact Me',
  },
];

export const caseStudy = {
  project: 'Clear Edge Hauling',
  client: 'Clear Edge Hauling, Santa Clara',
  role: 'Full-Stack Developer & SEO Specialist',
  problem: 'A local junk removal business in Santa Clara County had zero online presence and relied entirely on word-of-mouth referrals. Competitors dominated Google search results while the client was invisible online, losing thousands in potential leads every month.',
  solution: 'Built a complete digital presence from scratch — SEO-optimized website with local business schema markup, Google Maps integration, online booking system, and mobile-first responsive design. Implemented location-based landing pages targeting 8+ cities in Santa Clara County. Created a fast, professional website that builds instant trust with upfront pricing and eco-friendly messaging.',
  challenges: [
    'Achieved #1 Google ranking for "junk removal Santa Clara" within 3 months of launch',
    'Built mobile-optimized booking flow that converts 60% of mobile visitors into inquiry calls',
    'Implemented structured data markup driving featured snippets and Google Business integration',
    'Designed service area maps and location pages targeting 8+ cities across Santa Clara County',
  ],
  results: [
    { label: 'Google Rank', value: '#1' },
    { label: 'Lead Increase', value: '340%' },
    { label: 'Mobile Traffic', value: '60%' },
    { label: 'Load Time', value: '<1.5s' },
  ],
};

export const clientResults = [
  { client: 'Clear Edge Hauling', metric: '#1', label: 'Google Ranking', detail: 'Local SEO domination in Santa Clara' },
  { client: 'Curioh Pets', metric: '34%', label: 'CVR Lift', detail: 'Shopify e-commerce optimization' },
  { client: 'Tandoore', metric: '45%', label: 'More Bookings', detail: 'Restaurant reservation increase' },
  { client: 'SquadBurn', metric: '2.5K+', label: 'Waitlist Signups', detail: 'Pre-launch brand campaign' },
  { client: 'Freshworks', metric: '34%', label: 'Faster Resolution', detail: 'Freshdesk Messaging redesign' },
  { client: 'Zoho CRM', metric: '78%', label: 'Query Speed Up', detail: 'Elasticsearch implementation' },
];
