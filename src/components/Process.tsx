import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProcessStep = ({ 
  step, 
  title, 
  description, 
  index 
}: { 
  step: string; 
  title: string; 
  description: string; 
  index: number 
}) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-24 mb-40 last:mb-0">
      <div className={`flex-1 text-center md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
        {index % 2 === 0 && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-black text-6xl md:text-8xl opacity-10 mb-4 tracking-tighter">0{index + 1}</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
            <p className="text-text-secondary text-lg leading-relaxed max-w-md ml-auto">{description}</p>
          </motion.div>
        )}
      </div>

      <div className="relative flex-shrink-0 z-10 md:order-2">
        <div className="w-4 h-4 rounded-full bg-primary glow-teal shadow-[0_0_15px_rgba(0,212,170,0.5)]" />
      </div>

      <div className={`flex-1 text-center md:text-left ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
        {index % 2 !== 0 && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-black text-6xl md:text-8xl opacity-10 mb-4 tracking-tighter">0{index + 1}</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
            <p className="text-text-secondary text-lg leading-relaxed max-w-md">{description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      title: "Discovery & Strategy",
      description: "We dive deep into your business architecture to identify opportunities for 3D immersion and AI automation.",
    },
    {
      title: "Interactive Design",
      description: "Our designers craft a visual narrative that leverages WebGL to create a high-end, interactive user experience.",
    },
    {
      title: "3D Development",
      description: "We bring the vision to life using React, Three.js, and specialized AI frameworks to ensure peak performance.",
    },
    {
      title: "Launch & Growth",
      description: "Deployment is just the beginning. We integrate analytics and feedback loops to continuously optimize for conversion.",
    }
  ];

  return (
    <section id="process" ref={containerRef} className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6"
          >
            Execution
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black"
          >
            How We <span className="gradient-text">Engineer</span> Excellence.
          </motion.h1>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary -translate-x-1/2 hidden md:block" 
          />

          <div className="relative">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} {...step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
