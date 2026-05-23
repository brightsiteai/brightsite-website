
import { motion } from 'framer-motion';
import { ExternalLink, Layout, Smartphone, MousePointer2 } from 'lucide-react';

const TemplateShowcase = () => {
  const templates = [
    {
      name: 'Lumina Dine',
      category: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1550966841-3ee5ad011041?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['POS Sync', '3D Menu', 'Delivery Hub'],
    },
    {
      name: 'Nexus Retail',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['AR Preview', 'Inventory AI', 'Express Checkout'],
    },
    {
      name: 'Aura Pro',
      category: 'Professional Services',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['Smart Booking', 'Client Portal', 'Document AI'],
    },
    {
      name: 'Vortex Venture',
      category: 'Small Business',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['Lead Magnet', 'CRM Bridge', 'Auto-Scaling'],
    },
  ];

  return (
    <section id="templates" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-black mb-4">World-Class <span className="gradient-text">Foundations.</span></h2>
            <p className="text-gray-400 text-base md:text-lg">Choose a proven structure and watch us transform it into your unique digital environment.</p>
          </div>
          <button className="btn-outline flex items-center gap-2 text-sm md:text-base">
            View All Templates <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {templates.map((temp, i) => (
            <motion.div
              key={temp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/10">
                <img 
                  src={temp.image} 
                  alt={temp.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Preview Template <MousePointer2 size={18} />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {temp.category}
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{temp.name}</h3>
                  <div className="flex gap-4">
                    {temp.features.map(f => (
                      <span key={f} className="text-xs text-gray-500 flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                   <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400">
                     <Layout size={16} />
                   </div>
                   <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400">
                     <Smartphone size={16} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
