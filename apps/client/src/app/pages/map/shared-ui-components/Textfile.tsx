function TextField({
  className,
  type,
  required,
  onInput,
  placeholder
}: TextFieldProps) {
  return (
    <div className={className}>
      <input
        type={type}
        required={required}
        className={className}
        onInput={onInput}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
