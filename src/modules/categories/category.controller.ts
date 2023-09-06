import { Request, Response } from 'express';
import { CategoryService } from './category.service';
const categoryService = new CategoryService();
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getCategories();
    if (!categories) {
      return res.status(404).json({ message: 'categories not found' });
    }
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'getcategories', message: error.message });
  }
};
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    const category = await categoryService.getCategoryById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'getCategoryById', message: error.message });
  }
};
export const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryBody = req.body;
    const category = await categoryService.createCategory(categoryBody);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'createCategory', message: error.message });
  }
};
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    const category = await categoryService.updateCategory(categoryId, req.body);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    const { description, title, _id } = category;
    res.json({ description, title, _id });
  } catch (error) {
    res.status(500).json({ error: 'updateCategory', message: error.message });
  }
};
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    const category = await categoryService.deleteCategory(categoryId);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'deleteCategory', message: error.message });
  }
};

// ... more routes for creating, updating, deleting categories
