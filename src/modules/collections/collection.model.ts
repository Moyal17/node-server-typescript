import mongoose, { Schema } from 'mongoose';

const collectionSchema = new Schema({
  key: String,
  title: String,
  subtitle: String,
  content: String,
  order: Number,
  template: String,
  link: {
    label: String,
    href: String,
  },
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  isDraft: { type: Boolean, default: true },
  isRemovable: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Collection = mongoose.model('Collection', collectionSchema);
export default Collection;
