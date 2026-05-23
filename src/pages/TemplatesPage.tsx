import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingBag, Utensils, Briefcase, Store, X, CheckCircle } from 'lucide-react';

const TemplatesPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const templates = [
    {
      id: 1,
      title: "Restaurant Pro",
      category: "Restaurant",
      icon: <Utensils className="text-[#00D1FF]" />,
      description: "Complete dining experience with 3D menus and delivery integration. Includes Grubhub and DoorDash connections out of the box.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
      features: ["3D Interactive Menu", "Real-time Reservations", "Delivery API Sync", "Review Aggregator"]
    },
    {
      id: 2,
      title: "Retail Hub",
      category: "Retail",
      icon: <ShoppingBag className="text-[#00D1FF]" />,
      description: "Immersive shopping experience with interactive 3D product previews and seamless checkout flow.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      features: ["3D Product Configurator", "Inventory Tracking", "Stripe Integration", "Dynamic Search"]
    },
    {
      id: 3,
      title: "Corporate Vision",
      category: "Professional Services",
      icon: <Briefcase className="text-[#00D1FF]" />,
      description: "Sophisticated multi-page solution for consulting and agency firms looking to establish authority.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      features: ["Case Study Gallery", "Team Management", "CRM Connector", "Advanced Analytics"]
    },
    {
      id: 4,
      title: "Local Growth",
      category: "Small Business",
      icon: <Store className="text-[#00D1FF]" />,
      description: "Conversion-optimized landing pages for local service providers. Built for speed and lead generation.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      features: ["Lead Capture System", "Local SEO Setup", "Google Business Sync", "Click-to-Call"]
    }
  ];

  const handleSelectTemplate = () => {
    setIsEnrolled(true);
    console.log(`Selected Template: ${selectedTemplate.title}`);
    setTimeout(() => {
      setIsEnrolled(false);
      setSelectedTemplate(null);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-24 px-4 md:px-6 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="gradient-text">Templates</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            Start with a foundation built for your industry. Each template is fully customizable and powered by our AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {templates.map((template, i) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedTemplate(template)}
              className="group relative rounded-[32px] overflow-hidden bg-white/5 border border-white/10 cursor-pointer hover:border-[#00D1FF]/40 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#00D1FF]/10 rounded-lg">
                    {template.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00D1FF]">
                    {template.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{template.title}</h3>
                <p className="text-white/50 mb-8 leading-relaxed text-sm md:text-base">
                  {template.description}
                </p>
                <div className="flex items-center justify-between">
                  <button className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-[#00D1FF] hover:text-white transition-colors">
                    Preview Details
                  </button>
                  <div className="text-white/30 group-hover:text-[#00D1FF] transition-colors">
                    <ExternalLink size={20} />
                  </div>
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

      {/* Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedTemplate(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 rounded-full text-white/50 hover:text-white z-10"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full">
                  <img src={selectedTemplate.image} className="w-full h-full object-cover" alt={selectedTemplate.title} />
                </div>
                <div className="p-10 lg:p-14">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-[#00D1FF]/10 rounded-lg text-[#00D1FF]">
                      {selectedTemplate.icon}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-[#00D1FF]">
                      {selectedTemplate.category}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6">{selectedTemplate.title}</h2>
                  <p className="text-white/60 mb-10 leading-relaxed text-lg">
                    {selectedTemplate.description}
                  </p>
                  
                  <div className="mb-12">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedTemplate.features.map((f: string) => (
                        <div key={f} className="flex items-center gap-3 text-white/80">
                          <CheckCircle size={18} className="text-[#00D1FF]" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    disabled={isEnrolled}
                    onClick={handleSelectTemplate}
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-bold text-xl hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isEnrolled ? (
                      <>Template Selected <CheckCircle size={24} /></>
                    ) : (
                      <>Select This Template</>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Toast */}
      <AnimatePresence>
        {isEnrolled && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-[110]"
          >
            <div className="bg-green-500 rounded-full p-1">
              <CheckCircle size={20} className="text-white" />
            </div>
            <div>
              <p className="font-bold">Template Selection Successful</p>
              <p className="text-sm text-black/60">Our agents are preparing your environment.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TemplatesPage;
