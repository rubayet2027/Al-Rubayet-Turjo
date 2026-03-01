'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialLinks from './SocialLinks';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headingRef.current.children,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
      )
        .fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo(ctaRef.current.children, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .fromTo(imgRef.current, { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1.2 }, '-=1');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 px-5 sm:px-6 md:px-12 lg:px-20 pt-24 pb-10 relative overflow-hidden"
    >
      {/* ── Left: Text ── */}
      <div className="flex-1 max-w-2xl">
        <p className="text-accent font-semibold text-lg mb-4 tracking-wide">
          Hi, I&apos;m Al Rubayet Turjo
        </p>

        <div ref={headingRef}>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-6.5xl font-extrabold text-slate-900 dark:text-white leading-[1.08] mb-5 sm:mb-6">
            <span className="block">Full Stack Developer</span>
            <span className="block">for Modern SaaS</span>
            <span className="block text-accent">&amp; Automation</span>
          </h1>
        </div>

        <p ref={subRef} className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-white/60 max-w-lg mb-6 sm:mb-8 leading-relaxed">
          I build scalable web applications, AI-powered automation systems, and secure payment
          systems for startups and businesses worldwide.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-3 sm:gap-4">
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
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>

        <SocialLinks />
      </div>

      {/* ── Right: Image ── */}
      <div ref={imgRef} className="flex-shrink-0 flex items-center justify-center lg:justify-end">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-110" />
          <img
            src="/profile.png"
            alt="Al Rubayet Turjo — Full Stack Developer"
            className="relative w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain rounded-full border-4 border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(37,99,235,0.35)] backdrop-blur-sm bg-white/5 dark:bg-white/5 hover:shadow-[0_12px_48px_rgba(37,99,235,0.5)] transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
