import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'C++ Programming Intern',
    company: 'Brainwave Matrix Solution',
    details: ['SaaS dashboards', 'Contest platform with Stripe', 'AI automation systems', 'Secure authentication systems'],
    period: '2025',
  },
  {
    title: 'Freelance Full Stack Developer',
    company: '',
    details: ['SaaS dashboards', 'Contest platform with Stripe', 'AI automation systems', 'Secure authentication systems'],
    period: '2024 – Present',
  },
];

export default function Experience() {
  const timelineRef = useRef(null);
  useEffect(() => {
    gsap.from(timelineRef.current.children, {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 80%',
      },
      x: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);
  return (
    <section id="experience" className="max-w-3xl mx-auto py-24 px-6">
      <h2 className="font-display text-4xl font-bold mb-8 text-black">Experience</h2>
      <div ref={timelineRef} className="relative border-l-4 border-accent pl-8">
        {experiences.map((item, idx) => (
          <div key={idx} className="mb-10">
            <div className="font-bold text-xl text-accent">{item.period}</div>
            <div className="font-display text-2xl text-black font-semibold mt-2">{item.title}</div>
            {item.company && <div className="text-lg text-gray-700">{item.company}</div>}
            <ul className="mt-2 list-disc list-inside text-gray-600">
              {item.details.map(detail => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
