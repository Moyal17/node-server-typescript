import jwt from 'jsonwebtoken';
interface JwtPayload {
  id: string;
}

const JWT_SECRET = process.env.JWT_SECRET || ''; // Ensure you have a check or a fallback for the absence of JWT_SECRET

/**
 * Generates a JWT with the provided payload.
 * @param payload Data to include in the JWT.
 * @returns JWT as a string.
 */
export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

export const generateCookieToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
};

export const generateCookieRefreshToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '20d' });
};

/**
 * Verifies and decodes a JWT.
 * @param token The JWT to decode.
 * @returns Decoded JWT or null if verification fails.
 */
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};
