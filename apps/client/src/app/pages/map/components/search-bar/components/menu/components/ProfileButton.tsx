import profile from '@map-assets/profile.svg';
import Button from '@map-shared-components/Button';

function ProfileButton({ onClick }: ProfileButtonProps) {
  return (
    <Button onClick={onClick} className='w-full md:p-2'>
      <img src={profile} alt='user profile' draggable={false} />
    </Button>
  );
}
export default ProfileButton;
