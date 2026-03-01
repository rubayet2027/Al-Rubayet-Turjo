export default function Footer() {
  return (
    <footer className="w-full py-8 bg-background text-center text-gray-600 fade-in">
      <div className="mb-2">© 2026 Al Rubayet Turjo</div>
      <div className="flex justify-center gap-6 mb-2">
        <a href="#home" className="hover:text-accent">Home</a>
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#skills" className="hover:text-accent">Skills</a>
        <a href="#projects" className="hover:text-accent">Projects</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </div>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/rubayet2027" target="_blank" rel="noopener" className="hover:text-accent">GitHub</a>
        <a href="https://linkedin.com/in/alrubayet" target="_blank" rel="noopener" className="hover:text-accent">LinkedIn</a>
      </div>
    </footer>
  );
}
