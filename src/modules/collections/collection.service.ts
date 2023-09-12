import Collection from './collection.model'; // Assuming you have a Mongoose model for Collection
import ICollection from './collection.interface'; // Assuming you have a Mongoose model for Collection

export class CollectionService {
  async getCollections(): Promise<Partial<ICollection[]> | null> {
    try {
      const collections = await Collection.find({}).exec();
      console.log('getCollections: ', collections);
      return collections;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Collection by their ID
  async getCollectionById(collectionId: string): Promise<Partial<ICollection> | null> {
    try {
      const collection = await Collection.findById(collectionId).lean().exec();
      console.log('getCollectionByUri: ', collection);
      return collection;
    } catch (error) {
      return error;
    }
  }

  // Create a new Collection
  async createCollection(CollectionData: ICollection): Promise<Partial<ICollection>> {
    try {
      const newCollection = new Collection(CollectionData);
      const res = await newCollection.save();
      return res;
    } catch (error) {
      throw new Error(`Error creating Collection: ${error.message}`);
    }
  }

  // Update a Collection
  async updateCollection(
    CollectionId: string,
    updatedData: Partial<ICollection>,
  ): Promise<Partial<ICollection> | null> {
    try {
      const updatedCollection = await Collection.findByIdAndUpdate(CollectionId, updatedData, {
        new: true,
      }).exec();
      console.log('updatedCollection: ', updatedCollection);
      return updatedCollection;
    } catch (error) {
      throw new Error(`Error updating Collection ${CollectionId}: ${error.message}`);
    }
  }

  // Delete a Collection
  async deleteCollection(CollectionId: string): Promise<Partial<ICollection> | null> {
    try {
      const deletedCollection = await Collection.findByIdAndRemove(CollectionId).exec();
      console.log('deletedCollection: ', deletedCollection);
      return deletedCollection;
    } catch (error) {
      throw new Error(`Error deleting Collection ${CollectionId}: ${error.message}`);
    }
  }

  // Other methods related to Collections (e.g., search, login, password reset, etc.)
}
