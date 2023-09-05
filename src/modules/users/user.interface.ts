import { Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  fullName?: string; // ? indicates it's an optional property
  createdAt: Date;
  // ... other fields with their types
}

export default IUser