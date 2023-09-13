import mongoose, { Schema } from 'mongoose';

const itemSchema = new Schema({
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
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
