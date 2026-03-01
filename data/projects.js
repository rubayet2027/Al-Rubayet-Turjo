export const projectsData = [
  {
    slug: 'multi-role-contest-platform',
    title: 'Multi-Role Contest Platform',
    tagline: 'Role-based judging, secure payments, real-time leaderboards',
    description:
      'A full-featured contest management system with multi-role access (Admin, Judge, Participant), Stripe payments, live leaderboards, and automated scoring.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'WebSockets', 'Tailwind CSS'],
    image: '/projects/contest-platform.jpg',
    problem:
      'Organizing coding/design contests manually is error-prone, lacks real-time feedback, and has no standardized judging workflow or secure payment integration.',
    solution:
      'Built an end-to-end platform with role-based dashboards, automated scoring pipelines, Stripe payment integration for entry fees, and WebSocket-powered live leaderboards.',
    features: [
      'Multi-role dashboards (Admin, Judge, Participant)',
      'Stripe payment integration with webhooks',
      'Real-time leaderboard with WebSocket updates',
      'Automated scoring engine with custom rubrics',
      'Contest creation wizard with scheduling',
    ],
    challenges: 'Handling concurrent submissions with fair timestamps, preventing race conditions in scoring, and ensuring idempotent Stripe webhook processing.',
    future: 'Add AI-based plagiarism detection, team-based contests, and multi-language code execution sandbox.',
    liveUrl: '#',
    githubUrl: 'https://github.com/rubayet2027',
  },
  {
    slug: 'ai-social-media-automation',
    title: 'AI Social Media Automation System',
    tagline: 'AI-generated content, scheduling, multi-platform posting',
    description:
      'An intelligent automation pipeline that generates, schedules, and publishes social media content across platforms using OpenAI & Gemini APIs.',
    tech: ['Next.js', 'OpenAI API', 'Gemini API', 'n8n', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/ai-automation.jpg',
    problem:
      'Content creators and small businesses spend hours crafting, scheduling, and posting social media content manually — leading to inconsistency and burnout.',
    solution:
      'Created an AI-driven pipeline that generates platform-optimized content, auto-schedules posts, and publishes to Instagram, Twitter/X, LinkedIn, and Facebook — cutting content production time by 80%.',
    features: [
      'AI content generation with tone & style control',
      'Multi-platform scheduling dashboard',
      'n8n workflow orchestration for posting',
      'Analytics dashboard with engagement tracking',
      'Content calendar with drag-and-drop editing',
    ],
    challenges: 'Rate limiting across multiple social media APIs, maintaining content quality through prompt engineering, and handling OAuth token refresh flows.',
    future: 'Add video content generation, A/B testing for posts, and AI-powered engagement reply bot.',
    liveUrl: '#',
    githubUrl: 'https://github.com/rubayet2027',
  },
  {
    slug: 'saas-expense-tracker',
    title: 'SaaS Expense Tracker Dashboard',
    tagline: 'Real-time analytics, budgeting, role-based access',
    description:
      'A SaaS expense management tool with interactive dashboards, budget alerts, team roles, and CSV/PDF export capabilities.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Chart.js', 'Tailwind CSS'],
    image: '/projects/expense-tracker.jpg',
    problem:
      'Small teams lack affordable, intuitive tools for tracking shared expenses, setting budgets, and generating financial reports — most solutions are bloated and expensive.',
    solution:
      'Built a lightweight SaaS dashboard with real-time expense tracking, budget alerts, team member roles, and one-click report export in CSV and PDF formats.',
    features: [
      'Interactive charts with Chart.js (pie, bar, line)',
      'Role-based access (Owner, Manager, Viewer)',
      'Budget alerts with email & in-app notifications',
      'CSV / PDF report export',
      'Recurring expense automation',
    ],
    challenges: 'Optimizing complex SQL aggregation queries for real-time dashboards and implementing row-level security with Prisma middleware.',
    future: 'Add receipt OCR scanning, bank account integration, and AI-powered spend predictions.',
    liveUrl: '#',
    githubUrl: 'https://github.com/rubayet2027',
  },
];
