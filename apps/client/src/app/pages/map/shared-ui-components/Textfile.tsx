function TextField({
  classNameDiv,
  classNameInput,
  type,
  required,
  onInput,
<<<<<<< HEAD
  placeholder
=======
  placeholder,
  id,
  ref
>>>>>>> 525d4bc (fix: solution to comment problems)
}: TextFieldProps) {
  return (
    <div className={classNameDiv}>
      <input
        type={type}
        required={required}
        className={classNameInput}
        onInput={onInput}
        placeholder={placeholder}
<<<<<<< HEAD
=======
        id={id}
        ref={ref}
>>>>>>> 525d4bc (fix: solution to comment problems)
      />
    </div>
  );
}

export default TextField;
