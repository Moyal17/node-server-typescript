import { ISeo } from '../../shared/types';

export enum categoryGroup {
  attractionTypes = 'attractionTypes', // restaurants, parks, museums , nightLife,
  seasons = 'seasons', // spring, summer, autumn, winter,
  blog = 'blog',
  courses = 'courses',
}

export type QueryType = {
  removed: boolean;
  group: string[];
  isFilter: boolean;
  searchText: string;
};

export type CategoryObject = {
  _id?: string;
  group: string | categoryGroup;
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

export const allFields =
  'uri group title subtitle description language order media seo searchKeywords isFilter isShow isRemovable isRemoved updatedAt createdAt';
export const basicFields = 'uri group title subtitle description language order media seo';
export const minimalFields = 'uri title order';
