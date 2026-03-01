import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
