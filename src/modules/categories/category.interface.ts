import { Document } from 'mongoose';

interface ICategory extends Document {
  group?: string;
  public_id: string;
  uri: string;
  language: string; // he ; en ; es
  title: string;
  description?: string;
  subtitle?: string;
  order?: number;
  media?: string;
  seo?: {
    title?: string;
    description?: string;
  };
  searchKeywords?: string[];
  isFilter?: boolean;
  isShow?: boolean;
  isRemoved?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export default ICategory;
