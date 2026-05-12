import React from 'react';
import { Zap, Shield, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap className="text-[#00D1FF]" />,
      title: "Ultra Fast Performance",
      description: "Optimized 3D rendering ensures your site loads instantly on all devices."
    },
    {
      icon: <Shield className="text-[#00D1FF]" />,
      title: "Secure by Design",
      description: "Advanced protection for your data and your customers' information."
    },
    {
      icon: <Cpu className="text-[#00D1FF]" />,
      title: "AI-Powered",
      description: "Smart agents handle acquisition, billing, and growth automatically."
    },
    {
      icon: <Globe className="text-[#00D1FF]" />,
      title: "Global Scalability",
      description: "Built to grow from a local startup to a global enterprise."
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Why Choose <span className="gradient-text">Brightsite?</span></h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              We're not just building websites; we're building intelligent digital ecosystems that work for you 24/7.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00D1FF] to-[#A855F7]" />
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-6 p-4 w-fit bg-white/5 rounded-2xl group-hover:bg-[#00D1FF]/10 transition-colors">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{reason.title}</h4>
                <p className="text-white/40 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
