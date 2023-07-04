function ReferenceButton({
  href = '',
  content,
  setIsOpen = () => {}
}: ReferenceButtonProps) {
  return (
    <div className='opacity-50 transition duration-100 active:transform active:scale-90 cursor-pointer'>
      <a href={href} onClick={() => setIsOpen(false)}>
        {content}
      </a>
    </div>
  );
}

export default ReferenceButton;
