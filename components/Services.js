'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLayout, FiServer, FiLayers, FiPackage, FiSmartphone, FiCpu } from 'react-icons/fi';

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

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent font-semibold mb-2 tracking-wide"
        >
          Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
        >
          What I Do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-500 dark:text-white/60 text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl"
        >
          From frontend polish to backend muscle — I deliver end-to-end solutions that help businesses scale.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="glass-card glass-card-hover p-5 sm:p-6 lg:p-7 group"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}15` }}
                >
                  <Icon size={24} style={{ color: service.color }} className="sm:w-7 sm:h-7" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-white/60 text-sm leading-relaxed mb-4 sm:mb-5">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
