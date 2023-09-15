import { Request, Response } from 'express';
import { ArticleService } from './article.service';
const articleService = new ArticleService();
export const getArticles = async (req: Request, res: Response) => {
  try {
    const articles = await articleService.getArticles();
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
export const createArticle = async (req: Request, res: Response) => {
  try {
    const articleBody = req.body.article;
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
    const article = await articleService.updateArticle(articleId, req.body);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    const { subtitle, title, _id } = article;
    res.json({ subtitle, title, _id });
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
