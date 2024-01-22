import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import IUser from '../users/user.interface';
import { verifyRefreshToken } from '../../config/jwt';
const authService = new AuthService();

export const signup = async (req: Request, res: Response) => {
  try {
    const userBody = req.body;
    const user = await authService.signup(userBody);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'createUser', message: error.message });
  }
};
export const loginUser = async (req: Request, res: Response) => {
  try {
    const userBody = req.user as IUser;
    const { accessToken, refreshToken } = await authService.loginUser(userBody);
    if (!accessToken) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { name, email } = userBody;
    res.json({ accessToken, refreshToken, name, email });
  } catch (error) {
    res.status(500).json({ error: 'getUserById', message: error.message });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.body.refresh;
    const result = verifyRefreshToken(refreshToken);
    const userBody = req.user as IUser;
    const { accessToken } = await authService.loginUser(userBody);
    if (!accessToken) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: 'getUserById', message: error.message });
  }
};
