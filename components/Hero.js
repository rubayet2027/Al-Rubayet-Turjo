'use client';

import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-14 px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 pb-20 sm:pb-28 relative overflow-hidden"
    >
      {/* ── Left: Text ── */}
      <motion.div
        className="flex-1 max-w-2xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={fadeUp} className="text-accent font-semibold text-base sm:text-lg mb-3 sm:mb-4 tracking-wide">
          Hi, I&apos;m Al Rubayet Turjo
        </motion.p>

        <motion.h1 variants={fadeUp} className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl font-extrabold text-slate-900 dark:text-white leading-[1.08] mb-4 sm:mb-6">
          <span className="block">Full Stack Developer</span>
          <span className="block">for Modern SaaS</span>
          <span className="block text-accent">&amp; Automation</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-white/60 max-w-lg mb-6 sm:mb-8 leading-relaxed">
          I build scalable web applications, AI-powered automation systems, and secure payment
          systems for startups and businesses worldwide.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href="#projects"
            className="px-5 sm:px-7 py-3 sm:py-3.5 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 sm:px-7 py-3 sm:py-3.5 bg-slate-900 dark:bg-white/10 text-white dark:text-white font-bold rounded-xl border border-slate-800 dark:border-white/20 hover:bg-slate-800 dark:hover:bg-white/15 transition-all duration-300 text-sm sm:text-base"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download="Al_Rubayet_Turjo_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={fadeUp}>
          <SocialLinks />
        </motion.div>
      </motion.div>

      {/* ── Right: Image ── */}
      <motion.div
        className="flex-shrink-0 flex items-center justify-center lg:justify-end"
        variants={scaleIn}
        initial="hidden"
        animate="show"
      >
        <div className="relative">
          <div className="absolute inset-[-10%] rounded-full bg-accent/15 dark:bg-accent/10 blur-2xl" />
          <img
            src="/profile.png"
            alt="Al Rubayet Turjo — Full Stack Developer"
            className="relative w-60 sm:w-72 md:w-80 lg:w-96 xl:w-[26rem] h-auto object-contain rounded-full transition-all duration-700"
          />
        </div>
      </motion.div>
    </section>
  );
}
