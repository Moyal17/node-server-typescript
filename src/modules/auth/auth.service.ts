import bcrypt from 'bcryptjs';
import User from '../users/user.model'; // Assuming you have a Mongoose model for User
import IUser from '../users/user.interface'; // Assuming you have a Mongoose model for User
import { generateCookieRefreshToken, generateCookieToken, generateToken } from '../../config/jwt';

export class AuthService {
  async signup(userData: { password: string; name: string; email: string }): Promise<Partial<IUser>> {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = new User({
        name: userData.name,
        email: userData.email,
        hash: hashedPassword,
      });
      return await newUser.save();
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async loginUser(user: Partial<IUser>): Promise<{ accessToken: string, refreshToken: string }> {
    try {
      // const accessToken = generateCookieToken({ id: user._id as string });
      const refreshToken = generateCookieRefreshToken({ id: user._id as string });
      const accessToken = generateToken({ id: user._id as string });
      return { accessToken, refreshToken };
    } catch (error) {
      return error;
    }
  }

  // Other methods related to users (e.g., search, login, password reset, etc.)
}
