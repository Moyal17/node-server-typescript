import mongoose, { Schema } from 'mongoose';

const itemSchema = new Schema({
  collectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Page' },
  title: String,
  subtitle: String,
  content: String,
  order: Number,
  template: String,
  icon: String,
  link: {
    label: String,
    href: String,
  },
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  isRemovable: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  permissions: {
    title: { type: Boolean, default: true },
    subtitle: { type: Boolean, default: true },
    content: { type: Boolean, default: true },
    order: { type: Boolean, default: true },
    template: { type: Boolean, default: true },
    icon: { type: Boolean, default: true },
    link: { type: Boolean, default: true },
    media: { type: Boolean, default: true },
  },
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
