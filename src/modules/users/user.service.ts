import User from './user.model'; // Assuming you have a Mongoose model for User
import IUser from './user.interface'; // Assuming you have a Mongoose model for User

export class UserService {
  // Fetch a user by their ID
  async getUserById(userId: string): Promise<IUser | null> {
    try {
      const user = await User.findById(userId).exec();
      console.log('getUserById: ', user)
      return user;
    } catch (error) {
      throw new Error(`Error fetching user with ID ${userId}: ${error.message}`);
    }
  }

  // Create a new user
  async createUser(userData: IUser): Promise<IUser> {
    try {
      const newUser = new User(userData);
      const res = await newUser.save();
      console.log('createUser: ', res)
      return res;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // Update a user
  async updateUser(userId: string, updatedData: Partial<IUser>): Promise<IUser | null> {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true }).exec();
      console.log('updatedUser: ', updatedUser)
      return updatedUser;
    } catch (error) {
      throw new Error(`Error updating user with ID ${userId}: ${error.message}`);
    }
  }

  // Delete a user
  async deleteUser(userId: string): Promise<IUser | null> {
    try {
      const deletedUser = await User.findByIdAndRemove(userId).exec();
      console.log('deletedUser: ', deletedUser)
      return deletedUser;
    } catch (error) {
      throw new Error(`Error deleting user with ID ${userId}: ${error.message}`);
    }
  }

  // Other methods related to users (e.g., search, login, password reset, etc.)
}

