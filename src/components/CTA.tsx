import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="cta">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-text-primary">
              Ready to Build the <br />
              <span className="gradient-text">Future Together?</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-12">
              Don't settle for a static website when you can have an immersive digital experience that captivates your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={handleScrollToContact}
                className="btn-cta text-lg px-10 py-5 w-full sm:w-auto flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 rounded-xl border border-primary/20 hover:border-primary/50 text-text-primary font-bold transition-all w-full sm:w-auto">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
