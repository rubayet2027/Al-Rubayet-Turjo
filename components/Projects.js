'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

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

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

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
              className="group glass-card glass-card-hover overflow-hidden"
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

                <div className="flex flex-wrap gap-1.5 mb-5">
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

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  View Details
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
