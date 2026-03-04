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
          Engineering Scalable<br className="hidden md:block" /> Digital Products.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-4 sm:space-y-5 text-slate-500 dark:text-white/60 leading-relaxed text-[0.938rem] sm:text-base md:text-lg">
            <motion.p variants={fadeUp} custom={2} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              I&apos;m <strong className="text-slate-900 dark:text-white">Al Rubayet Turjo</strong> — a Full Stack Developer
              &amp; AI Automation Specialist with hands-on experience shipping production web applications
              using <strong className="text-slate-900 dark:text-white">React, Next.js, Node.js, and MongoDB</strong>.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              I architect end-to-end solutions — from responsive front-end interfaces and RESTful APIs
              to database design, authentication systems, and cloud deployments. Every project is built
              with <strong className="text-slate-900 dark:text-white">performance, security, and scalability</strong> as
              core priorities.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              My technical foundation includes <strong className="text-slate-900 dark:text-white">secure payment
              integration</strong> (Stripe, SSLCommerz), multi-role access control, real-time data
              pipelines, and CI/CD workflows — enabling me to deliver reliable, production-ready
              software on schedule.
            </motion.p>
          </div>

          <div className="space-y-4 sm:space-y-5 text-slate-500 dark:text-white/60 leading-relaxed text-[0.938rem] sm:text-base md:text-lg">
            <motion.p variants={fadeUp} custom={5} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              I specialize in <strong className="text-slate-900 dark:text-white">AI-powered automation</strong> — building
              intelligent systems that generate, schedule, and distribute content autonomously using
              OpenAI &amp; Gemini APIs, cutting manual workloads by up to 80% for businesses.
            </motion.p>
            <motion.p variants={fadeUp} custom={6} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              From SaaS platforms and marketplace apps to agency websites and AI tools, I&apos;ve
              delivered <strong className="text-slate-900 dark:text-white">10+ production applications</strong> for
              clients worldwide — maintaining 100% satisfaction through clean code, transparent
              communication, and post-launch support.
            </motion.p>
            <motion.p variants={fadeUp} custom={7} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              My goal is to build a <strong className="text-slate-900 dark:text-white">global tech agency</strong> that
              ships high-impact SaaS products and automation systems — helping startups and
              enterprises turn ideas into scalable, revenue-generating software.
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
            { num: '10+', label: 'Production Apps Shipped' },
            { num: '15+', label: 'Technologies Mastered' },
            { num: '2+', label: 'Years Building Software' },
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
