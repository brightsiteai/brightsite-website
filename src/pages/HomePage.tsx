import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import RestaurantSolutions from '../components/RestaurantSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <RestaurantSolutions />
      <Pricing />
      <ContactForm />
    </main>
  );
};

export default HomePage;
