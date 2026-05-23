import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingBag, Utensils, Briefcase, Store, X, CheckCircle, ArrowRight, Star, Menu, Phone, MapPin, Clock, StarHalf, ChevronRight } from 'lucide-react';

const TemplatesPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null);

  const templates = [
    {
      id: 1,
      title: "Restaurant Pro",
      category: "Restaurant",
      icon: <Utensils className="text-[#00D1FF]" />,
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
          text: "Founded with a passion for culinary excellence, The Golden Fork has been a cornerstone of fine dining for over 15 years. We blend traditional techniques with modern innovation to create dishes that are as beautiful as they are delicious. Every ingredient is carefully sourced from local artisans to ensure the highest quality in every bite.",
          image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
        },
        stats: [{ value: "4.8", label: "Rating" }, { value: "2.3K", label: "Reviews" }, { value: "15+", label: "Years" }],
        menu: [
          { 
            category: "Starters", 
            items: [
              { name: "Truffle Arancini", price: "$18", desc: "Wild mushroom, aged parmesan, truffle oil" },
              { name: "Tuna Tartare", price: "$24", desc: "Avocado, sesame, citrus ponzu" },
              { name: "Burrata & Heirloom Tomato", price: "$22", desc: "Basil pesto, balsamic glaze, pine nuts" },
              { name: "Crispy Calamari", price: "$19", desc: "Lemon aioli, spicy marinara, parsley" },
              { name: "Roasted Bone Marrow", price: "$26", desc: "Herb salad, toasted sourdough, sea salt" }
            ] 
          },
          { 
            category: "Mains", 
            items: [
              { name: "Wagyu Ribeye", price: "$85", desc: "A5 Japanese, black garlic, bone marrow butter" },
              { name: "Pan-Seared Salmon", price: "$42", desc: "Herb crust, lemon beurre blanc, asparagus" },
              { name: "Duck Confit", price: "$48", desc: "Orange reduction, parsnip puree, kale" },
              { name: "Lobster Thermidor", price: "$75", desc: "Creamy brandy sauce, gruyere, tarragon" },
              { name: "Wild Mushroom Risotto", price: "$38", desc: "Arborio rice, porcini, pecorino, truffle" }
            ] 
          },
          {
            category: "Desserts",
            items: [
              { name: "Molten Chocolate Lava", price: "$16", desc: "Vanilla bean gelato, raspberry coulis" },
              { name: "Classic Crème Brûlée", price: "$14", desc: "Tahitian vanilla, caramelized sugar" },
              { name: "Lemon Meringue Tart", price: "$15", desc: "Shortcrust pastry, tangy curd, toasted fluff" },
              { name: "Tiramisu Moderno", price: "$17", desc: "Espresso soak, mascarpone mousse, cocoa" }
            ]
          },
          {
            category: "Drinks",
            items: [
              { name: "The Golden Gimlet", price: "$18", desc: "Gin, lime, house-made gold syrup" },
              { name: "Smoked Old Fashioned", price: "$20", desc: "Bourbon, bitters, hickory smoke" },
              { name: "Vintage Chardonnay", price: "$24", desc: "Napa Valley, 2019, oaky finish" },
              { name: "Midnight Espresso Martini", price: "$19", desc: "Vodka, fresh espresso, kahlua" },
              { name: "Sparkling Hibiscus", price: "$12", desc: "Non-alcoholic, lime, botanical extracts" }
            ]
          }
        ],
        gallery: [
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1550966842-28474600e17d?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800"
        ],
        location: {
          address: "123 Culinary Way, Gastronomy City, GC 10293",
          phone: "(555) 123-4567",
          hours: [
            { day: "Mon - Thu", time: "5:00 PM - 10:00 PM" },
            { day: "Fri - Sat", time: "5:00 PM - 11:30 PM" },
            { day: "Sunday", time: "4:00 PM - 9:00 PM" }
          ]
        },
        reviews: [{ author: "Sarah M.", rating: 5, text: "Best dining experience in the city. The 3D menu is incredible." }, { author: "James K.", rating: 5, text: "Reservation system is so easy to use. Food was perfection." }],
        cta: { headline: "Ready to seat your guests?", button: "Get This Template" }
      }
    },
    {
      id: 2,
      title: "Retail Hub",
      category: "Retail",
      icon: <ShoppingBag className="text-[#00D1FF]" />,
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
          { name: "Noir Classic Sneakers", price: "$189", oldPrice: "$260", badge: "New" },
          { name: "Steel Mesh Hoodie", price: "$145", oldPrice: "$200", badge: null },
        ],
        features: [{ icon: "🚚", title: "Free Shipping", desc: "On orders over $100" }, { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" }, { icon: "🔒", title: "Secure Checkout", desc: "256-bit encryption" }],
        cta: { headline: "Ready to open your store?", button: "Get This Template" }
      }
    },
    {
      id: 3,
      title: "Corporate Vision",
      category: "Professional Services",
      icon: <Briefcase className="text-[#00D1FF]" />,
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
        services: [{ title: "Growth Strategy", desc: "Data-driven frameworks for sustainable scaling" }, { title: "Digital Transformation", desc: "End-to-end technology modernization" }, { title: "M&A Advisory", desc: "Strategic merger and acquisition consulting" }],
        testimonials: [{ quote: "Apex transformed our entire go-to-market strategy.", author: "CTO, Fortune 500 fintech firm" }, { quote: "The ROI exceeded our projections by 340%.", author: "VP Marketing, global retail brand" }],
        cta: { headline: "Ready to elevate your brand?", button: "Get This Template" }
      }
    },
    {
      id: 4,
      title: "Local Growth",
      category: "Small Business",
      icon: <Store className="text-[#00D1FF]" />,
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
        services: [{ name: "Plumbing", icon: "🔧", desc: "Leaks, clogs, installations" }, { name: "Electrical", icon: "⚡", desc: "Wiring, panels, fixtures" }, { name: "HVAC", icon: "❄️", desc: "AC, heating, ventilation" }, { name: "Roofing", icon: "🏠", desc: "Repairs, replacements, inspections" }],
        reviews: [{ name: "Mike R.", rating: 5, text: "Showed up same day, fixed the problem in under an hour. Fair price.", service: "Plumbing" }, { name: "Lisa T.", rating: 5, text: "Best HVAC company I've ever dealt with. Professional and clean.", service: "HVAC" }],
        cta: { headline: "Ready to grow your local business?", button: "Get This Template" }
      }
    }
  ];

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
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedTemplate(template); }}
                    className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-[#00D1FF] hover:text-white transition-colors"
                  >
                    View Template
                  </button>
                  <div className="text-white/30 group-hover:text-[#00D1FF] transition-colors">
                    <ArrowRight size={20} />
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
          <button
            onClick={() => alert('This feature is not active in the demo version. Sign up to unlock full custom template access!')}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-bold text-lg"
          >
            Let's Talk Custom
          </button>
        </div>
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
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl my-8"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#00D1FF]/10 rounded-lg text-[#00D1FF]">
                    {selectedTemplate.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{selectedTemplate.title}</h3>
                    <span className="text-xs text-white/40 uppercase tracking-widest">{selectedTemplate.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="p-2 bg-white/5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Demo Website Preview */}
              <div className="p-6 md:p-10 bg-black">
                {/* Hero */}
                <div className="rounded-[24px] overflow-hidden border border-white/10 mb-8 relative">
                  <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] p-8 md:p-12 relative">
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#00D1FF]/20 text-[#00D1FF] text-xs font-bold rounded-full uppercase tracking-widest">
                      {selectedTemplate.demo.hero.badge}
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8">
                      <div>
                        <h2 className="text-3xl md:text-5xl font-black mb-3">{selectedTemplate.demo.hero.name}</h2>
                        <p className="text-xl md:text-2xl text-white/60 mb-6">{selectedTemplate.demo.hero.tagline}</p>
                        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-bold">
                          {selectedTemplate.demo.hero.cta}
                        </button>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">🏠</div>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">📱</div>
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">✨</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {selectedTemplate.demo.stats.map((stat: any) => (
                    <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                      <div className="text-2xl md:text-3xl font-black text-[#00D1FF] mb-1">{stat.value}</div>
                      <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Dynamic Content Based on Template Type */}
                {selectedTemplate.id === 1 && (
                  <div className="space-y-12">
                    {/* About Section */}
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white/5 rounded-2xl p-8 border border-white/10">
                      <div className="flex-1">
                        <h4 className="text-[#00D1FF] text-sm font-bold uppercase tracking-widest mb-2">{selectedTemplate.demo.about.title}</h4>
                        <p className="text-white/70 leading-relaxed">
                          {selectedTemplate.demo.about.text}
                        </p>
                      </div>
                      <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden border border-white/10">
                        <img src={selectedTemplate.demo.about.image} alt="Our Story" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Restaurant Menu */}
                    <div>
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Utensils size={18} className="text-[#00D1FF]" /> Full Menu
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedTemplate.demo.menu.map((section: any) => (
                          <div key={section.category} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00D1FF]/30 transition-colors">
                            <h5 className="text-[#00D1FF] text-sm font-bold uppercase tracking-widest mb-4">{section.category}</h5>
                            <div className="space-y-4">
                              {section.items.map((item: any) => (
                                <div key={item.name} className="flex justify-between items-start border-b border-white/5 pb-3">
                                  <div>
                                    <span className="font-semibold text-white/90">{item.name}</span>
                                    <p className="text-xs text-white/40 mt-1">{item.desc}</p>
                                  </div>
                                  <span className="text-[#00D1FF] font-bold ml-4">{item.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Reservation Form */}
                    <div className="bg-gradient-to-br from-[#00D1FF]/10 to-[#A855F7]/10 border border-white/10 rounded-2xl p-8">
                      <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold mb-2">Book Your Table</h4>
                        <p className="text-white/50 text-sm">Experience culinary perfection. Limited tables available daily.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00D1FF] outline-none" />
                        <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00D1FF] outline-none" />
                        <input type="date" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00D1FF] outline-none" />
                        <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#00D1FF] outline-none appearance-none">
                          <option>2 People</option>
                          <option>4 People</option>
                          <option>6+ People</option>
                        </select>
                        <button className="md:col-span-2 w-full py-4 rounded-xl bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-bold hover:opacity-90 transition-opacity">
                          Confirm Reservation
                        </button>
                      </div>
                    </div>

                    {/* Gallery Section */}
                    <div>
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Star size={18} className="text-[#00D1FF]" /> Gallery
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedTemplate.demo.gallery.map((img: string, i: number) => (
                          <div key={i} className="aspect-square rounded-xl overflow-hidden border border-white/10 group">
                            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Location & Hours */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                          <MapPin size={18} className="text-[#00D1FF]" /> Visit Us
                        </h4>
                        <p className="text-white/70 mb-4">{selectedTemplate.demo.location.address}</p>
                        <div className="flex items-center gap-2 text-[#00D1FF] font-bold">
                          <Phone size={16} />
                          {selectedTemplate.demo.location.phone}
                        </div>
                        <div className="mt-6 aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-white/20">
                          Interactive Map Placeholder
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                          <Clock size={18} className="text-[#00D1FF]" /> Opening Hours
                        </h4>
                        <div className="space-y-4">
                          {selectedTemplate.demo.location.hours.map((h: any, i: number) => (
                            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                              <span className="text-white/70">{h.day}</span>
                              <span className="font-bold">{h.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Reviews */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <CheckCircle size={18} className="text-[#00D1FF]" /> Guest Experiences
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedTemplate.demo.reviews.map((r: any, i: number) => (
                          <div key={i} className="bg-black/40 rounded-xl p-5 border border-white/5">
                            <div className="flex items-center gap-1 mb-2">
                              {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <p className="text-sm text-white/70 mb-3 italic">"{r.text}"</p>
                            <span className="text-xs font-semibold text-[#00D1FF]">— {r.author}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mini Footer */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs uppercase tracking-widest">
                      <div className="font-bold text-white/50">© 2024 The Golden Fork. All Rights Reserved.</div>
                      <div className="flex gap-6">
                        <span>Privacy</span>
                        <span>Terms</span>
                        <span>Cookies</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTemplate.id === 2 && (
                  <>
                    {/* Product Grid */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <ShoppingBag size={18} className="text-[#00D1FF]" /> Featured Products
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedTemplate.demo.products.map((p: any, i: number) => (
                          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 relative">
                              <div className="absolute inset-0 flex items-center justify-center text-5xl">👕</div>
                              {p.badge && (
                                <div className="absolute top-3 left-3 px-3 py-1 bg-[#00D1FF] text-black text-xs font-bold rounded-full">
                                  {p.badge}
                                </div>
                              )}
                            </div>
                            <div className="p-4">
                              <p className="font-semibold text-white/90 mb-1">{p.name}</p>
                              <div className="flex items-center gap-3">
                                <span className="text-[#00D1FF] font-bold">{p.price}</span>
                                <span className="text-white/30 text-sm line-through">{p.oldPrice}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Trust Badges */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedTemplate.demo.features.map((f: any, i: number) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                          <div className="text-3xl mb-3">{f.icon}</div>
                          <h5 className="font-bold mb-1">{f.title}</h5>
                          <p className="text-xs text-white/40">{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {selectedTemplate.id === 3 && (
                  <>
                    {/* Services */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Briefcase size={18} className="text-[#00D1FF]" /> Our Services
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedTemplate.demo.services.map((s: any, i: number) => (
                          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 flex items-center justify-center mb-4">
                              <ChevronRight size={20} className="text-[#00D1FF]" />
                            </div>
                            <h5 className="font-bold mb-2">{s.title}</h5>
                            <p className="text-sm text-white/50">{s.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedTemplate.demo.testimonials.map((t: any, i: number) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                          <p className="text-lg text-white/80 italic mb-4">"{t.quote}"</p>
                          <span className="text-xs font-semibold text-[#00D1FF] uppercase tracking-widest">— {t.author}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {selectedTemplate.id === 4 && (
                  <>
                    {/* Services Grid */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Store size={18} className="text-[#00D1FF]" /> Our Services
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedTemplate.demo.services.map((s: any, i: number) => (
                          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-[#00D1FF]/30 transition-colors">
                            <div className="text-3xl mb-3">{s.icon}</div>
                            <h5 className="font-bold text-sm mb-1">{s.name}</h5>
                            <p className="text-xs text-white/40">{s.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Reviews */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Star size={18} className="text-[#00D1FF]" /> What Customers Say
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedTemplate.demo.reviews.map((r: any, i: number) => (
                          <div key={i} className="bg-black/40 rounded-xl p-5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold">{r.name}</span>
                              <span className="text-xs text-[#00D1FF] bg-[#00D1FF]/10 px-2 py-1 rounded-full">{r.service}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-3">
                              {[...Array(r.rating)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <p className="text-sm text-white/70">"{r.text}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* CTA */}
                <div className="mt-8 text-center">
                  <h4 className="text-2xl font-bold mb-2">{selectedTemplate.demo.cta.headline}</h4>
                  <button
                    onClick={() => alert('This feature is not active in the demo version. Sign up to unlock full template access!')}
                    className="mt-4 px-10 py-4 rounded-full bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-bold text-lg inline-flex items-center gap-2"
                  >
                    {selectedTemplate.demo.cta.button} <ArrowRight size={20} />
                  </button>
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