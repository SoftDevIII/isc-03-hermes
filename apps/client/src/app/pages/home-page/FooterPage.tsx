import FacebookLogo from '@/assets/facebook-logo.png';
import InstagramLogo from '@/assets/instagram-logo.png';
import TwitterLogo from '@/assets/twitter-logo.png';
import Button from '../map/shared-ui-components/Button';

function Footer({ handleClick }: FooterProps) {
  const handleFacebookClick = () => {
    window.location.href = 'https://es-la.facebook.com/';
  };
  const handleTwitterClick = () => {
    window.location.href = 'https://twitter.com/';
  };
  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/';
  };
  return (
    <footer className='bg-[rgb(29,60,102)] text-[#CADEED] py-1 px-3]'>
      <div className='container mx-auto flex justify-center'>
        <div className='text-center m-1'>
          <div className='w-full sm:w-1/2 md:w-auto '>
            <Button onClick={handleFacebookClick}>
              <img
                src={FacebookLogo}
                alt='Facebook'
                className='inline-block w-10 h-10 mr-5 bg-white rounded-full  '
              />
            </Button>
            <Button onClick={handleInstagramClick}>
              <img
                src={InstagramLogo}
                alt='Instagram'
                className='inline-block w-10 h-10 mr-5 bg-white rounded-full  p-0.5'
              />
            </Button>
            <Button onClick={handleTwitterClick}>
              <img
                src={TwitterLogo}
                alt='Twitter'
                className='inline-block w-10 h-10 mr-5 bg-white rounded-full p-0.5'
              />
            </Button>
          </div>
          <div className='w-full sm:w-1/2 md:w-auto m-1'>
            <Button onClick={handleClick}>Info</Button>
            <span className='text-[#CADEED]'> · </span>
            <Button onClick={handleClick}>Support</Button>
            <span className='text-[#CADEED]'> · </span>
            <Button onClick={handleClick}>Marketing</Button>
          </div>
          <div className='w-full sm:w-1/2 md:w-auto'>
            <Button onClick={handleClick}>Terms of Use</Button>
            <span className='text-[#CADEED]'> · </span>
            <Button onClick={handleClick}>Privacy Policy</Button>
          </div>
          <div>
            <p className='text-[#000000] font-bold'>© Hermes 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
