import { Request, Response } from 'express';
import { CategoryService } from './category.service';
import { QueryType } from './dto';
import ICategory from './category.interface';
const categoryService = new CategoryService();
const configQuerySearch = (query: QueryType) => {
  let searchQuery = {};
  if (!query.removed) {
    searchQuery = { ...searchQuery, isRemoved: false };
  }
  if (query.group && query.group.length > 0) {
    searchQuery = { ...searchQuery, group: { $in: query.group } };
  }
  if (query.isFilter) {
    searchQuery = { ...searchQuery, isFilter: true };
  }
  if (query.searchText && query.searchText.length > 0) {
    searchQuery = {
      ...searchQuery,
      $text: { $search: query.searchText },
    };
  }
  return searchQuery;
};

const filterByGroup = (categoriesResults: ICategory[]): Record<string, ICategory[]> => {
  const categories: Record<string, ICategory[]> = {};
  categoriesResults.forEach((category) => {
    const key: string = category.group as string;
    if (!categories[key]) categories[key] = [];
    categories[key].push(category);
  });

  return categories;
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getCategories();
    if (!categories) {
      return res.status(404).json({ message: 'categories not found' });
    }
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'getCategories', message: error.message });
  }
};

export const getCategoriesByGroup = async (req: Request, res: Response) => {
  try {
    const searchQuery = configQuerySearch(req.body);
    const results = await categoryService.getCategories(searchQuery);
    if (results) {
      const validCategories: ICategory[] = results.filter((category): category is ICategory => category !== undefined);
      const categories = filterByGroup(validCategories);
      if (!categories) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.json(categories);
    } else res.json([]);
  } catch (error) {
    res.status(500).json({ error: 'getCategoryById', message: error.message });
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

export const getCategoryByUri = async (req: Request, res: Response) => {
  try {
    const uri = req.params.uri;
    const query = { uri, isRemoved: false };
    const category = await categoryService.getCategoryByUri(query);
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
    const { description, title, uri } = category;
    res.json({ description, title, uri });
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
export const checkCategoryUri = async (req: Request, res: Response, next: NewableFunction) => {
  let result;
  try {
    result = await categoryService.checkCategoryUri(req.body.uri);
    if (result && result > 0) {
      res.status(403).json({ message: 'Uri exist already' });
    } else {
      next();
    }
  } catch (e) {
    res.status(420).json(e);
  }
};

// ... more routes for creating, updating, deleting categories
