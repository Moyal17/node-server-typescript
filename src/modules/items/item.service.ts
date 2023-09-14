import Item from './item.model';
import IItem from './item.interface';

export class ItemService {
  async getItems(): Promise<Partial<IItem[]> | null> {
    try {
      return await Item.find({}).exec();
    } catch (error) {
      return error;
    }
  }

  // Fetch a Item by their ID
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
  // Update a Item
  async updateItem(ItemId: string, updatedData: Partial<IItem>): Promise<Partial<IItem> | null> {
    try {
      return await Item.findByIdAndUpdate(ItemId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Item ${ItemId}: ${error.message}`);
    }
  }

  // Delete a Item
  async deleteItem(ItemId: string): Promise<Partial<IItem> | null> {
    try {
      return await Item.findByIdAndRemove(ItemId).exec();
    } catch (error) {
      throw new Error(`Error deleting Item ${ItemId}: ${error.message}`);
    }
  }

  // Other methods related to Items (e.g., search, login, password reset, etc.)
}
