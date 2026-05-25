import { motion } from 'framer-motion';
import { ExternalLink, Layout, Smartphone, MousePointer2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemplateShowcase = () => {
  const templates = [
    {
      name: 'Lumina Dine',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1550966841-3ee5ad011041?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['3D Menu', 'Delivery Hub'],
    },
    {
      name: 'Nexus Retail',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['AR Preview', 'Express Checkout'],
    },
    {
      name: 'Aura Pro',
      category: 'B2B / Agency',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['Smart Booking', 'Client Portal'],
    },
    {
      name: 'Vortex Venture',
      category: 'Local Business',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: ['Lead Magnet', 'CRM Bridge'],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="md:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                <Zap size={12} className="fill-primary" /> Verified Templates
              </span>
              <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-text-primary">
                World-Class <span className="gradient-text">Foundations.</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl">
                Choose a proven structural framework and watch us transform it into your bespoke digital masterpiece.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/templates" className="btn-primary flex items-center gap-2">
              View All Frameworks <ExternalLink size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {templates.map((temp, i) => (
            <motion.div
              key={temp.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer relative"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-primary/5 shadow-2xl shadow-black">
                <img 
                  src={temp.image} 
                  alt={temp.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-text-primary text-background font-black px-8 py-4 rounded-xl flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                    Explore Experience <MousePointer2 size={20} />
                  </div>
                </div>
                <div className="absolute top-6 left-6 px-4 py-2 bg-background/60 backdrop-blur-xl rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10 text-text-primary">
                  {temp.category}
                </div>
              </div>
              
              <div className="flex justify-between items-end px-4">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-text-primary tracking-tight">{temp.name}</h3>
                  <div className="flex flex-wrap gap-4">
                    {temp.features.map(f => (
                      <span key={f} className="text-[10px] font-black uppercase tracking-widest text-text-secondary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                   <div className="w-12 h-12 rounded-xl bg-surface border border-primary/10 flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:border-primary/40 transition-all">
                     <Layout size={20} />
                   </div>
                   <div className="w-12 h-12 rounded-xl bg-surface border border-primary/10 flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:border-primary/40 transition-all">
                     <Smartphone size={20} />
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
