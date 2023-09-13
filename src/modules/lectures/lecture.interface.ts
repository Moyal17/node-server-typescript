import mongoose from 'mongoose';

interface ILecture {
  _id?: mongoose.Types.ObjectId;
  sectionId?: mongoose.Types.ObjectId | string;
  uri?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  template?: string;
  duration?: number;
  type?: string; // enum: video / article
  category?: mongoose.Types.ObjectId[];
  thumbnail?: mongoose.Types.ObjectId;
  source?: mongoose.Types.ObjectId;
  isDraft?: boolean;
  isRemoved?: boolean;
  publishedAt?: Date | string;
  updatedAt?: Date | string;
  createdAt?: Date | string;
  lectures?: Partial<ILecture>[];
}

export default ILecture;
