'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const educationData = [
  {
    degree: 'BSc in Computer Science & Engineering',
    institution: 'Chittagong University of Engineering & Technology (CUET)',
    period: '2023 – Present',
    highlights: [
      'Coursework: Data Structures & Algorithms, OOP, Database Systems, Software Engineering',
      'Active in competitive programming and university tech events',
      'Participated in BUET Inter-University Hackathon',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Chittagong College, Chittagong',
    period: '2020 – 2022',
    highlights: [
      'Focused on Physics, Chemistry, Mathematics & ICT',
      'Developed early interest in programming and problem-solving',
      'Participated in regional science olympiads',
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

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="education"
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
          Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-10 sm:mb-12"
        >
          Academic Background
        </motion.h2>

        <div className="relative border-l-2 border-accent/30 pl-6 sm:pl-8 ml-3 sm:ml-4">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              variants={slideIn}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="relative mb-10 sm:mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[2.05rem] sm:-left-[2.6rem] top-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full border-[3px] sm:border-4 border-white dark:border-[#0f172a] shadow shadow-accent/50" />

              <div className="glass-card p-4 sm:p-6">
                <span className="inline-block px-3 py-1 text-xs font-bold text-accent bg-accent/15 rounded-full mb-3">
                  {edu.period}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-slate-400 dark:text-white/50 font-medium mt-1 mb-3 sm:mb-4 text-sm sm:text-base">{edu.institution}</p>
                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 dark:text-white/50 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {h}
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
