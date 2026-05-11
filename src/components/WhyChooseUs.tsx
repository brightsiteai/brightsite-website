
import { motion } from 'framer-motion';
import { Cpu, Box, Globe, Shield, Users, LineChart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: '3D Immersive Design',
      description: 'We don\'t just build pages; we build worlds. High-performance WebGL experiences that captivate.',
      icon: <Box className="w-6 h-6 text-primary" />,
    },
    {
      title: 'AI Integrated Workforce',
      description: 'Your website is your best employee. Automated lead gen, customer support, and data analysis.',
      icon: <Cpu className="w-6 h-6 text-secondary" />,
    },
    {
      title: 'Enterprise Infrastructure',
      description: 'Secure, scalable, and lightning fast. Built on the same tech as the world\'s biggest startups.',
      icon: <Globe className="w-6 h-6 text-blue-400" />,
    },
    {
      title: 'Conversion Focused',
      description: 'Every pixel is designed to drive action. We turn visitors into loyal customers automatically.',
      icon: <LineChart className="w-6 h-6 text-green-400" />,
    },
    {
      title: 'Dedicated Concierge',
      description: 'Personalized support from our AI-human hybrid team. We handle the technical, you handle the growth.',
      icon: <Users className="w-6 h-6 text-purple-400" />,
    },
    {
      title: 'Ironclad Security',
      description: 'Continuous monitoring and threat protection for your digital assets and client data.',
      icon: <Shield className="w-6 h-6 text-red-400" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-6">The Future of the <br /><span className="gradient-text">Web is Here.</span></h2>
            <p className="text-gray-400 text-lg">Brightsite combines cutting-edge 3D visuals with autonomous AI agents to create the first truly digital workforce for your business.</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="h-32 bg-primary/10 rounded-2xl border border-primary/20 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-primary">99.9%</span>
              <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Uptime</span>
            </div>
            <div className="h-32 bg-secondary/10 rounded-2xl border border-secondary/20 flex flex-col items-center justify-center mt-8">
              <span className="text-3xl font-black text-secondary">10x</span>
              <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Engagement</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default WhyChooseUs;
