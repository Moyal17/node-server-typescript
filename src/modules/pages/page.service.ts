import Page from './page.model';
import IPage from './page.interface';
import { basicFields } from './dto';
import { basicFields as collectionFields } from '../collections/dto';
import { basicFields as mediaFields } from '../media/dto';
import { basicFields as itemFields } from '../items/dto';

export class PageService {
  async getPages(): Promise<Partial<IPage[]> | null> {
    try {
      return await Page.find({}).exec();
    } catch (error) {
      return error;
    }
  }
  async getPageByUri(uri: string): Promise<Partial<IPage> | null> {
    try {
      return await Page.findOne({ uri }, basicFields).lean().exec();
    } catch (error) {
      return error;
    }
  }
  async getFullPageByUri(uri: string): Promise<Partial<IPage> | null> {
    try {
      return await Page.findOne({ uri })
        .populate([
          {
            path: 'itemCollection',
            model: 'Collection',
            select: collectionFields,
            populate: [
              {
                path: 'items',
                model: 'Item',
                select: itemFields,
                populate: [
                  {
                    path: 'media',
                    select: mediaFields,
                  },
                ],
              },
              {
                path: 'media',
                select: mediaFields,
              },
            ],
          },
          { path: 'media', model: 'Media', select: mediaFields },
        ])
        .lean()
        .exec();
    } catch (error) {
      return error;
    }
  }
  async createPage(PageData: IPage): Promise<Partial<IPage>> {
    try {
      const newPage = new Page(PageData);
      return await newPage.save();
    } catch (error) {
      throw new Error(`Error creating Page: ${error.message}`);
    }
  }
  async updatePage(PageId: string, updatedData: Partial<IPage>): Promise<Partial<IPage> | null> {
    try {
      return await Page.findByIdAndUpdate(PageId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Page ${PageId}: ${error.message}`);
    }
  }

  async addCollectionToPage(pageUri: string, collectionId: string): Promise<Partial<IPage> | null> {
    try {
      return await Page.findOneAndUpdate(
        { uri: pageUri },
        { $push: { itemCollections: collectionId } },
        { new: true }, // If you want the method to return the updated document
      ).exec();
    } catch (error) {
      throw new Error(`Error updating Page collection ${pageUri}: ${error.message}`);
    }
  }

  async addManyCollectionToPage(pageId: string, collectionIds: string[]): Promise<Partial<IPage> | null> {
    try {
      return await Page.findOneAndUpdate(
        { uri: pageId },
        { $push: { itemCollections: { $each: collectionIds } } },
        { new: true }, // If you want the method to return the updated document
      ).exec();
    } catch (error) {
      throw new Error(`Error updating Page collections ${pageId}: ${error.message}`);
    }
  }

  async removeCollectionFromPage(pageUri: string, collectionId: string) {
    try {
      return await Page.updateOne({ uri: pageUri }, { $pull: { itemCollections: collectionId } }).exec();
    } catch (error) {
      throw new Error(`Error updating Page collection ${pageUri}: ${error.message}`);
    }
  }

  async deletePage(PageId: string): Promise<Partial<IPage> | null> {
    try {
      return await Page.findByIdAndRemove(PageId).exec();
    } catch (error) {
      throw new Error(`Error deleting Page ${PageId}: ${error.message}`);
    }
  }

  // Other methods related to Pages (e.g., search, login, password reset, etc.)
}
