import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  hash: string;
  email: string;
  fullName?: string;
  // ... other fields with their types
}

export default IUser;
