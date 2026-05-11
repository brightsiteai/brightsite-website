import { motion } from 'framer-motion';
import { Rocket, Zap } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      name: 'Seed',
      price: '$899',
      description: 'Perfect for startups and simple business sites.',
      features: ['5 Pages', 'Basic 3D Hero', 'Mobile Responsive', 'SEO Optimized'],
      color: 'from-green-400 to-emerald-600',
    },
    {
      name: 'Growth',
      price: '$1,799',
      description: 'Advanced animations and custom components.',
      features: ['8 Pages', 'Advanced 3D Elements', 'Contact Routing', 'Speed Optimized'],
      color: 'from-blue-400 to-indigo-600',
    },
    {
      name: 'Professional',
      price: '$3,499',
      description: 'The full 3D animated experience.',
      features: ['12 Pages', 'Full 3D Interaction', 'AI Agent Integration', 'Premium Support'],
      color: 'from-purple-400 to-pink-600',
    },
    {
      name: 'Enterprise',
      price: '$6,500+',
      description: 'Complex e-commerce and multi-phase builds.',
      features: ['Custom Pages', 'E-commerce Ready', 'Deep AI Integration', 'Dedicated Manager'],
      color: 'from-orange-400 to-red-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">Tiered <span className="gradient-text">Packages</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Choose the foundation that fits your ambition. Every site is built for performance and conversion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col hover:border-primary/50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-tr ${pkg.color} flex items-center justify-center mb-6 shadow-lg`}>
                <Rocket className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-black mb-4">{pkg.price}</div>
              <p className="text-gray-400 text-sm mb-6 flex-1">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="w-4 h-4 text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full py-2">Get Started</button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Basic Care', price: '$99/mo', desc: 'Security & Updates' },
            { name: 'Professional Care', price: '$249/mo', desc: 'Content & Growth' },
            { name: 'Premium Care', price: '$499/mo', desc: 'Priority Slack Support' },
          ].map((plan) => (
            <div key={plan.name} className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center">
              <h4 className="font-bold text-gray-400">{plan.name}</h4>
              <div className="text-2xl font-bold text-white mt-1">{plan.price}</div>
              <p className="text-xs text-gray-500 mt-2">{plan.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
