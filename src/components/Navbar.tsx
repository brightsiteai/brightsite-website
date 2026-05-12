import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['why-us', 'restaurants', 'templates', 'pricing', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Solutions', href: '#restaurants', id: 'restaurants' },
    { name: 'Templates', href: '#templates', id: 'templates' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Simplified Logo: Icon + Text together as one unit */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/50 transition-colors">
            <Sparkles className="text-primary w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-xl tracking-tighter uppercase">Brightsite</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${activeSection === link.id ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={false}
                />
              )}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('#contact')}
            className="px-6 py-2 bg-primary text-black rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-lg font-medium py-2 border-b border-white/5 ${activeSection === link.id ? 'text-primary' : 'text-gray-300'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('#contact')}
                className="btn-primary mt-4 text-center"
              >
                Hire Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
