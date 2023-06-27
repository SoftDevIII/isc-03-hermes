function handleLogin(email: string, password: string) {
  const emailRef = document.getElementById(email) as HTMLInputElement;
  const passwordRef = document.getElementById(password) as HTMLInputElement;
  return {
    email: emailRef.value,
    password: passwordRef.value
  };
  console.log(userData);
  return userData;
}

export default handleLogin;
