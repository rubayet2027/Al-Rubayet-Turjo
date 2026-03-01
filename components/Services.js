'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiStripe, SiFirebase,
} from 'react-icons/si';
import { FiLayout, FiServer, FiLayers, FiPackage, FiSmartphone, FiCpu } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FiLayout,
    title: 'Frontend Development',
    description:
      'Pixel-perfect, responsive UIs built with React, Next.js, and Tailwind CSS. Smooth animations, accessibility-first, and blazing-fast performance.',
    highlights: ['React & Next.js', 'Tailwind CSS & Framer Motion', 'Responsive & Accessible'],
    color: '#61DAFB',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description:
      'Robust APIs and server architectures with Node.js, Express, MongoDB, and Firebase. Secure authentication, real-time data, and scalable infrastructure.',
    highlights: ['Node.js & Express', 'MongoDB & Firebase', 'REST APIs & Auth'],
    color: '#339933',
  },
  {
    icon: FiLayers,
    title: 'Full Stack Development',
    description:
      'End-to-end web application development — from database design to deployment. Clean architecture, CI/CD pipelines, and production-ready code.',
    highlights: ['Complete Web Apps', 'Database Design', 'CI/CD & Deployment'],
    color: '#2563EB',
  },
  {
    icon: FiPackage,
    title: 'SaaS Development',
    description:
      'Multi-tenant SaaS platforms with secure payment gateways (Stripe), role-based access, dashboards, analytics, and subscription management.',
    highlights: ['Stripe Payments', 'Multi-tenant Architecture', 'Admin Dashboards'],
    color: '#635BFF',
  },
  {
    icon: FiSmartphone,
    title: 'App Development',
    description:
      'Cross-platform mobile apps with React Native. Native performance, shared codebase, push notifications, and app store deployment for iOS & Android.',
    highlights: ['React Native', 'Cross-Platform', 'iOS & Android'],
    color: '#06B6D4',
  },
  {
    icon: FiCpu,
    title: 'Building Automations',
    description:
      'AI-powered automation workflows using OpenAI, n8n, Zapier, and Python. Content generation, social media scheduling, and business process automation.',
    highlights: ['OpenAI & AI APIs', 'n8n & Zapier Workflows', 'Business Automation'],
    color: '#412991',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-service-card]', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-semibold mb-2 tracking-wide">Services</p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          What I Do
        </h2>
        <p className="text-slate-500 dark:text-white/60 text-lg mb-14 max-w-2xl">
          From frontend polish to backend muscle — I deliver end-to-end solutions that help businesses scale.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-service-card
                className="glass-card glass-card-hover p-7 group"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}15` }}
                >
                  <Icon size={28} style={{ color: service.color }} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-white/60 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-accent/10 text-accent"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
