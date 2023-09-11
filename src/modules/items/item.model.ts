import mongoose, { Schema } from 'mongoose';

const itemSchema = new Schema({
  title: String,
  subtitle: String,
  content: String,
  order: Number,
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
