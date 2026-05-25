import { motion } from 'framer-motion';
import { Shield, Rocket, Target, Heart } from 'lucide-react';

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
  return (
    <section className="py-24 relative overflow-hidden" id="why-us">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Forward-Thinking <br />
              <span className="gradient-text">Brands Choose Us</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              In a world of template-based mediocrity, we offer the bespoke, the immersive, and the exceptional. We've built an agency that functions like a high-tech lab, constantly innovating to give our clients an unfair advantage.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-primary font-bold">01</span>
                </div>
                <span className="text-text-primary font-medium text-lg">98% Client Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-primary font-bold">02</span>
                </div>
                <span className="text-text-primary font-medium text-lg">Average 3.5x ROI within 12 Months</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-primary font-bold">03</span>
                </div>
                <span className="text-text-primary font-medium text-lg">100% Custom Work - No Templates</span>
              </div>
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
                className="glass-card p-8 group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface mb-6 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                  <reason.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-text-primary">{reason.title}</h4>
                <p className="text-text-secondary leading-relaxed text-sm">
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
