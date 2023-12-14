import mongoose, { Schema } from 'mongoose';
import { LanguageEnum } from '../shared/enums';

const articleSchema = new Schema({
  uri: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  content: String,
  language: { type: String, enum: Object.values(LanguageEnum), default: LanguageEnum.EN },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  author: {
    avatar: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
    name: String,
    profession: String,
  },
  searchKeywords: [{ type: String }],
  isDraft: { type: Boolean, default: false },
  isRemoved: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);
export default Article;
