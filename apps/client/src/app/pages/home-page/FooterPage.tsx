import Button from '@map-shared-components/Button';
import SocialMediaButtons from './components/SocialMediaButtons';

function Footer({ oneClick }: FooterProps) {
  return (
    <footer className='bg-[rgb(29,60,102)] text-[#CADEED] py-1 px-3  mx-auto w-full]'>
      <div className='container mx-auto flex justify-center  className=w-full sm:w-1/2 md:w-auto m-0.5'>
        <div className='text-center font-roboto '>
          <SocialMediaButtons />
          <div>
            <Button onClick={oneClick}>Info</Button>
            <span className='text-[#CADEED]'> · </span>
            <Button onClick={oneClick}>Support</Button>
            <span className='text-[#CADEED]'> · </span>
            <Button onClick={oneClick}>Marketing</Button>
          </div>
          <div>
            <Button onClick={oneClick}>Terms of Use</Button>
            <span className='text-[#CADEED]'> · </span>
            <Button onClick={oneClick}>Privacy Policy</Button>
          </div>
          <div>
            <p className='text-[#000000]'>© Hermes 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;