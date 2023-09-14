import Collection from './collection.model'; // Assuming you have a Mongoose model for Collection
import ICollection from './collection.interface'; // Assuming you have a Mongoose model for Collection

export class CollectionService {
  async getCollections(): Promise<Partial<ICollection[]> | null> {
    try {
      return await Collection.find({}).exec();
    } catch (error) {
      return error;
    }
  }

  // Fetch a Collection by their ID
  async getCollectionById(collectionId: string): Promise<Partial<ICollection> | null> {
    try {
      return await Collection.findById(collectionId).lean().exec();
    } catch (error) {
      return error;
    }
  }

  // Create a new Collection
  async createCollection(CollectionData: ICollection): Promise<Partial<ICollection>> {
    try {
      const newCollection = await new Collection(CollectionData).save();
      return newCollection.toObject();
    } catch (error) {
      throw new Error(`Error creating Collection: ${error.message}`);
    }
  }

  // Update a Collection
  async updateCollection(CollectionId: string, updatedData: Partial<ICollection>): Promise<Partial<ICollection> | null> {
    try {
      return await Collection.findByIdAndUpdate(CollectionId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Collection ${CollectionId}: ${error.message}`);
    }
  }

  // Delete a Collection
  async deleteCollection(CollectionId: string): Promise<Partial<ICollection> | null> {
    try {
      return await Collection.findByIdAndRemove(CollectionId).exec();
    } catch (error) {
      throw new Error(`Error deleting Collection ${CollectionId}: ${error.message}`);
    }
  }

  // Other methods related to Collections (e.g., search, login, password reset, etc.)
}
