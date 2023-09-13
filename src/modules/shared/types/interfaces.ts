import { Request } from 'express';
import ICourse from '../../courses/course.interface';
import ILecture from '../../lectures/lecture.interface';
import ISection from '../../sections/section.interface';

export interface ExtendedRequest extends Request {
  course?: Partial<ICourse> | null;
  sections?: Partial<ISection[]> | null;
  lectures?: Partial<ILecture[]> | null;
}

export interface ISeo {
  title?: string;
  description?: string;
}
