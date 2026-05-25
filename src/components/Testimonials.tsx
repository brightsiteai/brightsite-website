import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, NexaGrowth",
    content: "Brightsite transformed our online presence. Their 3D animations aren't just eye candy; they actually increased our conversion rate by 45%. Highly recommended!",
    stars: 5
  },
  {
    name: "Marco Rossi",
    role: "Founder, Gusto Italian",
    content: "The restaurant integration was flawless. Our customers love the immersive menu experience. It's like they're already at our table before they even arrive.",
    stars: 5
  },
  {
    name: "Elena Vance",
    role: "Marketing Director, ArchiTech",
    content: "Working with Brightsite was the best decision we made this year. The storytelling scroll they built for our portfolio page is simply breathtaking.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="testimonials">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary-dark/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Visionaries</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how we've helped forward-thinking businesses elevate their digital experience to the premium tier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 flex flex-col h-full hover:border-primary/30 transition-colors duration-500"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cta fill-cta mr-1" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 -z-10" />
                <p className="text-text-primary italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="mt-auto flex items-center pt-6 border-t border-primary/10">
                <div className="w-10 h-10 rounded-full bg-gradient-teal flex items-center justify-center text-background font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
