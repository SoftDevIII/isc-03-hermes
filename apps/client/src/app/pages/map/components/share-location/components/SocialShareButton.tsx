import Button from '@map-shared-components/Button';
import Image from '@map-shared-components/Image';

function SocialShareButton({ name, image, onClick }: SocialShareButtonProps) {
  return (
    <div className='flex-col flex items-center justify-center'>
      <Button
        className='items-center justify-center bg-white w-20 m-4'
        onClick={onClick}
      >
        <Image className='rounded-full' src={image} />
      </Button>
      <span className='font-roboto text-center text-base'>{name}</span>
    </div>
  );
}

export default SocialShareButton;
