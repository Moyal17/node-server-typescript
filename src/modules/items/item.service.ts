import Item from './item.model';
import IItem from './item.interface';
import { bulkValidation } from '../../utils/validation.utils';
import { createItemSchema } from './dto';

export class ItemService {
  async getItems(): Promise<Partial<IItem[]> | null> {
    try {
      return await Item.find({}).exec();
    } catch (error) {
      return error;
    }
  }
  async getItemByUri(uri: string): Promise<Partial<IItem> | null> {
    try {
      return await Item.findOne({ uri }).lean().exec();
    } catch (error) {
      return error;
    }
  }

  async createItem(ItemData: IItem): Promise<Partial<IItem>> {
    try {
      const newItem = new Item(ItemData);
      return await newItem.save();
    } catch (error) {
      throw new Error(`Error creating Item: ${error.message}`);
    }
  }

  async createManyItems(items: Partial<IItem[]>): Promise<Partial<IItem>[]> {
    try {
      return await Item.insertMany(items, { ordered: true });
    } catch (error) {
      throw new Error(`Error creating Media: ${error.message}`);
    }
  }
  async updateItem(ItemId: string, updatedData: Partial<IItem>): Promise<Partial<IItem> | null> {
    try {
      return await Item.findByIdAndUpdate(ItemId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Item ${ItemId}: ${error.message}`);
    }
  }

  async deleteItem(ItemId: string): Promise<Partial<IItem> | null> {
    try {
      return await Item.findByIdAndRemove(ItemId).exec();
    } catch (error) {
      throw new Error(`Error deleting Item ${ItemId}: ${error.message}`);
    }
  }

  async bulkItemCreation(items: Partial<IItem>[]): Promise<Partial<IItem>[] | null> {
    try {
      if (items && items.length > 0) {
        const isValid = bulkValidation(items, createItemSchema);
        if (isValid) {
          return await this.createManyItems(items);
        }
      }
      return null;
    } catch (error) {
      throw new Error(`Error bulk Item Creation: ${error.message}`);
    }
  }

  // Other methods related to Items (e.g., search, login, password reset, etc.)
}
