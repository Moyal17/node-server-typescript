import Article from './article.model';
import IArticle from './blog.interface';
import { basicFields as articleFields } from './dto';
import { basicFields as mediaFields, minimalFields as mediaMinFields } from '../media/dto';

export class BlogService {
  async getArticles(query: object, extractFields: string = articleFields, limit: number = 30): Promise<Partial<IArticle[]> | null> {
    try {
      return await Article.find(query, extractFields)
        .limit(limit)
        .populate([{ path: 'author.avatar', model: 'Media', select: mediaMinFields, strictPopulate: false }])
        .lean()
        .exec();
    } catch (error) {
      return error;
    }
  }

  async getAdminArticles(query: object, extractFields: string = articleFields, limit: number = 30): Promise<Partial<IArticle[]> | null> {
    try {
      return await Article.find(query, extractFields)
        .limit(limit)
        .populate([{ path: 'author.avatar', model: 'Media', select: mediaMinFields, strictPopulate: false }])
        .lean()
        .exec();
    } catch (error) {
      return error;
    }
  }
  async getArticleByUri(uri: string, extractFields: string = articleFields): Promise<Partial<IArticle> | null> {
    try {
      return await Article.findOne({ uri }, extractFields).lean().exec();
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

  async createMultiArticle(articles: IArticle[]): Promise<Partial<IArticle>[]> {
    try {
      return await Article.insertMany(articles, { ordered: true });
    } catch (error) {
      throw new Error(`Error creating articles: ${error.message}`);
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
