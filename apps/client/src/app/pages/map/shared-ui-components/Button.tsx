function Button({
  children,
  onClick,
  className,
  disabled = false
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
    >
      {children}
    </button>
  );
}

export default Button;
