import Button from '@map-shared-components/Button';
import FacebookLogo from '@/assets/facebook-logo.png';
import InstagramLogo from '@/assets/instagram-logo.png';
import TwitterLogo from '@/assets/twitter-logo.png';

function SocialMediaButtons() {
  const oneFacebookClick = () => {
    window.location.href = 'https://es-la.facebook.com/';
  };
  const oneInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/';
  };
  const oneeTwitterClick = () => {
    window.location.href = 'https://twitter.com/';
  };

  return (
    <div className='container mx-auto flex justify-center  className=w-full sm:w-1/2 md:w-auto m-0.5'>
      <div className='text-center font-roboto '>
        <div>
          <Button onClick={oneFacebookClick}>
            <img
              src={FacebookLogo}
              alt='Facebook'
              className='inline-block w-6 h-6 mr-2 bg-white rounded-full  '
            />
          </Button>
          <Button onClick={oneInstagramClick}>
            <img
              src={InstagramLogo}
              alt='Instagram'
              className='inline-block w-6 h-6 mr-2 bg-white rounded-full  p-0.25'
            />
          </Button>
          <Button onClick={oneeTwitterClick}>
            <img
              src={TwitterLogo}
              alt='Twitter'
              className='inline-block w-6 h-6 mr-2 bg-white rounded-full p-0.25'
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaButtons;
