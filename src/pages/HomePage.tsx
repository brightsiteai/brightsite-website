import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import WhyBrightsite from '../components/WhyBrightsite';
import RestaurantSolutions from '../components/RestaurantSolutions';
import TemplateShowcase from '../components/TemplateShowcase';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

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
        <Portfolio />
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
