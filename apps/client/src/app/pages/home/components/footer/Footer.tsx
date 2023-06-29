import SocialMediaButtons from './components/SocialMediaButtons';
import SupportButtons from './components/SupportButtons';

function Footer() {
  return (
    <footer className='bg-[rgb(29,60,102)] text-[#CADEED] py-1 px-3  mx-auto w-full]'>
      <div className='container mx-auto flex flex-col justify-center  className=w-full sm:w-1/2 md:w-auto m-0.5'>
        <SocialMediaButtons />
        <SupportButtons />
      </div>
    </footer>
  );
}

export default Footer;
