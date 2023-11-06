import Article from './blog.model';
import IArticle from './blog.interface';
import { basicFields } from './dto';
import { basicFields as mediaFields } from '../media/dto';

export class BlogService {
  async getArticles(): Promise<Partial<IArticle[]> | null> {
    try {
      return await Article.find({}).exec();
    } catch (error) {
      return error;
    }
  }
  async getArticleByUri(uri: string): Promise<Partial<IArticle> | null> {
    try {
      return await Article.findOne({ uri }, basicFields).lean().exec();
    } catch (error) {
      return error;
    }
  }
  async getFullArticleByUri(uri: string): Promise<Partial<IArticle> | null> {
    try {
      return await Article.findOne({ uri }).populate({ path: 'media', model: 'Media', select: mediaFields }).lean().exec();
    } catch (error) {
      return error;
    }
  }
  async createArticle(ArticleData: IArticle): Promise<Partial<IArticle>> {
    try {
      const newArticle = new Article(ArticleData);
      return await newArticle.save();
    } catch (error) {
      throw new Error(`Error creating Article: ${error.message}`);
    }
  }
  async updateArticle(ArticleId: string, updatedData: Partial<IArticle>): Promise<Partial<IArticle> | null> {
    try {
      return await Article.findByIdAndUpdate(ArticleId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Article ${ArticleId}: ${error.message}`);
    }
  }
  async deleteArticle(ArticleId: string): Promise<Partial<IArticle> | null> {
    try {
      return await Article.findByIdAndRemove(ArticleId).exec();
    } catch (error) {
      throw new Error(`Error deleting Article ${ArticleId}: ${error.message}`);
    }
  }

  // Other methods related to Articles (e.g., search, login, password reset, etc.)
}
