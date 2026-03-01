'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-contact-anim]',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:rubayetofficial2027@gmail.com?subject=${subject}&body=${body}`, '_self');
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const contactItems = [
    {
      label: 'Email',
      value: 'rubayetofficial2027@gmail.com',
      href: 'mailto:rubayetofficial2027@gmail.com',
      icon: FiMail,
      color: '#EA4335',
    },
    {
      label: 'WhatsApp',
      value: '+880 1633-707780',
      href: 'https://wa.me/8801633707780',
      icon: FiPhone,
      color: '#25D366',
    },
    {
      label: 'Telegram',
      value: '@rubayet2027',
      href: 'https://t.me/rubayet2027',
      icon: FiSend,
      color: '#0088CC',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-5xl mx-auto">
        <p data-contact-anim className="text-accent font-semibold mb-2 tracking-wide">
          Contact
        </p>
        <h2 data-contact-anim className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p data-contact-anim className="text-slate-400 dark:text-white/50 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl">
          Available for freelance projects worldwide.{' '}
          <strong className="text-slate-900 dark:text-white">Replies within 12 hours.</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Left — Info */}
          <div className="space-y-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-contact-anim
                  className="glass-card glass-card-hover p-5 flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">{item.label}</p>
                    <p className="text-accent font-medium text-sm group-hover:underline">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 space-y-4 sm:space-y-5" data-contact-anim>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl glass-input transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl glass-input transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl glass-input transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent-dark transition-colors duration-200 disabled:opacity-60 shadow-lg shadow-accent/25"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 font-semibold text-sm text-center animate-fade-in">
                ✓ Message sent! I&apos;ll get back to you within 12 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
