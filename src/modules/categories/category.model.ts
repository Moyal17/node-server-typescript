import mongoose, { Schema } from 'mongoose';
import { categoryGroup } from './dto';

const categorySchema = new Schema({
  group: { type: Number, enum: Object.values(categoryGroup), required: true },
  public_id: { type: String, unique: true }, // CAT-
  uri: { type: String, required: true, unique: true },
  language: String, // he , en , es
  title: String,
  description: String,
  subtitle: String,
  order: Number,
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
