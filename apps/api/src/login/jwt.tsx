import jwt, { Secret, SignOptions } from 'jsonwebtoken';

/**
 * secretKey is a Key for the aplication jwt.
 */
const secretKey: Secret = 'your_secret_password';

/**
 * Payload is an interface which contains the user data for the aplication jwt.
 */
interface Payload {
  username: string;
  password: string;
}

/**
 * generateToken function creates a jwt using user data recieved,
 * an expiration time and app's key.
 */
const generateToken = (
  username: string,
  password: string,
  expires: number
): string => {
  const payload: Payload = {
    username,
    password
  };

  const options: SignOptions = {
    expiresIn: expires
  };

  const token: string = jwt.sign(payload, secretKey, options);

  return token;
};

export default generateToken;
