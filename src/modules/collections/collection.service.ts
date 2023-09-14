import Collection from './collection.model';
import ICollection from './collection.interface';

export class CollectionService {
  async getCollections(): Promise<Partial<ICollection[]> | null> {
    try {
      return await Collection.find({}).exec();
    } catch (error) {
      return error;
    }
  }

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
  async createManyCollections(collections: Partial<ICollection[]>): Promise<Partial<ICollection>[]> {
    try {
      return await Collection.insertMany(collections, { ordered: true });
    } catch (error) {
      throw new Error(`Error creating Media: ${error.message}`);
    }
  }
  async updateCollection(CollectionId: string, updatedData: Partial<ICollection>): Promise<Partial<ICollection> | null> {
    try {
      return await Collection.findByIdAndUpdate(CollectionId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating Collection ${CollectionId}: ${error.message}`);
    }
  }

  async deleteCollection(CollectionId: string): Promise<Partial<ICollection> | null> {
    try {
      return await Collection.findByIdAndRemove(CollectionId).exec();
    } catch (error) {
      throw new Error(`Error deleting Collection ${CollectionId}: ${error.message}`);
    }
  }

  // Other methods related to Collections (e.g., search, login, password reset, etc.)
}
