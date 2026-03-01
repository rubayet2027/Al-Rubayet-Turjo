import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    gsap.from(textRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
    gsap.from(imgRef.current, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: 'power3.out',
    });
  }, []);
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-24 bg-background">
      <div ref={textRef} className="flex-1 flex flex-col gap-6">
        <span className="text-accent font-bold text-lg">Hi, I’m Al Rubayet Turjo</span>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-black leading-tight">
          Full Stack Developer for Modern SaaS & Automation
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-xl">
          I build scalable web applications, AI-powered automation systems, and secure payment systems for startups and businesses.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#projects" className="px-6 py-3 bg-accent text-white font-bold rounded-lg shadow hover:scale-105 transition-transform">View Projects</a>
          <a href="#contact" className="px-6 py-3 bg-black text-white font-bold rounded-lg shadow hover:bg-accent transition-colors">Hire Me</a>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="px-6 py-3 border border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-colors">Download Resume</a>
        </div>
      </div>
      <div ref={imgRef} className="flex-1 flex items-center justify-center">
        <img src="/profile.jpg" alt="Al Rubayet Turjo" className="w-72 h-72 object-cover rounded-2xl grayscale shadow-lg" />
      </div>
    </section>
  );
}
