import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';

const projects = [
  {
    name: 'Multi-Role Contest Platform',
    image: '/contest-platform.jpg',
    description: 'A scalable contest platform with entry fees, admin approval, and withdrawals.',
    slug: 'multi-role-contest-platform',
  },
  {
    name: 'AI Social Media Automation System',
    image: '/ai-social-media.jpg',
    description: 'Automates social media content posting using AI and n8n.',
    slug: 'ai-social-media-automation-system',
  },
  {
    name: 'SaaS Expense Tracker Dashboard',
    image: '/expense-tracker.jpg',
    description: 'Analytics dashboard for tracking expenses, built with React and Firebase.',
    slug: 'saas-expense-tracker-dashboard',
  },
];

export default function Projects() {
  const gridRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    gsap.from(gridRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);
  return (
    <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="font-display text-4xl font-bold mb-8 text-black">Projects</h2>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.slug} className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform">
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <div className="font-bold text-xl text-accent mb-2">{project.name}</div>
            <div className="text-gray-700 mb-4">{project.description}</div>
            <button
              className="px-4 py-2 bg-accent text-white font-bold rounded-lg hover:scale-105 transition-transform"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              View Case Study
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
