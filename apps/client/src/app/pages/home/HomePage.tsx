import AboutSection from '@home-sections/AboutSection';
import FunctionsSection from '@home-sections/FunctionsSection';
import HomeSection from '@home-sections/HomeSection';

function HomePage() {
  return (
    <div className='w-full grid'>
      <HomeSection />
      <AboutSection />
      <FunctionsSection />
    </div>
  );
}
export default HomePage;
