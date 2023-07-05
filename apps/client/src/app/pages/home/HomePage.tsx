import AboutSection from '@home-components/sections/AboutSection';
import FunctionsSection from '@home-components/sections/FunctionsSection';
import HomeSection from '@home-components/sections/HomeSection';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function HomePage() {
  return (
    <div className='w-full grid absolute'>
      <Header />
      <HomeSection />
      <AboutSection />
      <FunctionsSection />
      <Footer />
    </div>
  );
}
export default HomePage;
