import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import WhyBrightsite from '../components/WhyBrightsite';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

// Placeholders for sections built by other agents
const ServicesPlaceholder = () => (
  <section id="services" className="py-24 bg-background flex items-center justify-center border-y border-primary/5">
    <div className="text-center">
      <h2 className="text-4xl font-bold opacity-20 italic">Services Section (In Development by WebsiteBuilder)</h2>
    </div>
  </section>
);

const ProcessPlaceholder = () => (
  <section id="process" className="py-24 bg-surface/20 flex items-center justify-center border-y border-primary/5">
    <div className="text-center">
      <h2 className="text-4xl font-bold opacity-20 italic">Process Section (In Development by WebsiteBuilder-2)</h2>
    </div>
  </section>
);

const PortfolioPlaceholder = () => (
  <section id="portfolio" className="py-24 bg-background flex items-center justify-center border-y border-primary/5">
    <div className="text-center">
      <h2 className="text-4xl font-bold opacity-20 italic">Portfolio Section (In Development by WebsiteBuilder-2)</h2>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <main className="relative">
      {/* 
        Section IDs:
        - home (in Hero)
        - services
        - process
        - portfolio
        - why-us
        - pricing
        - testimonials
        - contact (in ContactForm)
      */}
      
      <div id="home">
        <Hero />
      </div>
      
      <ServicesPlaceholder />
      
      <ProcessPlaceholder />
      
      <PortfolioPlaceholder />
      
      <div id="why-us">
        <WhyBrightsite />
      </div>
      
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
