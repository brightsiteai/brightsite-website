import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Mail, MessageSquare, User } from 'lucide-react';
import confetti from 'canvas-confetti';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00D1FF', '#A855F7', '#ffffff']
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-r border-white/5">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to <br /><span className="gradient-text">Deploy?</span></h2>
            <p className="text-gray-400 mb-8">
              Fill out the form and our Concierge Agent will reach out within 2 hours to start your discovery phase.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <span className="text-gray-300">hello@brightsite.ai</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <MessageSquare size={20} />
                </div>
                <span className="text-gray-300">Slack: #brightsite-care</span>
              </div>
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-500">Concierge Active</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-tighter">Current Wait Time: <span className="text-white">14 Minutes</span></p>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <CheckCircle2 size={80} className="text-green-500 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Mission Received.</h3>
                <p className="text-gray-400">Our agents are analyzing your request. Check your inbox shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Vision</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>Initialize Contact <Send size={20} /></>
                  )}
                </button>
                <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest">
                  Secure transmission via Brightsite Quantum Link
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
