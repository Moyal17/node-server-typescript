import { LessonTypeEnum } from '../../modules/lessons/dto';

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
