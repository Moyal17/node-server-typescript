import User from './user.model'; // Assuming you have a Mongoose model for User
import IUser from './user.interface'; // Assuming you have a Mongoose model for User

export class UserService {
  async getUsers(): Promise<Partial<IUser[]> | null> {
    try {
      const users = await User.find({}).exec();

      return users;
    } catch (error) {
      return error;
    }
  }

  // Fetch a user by their ID
  async getUserById(userId: string): Promise<Partial<IUser> | null> {
    try {
      const user = await User.findById(userId).exec();

      return user;
    } catch (error) {
      return error;
    }
  }

  // Create a new user
  async createUser(userData: IUser): Promise<Partial<IUser>> {
    try {
      const newUser = new User(userData);
      return await newUser.save();
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // Update a user
  async updateUser(userId: string, updatedData: Partial<IUser>): Promise<Partial<IUser> | null> {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
        new: true,
      }).exec();

      return updatedUser;
    } catch (error) {
      throw new Error(`Error updating user ${userId}: ${error.message}`);
    }
  }

  // Delete a user
  async deleteUser(userId: string): Promise<Partial<IUser> | null> {
    try {
      const deletedUser = await User.findByIdAndDelete(userId).exec();
      return deletedUser;
    } catch (error) {
      throw new Error(`Error deleting user ${userId}: ${error.message}`);
    }
  }

  // Other methods related to users (e.g., search, login, password reset, etc.)
}
