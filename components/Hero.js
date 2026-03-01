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

      tl.from(headingRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(ctaRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from(imgRef.current, { y: 60, opacity: 0, scale: 0.95, duration: 1.2 }, '-=1');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 section-padding pt-32 relative"
    >
      {/* ── Left: Text ── */}
      <div className="flex-1 max-w-2xl">
        <p className="text-accent font-semibold text-lg mb-4 tracking-wide">
          Hi, I&apos;m Al Rubayet Turjo
        </p>

        <div ref={headingRef}>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-6.5xl font-extrabold text-slate-900 dark:text-white leading-[1.08] mb-6">
            <span className="block">Full Stack Developer</span>
            <span className="block">for Modern SaaS</span>
            <span className="block text-accent">&amp; Automation</span>
          </h1>
        </div>

        <p ref={subRef} className="text-lg md:text-xl text-slate-500 dark:text-white/60 max-w-lg mb-8 leading-relaxed">
          I build scalable web applications, AI-powered automation systems, and secure payment
          systems for startups and businesses worldwide.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 bg-slate-900 dark:bg-white/10 text-white dark:text-white font-bold rounded-xl border border-slate-800 dark:border-white/20 hover:bg-slate-800 dark:hover:bg-white/15 transition-all duration-300"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 border-2 border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        <SocialLinks />
      </div>

      {/* ── Right: Image ── */}
      <div ref={imgRef} className="flex-1 flex items-center justify-center lg:justify-end">
        <img
          src="/profile.png"
          alt="Al Rubayet Turjo — Full Stack Developer"
          className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:drop-shadow-[0_25px_50px_rgba(37,99,235,0.45)] transition-all duration-700"
        />
      </div>
    </section>
  );
}
