function Button({
  children,
  onClick,
  className,
  disabled = false
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer  ${className?.trim() || ''} ${
        disabled
          ? 'opacity-50'
          : 'transition duration-100 active:transform active:scale-90'
      }`}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
