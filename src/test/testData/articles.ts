import { Article } from './types';
import { generateId } from '../../utils';

export const articles: Article[] = [
  {
    uri: 'https://relationshipinsights.com/article1',
    title: 'Navigating Modern Relationships: Tips and Insights',
    subtitle: "Understanding the Dynamics of Today's Romantic Relationships",
    content: `<p>
    <strong>Understanding relationships</strong> is key to personal and emotional growth. <u>Effective communication</u> and mutual respect form the bedrock of any lasting relationship. This course delves into the dynamics of modern relationships, exploring how to nurture and maintain strong bonds over time. We'll uncover the secrets to effective communication, ensuring that both partners feel heard and valued.
  </p>
  <p>
    In the realm of <strong>relationship psychology</strong>, it's crucial to understand the balance between independence and interdependence. This course offers insights into managing conflicts and disagreements, emphasizing the importance of empathy and understanding. By learning to navigate these challenges, couples can <u>strengthen their connection</u> and build a more fulfilling partnership.
  </p>
  <p>
    Finally, we'll explore the role of trust and commitment in deepening intimacy. Trust is the foundation of any relationship, and this course provides strategies to build and maintain it. Whether you are starting a new relationship or looking to enhance an existing one, this course offers valuable lessons for a happier, healthier connection with your partner.
  </p>`,
    language: 'en',
    // "category": ["Relationships", "Modern Dating", "Self-Help"],
    authorName: 'John Doe',
    authorProfession: 'Relationship Coach',
    searchKeywords: ['modern relationships', 'dating tips', 'emotional intelligence'],
    publishedAt: '2023-12-01',
    isDraft: false,
  },
  {
    uri: 'https://relationshipinsights.com/article2',
    title: 'The Art of Communication in Relationships',
    subtitle: 'Mastering the Key to a Lasting Bond',
    content: `<p>
    <strong>Understanding relationships</strong> is key to personal and emotional growth. <u>Effective communication</u> and mutual respect form the bedrock of any lasting relationship. This course delves into the dynamics of modern relationships, exploring how to nurture and maintain strong bonds over time. We'll uncover the secrets to effective communication, ensuring that both partners feel heard and valued.
  </p>
  <p>
    In the realm of <strong>relationship psychology</strong>, it's crucial to understand the balance between independence and interdependence. This course offers insights into managing conflicts and disagreements, emphasizing the importance of empathy and understanding. By learning to navigate these challenges, couples can <u>strengthen their connection</u> and build a more fulfilling partnership.
  </p>
  <p>
    Finally, we'll explore the role of trust and commitment in deepening intimacy. Trust is the foundation of any relationship, and this course provides strategies to build and maintain it. Whether you are starting a new relationship or looking to enhance an existing one, this course offers valuable lessons for a happier, healthier connection with your partner.
  </p>`,
    language: 'en',
    // category: ['Communication', 'Relationship Advice', 'Personal Development'],
    authorName: 'Jane Doe',
    authorProfession: 'Communication Specialist',
    searchKeywords: ['communication', 'relationship bonding', 'conflict resolution'],
    publishedAt: '2023-12-10',
    isDraft: false,
  },

  {
    _id: 'art12347',
    uri: 'https://relationshipinsights.com/article3',
    title: 'Rekindling Romance: Keeping the Spark Alive',
    subtitle: 'Reviving Passion in Long-Term Relationships',
    content:
      '[500 words of content on maintaining passion and romance in long-term relationships, including date ideas, maintaining individuality, and the importance of surprise and spontaneity.]',
    language: 'en',
    // category: ['Long-Term Relationships', 'Romance', 'Marriage Advice'],
    authorName: 'Alex Smith',
    authorProfession: 'Marriage Counselor',
    searchKeywords: ['romance', 'long-term relationships', 'keeping the spark'],
    publishedAt: '2023-12-20',
    isDraft: false,
  },
];
export const createMultipleArticlesMockUp = (articles: Article[], num: number = 3) => {
  const categories: Article[] = [];
  for (let j = 0; j < num; j++) {
    const categoryMock = { ...articles[j] } as Article;
    categoryMock.uri = `${categoryMock.uri}-${generateId(6)}`;
    categories.push(categoryMock);
  }
  return categories;
};
