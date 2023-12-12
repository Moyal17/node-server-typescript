import { Category } from './types';
import { generateId } from '../../utils';

export const courseCategories: Category[] = [
  {
    title: 'Foundations of Effective Communication',
    description: 'Master the art of communication to enhance understanding and intimacy in your relationships.',
    subtitle: 'Communication Mastery',
    group: 'courses',
    order: 1,
    seo: {
      title: 'Effective Communication in Relationships Course',
      description: 'Learn key communication strategies to build stronger, more fulfilling relationships.',
    },
    searchKeywords: ['communication skills', 'active listening', 'emotional intelligence'],
    uri: 'effective-communication',
  },
  {
    title: 'Building Stronger Relationships',
    description: 'Discover the secrets to developing and maintaining strong, healthy relationships.',
    subtitle: 'Relationship Building',
    group: 'courses',
    order: 2,
    seo: {
      title: 'Building and Maintaining Strong Relationships Course',
      description: 'Explore essential techniques for creating lasting and satisfying relationships.',
    },
    searchKeywords: ['relationship building', 'trust', 'commitment'],
    uri: 'stronger-relationships',
  },
  {
    title: 'Navigating the Dating World',
    description: 'Gain insights and practical advice for successfully navigating the modern dating landscape.',
    subtitle: 'Dating Dynamics',
    group: 'courses',
    order: 3,
    seo: {
      title: 'Modern Dating Strategies Course',
      description: "Expert guidance for those navigating the complexities of dating in today's world.",
    },
    searchKeywords: ['dating advice', 'online dating', 'relationship readiness'],
    uri: 'navigate-dating',
  },
  {
    title: 'Personal Growth for Relationship Success',
    description: 'Learn how personal development can lead to more fulfilling and successful relationships.',
    subtitle: 'Grow Together',
    group: 'courses',
    order: 4,
    seo: {
      title: 'Personal Growth and Relationships Course',
      description: 'Understand the link between personal growth and successful relationships.',
    },
    searchKeywords: ['personal growth', 'self-improvement', 'self-awareness'],
    uri: 'personal-growth',
  },
  {
    title: 'Overcoming Relationship Challenges',
    description: 'Equip yourself with the tools and knowledge to overcome common relationship challenges.',
    subtitle: 'Challenge Overcomer',
    group: 'courses',
    order: 5,
    seo: {
      title: 'Overcoming Relationship Challenges Course',
      description: 'Practical solutions and strategies to face and resolve relationship challenges effectively.',
    },
    searchKeywords: ['conflict resolution', 'problem-solving', 'relationship repair'],
    uri: 'relationship-challenges',
  },
];

export const blogCategories: Category[] = [
  {
    uri: 'self-discovery',
    title: 'Self-Discovery and Personal Growth',
    description:
      'Explore the journey of self-awareness and personal development to cultivate a deeper understanding of yourself and your relationships.',
    subtitle: 'Understanding You',
    group: 'blog',
    order: 1,
    seo: {
      title: 'Self-Discovery and Personal Growth in Relationships',
      description:
        'Discover articles and resources aimed at enhancing self-awareness and personal growth, essential for healthy relationships.',
    },
    searchKeywords: ['self-awareness', 'personal growth', 'self-love'],
  },
  {
    uri: 'communication-skills',
    title: 'Communication Skills in Relationships',
    description: 'Learn effective communication techniques to build stronger, healthier connections with your partner.',
    subtitle: 'Talk the Talk',
    group: 'blog',
    order: 2,
    seo: {
      title: 'Improving Communication in Relationships',
      description: 'Expert advice on mastering communication skills for deeper and more fulfilling relationships.',
    },
    searchKeywords: ['communication skills', 'conflict resolution', 'love languages'],
  },
  {
    uri: 'dating-courtship',
    title: 'Dating and Courtship Guidance',
    description: 'Navigate the complex world of dating with confidence, from first impressions to building meaningful connections.',
    subtitle: 'Dating Smarts',
    group: 'blog',
    order: 3,
    seo: {
      title: 'Guidance for Successful Dating and Courtship',
      description: 'Comprehensive tips and strategies for singles looking to find and nurture romantic connections.',
    },
    searchKeywords: ['dating advice', 'online dating', 'first date tips'],
  },
  {
    uri: 'healthy-relationships',
    title: 'Maintaining Healthy Relationships',
    description: 'Foster lasting bonds through mutual respect, understanding, and shared growth in your relationship.',
    subtitle: 'Relationship Longevity',
    group: 'blog',
    order: 4,
    seo: {
      title: 'Keys to a Lasting and Healthy Relationship',
      description: 'Essential insights and strategies for couples to keep their relationship strong and growing.',
    },
    searchKeywords: ['relationship maintenance', 'romance', 'intimacy'],
  },
  {
    uri: 'relationship-challenges',
    title: 'Overcoming Relationship Challenges',
    description: 'Tackle common hurdles in relationships with practical advice and solutions for a healthier, happier partnership.',
    subtitle: 'Challenge Accepted',
    group: 'blog',
    order: 5,
    seo: {
      title: 'Navigating Relationship Challenges Successfully',
      description: 'Expert guidance on overcoming obstacles and strengthening your relationship during tough times.',
    },
    searchKeywords: ['relationship challenges', 'trust issues', 'conflict management'],
  },
];

export const getRandomArray = (array: Category[]): Category => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const createMultipleCategoriesMockUp = (categoriesData: Category[], num: number = 3) => {
  const categories: Category[] = [];
  for (let j = 0; j < num; j++) {
    const categoryMock = { ...categoriesData[j] } as Category;
    categoryMock.uri = `${categoryMock.uri}-${generateId(6)}`;
    categories.push(categoryMock);
  }
  return categories;
};
