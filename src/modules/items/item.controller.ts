import { NextFunction, Request, Response } from 'express';
import { ItemService } from './item.service';
import { ExtendedRequest } from '../shared/types';

const itemService = new ItemService();
export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await itemService.getItems();
    if (!items) {
      return res.status(404).json({ message: 'items not found' });
    }
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'getItems', message: error.message });
  }
};
export const getItemByUri = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const item = await itemService.getItemByUri(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'getItemByUri', message: error.message });
  }
};
export const createItem = async (req: Request, res: Response) => {
  try {
    const itemBody = req.body;
    const item = await itemService.createItem(itemBody);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'createItem', message: error.message });
  }
};
export const updateItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const item = await itemService.updateItem(itemId, req.body);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    const { subtitle, title, _id } = item;
    res.json({ subtitle, title, _id });
  } catch (error) {
    res.status(500).json({ error: 'updateItem', message: error.message });
  }
};
export const deleteItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const item = await itemService.deleteItem(itemId);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'deleteItem', message: error.message });
  }
};

export const bulkItemsCreation = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    if (req.body && req.body.length > 0) {
      const items = await itemService.createManyItems(req.body);
      req.items = items;
    }
    next();
  } catch (error) {
    res.status(500).json({ error: 'createItem', message: error.message });
  }
};

// ... more routes for creating, updating, deleting items
