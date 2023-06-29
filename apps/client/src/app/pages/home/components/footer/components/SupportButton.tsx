import Button from '@map-shared-components/Button';

function SupportButton({ title, isLast = false }: SupportButtonProps) {
  return (
    <div>
      <Button className='font-roboto' onClick={() => {}}>
        {title}
      </Button>
      {!isLast && <span className='text-[#CADEED]'> • </span>}
    </div>
  );
}

export default SupportButton;
