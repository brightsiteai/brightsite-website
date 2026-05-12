import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, Utensils, Briefcase, Store } from 'lucide-react';

const TemplatesPage = () => {
  const templates = [
    {
      title: "Restaurant Pro",
      category: "Restaurant",
      icon: <Utensils className="text-[#00D1FF]" />,
      description: "Complete dining experience with 3D menus and delivery integration.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Retail Hub",
      category: "Retail",
      icon: <ShoppingBag className="text-[#00D1FF]" />,
      description: "Immersive shopping experience with interactive 3D product previews.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Corporate Vision",
      category: "Professional Services",
      icon: <Briefcase className="text-[#00D1FF]" />,
      description: "Sophisticated multi-page solution for consulting and agency firms.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Local Growth",
      category: "Small Business",
      icon: <Store className="text-[#00D1FF]" />,
      description: "Conversion-optimized landing pages for local service providers.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="gradient-text">Templates</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Start with a foundation built for your industry. Each template is fully customizable and powered by our AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {templates.map((template, i) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-[32px] overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#00D1FF]/10 rounded-lg">
                    {template.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00D1FF]">
                    {template.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{template.title}</h3>
                <p className="text-white/50 mb-8 leading-relaxed">
                  {template.description}
                </p>
                <div className="flex items-center justify-between">
                  <button className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-[#00D1FF] hover:text-white transition-colors">
                    Preview Template
                  </button>
                  <a href="#" className="text-white/30 hover:text-[#00D1FF] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-transparent text-center">
          <h3 className="text-3xl font-bold mb-4">Custom Template?</h3>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">
            Looking for something completely unique? Our design team can create a bespoke template tailored specifically to your brand identity.
          </p>
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-bold text-lg">
            Let's Talk Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
