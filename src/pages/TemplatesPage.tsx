import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingBag, Utensils, Briefcase, Store, X, CheckCircle, ArrowRight, Star, Menu, Phone, MapPin, Clock, ChevronRight, Zap } from 'lucide-react';

const TemplatesPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null);

  const templates = [
    {
      id: 1,
      title: "Restaurant Pro",
      category: "Hospitality",
      icon: <Utensils className="text-primary" />,
      description: "Complete dining experience with 3D menus and delivery integration. Includes Grubhub and DoorDash connections out of the box.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
      features: ["3D Interactive Menu", "Real-time Reservations", "Delivery API Sync", "Review Aggregator"],
      demo: {
        hero: {
          badge: "Now Open",
          name: "The Golden Fork",
          tagline: "Fine Dining Reimagined",
          cta: "Reserve a Table",
        },
        about: {
          title: "Our Story",
          text: "Founded with a passion for culinary excellence, The Golden Fork has been a cornerstone of fine dining for over 15 years. We blend traditional techniques with modern innovation to create dishes that are as beautiful as they are delicious.",
          image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
        },
        stats: [{ value: "4.8", label: "Rating" }, { value: "2.3K", label: "Reviews" }, { value: "15+", label: "Years" }],
        menu: [
          { 
            category: "Starters", 
            items: [
              { name: "Truffle Arancini", price: "$18", desc: "Wild mushroom, aged parmesan, truffle oil" },
              { name: "Tuna Tartare", price: "$24", desc: "Avocado, sesame, citrus ponzu" }
            ] 
          },
          { 
            category: "Mains", 
            items: [
              { name: "Wagyu Ribeye", price: "$85", desc: "A5 Japanese, black garlic, bone marrow butter" },
              { name: "Pan-Seared Salmon", price: "$42", desc: "Herb crust, lemon beurre blanc, asparagus" }
            ] 
          }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800"
        ],
        location: {
          address: "123 Culinary Way, Gastronomy City, GC 10293",
          phone: "(555) 123-4567",
          hours: [
            { day: "Mon - Thu", time: "5:00 PM - 10:00 PM" },
            { day: "Fri - Sat", time: "5:00 PM - 11:30 PM" }
          ]
        },
        reviews: [{ author: "Sarah M.", rating: 5, text: "Best dining experience in the city. The 3D menu is incredible." }],
        cta: { headline: "Ready to seat your guests?", button: "Deploy This Template" }
      }
    },
    {
      id: 2,
      title: "Retail Hub",
      category: "E-Commerce",
      icon: <ShoppingBag className="text-primary" />,
      description: "Immersive shopping experience with interactive 3D product previews and seamless checkout flow.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      features: ["3D Product Configurator", "Inventory Tracking", "Stripe Integration", "Dynamic Search"],
      demo: {
        hero: {
          badge: "New Collection",
          name: "Luxe Street",
          tagline: "Urban Fashion for the Bold",
          cta: "Shop Now",
        },
        stats: [{ value: "12K+", label: "Products" }, { value: "48K", label: "Customers" }, { value: "4.9", label: "Rating" }],
        products: [
          { name: "Obsidian Bomber Jacket", price: "$299", oldPrice: "$420", badge: "Best Seller" },
          { name: "Noir Classic Sneakers", price: "$189", oldPrice: "$260", badge: "New" }
        ],
        features: [{ icon: "🚚", title: "Free Shipping", desc: "On orders over $100" }, { icon: "🔒", title: "Secure Checkout", desc: "256-bit encryption" }],
        cta: { headline: "Ready to open your store?", button: "Deploy This Template" }
      }
    },
    {
      id: 3,
      title: "Corporate Vision",
      category: "B2B / Agency",
      icon: <Briefcase className="text-primary" />,
      description: "Sophisticated multi-page solution for consulting and agency firms looking to establish authority.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      features: ["Case Study Gallery", "Team Management", "CRM Connector", "Advanced Analytics"],
      demo: {
        hero: {
          badge: "Trusted by 200+ Companies",
          name: "Apex Consulting",
          tagline: "Strategy That Moves Mountains",
          cta: "Book Consultation",
        },
        stats: [{ value: "200+", label: "Clients" }, { value: "$2.4B", label: "Revenue Generated" }, { value: "98%", label: "Success Rate" }],
        services: [{ title: "Growth Strategy", desc: "Data-driven frameworks for sustainable scaling" }, { title: "Digital Transformation", desc: "End-to-end technology modernization" }],
        testimonials: [{ quote: "Apex transformed our entire go-to-market strategy.", author: "CTO, Fortune 500 firm" }],
        cta: { headline: "Ready to elevate your brand?", button: "Deploy This Template" }
      }
    },
    {
      id: 4,
      title: "Service Pro",
      category: "Local Business",
      icon: <Store className="text-primary" />,
      description: "Conversion-optimized landing pages for local service providers. Built for speed and lead generation.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      features: ["Lead Capture System", "Local SEO Setup", "Google Business Sync", "Click-to-Call"],
      demo: {
        hero: {
          badge: "⭐ 4.9 Star Service",
          name: "FixIt Pro",
          tagline: "Expert Home Repair — Fast, Fair, Guaranteed",
          cta: "Get Free Estimate",
        },
        stats: [{ value: "500+", label: "Jobs Done" }, { value: "4.9", label: "Stars" }, { value: "24hr", label: "Response" }],
        services: [{ name: "Plumbing", icon: "🔧", desc: "Leaks, clogs, installations" }, { name: "Electrical", icon: "⚡", desc: "Wiring, panels, fixtures" }],
        reviews: [{ name: "Mike R.", rating: 5, text: "Showed up same day, fixed the problem in under an hour." }],
        cta: { headline: "Ready to grow your local business?", button: "Deploy This Template" }
      }
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 md:px-6 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} className="fill-primary" /> Premium Framework
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">
            Digital <span className="gradient-text">Masterpieces</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Every Brightsite project starts with a precision-engineered foundation. Choose a template to explore the immersive potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {templates.map((template, i) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              onClick={() => setSelectedTemplate(template)}
              className="group relative rounded-[2rem] overflow-hidden bg-surface border border-primary/5 cursor-pointer hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-black/50"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 opacity-60" />
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 z-20">
                  <div className="px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-primary/10 flex items-center gap-2">
                    {template.icon}
                    <span className="text-xs font-black uppercase tracking-widest text-text-primary">
                      {template.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 relative">
                <h3 className="text-3xl font-bold mb-4 text-text-primary">{template.title}</h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {template.features.map(f => (
                    <span key={f} className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-primary/5 text-primary/80 rounded-full border border-primary/10">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedTemplate(template); }}
                    className="btn-primary text-sm px-8 py-3"
                  >
                    View Experience
                  </button>
                  <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[3rem] border border-primary/10 bg-gradient-to-br from-surface to-background text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,170,0.05)_0%,transparent_50%)]" />
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-text-primary">Need a Bespoke Solution?</h3>
            <p className="text-text-secondary mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
              If your vision transcends these foundations, our engineering team can build a completely custom WebGL experience from the ground up.
            </p>
            <button
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cta text-lg px-12 py-5"
            >
              Start Custom Build
            </button>
          </div>
        </motion.div>
      </div>

      {/* Template Detail Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full max-w-6xl bg-surface border border-primary/10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-50 flex items-center justify-between p-6 bg-surface/80 backdrop-blur-md border-b border-primary/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {selectedTemplate.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-text-primary">{selectedTemplate.title}</h3>
                    <span className="text-[10px] text-text-secondary uppercase tracking-[0.2em] font-black">{selectedTemplate.category} Preview</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="w-10 h-10 flex items-center justify-center bg-background rounded-full text-text-secondary hover:text-text-primary border border-primary/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Demo Content */}
              <div className="p-6 md:p-12">
                <div className="space-y-24">
                  {/* Hero Preview */}
                  <section className="relative rounded-[2rem] overflow-hidden bg-background border border-primary/5 aspect-video md:aspect-[21/9] flex items-center justify-center text-center p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.1)_0%,transparent_70%)]" />
                    <div className="relative z-10 max-w-3xl">
                      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20">
                        {selectedTemplate.demo.hero.badge}
                      </span>
                      <h2 className="text-4xl md:text-7xl font-black mb-6 text-text-primary tracking-tighter">
                        {selectedTemplate.demo.hero.name}
                      </h2>
                      <p className="text-xl md:text-2xl text-text-secondary mb-10 font-medium">
                        {selectedTemplate.demo.hero.tagline}
                      </p>
                      <button className="btn-primary px-10 py-4">
                        {selectedTemplate.demo.hero.cta}
                      </button>
                    </div>
                  </section>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedTemplate.demo.stats.map((stat: any) => (
                      <div key={stat.label} className="bg-background border border-primary/5 rounded-[1.5rem] p-8 text-center group hover:border-primary/20 transition-all">
                        <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                        <div className="text-[10px] text-text-secondary uppercase tracking-[0.2em] font-black">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Content Sections */}
                  {selectedTemplate.id === 1 && (
                    <div className="space-y-24">
                      {/* Menu */}
                      <div>
                        <h4 className="text-2xl font-bold mb-10 text-text-primary flex items-center gap-3">
                          <Utensils className="text-primary" /> Curated Menu
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          {selectedTemplate.demo.menu.map((section: any) => (
                            <div key={section.category} className="space-y-8">
                              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/5 inline-block px-4 py-1 rounded-full">
                                {section.category}
                              </h5>
                              <div className="space-y-6">
                                {section.items.map((item: any) => (
                                  <div key={item.name} className="group border-b border-primary/5 pb-4 hover:border-primary/20 transition-all">
                                    <div className="flex justify-between items-baseline mb-2">
                                      <span className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors">{item.name}</span>
                                      <span className="text-primary font-black ml-4">{item.price}</span>
                                    </div>
                                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Add more template-specific logic here as needed */}

                  {/* Final Modal CTA */}
                  <div className="text-center py-20 border-t border-primary/5">
                    <h4 className="text-3xl font-black mb-8 text-text-primary">{selectedTemplate.demo.cta.headline}</h4>
                    <button
                      className="btn-cta px-12 py-5 flex items-center gap-3 mx-auto"
                      onClick={() => alert('Consultation requested. An agent will contact you.')}
                    >
                      {selectedTemplate.demo.cta.button} <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TemplatesPage;
