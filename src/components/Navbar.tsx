import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = ['services', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(current || '');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', hash: '' },
    { name: 'Services', path: '/', hash: '#services' },
    { name: 'Templates', path: '/templates', hash: '' },
    { name: 'Contact', path: '/', hash: '#contact' },
  ];

  const isActive = (link: { path: string, hash: string }) => {
    if (link.hash) {
      return activeSection === link.hash.substring(1);
    }
    return location.pathname === link.path && !activeSection;
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00D1FF] to-[#A855F7] rounded-lg flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,209,255,0.3)] group-hover:scale-110 transition-transform">
            <Layers size={24} />
          </div>
          {/* Logo text removed as per requirement */}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path + link.hash}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#00D1FF] relative py-2",
                isActive(link) ? "text-[#00D1FF]" : "text-white/70"
              )}
            >
              {link.name}
              {isActive(link) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00D1FF] to-[#A855F7]" />
              )}
            </Link>
          ))}
          <a
            href="/#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path + link.hash}
              className={cn(
                "text-lg font-medium transition-colors",
                isActive(link) ? "text-[#00D1FF]" : "text-white/70"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/#contact"
            className="w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
