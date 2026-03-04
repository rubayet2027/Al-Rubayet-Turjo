'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-2 tracking-wide"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-10 sm:mb-12"
        >
          Professional Journey
        </motion.h2>

        <div className="relative border-l-2 border-accent/30 pl-6 sm:pl-8 ml-3 sm:ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={slideIn}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="relative mb-10 sm:mb-12 last:mb-0"
            >
              <span className="absolute -left-[2.05rem] sm:-left-[2.6rem] top-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full border-[3px] sm:border-4 border-white dark:border-[#0f172a] shadow shadow-accent/50" />

              <div className="glass-card p-4 sm:p-6">
                <span className="inline-block px-3 py-1 text-xs font-bold text-accent bg-accent/15 rounded-full mb-3">
                  {exp.period}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                <p className="text-slate-400 dark:text-white/50 font-medium mt-1 mb-3 sm:mb-4 text-sm sm:text-base">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 dark:text-white/50 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
