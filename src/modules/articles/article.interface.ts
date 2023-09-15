import mongoose from 'mongoose';
interface IArticle {
  _id: mongoose.Types.ObjectId | string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  language?: string;
  author?: string;
  order?: number;
  media?: mongoose.Types.ObjectId | string;
  category?: mongoose.Types.ObjectId[] | string[];
  searchKeywords?: string[];
  isDraft?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export default IArticle;
