import FacebookLogo from '@/assets/facebook-logo.png';
import InstagramLogo from '@/assets/instagram-logo.png';
import TwitterLogo from '@/assets/twitter-logo.png';

function Footer() {
  return (
    <footer className='bg-blue-950'>
      <div className='container mx-auto flex justify-center'>
        <div className='w-full sm:w-1/2 md:w-auto'>
          <ul className='text-center'>
            <a href='https://es-la.facebook.com/'>
              <img
                src={FacebookLogo}
                alt='Facebook'
                className='inline-block w-10 h-10 mr-5  bg-white rounded-full m-3 '
              />
            </a>
            <a href='https://www.instagram.com/'>
              <img
                src={InstagramLogo}
                alt='Instagram'
                className='inline-block w-10 h-10 mr-5'
              />
            </a>
            <a href='https://twitter.com/?lang=ES'>
              <img
                src={TwitterLogo}
                alt='Twitter'
                className='inline-block w-10 h-10 mr-5 bg-white rounded-full '
              />
            </a>
            <li className='text-white'>
              <a href='/Info' className='hover:text-black m-0.5'>
                Info
              </a>
              <span className='text-white'> · </span>
              <a href='/Info' className='hover:text-black m-0.5'>
                Support
              </a>
              <span className='text-white'> · </span>
              <a href='/Info' className='hover:text-black m-0.5'>
                Marketing
              </a>
            </li>
            <li className='text-white'>
              <a href='/Terms of Use' className='hover:text-black m-0.5'>
                Terms of Use
              </a>
              <span className='text-white'> · </span>
              <a href='/Terms of Use' className='hover:text-black m-0.5'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-gray-900'>© Hermes 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
