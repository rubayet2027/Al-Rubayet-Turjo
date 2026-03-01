'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-edu-card]',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-accent font-semibold mb-2 tracking-wide">Education</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-10 sm:mb-12">
          Academic Background
        </h2>

        <div className="relative border-l-2 border-accent/30 pl-8 ml-4">
          {educationData.map((edu, i) => (
            <div key={i} data-edu-card className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[2.6rem] top-1.5 w-5 h-5 bg-accent rounded-full border-4 border-white dark:border-[#0f172a] shadow shadow-accent/50" />

              <div className="glass-card p-6">
                <span className="inline-block px-3 py-1 text-xs font-bold text-accent bg-accent/15 rounded-full mb-3">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-slate-400 dark:text-white/50 font-medium mt-1 mb-4">{edu.institution}</p>
                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 dark:text-white/50 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {h}
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
