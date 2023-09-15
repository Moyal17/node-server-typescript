import { NextFunction, Request, Response } from 'express';
import { CollectionService } from './collection.service';
import { ItemService } from '../items/item.service';
import { ExtendedRequest } from '../shared/types';
import ICollection from './collection.interface';
import IItem from '../items/item.interface';

const itemService = new ItemService();
const collectionService = new CollectionService();
export const getCollections = async (res: Response) => {
  try {
    const collections = await collectionService.getCollections();
    if (!collections) {
      return res.status(404).json({ message: 'collections not found' });
    }
    res.json(collections);
  } catch (error) {
    res.status(500).json({ error: 'getCollections', message: error.message });
  }
};
export const getCollectionById = async (req: Request, res: Response) => {
  try {
    const collectionId = req.params.id;
    const collection = await collectionService.getCollectionById(collectionId);
    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }
    res.json(collection);
  } catch (error) {
    res.status(500).json({ error: 'getCollectionByUri', message: error.message });
  }
};
export const createCollection = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    const collectionBody = req.body.collection;
    const collection = await collectionService.createCollection(collectionBody);
    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }
    req.body.collectionId = collection._id;
    next();
  } catch (error) {
    res.status(500).json({ error: 'createCollection', message: error.message });
  }
};
export const updateCollection = async (req: Request, res: Response) => {
  try {
    const collectionId = req.params.id;
    const collection = await collectionService.updateCollection(collectionId, req.body);
    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }
    const { subtitle, title, _id } = collection;
    res.json({ subtitle, title, _id });
  } catch (error) {
    res.status(500).json({ error: 'updateCollection', message: error.message });
  }
};

export const deleteCollection = async (req: Request, res: Response) => {
  try {
    const collectionId = req.params.id;
    const collection = await collectionService.deleteCollection(collectionId);
    res.json(collection);
  } catch (error) {
    res.status(500).json({ error: 'deleteCollection', message: error.message });
  }
};

export const createManyCollection = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    const collections: ICollection[] = req.collections || req.body.collections;
    const savedCollections: ICollection[] = [];
    for (const collectionData of collections) {
      if (collectionData.items && collectionData.items.length > 0) {
        const savedItems: Partial<IItem>[] | null = await itemService.bulkItemCreation(collectionData.items as Partial<IItem>[]);
        // @ts-ignore
        collectionData.items = savedItems && savedItems.map((item) => item._id);
      }
      const savedCollection: Partial<ICollection> = await collectionService.createCollection(collectionData);
      savedCollections.push(<ICollection>savedCollection);
    }
    req.body.collectionIds = savedCollections.map((coll) => coll._id.toString());
    next();
  } catch (error) {
    res.status(500).json({ error: 'createCollection', message: error.message });
  }
};

// ... more routes for creating, updating, deleting collections
