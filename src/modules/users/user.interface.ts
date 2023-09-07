import { Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  hash: string;
  email: string;
  fullName?: string;
  // ... other fields with their types
}

export default IUser;
