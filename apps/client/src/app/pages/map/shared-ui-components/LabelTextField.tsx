import TextField from './Textfile';

function LabelTextField({
  classNameTFI,
  classNameTFD,
  classNameDiv,
  type,
  required,
  placeholder,
  onInput,
  classNameL,
  children,
  id
}: LabelTextFieldProps) {
  return (
    <div className={classNameDiv}>
      <h1 className={classNameL}>{children}</h1>
      <TextField
        type={type}
        required={required}
        placeholder={placeholder}
        classNameDiv={classNameTFD}
        classNameInput={classNameTFI}
        onInput={onInput}
        id={id}
      />
    </div>
  );
}

export default LabelTextField;
