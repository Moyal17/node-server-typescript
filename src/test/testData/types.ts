export type Lecture = {
  sectionId: string | null;
  uri: string | null;
  title: string;
  subtitle: string;
  type: string;
  duration: number;
};

export type Section = {
  courseId: string | null;
  title: string;
  order: number;
  duration: number;
};
