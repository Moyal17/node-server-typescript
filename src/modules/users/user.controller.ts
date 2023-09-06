import { Request, Response } from 'express';
import { UserService } from './user.service';
import { validateCreateUser } from './dto';
const userService = new UserService();

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
    throw new Error(
      `Error fetching user with ID ${req.params.id}: ${error.message}`,
    );
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { error } = validateCreateUser(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const userBody = req.body;
    const user = await userService.createUser(userBody);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
    throw new Error(
      `Error fetching user with ID ${req.params.id}: ${error.message}`,
    );
  }
};

// ... more routes for creating, updating, deleting users
