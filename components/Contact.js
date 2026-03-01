'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-contact-anim]', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated send — replace with actual API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-surface"
    >
      <div className="max-w-5xl mx-auto">
        <p data-contact-anim className="text-accent font-semibold mb-2 tracking-wide">
          Contact
        </p>
        <h2 data-contact-anim className="font-display text-4xl md:text-5xl font-extrabold text-text mb-4">
          Let&apos;s Work Together
        </h2>
        <p data-contact-anim className="text-muted text-lg mb-12 max-w-xl">
          Available for freelance projects worldwide.{' '}
          <strong className="text-text">Replies within 12 hours.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-6">
            {[
              { label: 'Email', value: 'rubayetofficial2027@gmail.com', href: 'mailto:rubayetofficial2027@gmail.com' },
              { label: 'WhatsApp', value: '+880 1633-707780', href: 'https://wa.me/8801633707780' },
              { label: 'Telegram', value: '@rubayet2027', href: 'https://t.me/rubayet2027' },
            ].map((item) => (
              <div key={item.label} data-contact-anim>
                <p className="text-sm font-semibold text-text mb-1">{item.label}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-5" data-contact-anim>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-text mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-text mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-text mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent-dark transition-colors duration-200 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 font-semibold text-sm text-center animate-fade-in">
                ✓ Message sent! I&apos;ll get back to you within 12 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
