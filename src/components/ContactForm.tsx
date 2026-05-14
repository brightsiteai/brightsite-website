import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Let's Build <span className="gradient-text">Something Great</span></h2>
          <p className="text-white/50 text-lg">
            Ready to elevate your digital presence? Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Full Name</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00D1FF] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00D1FF] transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">Company Name</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00D1FF] transition-colors"
              placeholder="Your Business"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70 ml-1">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#00D1FF] transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            disabled={isSubmitting || isSubmitted}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : isSubmitted ? (
              <>Sent Successfully <CheckCircle size={24} /></>
            ) : (
              <>Send Message <Send size={20} /></>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-white/30 text-sm mb-4">or</p>
          <a
            href="https://cal.com/brightsiteagency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-[#00D1FF]/50 text-[#00D1FF] font-semibold hover:bg-[#00D1FF]/10 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Call
          </a>
        </div>

        {/* Cal.com Embed Container */}
        <div className="mt-16">
          <div
            data-cal-link="brightsiteagency"
            data-cal-config='{"theme":"dark"}'
            style={{ width: '100%', height: '600px' }}
          ></div>
          <script src="https://assets.cal.com/assets/embed.js" async></script>
        </div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-10 right-10 bg-white text-black px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-[100]"
            >
              <div className="bg-green-500 rounded-full p-1">
                <CheckCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold">Message Sent!</p>
                <p className="text-sm text-black/60">We'll be in touch soon.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
