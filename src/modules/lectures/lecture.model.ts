import mongoose, { Schema } from 'mongoose';

const lectureSchema = new Schema({
  uri: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  content: String,
  order: Number,
  template: String,
  duration: Number,
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  thumbnail: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  previewVideo: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  isDraft: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

const Lecture = mongoose.model('Lecture', lectureSchema);
export default Lecture;
