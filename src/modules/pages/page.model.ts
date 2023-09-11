import mongoose, { Schema } from 'mongoose';
import { languages } from '../shared/enums';

const pageSchema = new Schema({
  uri: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  content: String,
  language: { type: String, enum: Object.values(languages), default: languages.english }, // he , en , es
  order: Number,
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  seo: {
    title: String,
    description: String,
  },
  itemCollection: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }],
  isDraft: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Page = mongoose.model('Page', pageSchema);
export default Page;
