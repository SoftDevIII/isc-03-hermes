import AboutSection from '@home-components/sections/AboutSection';
import FunctionsSection from '@home-components/sections/FunctionsSection';
import HomeSection from '@home-components/sections/HomeSection';

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
