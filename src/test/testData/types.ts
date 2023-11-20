export type Lesson = {
  sectionId: string | null;
  courseId: string;
  uri: string | null;
  title: string;
  subtitle: string;
  content: string;
  type: string;
  duration: number;
  media?: unknown;
};

export type Section = {
  courseId: string | null;
  title: string;
  order: number;
  duration: number;
};
