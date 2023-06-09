function Button({
  children,
  onClick,
  className,
  disabled = false,
  addRef = undefined
}: ButtonProps) {
  return (
    <button
      className={`${className?.trim() || ''} ${
        disabled
          ? 'opacity-50 cursor-default'
          : 'transition duration-100 active:transform active:scale-90 cursor-pointer'
      }`}
      type='button'
      onClick={onClick}
      disabled={disabled}
      ref={addRef ? ref => addRef({ ref }) : () => {}}
    >
      {children}
    </button>
  );
}

export default Button;
