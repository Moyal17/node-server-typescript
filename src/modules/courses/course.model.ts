import mongoose, { Schema } from 'mongoose';

const courseSchema = new Schema({
  uri: { type: String, required: true, unique: true },
  title: String,
  subtitle: String,
  content: String,
  template: String,
  order: Number,
  duration: Number,
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
  attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
  itemCollection: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }],
  sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }],
  price: Number,
  currency: String,
  rating: Number,
  numberOfRatings: Number,
  instructor: {
    avatar: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
    name: String,
    location: String,
  },
  audienceFit: [String],
  objectives: [String],
  isPublic: { type: Boolean, default: true },
  isBestSeller: { type: Boolean, default: false },
  isDraft: { type: Boolean, default: true },
  isRemoved: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
