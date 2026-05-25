import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: "Seed",
    price: "2,500",
    description: "Perfect for high-impact startups needing a professional 3D landing page.",
    features: [
      "Custom 3D Hero Section",
      "5 Responsive Pages",
      "Framer Motion Animations",
      "Contact Form Integration",
      "Basic SEO Setup",
      "1 Month Premium Care"
    ],
    highlight: false
  },
  {
    name: "Growth",
    price: "5,000",
    description: "The agency standard. Immersive storytelling for growing businesses.",
    features: [
      "Full 3D Immersive Website",
      "10 Responsive Pages",
      "Scroll-Driven Storytelling",
      "Advanced 3D Interactions",
      "CMS Implementation",
      "3 Months Premium Care",
      "Google Business Integration"
    ],
    highlight: true
  },
  {
    name: "Professional",
    price: "10,000",
    description: "Full-scale digital transformation with custom 3D logic and integrations.",
    features: [
      "Custom WebGL Environment",
      "Unlimited Pages",
      "Complex API Integrations",
      "E-commerce / Restaurant Systems",
      "Priority Concierge Support",
      "6 Months Premium Care",
      "Advanced SEO & Performance"
    ],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-surface/30 relative" id="pricing">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investment <span className="gradient-text">Tiers</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Transparent pricing for non-standard digital experiences. Choose the tier that matches your ambition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`glass-card p-10 relative flex flex-col h-full border-t-4 ${
                plan.highlight ? 'border-t-primary scale-105 z-20 bg-surface/80 shadow-2xl shadow-primary/10' : 'border-t-primary/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center">
                  <Zap className="w-3 h-3 mr-1 fill-current" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-black text-text-primary">$</span>
                  <span className="text-5xl font-black text-text-primary">{plan.price}</span>
                  <span className="text-text-secondary ml-2">USD</span>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-text-primary/90">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                plan.highlight ? 'btn-primary' : 'bg-surface border border-primary/20 hover:border-primary/50 text-text-primary'
              }`}>
                Start Project
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
