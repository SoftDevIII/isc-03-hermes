function handleSignUp(
  firstName: string,
  lastName: string,
  email: string,
  birthdate: string,
  country: string,
  userName: string,
  password: string,
  confPassword: string
) {
  const fNameRef = document.getElementById(firstName) as HTMLInputElement;
  const lNameRef = document.getElementById(lastName) as HTMLInputElement;
  const emailRef = document.getElementById(email) as HTMLInputElement;
  const bdRef = document.getElementById(birthdate) as HTMLInputElement;
  const countryRef = document.getElementById(country) as HTMLInputElement;
  const userRef = document.getElementById(userName) as HTMLInputElement;
  const passRef = document.getElementById(password) as HTMLInputElement;
  const cPassRef = document.getElementById(confPassword) as HTMLInputElement;

  const userData = {
    firstName: fNameRef.value,
    lastName: lNameRef.value,
    email: emailRef.value,
    birthdate: bdRef.value,
    country: countryRef.value,
    userName: userRef.value,
    password: passRef.value,
    confPassword: cPassRef.value
  };
  console.log(userData);
  return userData;
}

export default handleSignUp;
