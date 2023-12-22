import { Request, Response } from 'express';
import { BlogService } from './blog.service';
import { CategoryService } from '../categories/category.service';
import { generateId } from '../../utils';
import { getPaginationParams } from '../shared/utils';
import { ExtendedRequest } from '../shared/types';
import { basicFields } from './dto';
import { categoryGroupEnum } from '../categories/dto';
const articleService = new BlogService();
const categoryService = new CategoryService();

const configArticleObject = (articleBody: any) => {
  try {
    if (articleBody.authorName || articleBody.authorAvatar || articleBody.authorProfession) {
      articleBody.author = {
        name: articleBody.authorName,
        avatar: articleBody.authorAvatar,
        profession: articleBody.authorProfession,
      };
    }
    return articleBody;
  } catch (e) {
    console.error('configCourseObject: ', e);
  }
};

export const getArticles = async (req: ExtendedRequest, res: Response) => {
  try {
    const { cursor, limit } = getPaginationParams(req.query);
    const query: any = req.isPublic ? { isPublic: true, isRemoved: false } : { isRemoved: false };
    if (cursor) {
      query['_id'] = { $gt: cursor };
    }
    const articles = await articleService.getArticles(query, basicFields, limit);
    if (!articles) {
      return res.status(404).json({ message: 'articles not found' });
    }
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'getArticles', message: error.message });
  }
};

export const getAdminArticles = async (req: ExtendedRequest, res: Response) => {
  try {
    const { cursor, limit } = getPaginationParams(req.query);
    const query: any = { isRemoved: false };
    if (cursor) {
      query['_id'] = { $gt: cursor };
    }
    const articles = await articleService.getAdminArticles(query, basicFields, limit);
    if (!articles) {
      return res.status(404).json({ message: 'articles not found' });
    }
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'getArticles', message: error.message });
  }
};

export const getArticleByUri = async (req: Request, res: Response) => {
  try {
    const uri = req.params.uri;
    const article = await articleService.getArticleByUri(uri);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'getArticleByUri', message: error.message });
  }
};
export const getFullArticleByUri = async (req: Request, res: Response) => {
  try {
    const uri = req.params.uri;
    const article = await articleService.getFullArticleByUri(uri);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'getFullArticleByUri', message: error.message });
  }
};
export const getBlogCategories = async (req: Request, res: Response) => {
  try {
    const searchQuery = { group: categoryGroupEnum.BLOG, isRemoved: false };
    const categories = await categoryService.getCategories(searchQuery);
    if (!categories) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ blog: categories });
  } catch (error) {
    res.status(500).json({ error: 'getFullArticleByUri', message: error.message });
  }
};
export const createArticle = async (req: Request, res: Response) => {
  try {
    const articleBody = configArticleObject({ ...req.body });
    articleBody.uri = `${articleBody.uri}-${generateId(6)}`;
    const article = await articleService.createArticle(articleBody);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'createArticle', message: error.message });
  }
};
export const updateArticle = async (req: Request, res: Response) => {
  try {
    const articleId = req.params.id;
    const articleBody = configArticleObject({ ...req.body });
    delete articleBody._id;
    const article = await articleService.updateArticle(articleId, req.body);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json();
  } catch (error) {
    res.status(500).json({ error: 'updateArticle', message: error.message });
  }
};
export const deleteArticle = async (req: Request, res: Response) => {
  try {
    const articleId = req.params.id;
    const article = await articleService.deleteArticle(articleId);
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'deleteArticle', message: error.message });
  }
};

// ... more routes for creating, updating, deleting articles
