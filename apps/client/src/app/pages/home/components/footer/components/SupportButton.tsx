function SupportButton({ title, isLast = false }: SupportButtonProps) {
  return (
    <div>
      <button type='button'>{title}</button>
      {!isLast && <span className='text-[#CADEED]'> • </span>}
    </div>
  );
}

export default SupportButton;
