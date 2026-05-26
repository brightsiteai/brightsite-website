import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Rocket, Target, Heart, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "We don't just build websites; we engineer high-performance sales machines tailored to your specific business goals."
  },
  {
    icon: Rocket,
    title: "Future-Ready Tech",
    description: "By leveraging 3D, WebGL, and React 19, we ensure your site stands out today and stays relevant tomorrow."
  },
  {
    icon: Shield,
    title: "Unmatched Support",
    description: "Our Premium Care plans mean we're with you long after launch, handling security, updates, and optimization."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our north star. We prioritize transparent communication and measurable results over everything else."
  }
];

const WhyBrightsite = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-32 relative overflow-hidden bg-surface" id="why-us">
      {/* Parallax Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute right-0 top-0 text-[20vw] font-black text-white/[0.01] pointer-events-none select-none"
      >
        WHY US
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6">
              The Brightsite Advantage
            </h2>
            <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Why Forward-Thinking <br />
              <span className="gradient-text">Brands Choose Us</span>
            </h1>
            <p className="text-text-secondary text-lg mb-12 leading-relaxed max-w-xl">
              In a world of template-based mediocrity, we offer the bespoke, the immersive, and the exceptional. We've built an agency that functions like a high-tech lab, constantly innovating to give our clients an unfair advantage.
            </p>
            
            <div className="space-y-8">
              {[
                "98% Client Satisfaction Rate",
                "Average 3.5x ROI within 12 Months",
                "100% Custom Work - No Templates"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-text-primary font-bold text-xl tracking-tight">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card p-10 group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-background mb-8 flex items-center justify-center border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                  <reason.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-text-primary">{reason.title}</h4>
                <p className="text-text-secondary leading-relaxed text-base">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrightsite;
