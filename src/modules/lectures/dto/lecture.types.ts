import { CategoryObject } from '../../categories/dto';
import { MediaObject } from '../../media/dto';
import mongoose from 'mongoose';

export type LectureObject = {
  _id?: string | mongoose.Types.ObjectId;
  sectionId?: string | mongoose.Types.ObjectId;
  courseId?: string | mongoose.Types.ObjectId;
  uri?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  duration?: number;
  type?: string;
  category?: string[] | CategoryObject[];
  media?: string | MediaObject;
  attachments?: string[] | MediaObject[];
  isDraft?: boolean;
  isRemoved?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
};

export const allFields =
  'uri sectionId title subtitle content template order duration type category media isDraft isRemoved publishedAt updatedAt createdAt';

export const basicFields = 'uri sectionId courseId title subtitle content template order duration type category media publishedAt';
export const minimalFields = 'uri title order duration';
