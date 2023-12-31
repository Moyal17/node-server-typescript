import { LessonTypeEnum } from '../../modules/lessons/dto';
import { categoryGroupEnum } from '../../modules/categories/dto';

export type Lesson = {
  sectionId: string | null;
  courseId: string;
  uri: string | null;
  title: string;
  subtitle: string;
  content: string;
  type: string | LessonTypeEnum;
  duration: number;
  media?: unknown;
};

export type Section = {
  courseId: string | null;
  title: string;
  subtitle: string;
  order: number;
  duration: number;
};

export type Category = {
  uri: string | null;
  title: string;
  subtitle: string;
  description: string;
  group: string | categoryGroupEnum;
  seo: {
    title: string;
    description: string;
  };
  order: number;
  searchKeywords: string[];
};

export type Article = {
  _id?: string;
  uri?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  language?: string;
  category?: string[];
  authorName?: string;
  authorProfession?: string;
  searchKeywords?: string[];
  publishedAt?: string;
  isDraft?: boolean;
  createdAt?: string;
};
