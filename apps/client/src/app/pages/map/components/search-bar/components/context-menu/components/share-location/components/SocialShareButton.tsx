import Button from '@map-shared-components/Button';

function SocialShareButton({
  name,
  onClick,
  children
}: SocialShareButtonProps) {
  return (
    <div className='flex-col flex items-center justify-center p-2'>
      <Button
        className='grid place-items-center content-center text-[20px]'
        onClick={onClick}
      >
        {children}
      </Button>
      <span className='font-roboto text-center text-base'>{name}</span>
    </div>
  );
}

export default SocialShareButton;
