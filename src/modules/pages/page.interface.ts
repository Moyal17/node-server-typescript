import mongoose from 'mongoose';
import { ISeo } from '../shared/types';
import ICollection from '../collections/collection.interface';
import IItem from '../items/item.interface';

export interface IPage {
  _id: mongoose.Types.ObjectId | string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  language?: string;
  order?: number;
  media?: mongoose.Types.ObjectId;
  seo?: ISeo;
  itemCollection?: mongoose.Types.ObjectId[] | ICollection[];
  isDraft?: boolean;
  isRemoved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface IFetchedPage extends IPage {
  itemCollection: (ICollection & {
    key: string;
    items?: IItem[];
  })[];
  // ... any other properties you expect
}

export type IndexablePage = IPage & { [key: string]: any };
