import mongoose, { Schema } from 'mongoose';
import { LanguageEnum } from '../shared/enums';

const pageSchema = new Schema({
  uri: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  content: String,
  language: { type: String, enum: Object.values(LanguageEnum), default: LanguageEnum.EN },
  order: Number,
  template: String,
  icon: String,
  link: {
    label: String,
    href: String,
  },
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  itemCollection: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }],
  seo: {
    title: String,
    description: String,
  },
  isDraft: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  permissions: {
    uri: { type: Boolean, default: true },
    title: { type: Boolean, default: true },
    subtitle: { type: Boolean, default: true },
    content: { type: Boolean, default: true },
    order: { type: Boolean, default: true },
    template: { type: Boolean, default: true },
    icon: { type: Boolean, default: true },
    link: { type: Boolean, default: true },
    media: { type: Boolean, default: true },
    seo: { type: Boolean, default: true },
    isDraft: { type: Boolean, default: true },
    itemCollection: { type: Boolean, default: true },
  },
});

const Page = mongoose.model('Page', pageSchema);
export default Page;
