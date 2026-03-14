export const profile = {
  name: 'Vivek Raj Singh',
  initials: 'VR',
  title: 'Full-Stack Developer & Digital Problem Solver',
  tagline: 'I don\'t just write code — I solve the problems that keep businesses stuck',
  bio: `Results-driven full-stack developer with 6+ years of experience solving complex technical challenges for startups and enterprises across fintech, SaaS, e-commerce, and healthcare. Specializing in React, Node.js, Python, and cloud architecture with a proven track record of rescuing failing projects and turning them into revenue-generating platforms. 40+ projects shipped, $12M+ in cumulative client revenue generated, and a 100% client retention rate. I approach every project as a business problem first, a technical problem second — because great code that doesn't drive results is just expensive text.`,
  email: 'vivekrajsingh.dev@gmail.com',
  phone: '+91 98765 43213',
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
    title: 'DevBoard',
    subtitle: 'Developer Productivity Command Center',
    client: 'Self-Founded SaaS Product',
    role: 'Founder & Sole Developer',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSocket', 'Tailwind CSS'],
    description: 'All-in-one developer dashboard that unifies GitHub, Jira, Slack, and CI/CD pipelines into a single real-time command center. Features AI-powered PR summaries using GPT-4, sprint velocity tracking with predictive analytics, deployment monitoring with instant rollback, and team performance insights. Custom WebSocket engine pushes live updates to 15K+ connected clients simultaneously. Built a plugin marketplace with 45+ community integrations. Grew to $38K MRR within 8 months — entirely organic, zero paid marketing.',
    metric: '15K+ Active Users',
    color: '#0ea5e9',
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'PayFlow',
    subtitle: 'Real-Time Payment Reconciliation Engine',
    client: 'CreditMate (Series B Fintech)',
    role: 'Lead Architect & Developer',
    tech: ['Python', 'FastAPI', 'Apache Kafka', 'PostgreSQL', 'Redis', 'AWS Lambda'],
    description: 'Enterprise-grade payment reconciliation system processing 10M+ transactions daily across 8 payment gateways (Razorpay, Stripe, PayU, etc.). Built event-driven architecture with Kafka streams achieving sub-50ms end-to-end latency. Automated dispute resolution engine reduced manual review workload by 82%. Custom fraud detection model flags suspicious patterns with 96.3% accuracy using ensemble ML. Saved the client $2.4M annually in operational costs and eliminated 99.7% of reconciliation errors.',
    metric: '$2.4M Saved/Year',
    color: '#10b981',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'StorePulse',
    subtitle: 'E-Commerce Analytics & Revenue Optimization',
    client: 'Multiple D2C Brands (12+ Clients)',
    role: 'Full-Stack Developer & Data Engineer',
    tech: ['React', 'Node.js', 'MongoDB', 'Python', 'TensorFlow', 'Shopify API'],
    description: 'Analytics platform connecting to Shopify, WooCommerce, and custom stores providing real-time revenue insights, customer behavior analysis, and AI-driven product recommendations. Built predictive inventory model reducing stockouts by 45% and overstocking by 30%. A/B testing engine increased average conversion rate by 23% across 150+ client stores. Dashboard ingests and processes 50M+ data points daily with sub-second query response time.',
    metric: '23% Avg CVR Lift',
    color: '#f59e0b',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'HireSync',
    subtitle: 'AI-Powered Recruitment & Talent Pipeline',
    client: 'TalentBridge HR (Enterprise SaaS)',
    role: 'Technical Lead & Architect',
    tech: ['Next.js', 'Python', 'OpenAI API', 'PostgreSQL', 'Docker', 'AWS ECS'],
    description: 'End-to-end recruitment platform with AI resume parsing, automated screening workflows, intelligent interview scheduling, and candidate scoring. NLP model trained on 200K+ resumes achieves 91% match accuracy against job descriptions. Reduced average time-to-hire from 45 days to 12 days for enterprise clients. Video interview module features real-time transcription and sentiment analysis. Currently used by 80+ companies managing 500K+ candidate profiles.',
    metric: '73% Faster Hiring',
    color: '#8b5cf6',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'CloudDeploy',
    subtitle: 'One-Click Infrastructure Provisioning Tool',
    client: 'Open Source Project',
    role: 'Creator & Lead Maintainer',
    tech: ['Go', 'Terraform', 'Docker', 'Kubernetes', 'React', 'gRPC'],
    description: 'Open-source CLI and dashboard that lets developers deploy full-stack applications to AWS, GCP, or Azure with a single command. Auto-generates Terraform configurations, sets up CI/CD pipelines (GitHub Actions, GitLab CI), configures monitoring (Prometheus + Grafana), and manages SSL certificates. Active community of 3.2K GitHub stars and 45 contributors. Used by 800+ dev teams to manage 2,500+ deployments monthly. Featured on Hacker News front page, DevOps Weekly, and Console.dev.',
    metric: '3.2K GitHub Stars',
    color: '#ec4899',
    span: 'col-span-2 row-span-1',
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
  { title: 'Hacker News Front Page', detail: 'CloudDeploy featured on HN — 3.2K GitHub stars in 72 hours, 500+ upvotes (2024)' },
  { title: 'Freshworks Engineering Excellence', detail: 'For architecting the real-time collaboration engine serving 50K concurrent users' },
  { title: 'ACM ICPC Regionalist', detail: 'Represented university at ACM ICPC Asia Regional — Top 100 nationally (2018)' },
  { title: 'IEEE Research Publication', detail: '"Optimizing Real-Time Event Processing in Distributed Systems" — IEEE ICCCNT (2019)' },
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

export const fiverrStats = {
  rating: '5.0',
  reviews: '35+',
  responseTime: '1 hour',
  level: 'Top Rated',
};

export const fiverrReviews = [
  { username: 'techstartup_ceo', country: 'US', flag: '🇺🇸', rating: 5, quote: 'Vivek rebuilt our entire SaaS backend in 4 weeks. Revenue went from $8K to $45K/mo within 3 months. Worth every penny.', price: '$5,000–8,000', duration: '4 weeks' },
  { username: 'sarah_fintech', country: 'UK', flag: '🇬🇧', rating: 5, quote: 'The payment reconciliation system he built handles millions of transactions without breaking a sweat. Incredible architecture.', price: '$8,000–12,000', duration: '6 weeks' },
  { username: 'retail_analytics', country: 'AU', flag: '🇦🇺', rating: 5, quote: 'Our e-commerce conversion rate jumped 34% after Vivek optimized our platform. The analytics dashboard alone was worth the investment.', price: '$3,000–5,000', duration: '3 weeks' },
  { username: 'startup_founder42', country: 'US', flag: '🇺🇸', rating: 5, quote: 'Three agencies failed before we found Vivek. He shipped everything in half the time and under budget. Absolute legend.', price: '$6,000–10,000', duration: '5 weeks' },
  { username: 'devops_mike', country: 'DE', flag: '🇩🇪', rating: 5, quote: 'CloudDeploy changed how our entire team works. And the custom enterprise features Vivek built for us? Incredible quality.', price: '$4,000–6,000', duration: '3 weeks' },
  { username: 'healthtech_anna', country: 'CA', flag: '🇨🇦', rating: 5, quote: 'Built our patient management platform from scratch. HIPAA compliant, beautiful UI, scales perfectly. Repeat client for sure.', price: '$7,000–10,000', duration: '6 weeks', repeat: true },
  { username: 'ecom_brand_owner', country: 'IN', flag: '🇮🇳', rating: 5, quote: 'Vivek doesn\'t just write code — he understands business. Our D2C brand revenue went from ₹5L to ₹45L monthly after his work.', price: '$2,000–4,000', duration: '4 weeks' },
  { username: 'enterprise_pm', country: 'SG', flag: '🇸🇬', rating: 5, quote: 'The recruitment platform he built reduced our hiring time by 73%. Our HR team can\'t stop raving about it.', price: '$10,000–15,000', duration: '8 weeks' },
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
  project: 'DevBoard',
  client: 'Self-Founded SaaS',
  role: 'Founder & Sole Developer',
  problem: 'Developer teams waste 2-3 hours daily context-switching between GitHub, Jira, Slack, CI/CD dashboards, and monitoring tools. No single platform unified the developer workflow without being bloated, slow, or prohibitively expensive. Teams with 10+ tools had zero visibility into sprint health.',
  solution: 'Built DevBoard — a real-time command center that aggregates all developer tools into one unified, lightning-fast dashboard. Custom WebSocket engine for live updates, AI-powered PR summaries via GPT-4, sprint analytics with predictive velocity, and a plugin marketplace for extensibility. Designed for speed: full UI loads in <800ms, updates stream in <50ms.',
  challenges: [
    'Built custom WebSocket infrastructure handling 15K+ concurrent connections on $50/mo cloud spend',
    'Designed extensible plugin architecture — 45+ community integrations without compromising core performance',
    'Achieved sub-second full-page load with server-side rendering, edge caching, and incremental static regeneration',
    'Grew to $38K MRR organically — zero paid marketing, purely developer community word-of-mouth and HN visibility',
  ],
  results: [
    { label: 'Active Users', value: '15K+' },
    { label: 'MRR', value: '$38K' },
    { label: 'Load Time', value: '<800ms' },
    { label: 'Uptime', value: '99.99%' },
  ],
};

export const clientResults = [
  { client: 'CreditMate', metric: '340%', label: 'Revenue Increase', detail: 'After full platform rebuild' },
  { client: 'TalentBridge', metric: '73%', label: 'Faster Hiring', detail: 'AI recruitment pipeline' },
  { client: 'StyleKart', metric: '34%', label: 'CVR Lift', detail: 'E-commerce optimization' },
  { client: 'DevBoard', metric: '$38K', label: 'Monthly Revenue', detail: 'From zero to MRR in 8 months' },
  { client: 'DataPulse', metric: '10M+', label: 'Events / Day', detail: 'Real-time analytics engine' },
  { client: 'HealthTrack', metric: '99.99%', label: 'Uptime', detail: 'Mission-critical healthcare SaaS' },
];
