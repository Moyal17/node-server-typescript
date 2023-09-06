import bcrypt from 'bcryptjs';
import User from '../users/user.model'; // Assuming you have a Mongoose model for User
import IUser from '../users/user.interface'; // Assuming you have a Mongoose model for User
import { generateToken } from '../../config/jwt';

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

  async loginUser(user: Partial<IUser>): Promise<string> {
    try {
      return generateToken({ id: user._id });
    } catch (error) {
      return error;
    }
  }

  // Other methods related to users (e.g., search, login, password reset, etc.)
}
