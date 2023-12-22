import mongoose from 'mongoose';

export type ArticleObject = {
  uri?: string;
  title: string;
  subtitle?: string;
  content?: string;
  language?: string;
  category?: mongoose.Types.ObjectId[] | string[];
  media?: mongoose.Types.ObjectId | string;
  author?: {
    avatar?: mongoose.Types.ObjectId | string;
    name?: string;
    profession?: string;
  };
  searchKeywords?: string[];
  publishedAt?: string;
  isDraft?: boolean;
  createdAt?: string;
  // extended to changes
  authorName?: string;
  authorProfession?: string;
  authorAvatar?: mongoose.Types.ObjectId | string;
};

export const allFields = 'uri title subtitle content template order link media isDraft isRemoved isRemovable publishedAt updatedAt createdAt';
export const basicFields = 'uri title subtitle content template order link media publishedAt';
