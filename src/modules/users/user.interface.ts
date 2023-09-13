import mongoose from 'mongoose';

interface IUser {
  _id?: mongoose.Types.ObjectId | string;
  name: string;
  hash: string;
  email: string;
  fullName?: string;
  // ... other fields with their types
}

export default IUser;
