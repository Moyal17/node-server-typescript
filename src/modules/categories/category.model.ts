import mongoose, { Schema } from 'mongoose';
import { categoryGroup } from './dto';
import { languages } from '../shared/enums';

const categorySchema = new Schema({
  public_id: { type: String, unique: true }, // CAT-
  uri: { type: String, required: true, unique: true },
  title: String,
  description: String,
  subtitle: String,
  order: Number,
  language: { type: String, enum: Object.values(languages), default: languages.english }, // he , en , es
  group: { type: Number, enum: Object.values(categoryGroup), default: categoryGroup.attractionTypes, required: true },
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  seo: {
    title: String,
    description: String,
  },
  searchKeywords: [{ type: String }],
  isFilter: { type: Boolean, default: false },
  isShow: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Category = mongoose.model('Category', categorySchema);
export default Category;