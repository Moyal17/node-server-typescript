import Item from './item.model'; // Assuming you have a Mongoose model for Item
import IItem from './item.interface'; // Assuming you have a Mongoose model for Item

export class ItemService {
  async getItems(): Promise<Partial<IItem[]> | null> {
    try {
      const items = await Item.find({}).exec();
      console.log('getItems: ', items);
      return items;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Item by their ID
  async getItemByUri(uri: string): Promise<Partial<IItem> | null> {
    try {
      const item = await Item.findOne({ uri }).lean().exec();
      console.log('getItemByUri: ', item);
      return item;
    } catch (error) {
      return error;
    }
  }

  // Create a new Item
  async createItem(ItemData: IItem): Promise<Partial<IItem>> {
    try {
      const newItem = new Item(ItemData);
      const res = await newItem.save();
      return res;
    } catch (error) {
      throw new Error(`Error creating Item: ${error.message}`);
    }
  }

  // Update a Item
  async updateItem(ItemId: string, updatedData: Partial<IItem>): Promise<Partial<IItem> | null> {
    try {
      const updatedItem = await Item.findByIdAndUpdate(ItemId, updatedData, {
        new: true,
      }).exec();
      console.log('updatedItem: ', updatedItem);
      return updatedItem;
    } catch (error) {
      throw new Error(`Error updating Item ${ItemId}: ${error.message}`);
    }
  }

  // Delete a Item
  async deleteItem(ItemId: string): Promise<Partial<IItem> | null> {
    try {
      const deletedItem = await Item.findByIdAndRemove(ItemId).exec();
      console.log('deletedItem: ', deletedItem);
      return deletedItem;
    } catch (error) {
      throw new Error(`Error deleting Item ${ItemId}: ${error.message}`);
    }
  }

  // Other methods related to Items (e.g., search, login, password reset, etc.)
}
