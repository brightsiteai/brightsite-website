import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Seed",
      price: "899",
      description: "Perfect for startups and small local businesses.",
      features: ["Custom 3D Landing Page", "Mobile Optimization", "SEO Foundations", "Contact Form Integration"],
    },
    {
      name: "Growth",
      price: "1,799",
      description: "Ideal for growing brands needing more impact.",
      features: ["Multi-page 3D Website", "Advanced Animations", "CRM Integration", "Social Media Setup"],
      popular: true,
    },
    {
      name: "Professional",
      price: "3,499",
      description: "Full-scale digital presence for established companies.",
      features: ["Immersive 3D Experience", "Full AI Agent Suite", "Payment Integration", "Custom Content Strategy"],
    },
    {
      name: "Enterprise",
      price: "6,500+",
      description: "Complex solutions for large-scale operations.",
      features: ["Bespoke 3D Environments", "Third-party API Ecosystems", "Priority AI Support", "Advanced Analytics"],
    },
  ];

  const carePlans = [
    { name: "Starter Care", price: "99" },
    { name: "Professional Care", price: "249" },
    { name: "Elite Care", price: "499" },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your vision. All plans include our signature 3D design and AI-driven workflow.
          </p>
          <AnimatePresence>
            {selectedPlan && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 inline-block px-6 py-3 rounded-2xl bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-[#00D1FF] font-semibold"
              >
                You've selected the <span className="font-bold underline">{selectedPlan}</span> Plan
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedPlan(plan.name)}
              className={`p-8 rounded-3xl border cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.name 
                  ? 'border-[#00D1FF] bg-[#00D1FF]/10 scale-[1.02] shadow-[0_0_30px_rgba(0,209,255,0.2)]' 
                  : plan.popular 
                    ? 'border-[#00D1FF]/30 bg-[#00D1FF]/5' 
                    : 'border-white/10 bg-white/5 hover:border-white/20'
              } relative flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00D1FF] text-black text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-white/40 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-white/30 ml-2">one-time</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={18} className="text-[#00D1FF] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  selectedPlan === plan.name 
                    ? 'bg-[#00D1FF] text-black' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {selectedPlan === plan.name ? 'Plan Selected' : 'Select Plan'}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#00D1FF]/10 to-[#A855F7]/10 p-12 rounded-[40px] border border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:max-w-md">
              <h3 className="text-3xl font-bold mb-4">Monthly <span className="gradient-text">Care Plans</span></h3>
              <p className="text-white/60 mb-8">
                Keep your 3D experience fresh, secure, and optimized with our dedicated maintenance and hosting services.
              </p>
              <div className="space-y-6">
                {carePlans.map(plan => (
                  <div 
                    key={plan.name} 
                    className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-[#00D1FF]/30 transition-colors cursor-pointer"
                    onClick={() => setSelectedPlan(`${plan.name} (Monthly)`)}
                  >
                    <span className="font-semibold">{plan.name}</span>
                    <span className="text-[#00D1FF] font-bold">${plan.price}/mo</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 lg:w-96">
              <h4 className="text-xl font-bold mb-4 text-center">Custom Projects</h4>
              <p className="text-white/50 text-sm text-center mb-8">
                Need a completely bespoke solution with unique 3D assets and integrations?
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold">$10K+</span>
              </div>
              <button 
                onClick={() => setSelectedPlan('Custom')}
                className="w-full py-4 rounded-xl border border-[#00D1FF] text-[#00D1FF] font-bold hover:bg-[#00D1FF] hover:text-black transition-all flex items-center justify-center gap-2"
              >
                Consultation <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
