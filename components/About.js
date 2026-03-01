import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  useEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);
  return (
    <section id="about" ref={aboutRef} className="max-w-4xl mx-auto py-24 px-6">
      <h2 className="font-display text-4xl font-bold mb-6 text-black">About Me</h2>
      <p className="text-lg text-gray-800 leading-relaxed">
        I started programming at a young age, driven by curiosity and a love for problem-solving. My journey includes competitive programming, where I became a BUET Hackathon Top 20 Finalist. I’m passionate about system architecture, AI, and automation, with a vision to build a global tech agency. My work ethic is rooted in discipline, creativity, and a relentless drive to deliver scalable solutions for international clients.
      </p>
      <ul className="mt-6 text-gray-700 list-disc list-inside">
        <li>Competitive programming background</li>
        <li>BUET Hackathon Top 20 Finalist</li>
        <li>Passionate about system architecture</li>
        <li>AI & automation enthusiast</li>
        <li>Vision to build a global tech agency</li>
        <li>Disciplined, creative, and reliable</li>
      </ul>
    </section>
  );
}
