import { ISeo } from '../../shared/types';

export enum categoryGroup {
  attractionTypes = 0, // restaurants, parks, museums , nightLife,
  seasons = 1, // spring, summer, autumn, winter,
  blog = 9,
}

export type CategoryObject = {
  _id?: string;
  group?: string | categoryGroup;
  public_id?: string;
  uri: string;
  language?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  order?: number;
  media?: string;
  seo?: ISeo;
  searchKeywords?: string[];
  isFilter?: boolean;
  isShow?: boolean;
  isRemoved?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
