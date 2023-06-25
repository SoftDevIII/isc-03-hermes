import TextField from './Textfile';

function LabelTextField({
  classNameTF,
  type,
  required,
  placeholder,
  onInput,
  classNameL,
  children,
  id
}: LabelTextFieldProps) {
  return (
    <div>
      <h1 className={classNameL}>{children}</h1>
      <TextField
        type={type}
        required={required}
        placeholder={placeholder}
        className={classNameTF}
        onInput={onInput}
        id={id}
      />
    </div>
  );
}

export default LabelTextField;
