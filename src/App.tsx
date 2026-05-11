
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero3D';
import WhyChooseUs from './components/WhyChooseUs';
import RestaurantSolutions from './components/RestaurantSolutions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TemplateShowcase from './components/TemplateShowcase';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

const Home = () => (
  <main>
    <Hero />
    <WhyChooseUs />
    <RestaurantSolutions />
    <Pricing />
    <ContactForm />
  </main>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<TemplateShowcase />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
