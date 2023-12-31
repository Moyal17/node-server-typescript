import mongoose, { Schema } from 'mongoose';

const sectionSchema = new Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: String,
  subtitle: String,
  content: String,
  order: Number,
  duration: Number,
  isDraft: { type: Boolean, default: true },
  isRemovable: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Section = mongoose.model('Section', sectionSchema);
export default Section;
