export const projectsData = [
  {
    slug: 'creatix',
    title: 'Creatix',
    tagline: 'Discover. Compete. Win — Creative contest platform',
    description:
      'A multi-role creative contest platform where creators host competitions across 18+ categories — design, photography, writing, and more. Participants submit work, compete for prizes, and climb leaderboards.',
    tech: ['React.js', 'Firebase', 'Stripe', 'Tailwind CSS', 'Node.js'],
    image: '/Creatix.png',
    problem:
      'Creative professionals and hobbyists lacked a unified platform to discover, enter, and manage creative contests with secure payments, fair judging, and real-time competition tracking.',
    solution:
      'Built a full-featured contest platform with multi-role access (Admin, Creator, Participant), Stripe-powered entry fees and prize pools, leaderboards, and a winner hall of fame — all backed by Firebase for real-time data and authentication.',
    features: [
      'Multi-role dashboards (Admin, Creator, Participant)',
      'Stripe payment integration for entry fees & prizes',
      'Real-time leaderboards and top winners hall of fame',
      '18+ contest categories with filtered browsing',
      'Firebase Authentication with social login',
    ],
    challenges: 'Implementing secure Stripe payment flows for entry fees and prize distribution while maintaining real-time leaderboard accuracy across concurrent submissions.',
    future: 'Add AI-based submission analysis, team-based contests, and multi-round elimination brackets.',
    liveUrl: 'https://creatix-cdeb7.web.app/',
    githubUrl: 'https://github.com/rubayet2027',
  },
  {
    slug: 'eduxolve',
    title: 'Eduxolve',
    tagline: 'AI-powered supplementary learning for university courses',
    description:
      'An AI-driven learning platform that organizes university course materials, provides intelligent semantic search, and generates validated educational content — helping students learn smarter.',
    tech: ['React.js', 'Firebase', 'OpenAI API', 'Tailwind CSS', 'Node.js'],
    image: '/Eduxolve.png',
    problem:
      'University students struggle with scattered course materials, inefficient study methods, and limited access to supplementary learning resources tailored to their curriculum.',
    solution:
      'Created an AI-powered platform with organized course materials, semantic search for instant answers, AI-generated validated content, and an interactive chat assistant — all accessible via Google sign-in.',
    features: [
      'AI-powered semantic search across course materials',
      'AI-generated validated educational content',
      'Interactive AI chat assistant for real-time help',
      'Organized dashboard for course materials',
      'Google & email authentication',
    ],
    challenges: 'Ensuring AI-generated content accuracy through validation pipelines and implementing efficient semantic search across large volumes of academic material.',
    future: 'Add collaborative study groups, AI-powered quiz generation, and integration with university LMS platforms.',
    liveUrl: 'https://eduxolve.web.app/',
    githubUrl: 'https://github.com/rubayet2027',
  },
  {
    slug: 'xenzolve',
    title: 'Xenzolve',
    tagline: 'The last tech agency you\'ll need to hire',
    description:
      'A professional tech agency website showcasing full-stack development, UI/UX design, AI automation, and bot development services — serving 100+ clients with 500+ completed projects.',
    tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
    image: '/Xenzolve.png',
    problem:
      'Tech agencies need a modern, high-converting web presence that effectively communicates their services, builds trust with testimonials, and streamlines client onboarding.',
    solution:
      'Designed and developed a sleek agency landing page with animated sections, service showcases, client testimonials, a 4-step process breakdown, and an integrated contact system.',
    features: [
      'Full service showcase (Web Dev, AI, Bots, UI/UX)',
      'Client testimonials and project statistics',
      '4-step engagement process visualization',
      'Industry verticals and FAQ sections',
      'Integrated contact form with WhatsApp link',
    ],
    challenges: 'Creating smooth scroll-based animations while maintaining fast load times, and designing an information architecture that clearly presents diverse service offerings.',
    future: 'Add client portal for project tracking, live chat support, and case study deep-dives for each service category.',
    liveUrl: 'https://xenzolve.web.app/',
    githubUrl: 'https://github.com/rubayet2027',
  },
  {
    slug: 'krishilink',
    title: 'KrishiLink',
    tagline: 'Connecting farmers directly with buyers — no middlemen',
    description:
      'An agricultural marketplace platform that connects 10K+ farmers directly with buyers, eliminating intermediaries to ensure fair pricing and transparent crop trading across 100+ districts.',
    tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Node.js', 'Express.js'],
    image: '/KrishiLink.png',
    problem:
      'Farmers in Bangladesh face exploitation from intermediaries, leading to unfair pricing and limited market access. Buyers struggle to find verified, quality crop sources directly.',
    solution:
      'Built a direct farmer-to-buyer marketplace with verified crop listings, fair pricing tools, secure communication, and growth support — serving 10K+ farmers across 100+ districts with 25K+ successful deals.',
    features: [
      'Verified crop listings with detailed information',
      'Direct farmer-to-buyer connection system',
      'Fair pricing tools eliminating middlemen',
      'Browse crops with category and location filters',
      'User registration & profile management',
    ],
    challenges: 'Building trust between anonymous farmers and buyers, implementing a verification system for crop listings, and optimizing for low-bandwidth rural areas.',
    future: 'Add real-time market price tracking, logistics integration for crop delivery, and mobile app for field use.',
    liveUrl: 'https://krishilink-56c13.web.app/',
    githubUrl: 'https://github.com/rubayet2027',
  },
  {
    slug: 'green-earth',
    title: 'Green Earth',
    tagline: 'Plant a tree, grow a future — environmental campaign',
    description:
      'A tree plantation e-commerce and environmental campaign platform with 30+ tree species across 10 categories, a donation system, and an impact tracker — supporting 500K+ trees planted worldwide.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Netlify', 'CSS3'],
    image: '/GreenEarth.png',
    problem:
      'Climate change initiatives lack engaging digital platforms that make it easy for individuals to contribute to reforestation efforts and track the environmental impact of their donations.',
    solution:
      'Created an interactive tree plantation platform with a categorized catalog of 30+ tree species, shopping cart functionality, donation integration, and an impact dashboard showing 500K+ trees planted across 30+ countries.',
    features: [
      'Catalog of 30+ tree species across 10 categories',
      'Shopping cart with add-to-cart functionality',
      'Environmental impact dashboard (500K+ trees, 120+ communities)',
      'Donation system for tree planting campaigns',
      'Responsive design with smooth animations',
    ],
    challenges: 'Designing an intuitive browsing experience for a large catalog of tree species while maintaining fast page loads with optimized images.',
    future: 'Add GPS-tracked tree planting verification, carbon offset calculator, and corporate sponsorship portal.',
    liveUrl: 'https://bucolic-griffin-f0e39f.netlify.app/',
    githubUrl: 'https://github.com/rubayet2027',
  },
  {
    slug: 'skill-swap',
    title: 'Skill Swap',
    tagline: 'Learn a skill. Teach a skill — peer exchange platform',
    description:
      'A skill exchange marketplace where users can discover local and remote skill providers, book sessions, and offer their own expertise — from guitar lessons to photography to coding.',
    tech: ['React.js', 'Firebase', 'Vite', 'Tailwind CSS', 'Node.js'],
    image: '/SkillSwap.png',
    problem:
      'Finding affordable, personalized skill learning opportunities is difficult, and talented individuals lack a platform to monetize their expertise through peer-to-peer teaching.',
    solution:
      'Built a two-sided marketplace connecting skill providers with learners. Features rated skill listings, provider profiles, booking system, community testimonials, and secure authentication.',
    features: [
      'Skill listings with ratings and pricing',
      'Top-rated provider profiles with contact info',
      'Session booking and management system',
      'Community testimonials and reviews',
      'Firebase Authentication (sign in / sign up)',
    ],
    challenges: 'Creating a fair rating system that balances provider reputation with new provider visibility, and building a seamless booking flow across different skill categories.',
    future: 'Add video call integration for remote sessions, skill verification badges, and AI-powered skill matching recommendations.',
    liveUrl: 'https://skillswap-f70fd.web.app/',
    githubUrl: 'https://github.com/rubayet2027',
  },
  {
    slug: 'apphero',
    title: 'AppHero',
    tagline: 'We build productive apps — app showcase landing page',
    description:
      'A sleek app showcase landing page for AppHero.IO featuring trending app displays with download stats, ratings, and trust metrics — designed to highlight a portfolio of 132+ active apps with 29.6M+ downloads.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Netlify', 'CSS3'],
    image: '/AppHero.png',
    problem:
      'App development companies need a polished, data-driven landing page that builds credibility through real metrics and showcases their app portfolio in an engaging way.',
    solution:
      'Designed a premium landing page with animated trust metrics (29.6M downloads, 906K reviews), trending app grid with download counts and ratings, and dual CTA buttons for Google Play and App Store.',
    features: [
      'Trust metrics dashboard (downloads, reviews, active apps)',
      'Trending apps grid with real-time stats',
      'App ratings and download count display',
      'Dual CTA for Google Play & App Store',
      'Modern responsive design with smooth animations',
    ],
    challenges: 'Presenting large volumes of app data in a visually compelling layout without overwhelming users, and optimizing image-heavy content for fast load times.',
    future: 'Add dynamic app detail pages, user review aggregation, and analytics dashboard for app performance tracking.',
    liveUrl: 'https://sensational-crisp-c277b5.netlify.app/',
    githubUrl: 'https://github.com/rubayet2027',
  },
];
