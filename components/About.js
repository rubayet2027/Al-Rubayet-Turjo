'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p variants={fadeUp} custom={0} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-accent font-semibold mb-2 tracking-wide">
          About Me
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 sm:mb-10">
          Crafting Digital Experiences<br className="hidden md:block" /> That Scale.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-4 sm:space-y-5 text-slate-500 dark:text-white/60 leading-relaxed text-[0.938rem] sm:text-base md:text-lg">
            <motion.p variants={fadeUp} custom={2} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              I&apos;m <strong className="text-slate-900 dark:text-white">Al Rubayet Turjo</strong> (Zero) — a passionate
              Full Stack Web Developer &amp; AI Automation Specialist currently pursuing my BSc in
              Computer Science &amp; Engineering at <strong className="text-slate-900 dark:text-white">CUET</strong>.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              My journey started with competitive programming in C++, which taught me to think in
              algorithms and optimize for performance. I represented my team at the{' '}
              <strong className="text-slate-900 dark:text-white">BUET Inter-University Hackathon</strong>, building
              real-time solutions under pressure.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              Today I focus on designing clean, scalable system architectures — from secure payment
              gateways and multi-role platforms to AI-driven social-media pipelines. I combine modern
              front-end craft with solid back-end engineering to ship products that are fast,
              reliable, and delightful to use.
            </motion.p>
          </div>

          <div className="space-y-4 sm:space-y-5 text-slate-500 dark:text-white/60 leading-relaxed text-[0.938rem] sm:text-base md:text-lg">
            <motion.p variants={fadeUp} custom={5} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              I specialize in <strong className="text-slate-900 dark:text-white">AI automation</strong>: building
              intelligent workflows that generate, schedule, and post content autonomously —
              saving hours of manual work for content creators and businesses.
            </motion.p>
            <motion.p variants={fadeUp} custom={6} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              My long-term vision is to build a{' '}
              <strong className="text-slate-900 dark:text-white">global tech agency</strong> that ships
              production-grade SaaS platforms and automation systems for clients worldwide.
            </motion.p>
            <motion.p variants={fadeUp} custom={7} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              Outside of programming, I enjoy playing <strong className="text-slate-900 dark:text-white">football</strong> and
              <strong className="text-slate-900 dark:text-white">cricket</strong> with friends, sketching UI concepts on paper, and
              exploring <strong className="text-slate-900 dark:text-white">photography</strong>. I&apos;m also a big fan of
              sci-fi movies and love traveling to new places whenever I get the chance.
            </motion.p>
            <motion.p variants={fadeUp} custom={8} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              When I&apos;m not on the field or behind a camera, you&apos;ll find me exploring new AI breakthroughs,
              mentoring junior developers, or brainstorming product ideas that solve real problems.
            </motion.p>
          </div>
        </div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {[
            { num: '10+', label: 'Projects Delivered' },
            { num: '5+', label: 'Technologies' },
            { num: '2+', label: 'Years Experience' },
            { num: '100%', label: 'Client Satisfaction' },
          ].map(({ num, label }) => (
            <div
              key={label}
              className="glass-card glass-card-hover p-4 sm:p-6 text-center"
            >
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-accent">{num}</p>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-white/50 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
