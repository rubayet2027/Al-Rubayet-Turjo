import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useRef(null);
  useEffect(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: 'power2.out',
    });
    ScrollTrigger.create({
      trigger: navRef.current,
      start: 'top top',
      onUpdate: self => {
        navRef.current.classList.toggle('backdrop-blur-md', self.progress > 0.05);
      },
    });
  }, []);
  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur transition-all border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-display text-2xl font-bold text-accent tracking-tight">Zero</span>
        <ul className="hidden md:flex gap-8 font-bold text-lg">
          {navItems.map(item => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-accent transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Open menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </nav>
  );
}
