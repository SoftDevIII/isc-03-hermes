import Button from '@map-shared-components/Button';

function CopyLinkButton({ children, onClick }: CopyLinkButtonProps) {
  return (
    <Button
      onClick={onClick}
      className=' text-[15px] h-8 w-8 rounded-full bg-black/50 text-white
      grid place-items-center hover:bg-black/70 active:bg-black/90 m-auto'
    >
      {children}
    </Button>
  );
}

export default CopyLinkButton;
