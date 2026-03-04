'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import { projectsData } from '@/data/projects';

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ── Modal ── */
function ProjectModal({ project, onClose }) {
  /* Close on Escape */
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl shadow-black/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-slate-700 dark:text-white transition-colors"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {/* Hero image */}
        <div className="h-48 sm:h-56 w-full bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden rounded-t-2xl">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-accent/40 font-display text-2xl font-bold">{project.title}</span>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-7 space-y-5">
          {/* Title & tagline */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
              {project.title}
            </h3>
            <p className="text-slate-400 dark:text-white/50 text-sm sm:text-base">{project.tagline}</p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs font-semibold bg-accent/15 text-accent rounded-lg">
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">About</h4>
            <p className="text-slate-500 dark:text-white/60 text-sm sm:text-base leading-relaxed">{project.description}</p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Problem</h4>
              <p className="text-slate-500 dark:text-white/60 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="glass-card p-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Solution</h4>
              <p className="text-slate-500 dark:text-white/60 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Key Features</h4>
            <ul className="space-y-1.5">
              {project.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-slate-500 dark:text-white/60 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Challenges</h4>
            <p className="text-slate-500 dark:text-white/60 text-sm leading-relaxed">{project.challenges}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                project.liveUrl && project.liveUrl !== '#'
                  ? 'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25'
                  : 'glass text-slate-400 dark:text-white/40 cursor-not-allowed'
              }`}
            >
              {project.liveUrl && project.liveUrl !== '#' ? 'Live Demo' : 'Demo Coming Soon'}
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-bold rounded-xl border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Projects Section ── */
export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-2 tracking-wide"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-10 sm:mb-12"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={cardVariants}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              onClick={() => setActiveProject(project)}
              className="group glass-card glass-card-hover overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-accent/60 font-display text-lg font-bold">
                    {project.title}
                  </span>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 dark:text-white/50 mb-4">{project.tagline}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-medium bg-accent/15 text-accent rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium bg-black/5 dark:bg-white/10 text-slate-400 dark:text-white/50 rounded-md">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
