import Button from '@map-shared-components/Button';

function SocialButton({ icon, onClick }: SocialButtonProps) {
  return (
    <Button onClick={onClick}>
      <img
        src={icon}
        alt={icon}
        className='inline-block w-6 h-6 mr-2 bg-white rounded-full  '
      />
    </Button>
  );
}

export default SocialButton;
