'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'Auth (JWT / OAuth)', level: 78 },
      { name: 'WebSockets', level: 72 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 75 },
      { name: 'PostgreSQL', level: 72 },
      { name: 'Mongoose ODM', level: 80 },
      { name: 'Prisma ORM', level: 70 },
    ],
  },
  {
    title: 'Automation & APIs',
    skills: [
      { name: 'OpenAI API', level: 82 },
      { name: 'Gemini API', level: 78 },
      { name: 'n8n Workflows', level: 75 },
      { name: 'Zapier', level: 68 },
      { name: 'Social Media APIs', level: 80 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Vercel', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Firebase', level: 72 },
      { name: 'Linux', level: 65 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-skill-card]', {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-semibold mb-2 tracking-wide">Skills</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-12">
          Technologies I Work With
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              data-skill-card
              className="glass-card glass-card-hover p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">{cat.title}</h3>
              <div className="space-y-3">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white/80">{s.name}</span>
                      <span className="text-xs font-semibold text-white/50">{s.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-700"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
