import { Link } from 'react-router-dom';
import { Layers, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-primary/10 pt-24 pb-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <Link to="/" className="flex items-center group mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-teal flex items-center justify-center text-background shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-6 h-6" />
            </div>
            <span className="ml-3 text-2xl font-black tracking-tighter text-text-primary">
              BRIGHTSITE<span className="text-primary">.</span>
            </span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed mb-8">
            Leading the evolution of digital experiences through immersive 3D technology and AI-driven innovation. We don't just build sites; we create digital legacies.
          </p>
          <div className="flex items-center gap-4">
            {['X', 'Instagram', 'YouTube', 'LinkedIn'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="w-10 h-10 rounded-lg bg-surface border border-primary/10 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-current opacity-20 rounded-sm" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-text-primary font-bold text-lg mb-8">Solutions</h4>
          <ul className="space-y-4 text-text-secondary">
            {['3D Experiences', 'AI Integration', 'Restaurant Tech', 'Enterprise Web', 'SEO Mastery'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:w-3 transition-all" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-bold text-lg mb-8">Company</h4>
          <ul className="space-y-4 text-text-secondary">
            <li><Link to="/templates" className="hover:text-primary transition-colors">Premium Templates</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><a href="#cta" className="hover:text-primary transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-bold text-lg mb-8">Connect</h4>
          <ul className="space-y-6 text-text-secondary">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-primary/10 flex-shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-text-secondary/60 uppercase tracking-widest font-black mb-1">Email</p>
                <a href="mailto:hello@brightsite.agency" className="text-text-primary hover:text-primary transition-colors">hello@brightsite.agency</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-primary/10 flex-shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-text-secondary/60 uppercase tracking-widest font-black mb-1">Global HQ</p>
                <p className="text-text-primary">123 Tech Plaza, New York, NY</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto pt-12 border-t border-primary/10 flex flex-col md:row items-center justify-between gap-8">
        <p className="text-text-secondary/40 text-sm">
          © {new Date().getFullYear()} BRIGHTSITE AI AGENCY. All rights reserved. Premium Build v4.0
        </p>
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-xl bg-surface border border-primary/10 flex items-center justify-center text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
