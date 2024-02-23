import { Request, Response } from 'express';
import { UserService } from './user.service';
const userService = new UserService();
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    if (!users) {
      return res.status(404).json({ message: 'users not found' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'getUsers', message: error.message });
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'getUserById', message: error.message });
  }
};
export const createUser = async (req: Request, res: Response) => {
  try {
    const userBody = req.body;
    const user = await userService.createUser(userBody);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'createUser', message: error.message });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.updateUser(userId, req.body);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { email, name, _id } = user;
    res.json({ email, name, _id });
  } catch (error) {
    res.status(500).json({ error: 'updateUser', message: error.message });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.deleteUser(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'deleteUser', message: error.message });
  }
};

// ... more routes for creating, updating, deleting users
