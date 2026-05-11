
import { Check, Zap, Rocket, Shield, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const websitePackages = [
  {
    name: 'Seed',
    price: '$899',
    icon: <Zap className="text-[#00D1FF]" />,
    features: ['5-page site', 'Basic 3D hero', 'Mobile responsive', 'Basic SEO', 'Contact form'],
    description: 'Perfect for small businesses starting their journey.'
  },
  {
    name: 'Growth',
    price: '$1,799',
    icon: <Rocket className="text-[#00D1FF]" />,
    features: ['8-page site', 'Advanced 3D animations', 'AI Agent lead capture', 'Blog setup', 'Social media sync'],
    description: 'Designed for scaling companies needing more impact.'
  },
  {
    name: 'Professional',
    price: '$3,499',
    icon: <Shield className="text-[#00D1FF]" />,
    features: ['12-page site', 'Full 3D immersive experience', 'Custom AI agent workforce', 'Advanced SEO', 'Analytics dashboard'],
    description: 'The standard for modern tech-forward brands.',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: '$6,500+',
    icon: <Crown className="text-[#A855F7]" />,
    features: ['Unlimited pages', 'Multi-phase builds', 'E-commerce integration', 'Custom API connects', 'Dedicated support agent'],
    description: 'Custom solutions for high-scale organizations.'
  },
  {
    name: 'Custom',
    price: '$10K+',
    icon: <Zap className="text-[#A855F7]" />,
    features: ['Complex projects', 'Unique 3D interactions', 'Custom AI logic', 'White-labeling', 'Quarterly roadmap'],
    description: 'When standard packages don\'t cut it.'
  }
];

const carePlans = [
  { name: 'Basic Care', price: '$99/mo', features: ['Hosting & SSL', 'Monthly updates', 'Uptime monitoring', 'Basic support'] },
  { name: 'Professional Care', price: '$249/mo', features: ['All Basic features', 'SEO monthly audit', 'Content updates', 'Priority support'] },
  { name: 'Premium Care', price: '$499/mo', features: ['All Professional features', 'Dedicated Slack channel', 'Phone support', 'Growth strategy calls'] }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic uppercase">Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">No hidden fees. No BS. Just growth. Choose the package that fits your stage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24">
          {websitePackages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 flex flex-col ${pkg.highlight ? 'border-blue-500/50 scale-105 relative z-10' : ''}`}
            >
              <div className="mb-6">{pkg.icon}</div>
              <h3 className="text-2xl font-bold mb-2 uppercase italic">{pkg.name}</h3>
              <div className="text-3xl font-black mb-4">{pkg.price}</div>
              <p className="text-xs text-gray-500 mb-6 flex-1">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={14} className="text-blue-500" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${pkg.highlight ? 'gradient-bg text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                Choose {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 italic uppercase">Monthly <span className="gradient-text">Care Plans</span></h2>
          <p className="text-gray-400">Keep your site fast, secure, and always-evolving.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {carePlans.map((plan, i) => (
            <div key={i} className="glass-card p-8">
              <h3 className="text-xl font-bold mb-1 uppercase italic">{plan.name}</h3>
              <div className="text-2xl font-black mb-6 text-blue-500">{plan.price}</div>
              <ul className="space-y-3">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check size={14} className="text-[#A855F7]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
