function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`cursorPointer transition duration-100 active:transform active:scale-90 ${
        className?.trim() || ''
      }`}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
