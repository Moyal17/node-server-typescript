// models/user.ts
import mongoose, { Schema, Document } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {type: String, required: true, unique: true },
  firstName: {type: String, required: true },
  lastName: {type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
export default User;


