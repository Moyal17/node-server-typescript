import mongoose, { Schema } from 'mongoose';
import { LessonTypeEnum } from './dto';

const lessonSchema = new Schema({
  sectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  uri: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  content: String,
  order: Number,
  template: String,
  duration: Number,
  views: Number,
  likes: Number,
  type: { type: String, enum: Object.values(LessonTypeEnum), default: LessonTypeEnum.video },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
  // reviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
  isDraft: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

const Lesson = mongoose.model('Lesson', lessonSchema);
export default Lesson;
