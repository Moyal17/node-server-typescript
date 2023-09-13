import { categoryObject } from '../../categories/dto';

export type courseObject = {
  _id: string;
  uri: string;
  title?: string;
  subtitle?: string;
  content?: string;
  template?: string;
  order?: number;
  duration?: number;
  category: string[] | categoryObject[];
  sections?: string[];
  thumbnail?: string;
  source?: string;
  price?: number;
  currency?: string;
  rating?: number;
  numberOfRatings?: number;
  isBestSeller?: boolean;
  isDraft?: boolean;
  isRemoved?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
};
