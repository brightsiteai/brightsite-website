import React from 'react';
import { UtensilsCrossed, Smartphone, Map, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const RestaurantSolutions = () => {
  const features = [
    {
      icon: <UtensilsCrossed className="text-[#00D1FF]" />,
      title: "Menu Integration",
      description: "Interactive 3D menus that showcase your dishes with vivid detail."
    },
    {
      icon: <Smartphone className="text-[#00D1FF]" />,
      title: "Third-party Delivery",
      description: "Seamless connections with GrubHub, DoorDash, and UberEats."
    },
    {
      icon: <Map className="text-[#00D1FF]" />,
      title: "Local SEO",
      description: "Be found by hungry customers with optimized local search rankings."
    },
    {
      icon: <Star className="text-[#00D1FF]" />,
      title: "Review Management",
      description: "Automated systems to collect and display your best customer reviews."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Specialized Solutions for <br />
              <span className="gradient-text">Modern Restaurants</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              We understand the unique challenges of the food industry. Our platform integrates with the tools you already use while providing a world-class 3D experience that drives reservations and orders.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 p-3 w-fit bg-[#00D1FF]/10 rounded-xl">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00D1FF]/20 to-[#A855F7]/20 blur-3xl opacity-30 rounded-full" />
            <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-4 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Restaurant Interior" 
                className="rounded-[32px] w-full h-[600px] object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold">Lumina Bistro</h4>
                      <p className="text-[#00D1FF] text-sm">Fine Dining • 3D Menu Active</p>
                    </div>
                    <div className="bg-white/10 p-2 rounded-full">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                  <div className="flex gap-1 text-[#00D1FF] mb-6">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <span className="text-white/50 text-xs ml-2">4.9 (500+ reviews)</span>
                  </div>
                  <button className="w-full py-3 rounded-xl bg-white text-black font-bold text-sm">
                    View Demo Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSolutions;
