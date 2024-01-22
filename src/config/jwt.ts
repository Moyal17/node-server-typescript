import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
}

const JWT_SECRET = process.env.JWT_SECRET || ''; // Ensure you have a check or a fallback for the absence of JWT_SECRET
const JWT_REFRESH_ECRET = process.env.JWT_REFRESH_ECRET || ''; // Ensure you have a check or a fallback for the absence of JWT_SECRET

/**
 * Generates a JWT with the provided payload.
 * @param payload Data to include in the JWT.
 * @returns JWT as a string.
 */
export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};

export const generateCookieToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
};

export const generateRefreshToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '20d' });
};

/**
 * Verifies and decodes a JWT.
 * @param token The JWT to decode.
 * @returns Decoded JWT or null if verification fails.
 */
export const verifyRefreshToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_REFRESH_ECRET) as JwtPayload;
  } catch (error) {
    return null;
  }
};
