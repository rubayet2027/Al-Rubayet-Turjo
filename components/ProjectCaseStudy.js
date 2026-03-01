const projectData = {
  'multi-role-contest-platform': {
    name: 'Multi-Role Contest Platform',
    problem: 'Managing online contests with secure payments and multi-role access is complex for startups.',
    solution: 'Built a scalable platform with entry fees, admin approval, and withdrawals using React, Node.js, MongoDB, Stripe.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    features: ['Entry fees', 'Admin approval', 'Withdrawals'],
    challenges: ['Payment integration', 'Role-based access', 'Scalability'],
    improvements: ['Add real-time analytics', 'Expand contest types'],
    live: 'https://contest-platform.example.com',
    github: 'https://github.com/rubayet2027/contest-platform-client',
  },
  'ai-social-media-automation-system': {
    name: 'AI Social Media Automation System',
    problem: 'Manual social media posting is time-consuming for businesses.',
    solution: 'Automated content posting using Node.js, n8n, and OpenAI API.',
    tech: ['Node.js', 'n8n', 'OpenAI API'],
    features: ['Auto content posting'],
    challenges: ['API rate limits', 'Content quality'],
    improvements: ['Multi-platform support', 'Advanced scheduling'],
    live: 'https://ai-social-media.example.com',
    github: 'https://github.com/rubayet2027/ai-social-media-client',
  },
  'saas-expense-tracker-dashboard': {
    name: 'SaaS Expense Tracker Dashboard',
    problem: 'Tracking expenses and analytics for SaaS businesses is difficult.',
    solution: 'Built an analytics dashboard using React and Firebase.',
    tech: ['React', 'Firebase'],
    features: ['Analytics dashboard'],
    challenges: ['Data visualization', 'Realtime updates'],
    improvements: ['Integrate more payment providers', 'Custom reports'],
    live: 'https://expense-tracker.example.com',
    github: 'https://github.com/rubayet2027/expense-tracker-client',
  },
};

export default function ProjectCaseStudy({ slug }) {
  const data = projectData[slug];
  if (!data) return <div>Project not found.</div>;
  return (
    <section className="max-w-3xl mx-auto py-24 px-6">
      <h1 className="font-display text-4xl font-bold text-accent mb-6">{data.name}</h1>
      <div className="mb-4 text-lg text-gray-800"><strong>Problem:</strong> {data.problem}</div>
      <div className="mb-4 text-lg text-gray-800"><strong>Solution:</strong> {data.solution}</div>
      <div className="mb-4 text-lg text-gray-800"><strong>Tech Stack:</strong> {data.tech.join(', ')}</div>
      <div className="mb-4 text-lg text-gray-800"><strong>Key Features:</strong> {data.features.join(', ')}</div>
      <div className="mb-4 text-lg text-gray-800"><strong>Challenges Faced:</strong> {data.challenges.join(', ')}</div>
      <div className="mb-4 text-lg text-gray-800"><strong>Future Improvements:</strong> {data.improvements.join(', ')}</div>
      <div className="mb-4">
        <a href={data.live} target="_blank" rel="noopener" className="px-4 py-2 bg-accent text-white font-bold rounded-lg mr-4">Live Site</a>
        <a href={data.github} target="_blank" rel="noopener" className="px-4 py-2 border border-accent text-accent font-bold rounded-lg">GitHub</a>
      </div>
    </section>
  );
}
