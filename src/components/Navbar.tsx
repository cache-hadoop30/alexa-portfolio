import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-gradient">Alexandria Lucas</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-accent transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background px-4 pb-4 space-y-2 shadow-inner">
          <a href="#home" className="block hover:text-accent">Home</a>
          <a href="#about" className="block hover:text-accent">About</a>
          <a href="#skills" className="block hover:text-accent">Skills</a>
          <a href="#projects" className="block hover:text-accent">Projects</a>
          <a href="#certifications" className="block hover:text-accent">Certifications</a>
          <a href="#contact" className="block hover:text-accent">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
