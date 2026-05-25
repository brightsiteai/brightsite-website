import { useState } from 'react';
import { Send, CheckCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Whether you have a clear vision or just a spark of an idea, we're here to help you engineer the future of your digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface border border-primary/10 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-text-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface border border-primary/10 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-text-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-surface border border-primary/10 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-text-primary"
                  placeholder="Your Business"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface border border-primary/10 rounded-xl px-6 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-text-primary resize-none"
                  placeholder="Tell us about your project goals..."
                />
              </div>

              <button
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-cta py-5 rounded-xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>Sent Successfully <CheckCircle size={24} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 border-l-4 border-l-cta">
              <h4 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                <Calendar className="text-cta" /> Schedule a Strategy Call
              </h4>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                Prefer a face-to-face conversation? Book a 15-minute discovery call with our solutions team to discuss your project.
              </p>
              <a
                href="https://cal.com/brightsiteagency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cta font-bold hover:gap-4 transition-all"
              >
                Book Your Slot <Send size={16} />
              </a>
            </div>

            <div className="p-8 border border-primary/10 rounded-2xl bg-surface/30">
              <h4 className="text-sm font-black uppercase tracking-widest text-text-secondary mb-4">Direct Connect</h4>
              <ul className="space-y-4 text-text-primary font-medium">
                <li>
                  <a href="mailto:hello@brightsite.agency" className="hover:text-primary transition-colors">hello@brightsite.agency</a>
                </li>
                <li className="text-text-secondary">
                  Based in New York, NY <br /> Serving Clients Globally
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-10 right-10 bg-primary text-background px-8 py-4 rounded-xl shadow-2xl shadow-primary/20 flex items-center gap-4 z-[100] font-bold"
          >
            <CheckCircle size={24} />
            <div>
              <p>Message Received!</p>
              <p className="text-sm opacity-80 font-normal">We'll reach out within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
