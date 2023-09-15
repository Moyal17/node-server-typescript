import mongoose, { Schema } from 'mongoose';
import { languages } from '../shared/enums';

const articleSchema = new Schema({
  uri: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  content: String,
  author: String,
  language: { type: String, enum: Object.values(languages), default: languages.EN },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  searchKeywords: [{ type: String }],
  isDraft: { type: Boolean, default: false },
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', articleSchema);
export default Article;
