import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyBrightsite from '../components/WhyBrightsite';
import RestaurantSolutions from '../components/RestaurantSolutions';
import TemplateShowcase from '../components/TemplateShowcase';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

// Placeholder for Portfolio section (to be built by WebsiteBuilder or WebsiteBuilder-3)
const PortfolioPlaceholder = () => (
  <section id="portfolio" className="py-32 bg-background">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-6">Case Studies</h2>
      <h1 className="text-4xl md:text-6xl font-black mb-12 italic opacity-20">Portfolio Gallery (Coming Soon)</h1>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <main className="bg-background text-text-primary overflow-x-hidden">
      <div id="home">
        <Hero />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="process">
        <Process />
      </div>
      
      <div id="portfolio">
        <PortfolioPlaceholder />
      </div>

      <div id="why-us">
        <WhyBrightsite />
      </div>

      <div id="restaurants">
        <RestaurantSolutions />
      </div>

      <TemplateShowcase />
      
      <div id="pricing">
        <Pricing />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <CTA />
      
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
};

export default HomePage;
