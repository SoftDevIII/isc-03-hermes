function ReferenceButton({ href = '', content }: ReferenceButtonProps) {
  return (
    <div className='opacity-50 transition duration-100 active:transform active:scale-90 cursor-pointer'>
      <a href={href}>{content}</a>
    </div>
  );
}

export default ReferenceButton;
