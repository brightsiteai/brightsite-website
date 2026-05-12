import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00D1FF] to-[#A855F7] rounded flex items-center justify-center text-white">
              <Layers size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">BRIGHTSITE</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Building the next generation of 3D immersive web experiences. AI-powered design and development for modern businesses.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00D1FF] hover:border-[#00D1FF] transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00D1FF] hover:border-[#00D1FF] transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00D1FF] hover:border-[#00D1FF] transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#services" className="hover:text-white transition-colors">3D Website Design</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">AI Integrations</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Restaurant Solutions</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">SEO Optimization</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/templates" className="hover:text-white transition-colors">Templates</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#00D1FF]" />
              <span>info@brightsiteagency.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#00D1FF]" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[#00D1FF]" />
              <span>New York, NY</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-white/30 text-xs">
        <p>© {new Date().getFullYear()} Brightsite AI Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
