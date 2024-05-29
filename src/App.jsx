import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HobbyCueNavbar from './Navbar';
import HeroComponent from './Hero';
import FeatureComponent from './Feature';
import TestimonialComponent from './Testimonial1';
import TestimonialComponentII from './Testimonial2';
import End from './End';
import Footer from './Footer';

function App() {
  return (
    <>
      <HobbyCueNavbar />
      <HeroComponent />
      <FeatureComponent />
      <TestimonialComponent />
      <TestimonialComponentII />
      <End />
      <Footer />
    </>
  );
}

export default App;
