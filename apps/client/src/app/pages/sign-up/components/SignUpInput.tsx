import LabelTextField from './LabelTextFile';

function SignUpInput({ classNameDiv, children, id, type }: SignUpImputProps) {
  return (
    <LabelTextField
      type={type}
      classNameTFI='rounded w-full'
      classNameTFD='w-full'
      classNameL='text-white'
      classNameDiv={classNameDiv}
      required
      id={id}
    >
      {children}
    </LabelTextField>
  );
}

export default SignUpInput;
