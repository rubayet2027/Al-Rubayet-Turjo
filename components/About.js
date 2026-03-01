'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-about-anim]', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <p data-about-anim className="text-accent font-semibold mb-2 tracking-wide">
          About Me
        </p>
        <h2 data-about-anim className="font-display text-4xl md:text-5xl font-extrabold text-text mb-10">
          Crafting Digital Experiences<br className="hidden md:block" /> That Scale.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-5 text-muted leading-relaxed text-lg">
            <p data-about-anim>
              I&apos;m <strong className="text-text">Al Rubayet Turjo</strong> (Zero) — a passionate
              Full Stack Web Developer &amp; AI Automation Specialist currently pursuing my BSc in
              Computer Science &amp; Engineering at <strong className="text-text">CUET</strong>.
            </p>
            <p data-about-anim>
              My journey started with competitive programming in C++, which taught me to think in
              algorithms and optimize for performance. I represented my team at the{' '}
              <strong className="text-text">BUET Inter-University Hackathon</strong>, building
              real-time solutions under pressure.
            </p>
            <p data-about-anim>
              Today I focus on designing clean, scalable system architectures — from secure payment
              gateways and multi-role platforms to AI-driven social-media pipelines. I combine modern
              front-end craft with solid back-end engineering to ship products that are fast,
              reliable, and delightful to use.
            </p>
          </div>

          <div className="space-y-5 text-muted leading-relaxed text-lg">
            <p data-about-anim>
              I specialize in <strong className="text-text">AI automation</strong>: building
              intelligent workflows that generate, schedule, and post content autonomously —
              saving hours of manual work for content creators and businesses.
            </p>
            <p data-about-anim>
              My long-term vision is to build a{' '}
              <strong className="text-text">global tech agency</strong> that ships
              production-grade SaaS platforms and automation systems for clients worldwide.
            </p>
            <p data-about-anim>
              Outside of programming, I enjoy playing <strong className="text-text">football</strong> and
              <strong className="text-text">cricket</strong> with friends, sketching UI concepts on paper, and
              exploring <strong className="text-text">photography</strong>. I&apos;m also a big fan of
              sci-fi movies and love traveling to new places whenever I get the chance.
            </p>
            <p data-about-anim>
              When I&apos;m not on the field or behind a camera, you&apos;ll find me exploring new AI breakthroughs,
              mentoring junior developers, or brainstorming product ideas that solve real problems.
            </p>
          </div>
        </div>

        {/* Quick stats */}
        <div data-about-anim className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '10+', label: 'Projects Delivered' },
            { num: '5+', label: 'Technologies' },
            { num: '2+', label: 'Years Experience' },
            { num: '100%', label: 'Client Satisfaction' },
          ].map(({ num, label }) => (
            <div
              key={label}
              className="p-6 bg-surface rounded-2xl border border-gray-100 text-center"
            >
              <p className="font-display text-3xl font-extrabold text-accent">{num}</p>
              <p className="text-sm text-muted mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
