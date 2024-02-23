import Category from './category.model';
import ICategory from './category.interface';
import { basicFields } from './dto';

export class CategoryService {
  async getCategories(query = {}, extractFields = basicFields): Promise<Partial<ICategory[]> | null> {
    try {
      return await Category.find(query, extractFields).lean().exec();
    } catch (error) {
      return error;
    }
  }

  // Fetch a Category by their ID
  async getCategoryById(CategoryId: string, extractFields = basicFields): Promise<Partial<ICategory> | null> {
    try {
      return await Category.findById(CategoryId, extractFields).lean().exec();
    } catch (error) {
      return error;
    }
  }

  async getCategoryByUri(query: object): Promise<Partial<ICategory> | null> {
    try {
      return await Category.findOne(query, basicFields).lean().exec();
    } catch (error) {
      return error;
    }
  }

  // Create a new Category
  async createCategory(categoryData: ICategory): Promise<Partial<ICategory>> {
    try {
      const newCategory = new Category(categoryData);
      return await newCategory.save();
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  async createMultiCategories(categories: ICategory[]): Promise<Partial<ICategory>[]> {
    try {
      return await Category.insertMany(categories, { ordered: true });
    } catch (error) {
      throw new Error(`Error creating categories: ${error.message}`);
    }
  }
  async updateCategory(categoryId: string, updatedData: Partial<ICategory>): Promise<Partial<ICategory> | null> {
    try {
      return await Category.findByIdAndUpdate(categoryId, updatedData, {
        new: true,
      }).exec();
    } catch (error) {
      throw new Error(`Error updating category ${categoryId}: ${error.message}`);
    }
  }

  // Delete a Category
  async deleteCategory(categoryId: string): Promise<Partial<ICategory> | null> {
    try {
      return await Category.findByIdAndDelete(categoryId).exec();
    } catch (error) {
      throw new Error(`Error deleting category ${categoryId}: ${error.message}`);
    }
  }

  async checkCategoryUri(uri: string): Promise<number | null> {
    try {
      return await Category.countDocuments({ uri }).lean().exec();
    } catch (error) {
      throw new Error(`Error check category Uri ${uri}: ${error.message}`);
    }
  }
  // Other methods related to Categories (e.g., search, login, password reset, etc.)
}
