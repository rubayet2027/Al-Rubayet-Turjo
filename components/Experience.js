'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'C++ Programming Intern',
    company: 'Brainwave Matrix Solution',
    period: 'Summer 2024',
    bullets: [
      'Developed performance-critical modules in C++ for data processing pipelines',
      'Optimized algorithms resulting in 40% faster execution on benchmark datasets',
      'Collaborated with senior engineers in code reviews and pair programming sessions',
    ],
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed (Upwork & Direct Clients)',
    period: '2023 – Present',
    bullets: [
      'Built and deployed 10+ production web applications using Next.js, React, Node.js & MongoDB',
      'Developed AI-powered SaaS tools with OpenAI & Gemini APIs for content automation',
      'Integrated secure payment gateways (Stripe, SSLCommerz) and role-based access systems',
      'Maintained 100% client satisfaction with on-time delivery and post-launch support',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-exp-card]', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-accent font-semibold mb-2 tracking-wide">Experience</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-12">
          Professional Journey
        </h2>

        <div className="relative border-l-2 border-accent/30 pl-8 ml-4">
          {experiences.map((exp, i) => (
            <div key={i} data-exp-card className="relative mb-12 last:mb-0">
              <span className="absolute -left-[2.6rem] top-1.5 w-5 h-5 bg-accent rounded-full border-4 border-[#0f172a] shadow shadow-accent/50" />

              <div className="glass-card p-6">
                <span className="inline-block px-3 py-1 text-xs font-bold text-accent bg-accent/15 rounded-full mb-3">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-white/50 font-medium mt-1 mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/50 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
