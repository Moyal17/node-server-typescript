import Category from './category.model'; // Assuming you have a Mongoose model for Category
import ICategory from './category.interface';
import { basicFields } from './dto'; // Assuming you have a Mongoose model for Category

export class CategoryService {
  async getCategories(query = {}, extractFields = basicFields): Promise<Partial<ICategory[]> | null> {
    try {
      const categories = await Category.find(query, extractFields).lean().exec();
      return categories;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Category by their ID
  async getCategoryById(CategoryId: string, extractFields = basicFields): Promise<Partial<ICategory> | null> {
    try {
      const category = await Category.findById(CategoryId, extractFields).lean().exec();
      return category;
    } catch (error) {
      return error;
    }
  }

  // Create a new Category
  async createCategory(CategoryData: ICategory): Promise<Partial<ICategory>> {
    try {
      const newCategory = new Category(CategoryData);
      return await newCategory.save();
    } catch (error) {
      throw new Error(`Error creating Category: ${error.message}`);
    }
  }

  // Update a Category
  async updateCategory(CategoryId: string, updatedData: Partial<ICategory>): Promise<Partial<ICategory> | null> {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(CategoryId, updatedData, {
        new: true,
      }).exec();
      return updatedCategory;
    } catch (error) {
      throw new Error(`Error updating Category ${CategoryId}: ${error.message}`);
    }
  }

  // Delete a Category
  async deleteCategory(CategoryId: string): Promise<Partial<ICategory> | null> {
    try {
      const deletedCategory = await Category.findByIdAndRemove(CategoryId).exec();
      return deletedCategory;
    } catch (error) {
      throw new Error(`Error deleting Category ${CategoryId}: ${error.message}`);
    }
  }

  // Other methods related to Categories (e.g., search, login, password reset, etc.)
}
