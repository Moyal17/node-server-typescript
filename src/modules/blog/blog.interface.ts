import mongoose from 'mongoose';
interface IArticle {
  _id: mongoose.Types.ObjectId | string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  language?: string;
  author?: {
    avatar?: mongoose.Types.ObjectId | string;
    name?: string;
    profession?: string;
  };
  order?: number;
  readingTime?: number;
  media?: mongoose.Types.ObjectId | string;
  category?: mongoose.Types.ObjectId[] | string[];
  searchKeywords?: string[];
  isDraft?: boolean;
  isPublic?: boolean;
  isRemoved?: boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
export default IArticle;
