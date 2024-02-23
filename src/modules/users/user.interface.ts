import mongoose from 'mongoose';
import { AllowNullProperty } from '../shared/types';

interface IUser {
  _id?: mongoose.Types.ObjectId | string;
  name: string;
  hash: string;
  email: string;
  fullName?: string;
  // ... other fields with their types
}

type NullableIUser = AllowNullProperty<IUser>;
export default NullableIUser;
