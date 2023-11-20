import { Lesson, Section } from './types';
import { generateId } from '../../utils';
import { Chance } from 'chance';
import { sub } from 'date-fns';
// import { imageObject, videoObject } from './shared.objects';

const chance = new Chance();

export const course = {
  uri: 'mastering-python-programming',
  title: 'Mastering Python Programming',
  subtitle: chance.sentence({ words: 9 }),
  content:
    'complete guide to Python programming for beginners and professionals complete guide to Python programming for beginners and professionals complete guide to Python programming for beginners and professionals.',
  template: 'CourseCard',
  order: 1,
  duration: chance.integer({ min: 240, max: 940 }), // in seconds (20:00)
  // category: [{ uri: 'programming', title: 'Programming' }],
  // thumbnail: 'https://example.com/path/to/thumbnail.jpg',
  // source: 'https://example.com/path/to/video.mp4',
  price: chance.floating({ min: 1, max: 100 }),
  currency: 'ILS',
  rating: chance.floating({ min: 1, max: 10 }),
  numberOfRatings: chance.integer({ min: 1, max: 500 }),
  isPublic: true,
  isBestSeller: true,
  isDraft: false,
  isRemoved: false,
  publishedAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
  updatedAt: chance.date(),
  createdAt: chance.date(),
  sections: [],
};

export const section: Section = {
  courseId: null,
  title: 'Introduction',
  duration: 3600, // 60 minutes in seconds
  order: 1,
};

export const lesson: Lesson = {
  sectionId: null,
  courseId: '',
  uri: 'lesson-uri-example',
  title: chance.sentence({ words: 3 }),
  subtitle: 'A complete guide to Python programming for beginners and professionals.',
  content: chance.paragraph({ sentences: 6 }),
  type: 'article',
  duration: 1200, // "20 minutes",
  /*  media: {
    ...imageObject(
      'https://images.vexels.com/content/100990/preview/abstract-design-vector-art-background-7e7f2f.png',
      'abstract-design-vector-art-background-7e7f2f.png',
      'image/png',
    ),
  },*/
};

export const lesson2: Lesson = {
  sectionId: null,
  courseId: '',
  uri: null,
  title: 'Understanding Python',
  subtitle: 'Python Understanding for beginners.',
  content: chance.paragraph({ sentences: 4 }),
  type: 'video',
  duration: 1200, // "20 minutes",
  /*  media: {
    ...videoObject(
      'dyZcRRWiuuw',
      'dyZcRRWiuuw',
      'video/mp4',
      'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/video-popup.jpg',
    ),
  },*/
};

export const createMultipleLessonsMockUp = (sectionId: string, courseId: string, lessonsNum: number = 3) => {
  const lessons: Lesson[] = [];
  for (let j = 0; j < lessonsNum; j++) {
    const lessonMock = { ...lesson };
    lessonMock.sectionId = sectionId;
    lessonMock.courseId = courseId;
    lessonMock.uri = `${lessonMock.uri}-${generateId(6)}`;
    lessonMock.title = `${lessonMock.title}_${j + 1}`;
    lessons.push(lessonMock);
  }
  return lessons;
};
