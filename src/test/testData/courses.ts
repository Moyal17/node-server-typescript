import { Lesson, Section } from './types';
import { generateId } from '../../utils';
import { Chance } from 'chance';
import { sub } from 'date-fns';
import { LessonTypeEnum } from '../../modules/lessons/dto';
// import { imageObject, videoObject } from './shared.objects';

const chance = new Chance();

export const course = {
  uri: 'mastering-relationship-dynamics',
  title: 'Mastering Relationship Dynamics',
  subtitle: 'Navigating the Complexities of Modern Relationships',
  content: `<p>
    <strong>Understanding relationships</strong> is key to personal and emotional growth. <u>Effective communication</u> and mutual respect form the bedrock of any lasting relationship. This course delves into the dynamics of modern relationships, exploring how to nurture and maintain strong bonds over time. We'll uncover the secrets to effective communication, ensuring that both partners feel heard and valued.
  </p>
  <p>
    In the realm of <strong>relationship psychology</strong>, it's crucial to understand the balance between independence and interdependence. This course offers insights into managing conflicts and disagreements, emphasizing the importance of empathy and understanding. By learning to navigate these challenges, couples can <u>strengthen their connection</u> and build a more fulfilling partnership.
  </p>
  <p>
    Finally, we'll explore the role of trust and commitment in deepening intimacy. Trust is the foundation of any relationship, and this course provides strategies to build and maintain it. Whether you are starting a new relationship or looking to enhance an existing one, this course offers valuable lessons for a happier, healthier connection with your partner.
  </p>`,
  template: 'Relationship_Template_v1',
  order: 5,
  duration: chance.integer({ min: 240, max: 940 }), // in seconds (20:00)
  price: chance.floating({ min: 1, max: 100 }),
  currency: 'ILS',
  rating: chance.floating({ min: 1, max: 10 }),
  numberOfRatings: chance.integer({ min: 1, max: 500 }),
  // category: ['Relationships', 'Personal Development', 'Psychology'],
  // media: 'media_relationship_course_thumbnail.jpg',
  // attachments: ['workbook.pdf', 'exercises.pdf'],
  instructorName: 'Dr. Alex Johnson',
  instructorLocation: 'San Francisco, CA',
  // instructorAvatar: 'avatar_dr_alex.jpg',
  audienceFit: ['Couples', 'Individuals seeking relationship advice', 'Singles'],
  objectives: [
    'Understand the key principles of successful relationships',
    'Develop better communication skills with your partner',
    'Learn to resolve conflicts effectively',
  ],
  isPublic: true,
  isBestSeller: true,
  isDraft: false,
  isRemoved: false,
  publishedAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
};

export const section: Section = {
  courseId: null,
  title: 'Understanding Relationship Dynamics',
  subtitle: 'The Foundation of Healthy Relationships',
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
  type: LessonTypeEnum.document,
  duration: chance.integer({ min: 240, max: 940 }), // "20 minutes",
  /*  media: {
    ...imageObject(
      'https://images.vexels.com/content/100990/preview/abstract-design-vector-art-background-7e7f2f.png',
      'abstract-design-vector-art-background-7e7f2f.png',
      'image/png',
    ),
  },*/
};

export const dummySections: Section[] = [
  {
    courseId: '',
    title: 'Understanding Relationship Dynamics',
    subtitle: 'The Foundation of Healthy Relationships',
    order: 1,
    duration: chance.integer({ min: 240, max: 940 }),
  },
  {
    courseId: '',
    title: 'Communication in Relationships',
    subtitle: 'Effective Ways to Share and Listen',
    order: 2,
    duration: chance.integer({ min: 240, max: 940 }),
  },
  {
    courseId: '',
    title: 'Conflict Resolution',
    subtitle: 'Resolving Disputes Amicably',
    order: 3,
    duration: chance.integer({ min: 240, max: 940 }),
  },
  {
    courseId: '',
    title: 'Building Trust and Intimacy',
    subtitle: 'Deepening Your Connection',
    order: 4,
    duration: chance.integer({ min: 240, max: 940 }),
  },
  {
    courseId: '',
    title: 'Maintaining Long-term Relationships',
    subtitle: 'Keeping the Spark Alive',
    order: 5,
    duration: chance.integer({ min: 240, max: 940 }),
  },
];

export const dummyLessons: Lesson[] = [
  {
    sectionId: null,
    courseId: '',
    uri: 'understanding-relationship-dynamics',
    title: 'Understanding Relationship Dynamics',
    subtitle: 'Exploring the Depths of Interpersonal Connections',
    content:
      'Delving into the intricate world of relationship dynamics, this lesson unveils the subtle nuances and complex interplays that define modern relationships...',
    type: LessonTypeEnum.document,
    duration: chance.integer({ min: 240, max: 940 }),
  },
  {
    sectionId: null,
    courseId: '',
    uri: 'effective-communication-strategies',
    title: 'Effective Communication Strategies',
    subtitle: 'Mastering the Art of Expressive Dialogue',
    content:
      'This lesson focuses on the art of communication in relationships, teaching how to express feelings and thoughts effectively...',
    type: LessonTypeEnum.document,
    duration: chance.integer({ min: 240, max: 940 }),
  },
  {
    sectionId: null,
    courseId: '',
    uri: 'conflict-resolution-techniques',
    title: 'Conflict Resolution Techniques',
    subtitle: 'Navigating through Disagreements',
    content: 'Learn to navigate conflicts gracefully and find common ground with proven conflict resolution techniques...',
    type: LessonTypeEnum.document,
    duration: chance.integer({ min: 240, max: 940 }),
  },
  {
    sectionId: null,
    courseId: '',
    uri: 'building-trust-and-intimacy',
    title: 'Building Trust and Intimacy',
    subtitle: 'Creating Deeper Connections in Relationships',
    content: 'Explore the fundamental principles of trust and intimacy, and how these pillars can be strengthened in any relationship...',
    type: LessonTypeEnum.document,
    duration: chance.integer({ min: 240, max: 940 }),
  },
  {
    sectionId: null,
    courseId: '',
    uri: 'maintaining-long-term-relationships',
    title: 'Maintaining Long-Term Relationships',
    subtitle: 'Sustaining Love Over Time',
    content: 'Discover strategies for keeping the spark alive and maintaining a healthy, long-term relationship...',
    type: LessonTypeEnum.document,
    duration: chance.integer({ min: 240, max: 940 }),
  },
];

export const getRandomArray = (array: Section[] | Lesson[]): Section | Lesson => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const createMultipleLessonsMockUp = (sectionId: string, courseId: string, lessonsNum: number = 3) => {
  const lessons: Lesson[] = [];
  for (let j = 0; j < lessonsNum; j++) {
    const lessonMock = { ...getRandomArray(dummyLessons) } as Lesson;
    lessonMock.sectionId = sectionId;
    lessonMock.courseId = courseId;
    lessonMock.uri = `${lessonMock.uri}-${generateId(6)}`;
    lessonMock.title = `${lessonMock.title}_${j + 1}`;
    lessons.push(lessonMock);
  }
  return lessons;
};
