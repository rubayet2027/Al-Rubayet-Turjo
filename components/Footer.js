'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialLinks from './SocialLinks';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-text text-white py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl font-bold mb-3">
            Zero<span className="text-accent">.</span>
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Full Stack Web Developer &amp; AI Automation Specialist building scalable
            digital products for clients worldwide.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-semibold text-accent mb-4 text-sm tracking-wide uppercase">
            Quick Links
          </p>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-white/60 hover:text-accent text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="font-semibold text-accent mb-4 text-sm tracking-wide uppercase">
            Connect
          </p>
          <SocialLinks />
          <p className="text-white/40 text-xs mt-6">
            rubayetofficial2027@gmail.com
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Al Rubayet Turjo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
