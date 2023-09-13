import mongoose, { Schema } from 'mongoose';
import { mediaTypes, sourceTypes } from './dto';

const sourceHls = {
  master: String,
  h360: String,
  h480: String,
  h540: String,
  h720: String,
  h1080: String,
};

const mediaSchema = new Schema({
  user: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  description: String,
  isPublic: { type: Boolean, default: true },
  type: { type: String, enum: Object.values(mediaTypes), default: mediaTypes.image },
  sourceType: { type: String, enum: Object.values(sourceTypes), default: sourceTypes.amazonS3 },
  sourceOrigin: String, // original url
  source: String, // secure_url .mp4
  sourceHls: sourceHls, // Hls source
  sourceId: String, // model key / id
  thumbnail: String,
  thumbnailSquare: String,
  format: String, // cloudinary format 'jpg'
  size: Number,
  isRemoved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Media = mongoose.model('Media', mediaSchema);
export default Media;
