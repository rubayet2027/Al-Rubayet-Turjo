import { useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Contact() {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    gsap.fromTo(
      formRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 0.5, onComplete: () => {
        gsap.fromTo(
          '.success-message',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      }}
    );
  };
  return (
    <section id="contact" className="max-w-2xl mx-auto py-24 px-6">
      <h2 className="font-display text-4xl font-bold mb-8 text-black">Contact</h2>
      <div className="mb-6 text-lg text-gray-700">
        <div>Email: <a href="mailto:alrubayet@gmail.com" className="text-accent font-bold">alrubayet@gmail.com</a></div>
        <div>Phone: <a href="tel:+8801234567890" className="text-accent font-bold">+8801234567890</a></div>
        <div>WhatsApp: <a href="https://wa.me/8801234567890" target="_blank" rel="noopener" className="text-accent font-bold">+8801234567890</a></div>
        <div className="mt-2 text-gray-600">Available for freelance projects worldwide. Replies within 12 hours.</div>
      </div>
      <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required className="border rounded-lg px-4 py-3" />
        <input type="email" name="email" placeholder="Your Email" required className="border rounded-lg px-4 py-3" />
        <textarea name="message" placeholder="Your Message" required className="border rounded-lg px-4 py-3" rows={5}></textarea>
        <button type="submit" className="px-6 py-3 bg-accent text-white font-bold rounded-lg hover:scale-105 transition-transform">Send Message</button>
      </form>
      {success && (
        <div className="success-message mt-8 text-green-600 font-bold text-xl">Thank you! Your message was sent.</div>
      )}
    </section>
  );
}
