import mongoose from 'mongoose';
import { mediaType, sourceType } from './dto';

interface ISourceHls {
  master?: string;
  h360?: string;
  h480?: string;
  h540?: string;
  h720?: string;
  h1080?: string;
}

interface IMedia {
  user?: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  isPublic?: boolean;
  type?: mediaType;
  sourceType?: sourceType;
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
