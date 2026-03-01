'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  /* ── GSAP fade-in on load ── */
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -30,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  /* ── Glass background on scroll ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Smooth scroll handler ── */
  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav shadow-lg shadow-black/10 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-bold text-accent tracking-tight">
          Zero<span className="text-slate-800 dark:text-white/90">.</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-white/70 hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Theme toggle */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl glass text-slate-600 dark:text-white/70 hover:text-accent transition-all duration-300"
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </li>

          <li>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="ml-2 px-5 py-2.5 bg-accent text-white text-sm font-bold rounded-lg hover:bg-accent-dark transition-colors duration-200 shadow-lg shadow-accent/25"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition text-slate-600 dark:text-white"
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <button
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition text-slate-800 dark:text-white"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-slate-200 dark:border-white/10 animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-base font-semibold text-slate-600 dark:text-white/70 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="px-6 py-2.5 bg-accent text-white font-bold rounded-lg"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
