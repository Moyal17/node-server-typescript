import mongoose from 'mongoose';
import { LessonTypeEnum } from './dto';
import { AllowNullProperty } from '../shared/types';

interface ILesson {
  _id?: mongoose.Types.ObjectId | string;
  sectionId?: mongoose.Types.ObjectId | string;
  courseId?: mongoose.Types.ObjectId | string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  order?: number;
  template?: string;
  duration?: number;
  type?: LessonTypeEnum;
  category?: mongoose.Types.ObjectId[];
  media?: mongoose.Types.ObjectId;
  attachments?: mongoose.Types.ObjectId[];
  isDraft?: boolean;
  isRemoved?: boolean;
  publishedAt?: Date | string;
  updatedAt?: Date | string;
  createdAt?: Date | string;
}
type NullableILesson = AllowNullProperty<ILesson>;
export default NullableILesson;
