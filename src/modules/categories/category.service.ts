import Category from './category.model'; // Assuming you have a Mongoose model for Category
import ICategory from './category.interface'; // Assuming you have a Mongoose model for Category

export class CategoryService {
  async getCategories(): Promise<Partial<ICategory[]> | null> {
    try {
      const Categories = await Category.find({}).exec();
      console.log('getCategories: ', Categories);
      return Categories;
    } catch (error) {
      return error;
    }
  }

  // Fetch a Category by their ID
  async getCategoryById(CategoryId: string): Promise<Partial<ICategory> | null> {
    try {
      const category = await Category.findById(CategoryId).exec();
      console.log('getCategoryById: ', category);
      return category;
    } catch (error) {
      return error;
    }
  }

  // Create a new Category
  async createCategory(CategoryData: ICategory): Promise<Partial<ICategory>> {
    try {
      const newCategory = new Category(CategoryData);
      const res = await newCategory.save();
      console.log('createCategory: ', res);
      return res;
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
      console.log('updatedCategory: ', updatedCategory);
      return updatedCategory;
    } catch (error) {
      throw new Error(`Error updating Category ${CategoryId}: ${error.message}`);
    }
  }

  // Delete a Category
  async deleteCategory(CategoryId: string): Promise<Partial<ICategory> | null> {
    try {
      const deletedCategory = await Category.findByIdAndRemove(CategoryId).exec();
      console.log('deletedCategory: ', deletedCategory);
      return deletedCategory;
    } catch (error) {
      throw new Error(`Error deleting Category ${CategoryId}: ${error.message}`);
    }
  }

  // Other methods related to Categories (e.g., search, login, password reset, etc.)
}
