function TextField({
  classNameDiv,
  classNameInput,
  type,
  required,
  onInput,
  placeholder
  placeholder,
  id,
  ref
}: TextFieldProps) {
  return (
    <div className={classNameDiv}>
      <input
        type={type}
        required={required}
        className={classNameInput}
        onInput={onInput}
        placeholder={placeholder}
        id={id}
        ref={ref}
      />
    </div>
  );
}

export default TextField;
