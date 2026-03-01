'use client';

import { FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const socials = [
  { href: 'https://github.com/rubayet2027', icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/rubayet2027/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://t.me/rubayet2027', icon: FiSend, label: 'Telegram' },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3 mt-8">
      {socials.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-3 rounded-xl glass text-slate-500 dark:text-white/60 hover:text-accent hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
