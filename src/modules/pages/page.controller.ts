import { Request, Response } from 'express';
import { PageService } from './page.service';
const pageService = new PageService();
export const getPages = async (req: Request, res: Response) => {
  try {
    const pages = await pageService.getPages();
    if (!pages) {
      return res.status(404).json({ message: 'pages not found' });
    }
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: 'getPages', message: error.message });
  }
};
export const getPageByUri = async (req: Request, res: Response) => {
  try {
    const uri = req.params.uri;
    const page = await pageService.getPageByUri(uri);
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: 'getPageByUri', message: error.message });
  }
};

export const getFullPageByUri = async (req: Request, res: Response) => {
  try {
    const uri = req.params.uri;
    const page = await pageService.getFullPageByUri(uri);
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: 'getFullPageByUri', message: error.message });
  }
};
export const createPage = async (req: Request, res: Response) => {
  try {
    const pageBody = req.body;
    const page = await pageService.createPage(pageBody);
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: 'createPage', message: error.message });
  }
};
export const updatePage = async (req: Request, res: Response) => {
  try {
    const pageId = req.params.id;
    const page = await pageService.updatePage(pageId, req.body);
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
    const { subtitle, title, _id } = page;
    res.json({ subtitle, title, _id });
  } catch (error) {
    res.status(500).json({ error: 'updatePage', message: error.message });
  }
};
export const deletePage = async (req: Request, res: Response) => {
  try {
    const pageId = req.params.id;
    const page = await pageService.deletePage(pageId);
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: 'deletePage', message: error.message });
  }
};

// ... more routes for creating, updating, deleting pages
