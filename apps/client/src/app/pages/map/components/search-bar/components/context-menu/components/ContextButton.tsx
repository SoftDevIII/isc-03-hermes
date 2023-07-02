import Button from '@map-shared-components/Button';

function ContextButton({
  children,
  handleClick,
  last = false
}: ContextButtonProps) {
  return (
    <Button
      onClick={handleClick}
      className={`block w-full text-left ${
        !last ? 'mb-3 border-b border-white/20' : ''
      } `}
    >
      {children}
    </Button>
  );
}

export default ContextButton;
