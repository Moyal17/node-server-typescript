import { Lecture, Section } from './types';

export const course = {
  uri: 'mastering-python-programming',
  title: 'Mastering Python Programming',
  subtitle: 'A complete guide to Python programming for beginners and professionals.',
  content: '',
  template: 'CourseCard',
  order: 1,
  duration: 1200, // in seconds (20:00)
  // category: [{ uri: 'programming', title: 'Programming' }],
  // thumbnail: 'https://example.com/path/to/thumbnail.jpg',
  // source: 'https://example.com/path/to/video.mp4',
  price: 59.9,
  currency: 'ILS',
  rating: 9.8,
  numberOfRatings: 345,
  isBestSeller: true,
  isDraft: false,
  isRemoved: false,
  publishedAt: new Date(),
  updatedAt: new Date(),
  createdAt: new Date(),
  sections: [],
};

export const section: Section = {
  courseId: null,
  title: 'Introduction',
  duration: 3600, // 60 minutes in seconds
  order: 1,
};

export const lecture: Lecture = {
  sectionId: null,
  uri: null,
  title: 'Mastering Python Programming',
  subtitle: 'A complete guide to Python programming for beginners and professionals.',
  type: 'article',
  duration: 1200, // "20 minutes",
};

export const createFullCourseMockUp = () => {
  const lecturesNum = 4;
  const sectionsNum = 3;
  const sectionsArray = [];
  for (let i = 0; i < sectionsNum; i++) {
    const sectionMock = { ...section };
    sectionMock.title = `${sectionMock.title}_${i + 1}`;
    for (let j = 0; j < lecturesNum; j++) {
      const lectureMock = { ...lecture };
      lectureMock.title = `${lectureMock.title}_${j + 1}`;
    }
    sectionsArray.push(sectionMock);
  }
  const fullCourse = { ...course };
  // @ts-ignore
  fullCourse.sections = sectionsArray;
  return fullCourse;
};
