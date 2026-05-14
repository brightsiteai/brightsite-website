import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import RestaurantSolutions from '../components/RestaurantSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';
import TemplateShowcase from '../components/TemplateShowcase';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="restaurants">
        <RestaurantSolutions />
      </div>
      <TemplateShowcase />
      <Pricing />
      <ContactForm />
    </main>
  );
};

export default HomePage;
