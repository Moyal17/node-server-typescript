import mongoose from 'mongoose';

interface ISeo {
  title?: string;
  description?: string;
}

interface IPage {
  _id?: mongoose.Types.ObjectId | string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  language?: string;
  order?: number;
  media?: mongoose.Types.ObjectId;
  seo?: ISeo;
  itemCollection: mongoose.Types.ObjectId[];
  isDraft?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export default IPage;
