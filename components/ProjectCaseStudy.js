'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function ProjectCaseStudy({ project }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-cs-anim]', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted text-lg">Project not found.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen pt-28 pb-20 section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          data-cs-anim
          className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:underline mb-8"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <h1 data-cs-anim className="font-display text-4xl md:text-5xl font-extrabold text-text mb-3">
          {project.title}
        </h1>
        <p data-cs-anim className="text-xl text-muted mb-8">{project.tagline}</p>

        {/* Tech stack */}
        <div data-cs-anim className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent rounded-lg">
              {t}
            </span>
          ))}
        </div>

        {/* Image placeholder */}
        <div
          data-cs-anim
          className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-12"
        >
          <span className="text-accent/40 font-display text-2xl font-bold">Project Screenshot</span>
        </div>

        {/* Description */}
        <div data-cs-anim className="mb-10">
          <h2 className="font-display text-2xl font-bold text-text mb-3">About This Project</h2>
          <p className="text-muted leading-relaxed text-lg">{project.description}</p>
        </div>

        {/* Sections */}
        {[
          { heading: 'Problem Statement', body: project.problem },
          { heading: 'Solution', body: project.solution },
        ].map(({ heading, body }) => (
          <div key={heading} data-cs-anim className="mb-10">
            <h2 className="font-display text-2xl font-bold text-text mb-3">{heading}</h2>
            <p className="text-muted leading-relaxed text-lg">{body}</p>
          </div>
        ))}

        {/* Key Features */}
        <div data-cs-anim className="mb-10">
          <h2 className="font-display text-2xl font-bold text-text mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-muted text-lg leading-relaxed">
                <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div data-cs-anim className="mb-10">
          <h2 className="font-display text-2xl font-bold text-text mb-3">Challenges</h2>
          <p className="text-muted leading-relaxed text-lg">{project.challenges}</p>
        </div>

        {/* Future Improvements */}
        <div data-cs-anim className="mb-12">
          <h2 className="font-display text-2xl font-bold text-text mb-3">Future Improvements</h2>
          <p className="text-muted leading-relaxed text-lg">{project.future}</p>
        </div>

        {/* Links */}
        <div data-cs-anim className="flex flex-wrap gap-4">
          <a
            href={project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-7 py-3.5 font-bold rounded-xl transition-colors ${
              project.liveUrl && project.liveUrl !== '#'
                ? 'bg-accent text-white hover:bg-accent-dark'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {project.liveUrl && project.liveUrl !== '#' ? 'View Live Project' : 'Live Demo Coming Soon'}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 border-2 border-text text-text font-bold rounded-xl hover:bg-text hover:text-white transition-all"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
