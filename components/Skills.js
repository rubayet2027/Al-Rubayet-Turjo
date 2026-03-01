'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiMysql, SiPostgresql,
  SiOpenai, SiZapier, SiStripe, SiPython,
  SiGit, SiGithub, SiVercel, SiPostman, SiLinux, SiFigma, SiNetlify, SiVscodium,
} from 'react-icons/si';
import { TbAutomation } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger);

const stacks = [
  {
    title: 'Frontend Stack',
    icon: '🎨',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    ],
  },
  {
    title: 'Backend Stack',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Automation Stack',
    icon: '🤖',
    skills: [
      { name: 'OpenAI API', icon: SiOpenai, color: '#412991' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'n8n', icon: TbAutomation, color: '#EA4B71' },
      { name: 'Zapier', icon: SiZapier, color: '#FF4A00' },
      { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'VS Code', icon: SiVscodium, color: '#007ACC' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-skill-card]',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
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
      id="skills"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-semibold mb-2 tracking-wide">Skills</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-10 sm:mb-14">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {stacks.map((stack) => (
            <div
              key={stack.title}
              data-skill-card
              className="glass-card glass-card-hover p-4 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 sm:mb-5 flex items-center gap-2">
                <span className="text-xl">{stack.icon}</span>
                {stack.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                {stack.skills.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.name}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 group"
                    >
                      <Icon
                        size={20}
                        style={{ color: s.color }}
                        className="shrink-0 group-hover:scale-110 transition-transform duration-200"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-white/80 truncate">
                        {s.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
