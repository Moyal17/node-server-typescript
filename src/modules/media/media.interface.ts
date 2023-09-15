import mongoose from 'mongoose';
import { mediaTypes, sourceTypes } from './dto';

interface ISourceHls {
  master?: string;
  h360?: string;
  h480?: string;
  h540?: string;
  h720?: string;
  h1080?: string;
}

interface IMedia {
  _id: mongoose.Types.ObjectId | string;
  user?: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  isPublic?: boolean;
  type?: mediaTypes;
  sourceType?: sourceTypes;
  sourceOrigin?: string;
  source?: string;
  sourceHls?: ISourceHls;
  sourceId?: string;
  thumbnail?: string;
  thumbnailSquare?: string;
  format?: string;
  isRemoved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export default IMedia;
