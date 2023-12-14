import mongoose, { Schema } from 'mongoose';

enum ContentBlockEnum {
  CONTENT = 'content',
  IMAGE = 'image',
  banner = 'banner',
}

const articleContentBlockSchema = new Schema({
  type: {
    type: String,
    enum: Object.values(ContentBlockEnum),
    default: ContentBlockEnum.CONTENT,
    required: true,
  },
  content: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  altText: {
    type: String,
  },
  bannerLink: {
    type: String,
  },
});

const ArticleContentBlock = mongoose.model('ArticleContentBlock', articleContentBlockSchema);
export default ArticleContentBlock;
