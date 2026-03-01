import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'Next.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Firebase', 'REST API', 'JWT'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'Firestore'],
  },
  {
    category: 'Automation & APIs',
    items: ['Stripe API', 'n8n', 'Make.com', 'OpenAI API', 'Gemini API'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
];

export default function Skills() {
  const gridRef = useRef(null);
  useEffect(() => {
    gsap.from(gridRef.current.children, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, []);
  return (
    <section id="skills" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="font-display text-4xl font-bold mb-8 text-black">Skills</h2>
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map(({ category, items }) => (
          <div key={category} className="bg-white rounded-xl shadow p-6 hover:scale-105 transition-transform">
            <h3 className="font-bold text-xl text-accent mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map(skill => (
                <li key={skill} className="text-gray-800 font-medium">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
