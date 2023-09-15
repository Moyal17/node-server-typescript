import { Request, Response } from 'express';
import { PageService } from './page.service';
import { ExtendedRequest } from '../shared/types';
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
    const pageBody = req.body.page;
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

export const addCollectionToPage = async (req: ExtendedRequest, res: Response) => {
  try {
    if (!req.body.pageId || !req.body.collectionId) {
      return res.status(400).json({ error: 'Bad Request', message: 'Required parameters are missing' });
    }
    const collectionId = req.body.collectionId as string;
    await pageService.addCollectionToPage(req.body.pageId, collectionId);
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: 'addCollectionToPage', message: error.message });
  }
};

export const removeCollectionFromPage = async (req: Request, res: Response) => {
  try {
    await pageService.removeCollectionFromPage(req.body.pageUri, req.body.collectionId);
    res.json();
  } catch (error) {
    res.status(500).json({ error: 'addCollectionToPage', message: error.message });
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

export const addBulkCollectionsToPage = async (req: ExtendedRequest, res: Response) => {
  try {
    if (!req.body.pageId || !req.body.collectionIds) {
      return res.status(400).json({ error: 'Bad Request', message: 'Required parameters are missing' });
    }
    // Get collection ids
    const collectionIds = req.body.collectionIds;
    // Add the collection ids to the page details
    await pageService.addManyCollectionToPage(req.body.pageId, collectionIds);
    res.status(200);
  } catch (error) {
    res.status(500).json({ error: 'addCollectionToPage', message: error.message });
  }
};

// ... more routes for creating, updating, deleting pages
