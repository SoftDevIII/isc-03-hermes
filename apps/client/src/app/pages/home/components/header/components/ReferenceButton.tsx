function ReferenceButton({ ref = '', content }: ReferenceButtonProps) {
  return (
    <div className='opacity-50 transition duration-100 active:transform active:scale-90 cursor-pointer'>
      <a href={ref}>{content}</a>
    </div>
  );
}

export default ReferenceButton;
