
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Send, Camera, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tighter">BRIGHTSITE</span>
            </Link>
            <p className="text-gray-500 text-sm mb-6">
              The world's first AI-native website building agency. Immersive 3D experiences, autonomous agents, and unlimited growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary transition-all">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary transition-all">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary transition-all">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#restaurants" className="hover:text-primary transition-colors">Restaurant OS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Retail Nexus</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Professional Aura</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Build</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#why-us" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#templates" className="hover:text-primary transition-colors">Templates</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gray-400">Newsletter</h4>
            <p className="text-xs text-gray-600 mb-4 uppercase tracking-tighter">Stay updated with the future of the web.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@company.com" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary/50 flex-1"
              />
              <button className="bg-primary text-black font-bold p-2 rounded-lg">
                <Sparkles size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium uppercase tracking-widest">
            © {currentYear} BRIGHTSITE AI AGENCY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full" />
             <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
