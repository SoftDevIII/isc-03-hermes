import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';

function HomePage() {
  return (
    <div className='h-screen grid'>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}
export default HomePage;
