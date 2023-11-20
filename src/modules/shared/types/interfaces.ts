import { Request } from 'express';
import ICourse from '../../courses/course.interface';
import ILesson from '../../lessons/lesson.interface';
import ISection from '../../sections/section.interface';
import { IPage } from '../../pages/page.interface';
import ICollection from '../../collections/collection.interface';
import IItem from '../../items/item.interface';

export interface ExtendedRequest extends Request {
  course?: Partial<ICourse> | null;
  sections?: Partial<ISection[]> | null;
  lessons?: Partial<ILesson[]> | null;
  page?: Partial<IPage> | null;
  collections?: Partial<ICollection[]> | string[] | null;
  collection?: Partial<ICollection> | string | null;
  items?: Partial<IItem[]> | string[] | null;
  isPublic?: boolean;
}

export interface ISeo {
  title?: string;
  description?: string;
}
