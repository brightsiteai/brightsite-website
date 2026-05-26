import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-background" id="cta">
      {/* Decorative Background: Rose glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ scale, opacity }}
          className="glass-card p-16 md:p-32 text-center relative overflow-hidden border-primary/20 shadow-[0_0_50px_rgba(0,212,170,0.1)]"
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #00D4AA 1px, transparent 1px), linear-gradient(to bottom, #00D4AA 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black mb-10 leading-tight text-text-primary tracking-tighter"
            >
              Ready to <span className="gradient-text">Dominate</span> <br />
              The Digital Space?
            </motion.h2>
            <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              Join the ranks of visionaries who have transformed their online presence into a high-performance ecosystem. 
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button
                onClick={handleScrollToContact}
                className="btn-cta text-xl px-12 py-6 w-full sm:w-auto flex items-center justify-center group shadow-2xl"
              >
                Launch Your Project
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-12 py-6 rounded-2xl border-2 border-white/10 hover:border-primary/40 text-text-primary font-bold text-xl transition-all w-full sm:w-auto hover:bg-white/5">
                View Our Process
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
