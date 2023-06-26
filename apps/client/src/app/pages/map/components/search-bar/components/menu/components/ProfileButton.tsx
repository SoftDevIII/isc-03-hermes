import profile from '@map-assets/user.png';
import Button from '@map-shared-components/Button';

function ProfileButton({ onClick }: ProfileButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='w-8 h-8 portrait:md:w-12 portrait:md:h-12'
    >
      <img src={profile} alt='user profile' draggable={false} />
    </Button>
  );
}
export default ProfileButton;
