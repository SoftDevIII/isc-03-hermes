import FacebookLogo from '@home-assets/facebook-logo.png';
import InstagramLogo from '@home-assets/instagram-logo.png';
import TwitterLogo from '@home-assets/twitter-logo.png';
import useSocialMedia from '../hooks/useSocialMedia';
import SocialButton from './SocialButton';

function SocialMediaButtons() {
  const { oneFacebookClick, oneInstagramClick, oneTwitterClick } =
    useSocialMedia();

  return (
    <div className='container mx-auto flex justify-center  className=w-full sm:w-1/2 md:w-auto m-0.5'>
      <div className='text-center font-roboto '>
        <div>
          <SocialButton icon={FacebookLogo} onClick={oneFacebookClick} />
          <SocialButton icon={InstagramLogo} onClick={oneInstagramClick} />
          <SocialButton icon={TwitterLogo} onClick={oneTwitterClick} />
        </div>
      </div>
    </div>
  );
}

export default SocialMediaButtons;
