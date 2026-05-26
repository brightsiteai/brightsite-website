import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "The Golden Fork",
    category: "Hospitality / Restaurant Pro",
    description: "A premium 3D dining experience with integrated reservation systems and interactive menus.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
    color: "#F59E0B",
    link: "/templates"
  },
  {
    title: "Aura Cosmetics",
    category: "E-Commerce / 3D Product",
    description: "High-end beauty brand featuring real-time 3D product previews and AI-driven shade matching.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200",
    color: "#00D4AA",
    link: "/templates"
  },
  {
    title: "Nexus Tech",
    category: "SaaS / Service Business",
    description: "Enterprise solutions platform with immersive data visualization and autonomous support agents.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    color: "#3B82F6",
    link: "/templates"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6"
            >
              Selected Works
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black leading-tight"
            >
              Building the <span className="gradient-text">New Reality</span> <br />
              of Web Engineering.
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="group flex items-center gap-2 text-text-primary font-bold hover:text-primary transition-colors">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-3xl aspect-[16/10]">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Link */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-background shadow-2xl">
                      <ExternalLink size={32} />
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="flex-1 max-w-xl">
                <div className="text-sm font-bold text-primary mb-4 tracking-widest uppercase">{project.category}</div>
                <h3 className="text-3xl md:text-5xl font-black mb-6 hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-xl text-text-secondary leading-relaxed mb-10">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <button className="px-8 py-4 rounded-xl bg-surface border border-white/10 text-text-primary font-bold hover:bg-white/5 transition-all flex items-center gap-2 group">
                    Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-black text-background">
                      +12
                    </div>
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

export default Portfolio;
