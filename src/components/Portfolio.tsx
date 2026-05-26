import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight, BarChart3, Zap, Globe, Target, Heart } from 'lucide-react';

const projects = [
  {
    title: "Urban Crust Pizzeria",
    category: "Restaurant Ecosystem",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { label: "Online Orders", value: "+145%", icon: Zap },
      { label: "Site Speed", value: "98/100", icon: BarChart3 }
    ],
    description: "A complete digital transformation for a local pizzeria, integrating DoorDash, Grubhub, and a custom 3D menu."
  },
  {
    title: "Nexus Tech Solutions",
    category: "SaaS Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { label: "Lead Gen", value: "+210%", icon: Zap },
      { label: "User Retention", value: "85%", icon: Heart }
    ],
    description: "Immersive WebGL dashboard and landing page that explains complex AI processes through visual storytelling."
  },
  {
    title: "Elite Fitness Lab",
    category: "E-commerce & Booking",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { label: "Conversion Rate", value: "4.8%", icon: Target },
      { label: "Mobile Traffic", value: "72%", icon: Globe }
    ],
    description: "High-performance booking system and product showcase with seamless Stripe integration."
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-surface border border-white/5 rounded-[32px] overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-xs font-bold tracking-widest uppercase text-primary">
          {project.category}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {project.metrics.map((metric: any, i: number) => (
            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary">
                <metric.icon size={16} />
                <span className="text-lg font-black">{metric.value}</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-text-secondary">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <button className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-primary transition-colors group/btn">
            View Case Study 
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <div className="p-3 rounded-full bg-white/5 border border-white/10 text-text-secondary group-hover:text-primary group-hover:border-primary/30 transition-all">
            <ExternalLink size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="portfolio" ref={containerRef} className="py-32 relative bg-background overflow-hidden">
      {/* Background large text */}
      <motion.div 
        style={{ x }}
        className="absolute top-20 left-0 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter"
      >
        Selected Work • Case Studies • Results • 
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6"
          >
            Proof of Excellence
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Turning <span className="gradient-text">Ambition</span> <br />
            Into Digital Reality.
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-text-secondary text-lg">Ready to see your project here?</p>
            <button className="btn-cta text-lg px-12 py-5 group">
              Start Your Transformation
              <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
