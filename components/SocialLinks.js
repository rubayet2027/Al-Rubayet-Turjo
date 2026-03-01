import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from '@react-icons/all-files/fa';

const links = [
  { href: 'https://github.com/rubayet2027', icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/alrubayet', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://facebook.com/alrubayet', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://twitter.com/alrubayet', icon: FaTwitter, label: 'Twitter' },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={label}
          className="p-3 rounded-full bg-white shadow hover:bg-accent hover:text-white transition-colors duration-200"
        >
          <Icon size={28} />
        </a>
      ))}
    </div>
  );
}
