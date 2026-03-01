import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    year: '2023 – Present',
    degree: 'BSc in Computer Science & Engineering',
    institution: 'Chittagong University of Engineering & Technology (CUET)',
    details: ['Data Structures', 'OOP', 'Database Systems', 'Software Engineering'],
  },
];

export default function Education() {
  const timelineRef = useRef(null);
  useEffect(() => {
    gsap.from(timelineRef.current.children, {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 80%',
      },
      x: -40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);
  return (
    <section id="education" className="max-w-3xl mx-auto py-24 px-6">
      <h2 className="font-display text-4xl font-bold mb-8 text-black">Education</h2>
      <div ref={timelineRef} className="relative border-l-4 border-accent pl-8">
        {timeline.map((item, idx) => (
          <div key={idx} className="mb-10">
            <div className="font-bold text-xl text-accent">{item.year}</div>
            <div className="font-display text-2xl text-black font-semibold mt-2">{item.degree}</div>
            <div className="text-lg text-gray-700">{item.institution}</div>
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
