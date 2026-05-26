import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Box, TrendingUp, Share2, LucideIcon } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  index 
}: { 
  title: string; 
  description: string; 
  icon: LucideIcon; 
  index: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-12 mb-32 last:mb-0"
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 glow-teal">
          <Icon size={32} />
        </div>
        <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
          {description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-bold hover:shadow-[0_0_20px_rgba(0,212,170,0.4)] transition-all"
        >
          Explore Solution
        </motion.button>
      </div>
      <div className={`flex-1 w-full aspect-square relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div 
          className="absolute inset-0 bg-surface rounded-[40px] border border-white/5 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="text-primary/20"
            >
              <Icon size={200} strokeWidth={0.5} />
            </motion.div>
          </div>
          
          <div className="absolute bottom-8 left-8 right-8 p-6 glass-card border-white/10">
            <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">Service 0{index + 1}</div>
            <div className="text-lg font-bold">{title}</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const services = [
    {
      title: "Immersive 3D Animated Experiences",
      description: "We build high-performance websites that live in three dimensions. Using Three.js and WebGL, we create digital environments that captivate and convert.",
      icon: Box,
    },
    {
      title: "High-Velocity Lead Generation",
      description: "Turn your website into a 24/7 sales machine. Our scroll-driven narratives are engineered to guide prospects through a journey toward action.",
      icon: TrendingUp,
    },
    {
      title: "Unified Ecosystem Integrations",
      description: "Connect your entire business. From DoorDash and Grubhub for restaurants to custom automated pipelines, we sync your digital world.",
      icon: Share2,
    }
  ];

  return (
    <section id="services" ref={containerRef} className="relative py-32 overflow-hidden bg-background">
      <motion.div style={{ y: y1 }} className="absolute top-1/4 right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 left-[-10%] w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6"
          >
            Capabilities
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Digital <span className="gradient-text">Ecosystems</span> <br />
            Built for the Future.
          </motion.h1>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
