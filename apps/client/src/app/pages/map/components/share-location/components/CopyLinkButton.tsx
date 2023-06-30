import Button from '@map-shared-components/Button';

function CopyLinkButton({ children, onClick }: CopyLinkButtonProps) {
  return (
    <>
      <Button
        onClick={onClick}
        className='h-12 w-12 ml-4 rounded-full bg-black/50 text-white sm:w-10 sm:h-10 sm:text-[24px] grid place-items-center hover:bg-black/70 active:bg-black/90'
      >
        {children}
      </Button>
    </>
  );
}

export default CopyLinkButton;
