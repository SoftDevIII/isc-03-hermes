function TextField({
  className,
  type,
  required,
  onInput,
  placeholder,
  id
}: TextFieldProps) {
  return (
    <div className={className}>
      <input
        type={type}
        required={required}
        className={className}
        onInput={onInput}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

export default TextField;
